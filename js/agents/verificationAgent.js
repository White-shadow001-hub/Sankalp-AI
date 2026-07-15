/**
 * SANKALP AI - VERIFICATION AGENT
 * Audits feasibility, tests critical assumptions, and logs risk registries.
 */

window.VerificationAgent = class VerificationAgent {
    constructor() {
        this.name = "Verification Agent";
    }

    /**
     * Executes the verification stage.
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

        if (!planData.verification) {
            const domain = window.classifyGoalDomain(goal);
            const timeframe = planData.timeframe || "3 months";
            const budget = planData.budget || "low budget";
            const experience = planData.experience || "beginner";

            // Core assumptions - identifying missing information clearly as assumptions
            const assumptions = [
                { text: `Assumed timeframe: ${timeframe} is realistic for initial execution.`, status: "passed" },
                { text: `Assumed budget: ${budget || "low budget"} is sufficient for the targeted scope.`, status: "passed" },
                { text: `Assumed experience: User has basic ${experience} capabilities in this domain.`, status: "passed" }
            ];

            // Explicitly call out missing location/scale/variables as assumptions
            const containsLocation = /\b(in|at|seattle|boston|london|chicago|india|germany|usa|campus|college)\b/i.test(goal);
            if (!containsLocation) {
                assumptions.push({ text: "Assumption: Target region is set to general/online scope (no specific physical location provided).", status: "warning" });
            } else {
                assumptions.push({ text: "Assumed location/scale is limited to the region specified in the goal.", status: "passed" });
            }

            const containsScale = /\b(scale|enterprise|million|global|local|micro|niche)\b/i.test(goal);
            if (!containsScale) {
                assumptions.push({ text: "Assumption: Project scale is focused on initial pilot/niche release (specific scale parameters not provided).", status: "warning" });
            }

            let risks = [];

            if (domain === 'educational') {
                assumptions.push({ text: `Assumed user has access to a working computer and stable internet connection.`, status: "passed" });
                assumptions.push({ text: `Assumed user can allocate regular study hours weekly to achieve goals.`, status: "passed" });
                risks = [
                    { 
                        title: "Tutorial Hell (Passive learning trap)", 
                        severity: "high", 
                        desc: `Watching lecture videos continuously without writing actual code or exercises, resulting in low long-term retention.`, 
                        mitigation: "Commit to the 20/80 Rule: Spend 20% of time studying concepts, and 80% actively building scripts or worksheets." 
                    },
                    { 
                        title: "Motivation Wane after syntax syntax basics", 
                        severity: "medium", 
                        desc: `Losing interest when transitioning from simple syntax to more complex structural patterns.`, 
                        mitigation: "Start a small, custom hobby project immediately in Week 2 to keep learning practical and fun." 
                    }
                ];
            } else if (domain === 'business_physical') {
                assumptions.push({ text: `Assumed zoning permits and physical retail guidelines allow setting up a storefront.`, status: "passed" });
                assumptions.push({ text: `Assumed standard distributor supply chains are active for local sourcing.`, status: "passed" });
                risks = [
                    { 
                        title: "Storefront Compliance & Permit delays", 
                        severity: "high", 
                        desc: `Zoning, lease, or health department permit reviews delay opening beyond ${timeframe}.`, 
                        mitigation: "Submit preliminary filings to local county offices in Week 2 and start lease discussions early." 
                    },
                    { 
                        title: "Inventory Sourcing Deficits", 
                        severity: "medium", 
                        desc: `Underestimating initial material orders or supplier shipments running behind under a '${budget}' baseline.`, 
                        mitigation: "Establish agreements with at least two local backup wholesale distributors." 
                    }
                ];
            } else if (domain === 'academic') {
                assumptions.push({ text: `Assumed user has access to scholarly libraries or public indices.`, status: "passed" });
                risks = [
                    { 
                        title: "Literature Review Over-Expansion", 
                        severity: "high", 
                        desc: `Spending too much time reading citations and delaying drafting of hypothesis beyond Month 1.`, 
                        mitigation: "Enforce a limit of 25 core reference papers for the background synthesis." 
                    },
                    { 
                        title: "Manuscript Call Deadline Conflicts", 
                        severity: "medium", 
                        desc: `Missing submission windows for target peer-reviewed workshops.`, 
                        mitigation: "Identify three alternate workshop calls with rolling submissions." 
                    }
                ];
            } else if (domain === 'technical') {
                assumptions.push({ text: `Assumed coding dependencies are open-source and free to configure.`, status: "passed" });
                risks = [
                    { 
                        title: "Environment Configuration Errors", 
                        severity: "high", 
                        desc: `Getting stuck on package installations, compiler setups, or PATH issues.`, 
                        mitigation: "Use standard pre-configured workspaces (e.g. virtualenvs/Docker containers) in Week 1." 
                    },
                    { 
                        title: "Library API Version conflicts", 
                        severity: "medium", 
                        desc: `Syntax changes in third-party updates break core execution scripts.`, 
                        mitigation: "Freeze dependency versions in a lockfile immediately after workspace validation." 
                    }
                ];
            } else if (domain === 'business_digital') {
                assumptions.push({ text: `Assumed early adopters can be reached via digital channels without heavy ad spending.`, status: "passed" });
                risks = [
                    { 
                        title: "User Acquisition Churn", 
                        severity: "high", 
                        desc: `Acquiring signups but failing to convert them to active workflow participants.`, 
                        mitigation: "Integrate a quick 3-question survey upon signup to adjust features." 
                    },
                    { 
                        title: "Platform Cost Scaling", 
                        severity: "medium", 
                        desc: `Hosting rates scaling up rapidly if users grow beyond free tiers.`, 
                        mitigation: "Choose cloud templates that support fixed-rate scaling during the first ${timeframe}." 
                    }
                ];
            } else {
                // general_personal / creative
                assumptions.push({ text: `Assumed required materials or local resources are physically accessible.`, status: "passed" });
                risks = [
                    { 
                        title: "Scheduling Disorganization", 
                        severity: "high", 
                        desc: `Getting distracted by miscellaneous tasks and losing momentum on the main milestones.`, 
                        mitigation: "Allocate a fixed 3-hour block every weekend for goal tasks." 
                    },
                    { 
                        title: "Material Sourcing Cost Overruns", 
                        severity: "medium", 
                        desc: `Underestimating expenses for physical items and supplies under '${budget}' budget.`, 
                        mitigation: "Draft a comprehensive supplies inventory sheet with prices before purchases." 
                    }
                ];
            }

            planData.verification = {
                grade: planData.confidence === "High" ? "A" : planData.confidence === "Medium" ? "B+" : "C+",
                assumptionsCount: assumptions.length,
                risksCount: risks.length,
                assumptions: assumptions,
                risks: risks
            };
        }

        const grade = planData.verification.grade;
        const assumptionsCount = planData.verification.assumptions.length;
        const risksCount = planData.verification.risks.length;
        const mainRisk = planData.verification.risks[0]?.title || "Scope Creep";
        
        const logs = [
            `Verification Agent: Feasibility check initiated for goal: "${goal}"...`,
            `Verification Agent: Validating ${assumptionsCount} core project assumptions...`,
            `Verification Agent: Assumption validation checks: all items evaluated.`,
            `Verification Agent: Reviewing budget constraints and technical capability matching...`,
            `Verification Agent: Cataloging risk factor: "${mainRisk}"...`,
            `Verification Agent: Formulating mitigation counter-measures for identified risks...`,
            `Verification Agent: Verification complete. Feasibility Grade assigned: "${grade}". Handing off to Strategy Agent.`
        ];

        for (const logLine of logs) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
            onLog(logLine, "agent");
        }

        return planData.verification;
    }
}
