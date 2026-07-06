/**
 * SANKALP AI - GEMINI API SERVICE
 * Connects directly to Google Gemini API to generate real-time action plans.
 */

window.generateWithGemini = async function(userGoal, parameters, apiKey, modelName = 'gemini-2.5-flash', uploadedContext = '') {
    if (!apiKey) {
        throw new Error("Gemini API key is required to make live calls.");
    }

    const { timeframe, budget, experience, focus, category } = parameters;
    
    // Construct System Instruction & prompt
    const systemPrompt = `You are a team of expert AI agents working together (Research Agent, Verification Agent, Strategy Agent, and Execution Agent). 
Your task is to take a user's Goal/Intent and build a comprehensive, high-fidelity, verified, and practical strategic action plan.

The output must be returned strictly in JSON format matching the schema below. Do not output any markdown formatting before/after the JSON except the JSON itself.

JSON SCHEMA TO RETURN:
{
  "confidence": "High | Medium | Needs More Information",
  "research": {
    "insights": [
      { "title": "string (Compelling research insight headline)", "text": "string (Detailed explanation of facts/data)" }
    ],
    "persona": {
      "name": "string (Realistic typical target user name)",
      "role": "string (User profession/role)",
      "age": number,
      "goals": "string (Specific needs matching the goal)",
      "frustrations": "string (Bottlenecks they currently face)",
      "quote": "string (Direct quote reflecting their mindset)"
    },
    "competitors": [
      { "name": "string (Alternative solution)", "strength": "string", "weakness": "string", "advantage": "string (Why user's plan wins)" }
    ]
  },
  "verification": {
    "grade": "string (Feasibility grade: A, B+, B, C, etc.)",
    "assumptionsCount": number,
    "risksCount": number,
    "assumptions": [
      { "text": "string (Core assumption to validate)", "status": "passed | warning" }
    ],
    "risks": [
      { "title": "string (Risk description)", "severity": "high | medium | low", "desc": "string (How this risk manifests)", "mitigation": "string (Practical counter-action)" }
    ]
  },
  "strategy": {
    "swot": {
      "strengths": ["string (3 strengths)"],
      "weaknesses": ["string (3 weaknesses)"],
      "opportunities": ["string (3 opportunities)"],
      "threats": ["string (3 threats)"]
    },
    "phases": [
      { "number": "PHASE 1", "title": "string (Phase name)", "desc": "string (Phasing summary)" },
      { "number": "PHASE 2", "title": "string", "desc": "string" },
      { "number": "PHASE 3", "title": "string", "desc": "string" }
    ]
  },
  "execution": {
    "tasks": [
      { "id": "t1", "title": "string (Task name)", "status": "done | inprogress | todo", "phase": 1, "startMonth": number (decimal from 0.0 to 5.0 representing month offset), "durationMonths": number (decimal from 0.2 to 2.0 representing task duration) },
      { "id": "t2", "title": "string", "status": "todo", "phase": 1, "startMonth": number, "durationMonths": number }
    ]
  }
}

CONTEXT ATTACHMENT / RAG RETRIEVED DATA:
${uploadedContext ? uploadedContext : "No external documents or URLs uploaded."}

Ensure all generated tasks fit logically within the target category: ${category}, timeframe: ${timeframe}, budget: ${budget || 'N/A'}, experience: ${experience || 'N/A'}, and focus: ${focus || 'N/A'}.
Make sure to generate exactly 6 to 8 detailed, realistic tasks across Phase 1, Phase 2, and Phase 3. 
Ensure the Gantt timing parameters ('startMonth' and 'durationMonths') are numbers and align with the total timeframe. Let tasks overlap reasonably.
Assess your confidence: If the goal is clear and we have uploaded context, choose "High". If details are generic, choose "Medium". If crucial specifications are missing, choose "Needs More Information".
The plan must feel high-fidelity, extremely practical, and directly customized for the goal: "${userGoal}".`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [
            {
                role: "user",
                parts: [
                    { text: systemPrompt }
                ]
            }
        ],
        generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error?.message || `HTTP error! status: ${response.status}`;
            throw new Error(`Gemini API Error: ${errMsg}`);
        }

        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!textResponse) {
            throw new Error("Empty response received from Gemini API.");
        }

        const parsedPlan = JSON.parse(textResponse);
        
        // Post-process to ensure all required structures exist
        return validateAndCleanPlan(parsedPlan, userGoal, parameters);
    } catch (error) {
        console.error("Gemini service failed:", error);
        throw error;
    }
}

/**
 * Validates and sanitizes the LLM output to prevent crash errors.
 */
function validateAndCleanPlan(plan, goal, params) {
    // Basic structural checks
    if (!plan.confidence) plan.confidence = "High";
    if (!plan.research) plan.research = { insights: [], persona: {}, competitors: [] };
    if (!plan.verification) plan.verification = { grade: "B", assumptions: [], risks: [] };
    if (!plan.strategy) plan.strategy = { swot: { strengths: [], weaknesses: [], opportunities: [], threats: [] }, phases: [] };
    if (!plan.execution) plan.execution = { tasks: [] };

    // Fill defaults for persona
    if (!plan.research.persona.name) {
        plan.research.persona = {
            name: "Target User",
            role: "Interested Consumer",
            age: 28,
            goals: "Wants to achieve the set target goal.",
            frustrations: "Lack of a structured execution roadmap.",
            quote: "I just need a clear direction."
        };
    }

    // Ensure assumptions and risk counts exist
    plan.verification.assumptionsCount = plan.verification.assumptions.length;
    plan.verification.risksCount = plan.verification.risks.length;

    // Sanitize task statuses and IDs
    if (Array.isArray(plan.execution.tasks)) {
        plan.execution.tasks = plan.execution.tasks.map((t, idx) => {
            return {
                id: t.id || `api-t-${idx}`,
                title: t.title || "Generic Action Step",
                status: ['todo', 'inprogress', 'done'].includes(t.status) ? t.status : 'todo',
                phase: typeof t.phase === 'number' ? t.phase : 1,
                startMonth: typeof t.startMonth === 'number' ? t.startMonth : idx * 0.5,
                durationMonths: typeof t.durationMonths === 'number' ? t.durationMonths : 1.0
            };
        });
    } else {
        plan.execution.tasks = [];
    }

    return plan;
}
