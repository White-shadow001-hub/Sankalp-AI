/**
 * SANKALP AI - STRATEGY AGENT
 * Synthesizes research and risks to formulate SWOT structures and phasing roadmaps.
 */

window.StrategyAgent = class StrategyAgent {
    constructor() {
        this.name = "Strategy Agent";
    }

    /**
     * Executes the strategy stage.
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

        if (!planData.strategy) {
            const domain = window.classifyGoalDomain(goal);
            const timeframe = planData.timeframe || "3 months";
            const budget = planData.budget || "low budget";
            let swot = {};
            let phases = [];

            if (domain === 'educational') {
                swot = {
                    strengths: [
                        `High personal motivation to learn ${mainTopic}`,
                        `Abundance of open-source and free educational documentation`,
                        `Self-paced flexibility to fit tasks around daily schedules`
                    ],
                    weaknesses: [
                        `Lack of dedicated instructor guidance or mentorship`,
                        `Risk of procrastination during the ${timeframe} timeline`,
                        `Initial unfamiliarity with core tools and error logs`
                    ],
                    opportunities: [
                        `Building a public github repository to showcase scripts`,
                        `Joining active online student groups or local meetups`,
                        `Automating real-world manual spreadsheets or workflows`
                    ],
                    threats: [
                        `Academic or work scheduling peaks distracting study blocks`,
                        `Getting demotivated by complex syntax errors`,
                        `Loss of daily study habit loops`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `Syntax Basics & Environment Setup`,
                        desc: `Install core libraries, set up the editor, and master basic data structures (variables, loops, arrays).`
                    },
                    {
                        number: "PHASE 2",
                        title: `Practical Writing & Script Automation`,
                        desc: `Assemble simple utility scripts to handle files, parse text, or automate simple repetitive tasks.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Independent Capstone Project build`,
                        desc: `Build a standalone personal project implementing the learned concepts, run testing, and publish code.`
                    }
                ];
            } else if (domain === 'business_physical') {
                swot = {
                    strengths: [
                        `High-touch local customer relationships`,
                        `Differentiated neighborhood location and product appeal`,
                        `Lean physical operational model`
                    ],
                    weaknesses: [
                        `Upfront equipment and space overhead under '${budget}'`,
                        `Fixed physical footprint limits regional customer reach`,
                        `Dependent on local supplier delivery schedules`
                    ],
                    opportunities: [
                        `Partnering with local schools, events, or community groups`,
                        `Creating specialized, seasonal recipes/product catalog`,
                        `Leveraging local social media check-ins for organic marketing`
                    ],
                    threats: [
                        `Local municipal zoning or health department licensing shifts`,
                        `Commercial chains opening nearby and pricing out margins`,
                        `Ingredient price inflation or supply delays during the next ${timeframe}`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `Sourcing & Permit Filing for ${mainTopic.toUpperCase()}`,
                        desc: `Draft layout plans, secure equipment quotes, establish supplier channels, and file preliminary health department permits.`
                    },
                    {
                        number: "PHASE 2",
                        title: `Space Preparation & Supply Procurement`,
                        desc: `Finalize lease or layout set up, purchase initial raw materials and equipment, and complete compliance inspections.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Staffing & Grand Opening Launch`,
                        desc: `Train support staff, organize a local soft opening with neighborhood invites, gather feedback, and start regular store hours.`
                    }
                ];
            } else if (domain === 'academic') {
                swot = {
                    strengths: [
                        `Deep focus on a specific, narrow research question`,
                        `Analytical framework and literature verification focus`,
                        `Independent research flexibility`
                    ],
                    weaknesses: [
                        `No institutional affiliate credentials or workspace support`,
                        `Limited direct access to paid/subscription libraries`,
                        `Lack of co-authors to distribute the bibliography workload`
                    ],
                    opportunities: [
                        `Submitting to open-access journal workshops or peer calls`,
                        `Collaborating online with cross-university scholars`,
                        `Publishing research datasets to boost academic citations`
                    ],
                    threats: [
                        `Parallel research publishing a similar hypothesis first`,
                        `Timeline mismatch with targeted call deadline of ${timeframe}`,
                        `Complex reviewer feedback requesting extensive dataset additions`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `Literature Search & Outline for ${mainTopic.toUpperCase()}`,
                        desc: `Query scholarly engines, synthesize key findings, define the research question, and structure paper sections.`
                    },
                    {
                        number: "PHASE 2",
                        title: `Drafting Core Analysis & Case Studies`,
                        desc: `Write the introduction, methodology, and case studies, and organize bibliographic references using citation standard.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Formatting, Peer Review & Submission`,
                        desc: `Set up the standard document layout template, run a peer review cycle, run editing checklists, and submit to call.`
                    }
                ];
            } else if (domain === 'technical') {
                swot = {
                    strengths: [
                        `Modular and scalable code architecture focus`,
                        `Clean code standards and environment controls`,
                        `Automated validation testing loops`
                    ],
                    weaknesses: [
                        `No dedicated QA team to run security audits`,
                        `Dependency version discrepancies in local configurations`,
                        `Limited timeline to optimize code performance`
                    ],
                    opportunities: [
                        `Integrating lightweight open-source packages`,
                        `Automating scripts to reduce manual steps`,
                        `Refactoring code to improve readability and load speeds`
                    ],
                    threats: [
                        `Breaking changes in package updates during the ${timeframe}`,
                        `Complex bugs in configuration logic requiring deep troubleshooting`,
                        `Hardware performance constraints during testing`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `Workspace & Environment Setup for ${mainTopic.toUpperCase()}`,
                        desc: `Install requirements, set up packages, verify environment variables, and draft program architecture.`
                    },
                    {
                        number: "PHASE 2",
                        title: `Core Coding & Logic Implementation`,
                        desc: `Write core functional classes and data schemas, integrate packages, and compile initial script builds.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Validation Testing & Refactoring`,
                        desc: `Run quality check scripts, debug errors, refactor code structure, and publish workspace files.`
                    }
                ];
            } else if (domain === 'business_digital') {
                swot = {
                    strengths: [
                        `Zero physical footprint and minimal operational overhead`,
                        `Highly automated signup and onboarding channels`,
                        `Direct user feedback loops`
                    ],
                    weaknesses: [
                        `Brand presence starting from zero in a busy digital market`,
                        `Limited hosting bandwidth under a '${budget}' baseline`,
                        `Lack of engineering support for custom integrations`
                    ],
                    opportunities: [
                        `Leveraging free tiers on standard online services`,
                        `Coordinating viral marketing campaigns or referral loops`,
                        `Targeting underserved digital user workflows`
                    ],
                    threats: [
                        `Large digital platforms building similar workflows`,
                        `High user churn rates during early validation months`,
                        `Payment processor fee policy shifts`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `User Discovery & Waitlist Setup for ${mainTopic.toUpperCase()}`,
                        desc: `Audit target customer groups, create sign-up forms, draft marketing copy, and launch organic outreach.`
                    },
                    {
                        number: "PHASE 2",
                        title: `Platform Setup & Billing Integration`,
                        desc: `Configure workspace pages, integrate Stripe payments, and run onboarding flows with early sign-ups.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Feedback Gathering & Campaign Launch`,
                        desc: `Analyze onboarding analytics, adjust copy, set up referral incentives, and run marketing sprints.`
                    }
                ];
            } else {
                // general_personal / creative
                swot = {
                    strengths: [
                        `Flexible timeline and low financial stress`,
                        `Direct control over project outcomes`,
                        `Custom adaptation to daily scheduling routines`
                    ],
                    weaknesses: [
                        `Lack of formal progress accountability`,
                        `Difficulty sourcing rare materials or local volunteers`,
                        `No dedicated team to handle logistics`
                    ],
                    opportunities: [
                        `Partnering with local hobbyist networks or interest groups`,
                        `Sourcing recycled or budget-friendly raw supplies`,
                        `Documenting progress to share with family or online communities`
                    ],
                    threats: [
                        `External scheduling commitments distracting attention`,
                        `Unexpected material pricing increases during the ${timeframe}`,
                        `Weather or local environment delays for physical setups`
                    ]
                };
                phases = [
                    {
                        number: "PHASE 1",
                        title: `Goal Outlining & Resource Sourcing for ${mainTopic.toUpperCase()}`,
                        desc: `Map target layouts, list materials, consult experts, and draft the milestones roadmap.`
                    },
                    {
                        number: "PHASE 2",
                        title: `Procurement & Phase 1 Assembly`,
                        desc: `Procure supplies, organize the workspace, and complete initial assembly steps.`
                    },
                    {
                        number: "PHASE 3",
                        title: `Final Formatting & Quality Review`,
                        desc: `Complete final assembly, review overall quality against goals, and organize showcase.`
                    }
                ];
            }

            planData.strategy = {
                swot,
                phases
            };
        }

        const phaseCount = planData.strategy.phases.length;
        const mainStrength = planData.strategy.swot.strengths[0] || "Custom strategy";
        const mainPhase = planData.strategy.phases[0]?.title || "Initial Validation";
        
        const logs = [
            `Strategy Agent: Strategic positioning analysis started for goal: "${goal}"...`,
            `Strategy Agent: Constructing SWOT matrix quadrants...`,
            `Strategy Agent: Highlighting strategic strength: "${mainStrength}"...`,
            `Strategy Agent: Balancing strengths against verified risk mitigations...`,
            `Strategy Agent: Segmenting execution roadmap into ${phaseCount} distinct milestones...`,
            `Strategy Agent: Structuring Phase 1 baseline: "${mainPhase}"...`,
            `Strategy Agent: Phasing and positioning alignment complete. Handing off to Execution Agent.`
        ];

        for (const logLine of logs) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
            onLog(logLine, "agent");
        }

        return planData.strategy;
    }
}
