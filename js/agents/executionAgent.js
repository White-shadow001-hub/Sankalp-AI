/**
 * SANKALP AI - EXECUTION PLAN AGENT
 * Translates project phases into actionable Gantt tasks and interactive Kanban boards.
 */

window.ExecutionAgent = class ExecutionAgent {
    constructor() {
        this.name = "Execution Plan Agent";
    }

    /**
     * Executes the execution planning stage.
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

        if (!planData.execution) {
            const domain = window.classifyGoalDomain(goal);
            const phases = planData.strategy?.phases || [
                { number: "PHASE 1", title: "Setup & Validation", desc: "Validate core assumptions." },
                { number: "PHASE 2", title: "Prototype Development", desc: "Build MVP prototype." },
                { number: "PHASE 3", title: "User Feedback", desc: "Iterate and launch." }
            ];

            const tasks = [];
            phases.forEach((phase, idx) => {
                const phaseNum = idx + 1;
                if (domain === 'educational') {
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Configure development tools and setup local workspace`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Master syntax variables, loop operations, and logic statements`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Write simple terminal utilities and handle file inputs`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Build functional scripts to automate manual calculations`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Develop independent capstone project implementing learned concepts`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Review codebase logic quality and publish repository on GitHub`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                } else if (domain === 'business_physical') {
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Draft layout specifications & file health permit applications`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Establish wholesale supplier agreements for raw materials`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Complete space setup, lease detailing, and install physical assets`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Order initial batches of materials/ingredients from vendors`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Advertise locally & host a soft opening for neighborhood invites`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Initiate regular store operations & optimize resource margins`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                } else if (domain === 'academic') {
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Query academic engines and pull top 25 literature papers`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Draft research outline and define the target hypothesis`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Write introduction, methodology, and empirical case sections`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Organize bibliography citations in standard journal formats`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Format document layout to conference template guidelines`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Run peer review edits and submit manuscript to portal`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                } else if (domain === 'technical') {
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Configure package installations and environment variables`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Outline program logic structures and database schemas`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Write core script modules, classes, and logic functions`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Integrate third-party API dependencies and compile builds`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Execute validation checks and fix discovered syntax bugs`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Clean up repository files and publish workspace code`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                } else if (domain === 'business_digital') {
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Draft digital landing copy and waitlist signup forms`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Launch organic user outreach on target social channels`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Set up billing fields and online integrations`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Configure workspace pages and launch onboarding flows`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Analyze user signups and onboarding analytics metrics`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Optimize marketing outreach and launch referral incentives`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                } else {
                    // general_personal / creative
                    if (phaseNum === 1) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Draft structural layouts and list required materials`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.0,
                            durationMonths: 0.6
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Map timeline checklist for intermediate milestones`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 0.4,
                            durationMonths: 0.5
                        });
                    } else if (phaseNum === 2) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Procure raw supplies and organize physical workspace`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.0,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Complete initial assembly steps and framework construction`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 1.3,
                            durationMonths: 1.0
                        });
                    } else if (phaseNum === 3) {
                        tasks.push({
                            id: `t-${phaseNum}-1`,
                            title: `Verify build outcomes and execute adjustments`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.1,
                            durationMonths: 0.5
                        });
                        tasks.push({
                            id: `t-${phaseNum}-2`,
                            title: `Clean up workspace and organize showcase presentation`,
                            status: "todo",
                            phase: phaseNum,
                            startMonth: 2.5,
                            durationMonths: 0.5
                        });
                    }
                }
            });

            planData.execution = {
                tasks: tasks
            };
        }

        const taskCount = planData.execution.tasks.length;
        const firstTask = planData.execution.tasks[0]?.title || "Initial Setup";
        
        const logs = [
            `Execution Agent: Creating operational gantt schedule for goal: "${goal}"...`,
            `Execution Agent: Populating backlog. Identified ${taskCount} actionable milestone tasks...`,
            `Execution Agent: Formatting Gantt chart parameters and start offsets...`,
            `Execution Agent: Setting up Kanban board lists (Todo, In Progress, Done)...`,
            `Execution Agent: Allocating task "${firstTask}" to Phase 1...`,
            `Execution Agent: Export scripts compiled for Markdown and JSON download channels...`,
            `Execution Agent: Workspace setup complete. Dashboard is ready for visualization.`
        ];

        for (const logLine of logs) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
            onLog(logLine, "agent");
        }

        return planData.execution;
    }
}
