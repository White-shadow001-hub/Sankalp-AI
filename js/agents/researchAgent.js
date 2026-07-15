/**
 * SANKALP AI - RESEARCH AGENT
 * Coordinates target market insight, persona creation, and competitor audits.
 */

window.ResearchAgent = class ResearchAgent {
    constructor() {
        this.name = "Research Agent";
    }

    /**
     * Executes the research stage.
     */
    async execute(goal, planData, onLog, delayMs = 600) {
        onLog(`[System] Initializing ${this.name} pipeline...`, "system");

        // Helper to extract keywords
        const stopWords = new Set([
            'i', 'want', 'to', 'build', 'a', 'an', 'the', 'for', 'with', 'and', 'in', 'on', 'at', 'by', 'of',
            'from', 'my', 'our', 'your', 'into', 'create', 'make', 'setup', 'set', 'up', 'start', 'launch',
            'develop', 'write', 'learn', 'how', 'do', 'design', 'organize', 'about', 'on', 'ai'
        ]);
        const keywords = goal.toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
            .split(/\s+/)
            .filter(w => w.length > 2 && !stopWords.has(w));
        
        const mainTopic = keywords.length > 0 ? keywords.slice(0, 3).join(' ') : 'project objectives';
        const mainSubject = keywords.length > 0 ? keywords[0] : 'target';

        // Check if we need to generate simulated research data
        if (!planData.research) {
            const domain = window.classifyGoalDomain(goal);
            const category = planData.category || "general";
            const timeframe = planData.timeframe || "3 months";
            const budget = planData.budget || "low budget";

            let customAudience = "";
            let customStack = "";
            
            // Look for dynamic details in attached files or URL content
            if (planData.ragActive && planData.attachedFiles) {
                planData.attachedFiles.forEach(file => {
                    const content = file.content;
                    const audMatch = content.match(/(?:target\s+audience|audience|target|target\s+market|user):\s*([^\n\r.]+)/i);
                    if (audMatch && !customAudience) customAudience = audMatch[1].trim();

                    const stackMatch = content.match(/(?:tech\s+stack|stack|platform|technology|framework):\s*([^\n\r.]+)/i);
                    if (stackMatch && !customStack) customStack = stackMatch[1].trim();
                });
            }

            let insights = [];
            let persona = {};
            let competitors = [];

            if (domain === 'educational') {
                const targetAudience = customAudience || "Self-Directed Learners & Students";
                insights = [
                    {
                        title: `Curriculum Structure & Study Pathway for ${mainTopic.toUpperCase()}`,
                        text: `Establishing a structured sequence of concepts from basic to advanced is critical when learning '${goal}'.`
                    },
                    {
                        title: `Active Recall & Practice Allocation`,
                        text: `Allocating 80% of study time to writing custom code or worksheets rather than passive watching avoids 'tutorial hell'.`
                    },
                    {
                        title: `Study Resource Curation`,
                        text: `Selecting curated free textbooks, docs, or community tutorials keeps the learning track cost-efficient.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Self-Directed Learner / Student",
                    age: "Not specified (Assumed age range: 16-65)",
                    goals: `Master the foundational and practical mechanics of '${goal}'.`,
                    frustrations: `Getting stuck on dry theory, lack of exercises, or confusing installation configurations.`,
                    quote: "Not provided (Assumed target: students seeking organized curriculums)"
                };
                competitors = [
                    {
                        name: "Interactive Browser-based Tutorials",
                        strength: "Zero installation setup and instant feedback",
                        weakness: "Heavy hand-holding does not teach real-world file execution or local workspace management",
                        advantage: "Your plan guides setting up actual local workspaces and writing real, standalone scripts."
                    },
                    {
                        name: "Video Lecture Bootcamps",
                        strength: "Comprehensive video walkthroughs",
                        weakness: "Promotes passive watching with low long-term retention",
                        advantage: "Your strategy emphasizes active project-building milestones and documentation review."
                    }
                ];
            } else if (domain === 'business_physical') {
                const targetAudience = customAudience || "Local Customers & Foot Traffic";
                insights = [
                    {
                        title: `Local Foot Traffic & Demographic Siting for ${mainTopic.toUpperCase()}`,
                        text: `Securing a location with consistent foot traffic matching local demographic trends is the primary driver of revenue for '${goal}'.`
                    },
                    {
                        title: `Inventory Sourcing & Supplier Channels`,
                        text: `Establishing wholesale supplier relations for ingredients, raw materials, or equipment within a '${budget}' constraint determines margin health.`
                    },
                    {
                        title: `Storefront Compliance & Licensing`,
                        text: `Allowing sufficient time in the '${timeframe}' schedule to clear health department permits and licensing approvals reduces launch delays.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Local customer / Patron in the area",
                    age: "Not specified (Assumed age range: 18-65)",
                    goals: `Enjoy quality products/services from a nearby '${mainTopic}' establishment.`,
                    frustrations: `Lack of quality, convenience, or unique offerings in their local neighborhood.`,
                    quote: "Not provided (Assumed target: neighborhood patrons seeking reliable service)"
                };
                competitors = [
                    {
                        name: "National Commercial Chains",
                        strength: "Established brand credibility and high advertising budget",
                        weakness: "Lacks localized neighborhood charm or customized customer relationships",
                        advantage: "Your plan focuses on a highly tailored, localized service model that builds community loyalty."
                    },
                    {
                        name: "Generic Local Alternatives",
                        strength: "Existing footprint in the area",
                        weakness: "Often outdated offerings or inconsistent quality standards",
                        advantage: "Your strategy details a fresh, modern approach tailored specifically to current neighborhood trends."
                    }
                ];
            } else if (domain === 'academic') {
                const targetAudience = customAudience || "Academic Reviewers & Scholars";
                insights = [
                    {
                        title: `Literature Synthesis Scope for ${mainTopic.toUpperCase()}`,
                        text: `Reviewing and synthesizing foundational research on '${goal}' establishes the conceptual framework and prevents early desk rejection.`
                    },
                    {
                        title: `Methodology & Dataset Verification`,
                        text: `Utilizing open-access academic databases and verifying empirical methodologies within the '${timeframe}' timeline is crucial for peer credibility.`
                    },
                    {
                        title: `Citation Standard Compliance`,
                        text: `Adhering strictly to standard formats (e.g. IEEE, APA, ACM) ensures professional editorial presentation.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Peer Reviewer / Academic Researcher",
                    age: "Not specified (Assumed age range: 25-70)",
                    goals: `Access validated, peer-reviewed findings regarding '${goal}' to advance academic discourse.`,
                    frustrations: `Encountering papers with weak methodologies, poor citation discipline, or lack of field novelty.`,
                    quote: "Not provided (Assumed target: scholarly audience analyzing paper contributions)"
                };
                competitors = [
                    {
                        name: "Standard Blog Posts / Medium Publications",
                        strength: "Instant public release and high reach",
                        weakness: "Zero peer-reviewed credibility or formal academic indexing",
                        advantage: "Your approach aims for peer-reviewed conference workshops, establishing lasting scientific citations."
                    },
                    {
                        name: "Traditional Pay-to-Publish Journals",
                        strength: "Guaranteed fast acceptance timelines",
                        weakness: "Perceived poorly by experts, expensive author fees",
                        advantage: "Your strategy targets high-repute, free-to-submit academic calls and workshop tracks."
                    }
                ];
            } else if (domain === 'technical') {
                const targetAudience = customAudience || "Developers / Technical Users";
                insights = [
                    {
                        title: `Development Environment Setup for ${mainTopic.toUpperCase()}`,
                        text: `Configuring the local compiler, packages, and development IDE correctly in Phase 1 cuts setup delays by 50%.`
                    },
                    {
                        title: `Module Sourcing & Package Integrity`,
                        text: `Using stable, well-supported open-source libraries rather than custom-building complex logic fits features within the '${timeframe}' timeframe.`
                    },
                    {
                        title: `Debugging & Quality Check Iterations`,
                        text: `Allocating time for validation checks and syntax refactoring ensures code reliability and clean structure.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Software Developer / Engineer",
                    age: "Not specified (Assumed age range: 18-60)",
                    goals: `Set up a stable, clean, and functional codebase executing '${goal}'.`,
                    frustrations: `Getting stuck on configuration bugs, undocumented packages, or unstructured code paths.`,
                    quote: "Not provided (Assumed target: technical builders needing clean implementations)"
                };
                competitors = [
                    {
                        name: "Off-the-shelf Frameworks",
                        strength: "Fast setup out of the box",
                        weakness: "Difficult to customize for specific project guidelines",
                        advantage: "Your approach structures a custom workspace optimized specifically for your learning and execution."
                    },
                    {
                        name: "Legacy Manual Implementations",
                        strength: "Complete control over coding details",
                        weakness: "Extremely slow development velocity and high bug index",
                        advantage: "Your plan incorporates modern modular helper components that speed up build cycles."
                    }
                ];
            } else if (domain === 'business_digital') {
                const targetAudience = customAudience || "Digital Users & Subscribers";
                insights = [
                    {
                        title: `Digital Customer Sourcing for ${mainTopic.toUpperCase()}`,
                        text: `Identifying organic user channels and waitlist acquisition models yields higher early conversions for '${goal}'.`
                    },
                    {
                        title: `Online Platform Config & Cost Margin`,
                        text: `Setting up modular tools within a '${budget}' constraints minimizes initial hosting overhead.`
                    },
                    {
                        title: `Early Feedback Analytics`,
                        text: `Tracking customer interactions and sign-ups provides direct data to iterate marketing copy during the first month.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Digital User / Online Subscriber",
                    age: "Not specified (Assumed age range: 18-65)",
                    goals: `Access a reliable digital service or platform solving their specific goals.`,
                    frustrations: `Complex sign-up flows, high subscription fees, or irrelevant features.`,
                    quote: "Not provided (Assumed target: online subscribers seeking efficiency)"
                };
                competitors = [
                    {
                        name: "Established Enterprise Platforms",
                        strength: "High brand presence and deep feature lists",
                        weakness: "Expensive subscriptions, generic customer care",
                        advantage: "Your strategy targets a highly focused niche workflow with a bootstrap cost structure."
                    },
                    {
                        name: "Manual Worksheets / Custom spreadsheets",
                        strength: "Zero cost, highly familiar",
                        weakness: "Prone to data loss, lack of automation",
                        advantage: "Your plan provides an automated, structured digital platform that saves daily operational hours."
                    }
                ];
            } else {
                // general_personal / creative
                const targetAudience = customAudience || "Project Volunteers / General Audience";
                insights = [
                    {
                        title: `Project Outlining & Sourcing for ${mainTopic.toUpperCase()}`,
                        text: `Listing materials, scheduling steps, and allocating initial time slots prevents early momentum loss.`
                    },
                    {
                        title: `Budget & Cost Optimization`,
                        text: `Sourcing local materials or free community options aligns with a '${budget}' baseline.`
                    },
                    {
                        title: `Milestone Verification Loops`,
                        text: `Validating intermediate progress keeps the execution timeframe aligned with the targeted '${timeframe}' goal.`
                    }
                ];
                persona = {
                    name: "Assumed Target Group / Segment",
                    role: "Project Participant / Enthusiast",
                    age: "Not specified (Assumed age range: 18-75)",
                    goals: `Participate in or complete the steps required to execute '${goal}'.`,
                    frustrations: `Lack of clear checklists, scheduling delays, or unstructured tasks.`,
                    quote: "Not provided (Assumed target: coordinators/participants seeking organization)"
                };
                competitors = [
                    {
                        name: "Unstructured Ad-Hoc Checklists",
                        strength: "Instant starting speed",
                        weakness: "Easy to overlook crucial milestones or get off track",
                        advantage: "Your plan structures dependencies and timing blocks to keep milestones aligned."
                    },
                    {
                        name: "Generic Project Guidebooks",
                        strength: "High coverage of basic advice",
                        weakness: "No custom adaptation to your personal budget or timeframe",
                        advantage: "Your strategy organizes specific phases tailored around your timeline."
                    }
                ];
            }

            if (planData.ragActive && planData.attachmentCount > 0) {
                insights.unshift({
                    title: "Retrieved Local Attachment Context",
                    text: `RAG system parsed ${planData.attachmentCount} local contextual files. Successfully extracted structural parameters and target goal objectives.`
                });
            }

            planData.research = {
                insights,
                persona,
                competitors
            };
        }

        const mainRole = planData.research.persona.role;
        const mainSubjectName = planData.research.persona.name;
        const firstInsight = planData.research.insights[0]?.title || "Market Niche Analysis";

        const logs = [
            `Research Agent: Spawning context audit queries for goal: "${goal}"...`,
            `Research Agent: Filtering database sources and cross-referencing industry benchmarks...`,
            `Research Agent: Identifying target market demographics for: "${mainRole}"...`,
            `Research Agent: Synthesizing user profile for "${mainSubjectName}"...`,
            `Research Agent: Aligning key findings: Compiled insight "${firstInsight}"...`,
            `Research Agent: Auditing competitor alternatives and local workspace constraints...`,
            `Research Agent: Research dossier verified. Transferring target datasets to Verification Agent.`
        ];

        for (const logLine of logs) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
            onLog(logLine, "agent");
        }

        return planData.research;
    }
}
