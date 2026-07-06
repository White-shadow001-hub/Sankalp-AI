/**
 * SANKALP AI - MOCK DATA SERVICE
 * Contains rich predefined templates and fallback generators for simulated mode.
 */

window.MOCK_GOALS = {
    // 1. BUILD A STARTUP
    "I want to build a startup.": {
        timeframe: "6 months",
        budget: "low budget",
        experience: "beginner",
        focus: "speed",
        research: {
            insights: [
                { title: "No-Code Development Speed", text: "Using bubble.io, flutterflow, or similar tools reduces initial MVP development time by 70% and cuts cost from $15,000 to under $800." },
                { title: "Micro-SaaS Niche Profitability", text: "B2B micro-SaaS targeting specific workflows (e.g., invoices for plumbers) reach profitability 3x faster than consumer social apps." },
                { title: "Cold Outreach Efficiency", text: "Founder-led sales via targeted LinkedIn outreach yields an average response rate of 12%, compared to 1.5% for paid ads." }
            ],
            persona: {
                name: "Alex Carter",
                role: "Aspiring Entrepreneur",
                age: 28,
                goals: "Wants to build a cashflow-positive SaaS within 6 months while keeping their day job.",
                frustrations: "Lack of deep software engineering skills and limited personal budget for outsourcing developers.",
                quote: "I just want to get my product into the hands of real users without spending my life savings."
            },
            competitors: [
                { name: "Traditional Agencies", strength: "High quality custom builds", weakness: "Extremely expensive ($20k+), slow delivery", advantage: "Sankalp enables rapid, zero-code, AI-integrated bootstrap validation" },
                { name: "DIY Custom Code", strength: "Complete code ownership", weakness: "Long learning curve, high chance of quitting", advantage: "Sankalp details specific tool stack recommendations to launch in 4 weeks" },
                { name: "Freelancers (Upwork)", strength: "Flexible pricing models", weakness: "High management overhead, variable quality", advantage: "Sankalp guides validation *before* spending money on external labor" }
            ]
        },
        verification: {
            grade: "B+",
            assumptionsCount: 6,
            risksCount: 3,
            assumptions: [
                { text: "Target users have the problem and are willing to pay $10+/month.", status: "passed" },
                { text: "No-code platforms can support the core functionality required.", status: "passed" },
                { text: "Founder can commit 15 hours/week to execution.", status: "warning" },
                { text: "Acquiring first 10 customers can be done via free channels.", status: "passed" },
                { text: "Competitors aren't easily copy-pasting this exact solution.", status: "warning" }
            ],
            risks: [
                { title: "Feature Creep Delay", severity: "high", desc: "Trying to build too many features delays MVP launch beyond the 1-month mark.", mitigation: "Enforce a strict 'Single Core Feature' rule. Delay all other requests." },
                { title: "Platform Lock-in", severity: "medium", desc: "No-code hosting costs scale rapidly if user base grows exponentially.", mitigation: "Select no-code tools that allow exporting clean source code (e.g., FlutterFlow)." },
                { title: "Customer Churn", severity: "low", desc: "Initial users sign up but stop using the app after week 1.", mitigation: "Conduct 1-on-1 feedback calls with every active user weekly to iterate." }
            ]
        },
        strategy: {
            swot: {
                strengths: ["Lean cost structure", "Fast decision-making speed", "Direct customer relationships"],
                weaknesses: ["No dedicated technical team", "Limited marketing budget", "Brand building from zero"],
                opportunities: ["Emerging AI integrations", "Unserved local service niches", "B2B workflow automation"],
                threats: ["Low barrier to entry for copycats", "Platform API policy changes", "Economic downturn tightening SaaS budgets"]
            },
            phases: [
                { number: "PHASE 1", title: "Problem Validation", desc: "Build landing page with a waitlist, run cold messaging campaigns, conduct 10 user interviews." },
                { number: "PHASE 2", title: "No-Code MVP Build", desc: "Assemble single-feature product using Glide or Bubble. Integrate Stripe checkout." },
                { number: "PHASE 3", title: "Launch & Iterate", desc: "Launch to waitlist, gather feedback, optimize conversions, and start paid referrals." }
            ]
        },
        execution: {
            tasks: [
                { id: "s-t1", title: "Design mockup & Landing Page", status: "done", phase: 1, startMonth: 0, durationMonths: 1.2 },
                { id: "s-t2", title: "Perform 10 user discovery interviews", status: "inprogress", phase: 1, startMonth: 0.8, durationMonths: 1.0 },
                { id: "s-t3", title: "Set up waitlist & cold outreach script", status: "todo", phase: 1, startMonth: 1.5, durationMonths: 0.8 },
                { id: "s-t4", title: "Build core application UI in Bubble", status: "todo", phase: 2, startMonth: 2.2, durationMonths: 1.8 },
                { id: "s-t5", title: "Integrate Stripe payments & Auth", status: "todo", phase: 2, startMonth: 3.5, durationMonths: 0.8 },
                { id: "s-t6", title: "Private beta launch to 10 users", status: "todo", phase: 3, startMonth: 4.2, durationMonths: 1.0 },
                { id: "s-t7", title: "Public release & feedback loop setup", status: "todo", phase: 3, startMonth: 5.0, durationMonths: 1.0 }
            ]
        }
    },

    // 2. ORGANIZE A HACKATHON
    "I want to organize a college hackathon.": {
        timeframe: "3 months",
        budget: "medium budget",
        experience: "intermediate",
        focus: "quality",
        research: {
            insights: [
                { title: "Sponsor Conversion Loop", text: "Tech sponsors prefer specific talent pipelines (API adoptions, recruiters present) over generic logo placement on shirts." },
                { title: "Student Workload Constraint", text: "Hosting hackathons during mid-terms decreases student turnout by up to 55%. Optimal timing is week 3-5 of a semester." },
                { title: "Catering & Logistic Importance", text: "Food availability and fast internet access are rated higher than prize pools in post-event student surveys." }
            ],
            persona: {
                name: "Rohan Mehta",
                role: "College Club President",
                age: 20,
                goals: "Organize a successful 200-student regional hackathon to build the college club's reputation.",
                frustrations: "Hard to secure corporate sponsor cash, red tape in college venue approvals, and volunteer management.",
                quote: "I want to host an epic weekend that students love, but handling all the moving logistics is scary."
            },
            competitors: [
                { name: "Online Hackathons (Devpost)", strength: "Global reach, easy to manage", weakness: "No physical community feel, low completion rate", advantage: "Sankalp guides physical hybrid execution to build local connections" },
                { name: "Standard Academic Seminars", strength: "Supported by college admins", weakness: "Boring format, low practical engagement", advantage: "Sankalp provides an intense, project-focused weekend workflow blueprint" },
                { name: "Professional Tech Conferences", strength: "High profile speakers", weakness: "Extremely high cost, not student-friendly", advantage: "Sankalp focuses on student-built MVPs with local corporate mentoring" }
            ]
        },
        verification: {
            grade: "A-",
            assumptionsCount: 5,
            risksCount: 4,
            assumptions: [
                { text: "College administration will approve venue usage over a weekend.", status: "passed" },
                { text: "Local tech companies will sponsor cash ($1,500 total minimum).", status: "warning" },
                { text: "15 college volunteers are willing to work overnight shifts.", status: "passed" },
                { text: "Wi-Fi bandwidth in the campus hall can support 200 developers.", status: "warning" },
                { text: "Students from neighboring colleges will travel for the event.", status: "passed" }
            ],
            risks: [
                { title: "Sponsor Funding Delays", severity: "high", desc: "Corporate sponsors commit verbally but delay payment until after the event.", mitigation: "Do not confirm sponsor placement or speaker slots until contracts are signed and invoiced." },
                { title: "Wi-Fi Crash", severity: "high", desc: "Network crashes under load when 200 developers download packages simultaneously.", mitigation: "Coordinate with campus IT to set up a dedicated subnet and block peer-to-peer downloads." },
                { title: "Food Shortage", severity: "medium", desc: "Miscalculating portions or dietary preferences causes student dissatisfaction.", mitigation: "Implement mandatory RSVP food option forms and buffer food estimates by 15%." },
                { title: "Volunteer No-shows", severity: "low", desc: "Volunteers fail to turn up for early morning/night shifts.", mitigation: "Assign shift leads and create a clear contingency roster. Keep them energized with rewards." }
            ]
        },
        strategy: {
            swot: {
                strengths: ["Free campus venue", "Access to tech student network", "Supportive student council"],
                weaknesses: ["Zero budget upfront", "No prior large event experience", "Academic schedule conflicts"],
                opportunities: ["Partnerships with local startups", "MLH association branding", "Engaging non-CS majors"],
                threats: ["Exam schedules", "Power outages", "Competing events on same weekend"]
            },
            phases: [
                { number: "PHASE 1", title: "Fundraising & Permissions", desc: "Secure campus venue approval, draft sponsorship deck, secure early sponsor commitments." },
                { number: "PHASE 2", title: "Registrations & Logistics", desc: "Launch website, open student registrations, order food/swag, set up volunteer teams." },
                { number: "PHASE 3", title: "Event Execution", desc: "Conduct check-ins, manage opening ceremony, run mentoring sessions, host project judging." }
            ]
        },
        execution: {
            tasks: [
                { id: "h-t1", title: "Submit venue request & club approval", status: "done", phase: 1, startMonth: 0, durationMonths: 0.6 },
                { id: "h-t2", title: "Create sponsor prospectus deck", status: "done", phase: 1, startMonth: 0.3, durationMonths: 0.6 },
                { id: "h-t3", title: "Pitch to 30 local tech companies", status: "inprogress", phase: 1, startMonth: 0.7, durationMonths: 1.0 },
                { id: "h-t4", title: "Launch registration site & portal", status: "todo", phase: 2, startMonth: 1.2, durationMonths: 0.8 },
                { id: "h-t5", title: "Confirm catering & internet bandwidth", status: "todo", phase: 2, startMonth: 1.6, durationMonths: 0.7 },
                { id: "h-t6", title: "Open volunteer training & schedules", status: "todo", phase: 2, startMonth: 2.1, durationMonths: 0.5 },
                { id: "h-t7", title: "Hackathon event execution weekend", status: "todo", phase: 3, startMonth: 2.6, durationMonths: 0.4 }
            ]
        }
    },

    // 3. LEARN PYTHON FROM SCRATCH
    "I want to learn Python from scratch.": {
        timeframe: "1 month",
        budget: "zero budget",
        experience: "beginner",
        focus: "quality",
        research: {
            insights: [
                { title: "Syntax vs Application Trap", text: "Most beginners spend 3 weeks doing simple syntax exercises, but fail to build actual scripts. Building projects immediately increases retention by 4x." },
                { title: "Self-Guided Dropout Rate", text: "Self-study Python courses have an 85% dropout rate. Setting up an automated visual project goal at the end of week 1 prevents dropouts." },
                { title: "AI-Assisted Learning", text: "Using AI models to explain bugs instead of getting stuck on StackOverflow speeds up learning curves by 300%." }
            ],
            persona: {
                name: "Mira Patel",
                role: "Marketing Analyst",
                age: 26,
                goals: "Wants to learn Python to automate tedious Excel data cleaning tasks at her marketing job.",
                frustrations: "Tries online tutorials but gets bored by math exercises (e.g. Fibonacci sequence) that feel irrelevant.",
                quote: "I don't want to be a computer scientist; I just want to write scripts that save me time at work."
            },
            competitors: [
                { name: "Interactive Platforms (DataCamp)", strength: "Easy browser coding", weakness: "Hand-holding makes you feel smart but fails on local IDEs", advantage: "Sankalp guides setting up VS Code locally from day one" },
                { name: "Bootcamps (Udemy / Coursera)", strength: "Structured video lectures", weakness: "Passive watching, easy to fall asleep", advantage: "Sankalp enforces an active project-building rhythm" },
                { name: "Academic Textbooks", strength: "Covers deep theoretical fundamentals", weakness: "Too dry, overwhelming for beginners", advantage: "Sankalp prioritizes practical automation utility over computer science theory" }
            ]
        },
        verification: {
            grade: "A",
            assumptionsCount: 4,
            risksCount: 3,
            assumptions: [
                { text: "User has a working computer (Windows/Mac/Linux).", status: "passed" },
                { text: "User can dedicate 1 hour every day for a month.", status: "passed" },
                { text: "User does not need deep mathematical knowledge for basic scripting.", status: "passed" },
                { text: "Free resources (YouTube, docs) are sufficient to master basics.", status: "passed" }
            ],
            risks: [
                { title: "Tutorial Hell", severity: "high", desc: "Watching videos continuously without typing code, resulting in zero retention.", mitigation: "Apply the 20/80 Rule: Spend 20% of time watching videos, and 80% typing and writing custom scripts." },
                { title: "Environment Config Frustration", severity: "medium", desc: "Getting stuck on Python installation, PATH issues, or pip package installations.", mitigation: "Use a simple VS Code setup guide and start with virtual environments immediately." },
                { title: "Lack of Motivation", severity: "low", desc: "Losing interest after 2 weeks when topics shift to OOP (classes and objects).", mitigation: "Pivot immediately to a real project, like an Excel auto-formatter, to see tangible work benefits." }
            ]
        },
        strategy: {
            swot: {
                strengths: ["Zero financial cost", "Highly motivated by job automation", "High availability of online packages"],
                weaknesses: ["No tutoring support", "Risk of feeling overwhelmed by error messages", "Time management constraints"],
                opportunities: ["Automation of current office role", "Career pivot to data analysis", "Build personal productivity tools"],
                threats: ["Workload peaks at day job", "Loss of consistent daily habit", "Getting stuck on complex syntax bugs"]
            },
            phases: [
                { number: "PHASE 1", title: "Fundamentals & Environment", desc: "Install Python and VS Code. Learn variables, loops, lists, and basic dictionaries." },
                { number: "PHASE 2", title: "Scripts & Automation", desc: "Write scripts to manipulate Excel files (openpyxl) and scrape websites (BeautifulSoup)." },
                { number: "PHASE 3", title: "Personal Capstone Project", desc: "Build a custom script to automate a real work task. Deploy it locally." }
            ]
        },
        execution: {
            tasks: [
                { id: "p-t1", title: "Install VS Code, Python & extensions", status: "done", phase: 1, startMonth: 0, durationMonths: 0.25 },
                { id: "p-t2", title: "Master variables, loops & functions", status: "inprogress", phase: 1, startMonth: 0.2, durationMonths: 0.35 },
                { id: "p-t3", title: "Write 3 small terminal script utilities", status: "todo", phase: 1, startMonth: 0.5, durationMonths: 0.25 },
                { id: "p-t4", title: "Learn openpyxl & pandas basics", status: "todo", phase: 2, startMonth: 0.7, durationMonths: 0.4 },
                { id: "p-t5", title: "Build simple web scraper utility", status: "todo", phase: 2, startMonth: 1.0, durationMonths: 0.3 },
                { id: "p-t6", title: "Build personal automation capstone script", status: "todo", phase: 3, startMonth: 1.25, durationMonths: 0.5 },
                { id: "p-t7", title: "Refactor code & host on GitHub", status: "todo", phase: 3, startMonth: 1.6, durationMonths: 0.3 }
            ]
        }
    },

    // 4. SWITCH CAREERS TO PM
    "I want to switch careers into Product Management.": {
        timeframe: "6 months",
        budget: "low budget",
        experience: "intermediate",
        focus: "speed",
        research: {
            insights: [
                { title: "Degree vs Portfolio", text: "Hiring managers value a public portfolio of teardowns, PRDs, and user designs far higher than generic certifications or certificates." },
                { title: "Internal Transition Strategy", text: "72% of PM career switchers do so internally by taking on PM-like tasks in their current roles before applying externally." },
                { title: "LinkedIn Recruiting Hook", text: "Optimizing LinkedIn keywords around 'product strategy', 'SQL', and 'user metrics' increases recruiter inbound views by 180%." }
            ],
            persona: {
                name: "Sarah Jenkins",
                role: "Senior QA Engineer",
                age: 31,
                goals: "Switch careers to Product Manager to drive feature direction and customer strategy rather than just testing.",
                frustrations: "Stuck in 'technical tester' box, lacks formal product design training, and recruiter filters blocking non-PMs.",
                quote: "I know the product and users better than anyone, but I need to prove my business and design instincts."
            },
            competitors: [
                { name: "Expensive MBA Programs", strength: "Strong network, pedigree", weakness: "Costs $100k+, takes 2 years of zero income", advantage: "Sankalp guides building a practical PM portfolio in 3 months for under $100" },
                { name: "PM Bootcamps", strength: "Structured classes, career coach", weakness: "Costs $5k+, cookie-cutter portfolio files", advantage: "Sankalp helps compile hyper-custom product teardowns on real apps" },
                { name: "Reading books (Cracking PM)", strength: "Deep interview prep tips", weakness: "Theoretical, does not get you an interview invitation", advantage: "Sankalp focuses on building proof of work first, then interview prep" }
            ]
        },
        verification: {
            grade: "B",
            assumptionsCount: 5,
            risksCount: 3,
            assumptions: [
                { text: "User has transferable professional experience (QA, Eng, Marketing).", status: "passed" },
                { text: "Local tech market has junior or mid-level PM openings.", status: "passed" },
                { text: "User can write clean, professional reports.", status: "passed" },
                { text: "Current employer has opportunities to shadow product teams.", status: "warning" },
                { text: "Recruiters will overlook lack of formal PM title if portfolio is strong.", status: "warning" }
            ],
            risks: [
                { title: "Resume Black Hole", severity: "high", desc: "ATS screening filters auto-reject applications without 'Product Manager' in past titles.", mitigation: "Reach out directly to hiring managers on LinkedIn with custom 200-word product critiques instead of cold submitting." },
                { title: "Lack of Business Metrics Knowledge", severity: "medium", desc: "Failing product case interviews due to inability to calculate LTV, CAC, or churn rates.", mitigation: "Study basic product metrics frameworks and practice mock interviews on peer platforms." },
                { title: "Imposter Syndrome", severity: "low", desc: "Stopping applications because you feel you lack formal 'CEO of product' credentials.", mitigation: "Remember PM is a coordination role; highlight your existing cross-functional leadership." }
            ]
        },
        strategy: {
            swot: {
                strengths: ["Deep technical understanding", "Experience working with developers", "Analytical QA mindset"],
                weaknesses: ["No business design portfolio", "No formal P&L ownership", "Lack of public product case studies"],
                opportunities: ["Internal transition opportunities", "Industry niche PM roles", "Writing public teardowns on Medium/LinkedIn"],
                threats: ["Highly competitive junior PM market", "Tech industry layoffs", "Hiring freezes"]
            },
            phases: [
                { number: "PHASE 1", title: "Build Proof of Work", desc: "Write 3 detailed product teardowns, design an MVP PRD, publish on a personal site or Substack." },
                { number: "PHASE 2", title: "Shadow & Network", desc: "Ask internal PMs to shadow. Set up informational interviews with 15 active PMs." },
                { number: "PHASE 3", title: "Targeted Outreach", desc: "Optimize LinkedIn, apply to product-centric startups, execute mock interview cycles." }
            ]
        },
        execution: {
            tasks: [
                { id: "pm-t1", title: "Read basic PM books (Inspired, Decode/Conquer)", status: "done", phase: 1, startMonth: 0, durationMonths: 1.0 },
                { id: "pm-t2", title: "Write product teardown of Spotify queue UI", status: "inprogress", phase: 1, startMonth: 0.8, durationMonths: 0.8 },
                { id: "pm-t3", title: "Draft complete PRD for a mock messaging app", status: "todo", phase: 1, startMonth: 1.5, durationMonths: 1.0 },
                { id: "pm-t4", title: "Conduct internal PM shadowing & coffee chats", status: "todo", phase: 2, startMonth: 2.2, durationMonths: 1.5 },
                { id: "pm-t5", title: "Optimize LinkedIn profile for PM keywords", status: "todo", phase: 2, startMonth: 3.2, durationMonths: 0.6 },
                { id: "pm-t6", title: "Apply directly to hiring managers with custom teardowns", status: "todo", phase: 3, startMonth: 3.8, durationMonths: 2.2 },
                { id: "pm-t7", title: "Practice 15 mock product casing interviews", status: "todo", phase: 3, startMonth: 4.5, durationMonths: 1.5 }
            ]
        }
    },

    // 5. WRITE A RESEARCH PAPER
    "I want to write and publish a research paper on AI ethics.": {
        timeframe: "3 months",
        budget: "zero budget",
        experience: "expert",
        focus: "quality",
        research: {
            insights: [
                { title: "Conference Timeline Constraints", text: "Major journals have a 6-month review cycle. Peer-reviewed workshop tracks at top conferences (NeurIPS, CHI) review in 6 weeks." },
                { title: "Literature Review Scope", text: "Failing to cite foundational papers (e.g., Bender et al., Stochastic Parrots) is the #1 reason for early desk rejection." },
                { title: "LaTeX Formatting Standard", text: "Submitting papers in standard templates (IEEE, ACM, Overleaf) immediately establishes research credibility." }
            ],
            persona: {
                name: "Dr. Ethan Vance",
                role: "Independent Scholar / Tech Policy Analyst",
                age: 38,
                goals: "Publish a high-impact paper on LLM alignment risks in a reputable workshop.",
                frustrations: "Lacks institutional university backing to cover journal fee, and isolated research workflow.",
                quote: "I have the arguments and the case studies, but navigating the academic publication maze is tedious."
            },
            competitors: [
                { name: "Academic University Fellowships", strength: "Full funding, library database access", weakness: "Hard to get, demands 2-year commitment", advantage: "Sankalp optimizes independent researcher workflows" },
                { name: "Standard Blog Posts (Medium)", strength: "Instant publication, easy reading", weakness: "Zero academic credibility or indexing", advantage: "Sankalp guides towards open-access peer-reviewed workshops" },
                { name: "Pay-to-Publish Journals", strength: "Guaranteed fast acceptance", weakness: "Predatory pricing, viewed poorly by experts", advantage: "Sankalp identifies high-repute, free-to-submit conference workshops" }
            ]
        },
        verification: {
            grade: "A",
            assumptionsCount: 4,
            risksCount: 3,
            assumptions: [
                { text: "User has access to Google Scholar & open repositories (arXiv).", status: "passed" },
                { text: "Subject matter is novel and adds value to the current discourse.", status: "passed" },
                { text: "User can write in formal academic English.", status: "passed" },
                { text: "Target workshop allows independent scholar submissions.", status: "passed" }
            ],
            risks: [
                { title: "Desk Rejection", severity: "high", desc: "Paper rejected immediately by editors due to poor formatting or out-of-scope content.", mitigation: "Strictly adhere to the conference Overleaf/LaTeX template. Have a peer read the abstract before submission." },
                { title: "Plagiarism Accusation", severity: "high", desc: "Accidental similarity in background section triggers automated screening tools.", mitigation: "Use robust citation tools (Zotero) and write all literature reviews in your own words." },
                { title: "Scope Creep Analysis", severity: "medium", desc: "Expanding research to cover all fields of AI ethics, ending up with an unfocused draft.", mitigation: "Establish a clear hypothesis. Focus only on one narrow case study (e.g. LLMs in corporate recruitment)." }
            ]
        },
        strategy: {
            swot: {
                strengths: ["Domain knowledge of tech policy", "Analytical writing ability", "No commercial pressure"],
                weaknesses: ["No academic affiliate credentials", "Limited access to paywalled databases", "No co-authors to share load"],
                opportunities: ["Growth of AI policy regulations", "Open access publication initiatives", "Collaboration with online research networks"],
                threats: ["Rapidly shifting state-of-the-art in AI ethics", "High rejection rates (75%+)", "Long review times"]
            },
            phases: [
                { number: "PHASE 1", title: "Lit Review & Outline", desc: "Read 25 relevant papers, document key arguments, outline hypothesis and sections." },
                { number: "PHASE 2", title: "Drafting & Formatting", desc: "Write introduction, methods, analysis, and conclusion. Set up ACM/IEEE LaTeX template." },
                { number: "PHASE 3", title: "Review & Submission", desc: "Run peer review loops, proofread bibliography, check PDF compliance, and upload to submission portal." }
            ]
        },
        execution: {
            tasks: [
                { id: "r-t1", title: "Conduct literature search on Google Scholar", status: "done", phase: 1, startMonth: 0, durationMonths: 0.8 },
                { id: "r-t2", title: "Draft abstract & introduce hypothesis", status: "inprogress", phase: 1, startMonth: 0.6, durationMonths: 0.5 },
                { id: "r-t3", title: "Write Background/Literature Review section", status: "todo", phase: 1, startMonth: 1.0, durationMonths: 0.8 },
                { id: "r-t4", title: "Write Case Study analysis & methodology", status: "todo", phase: 2, startMonth: 1.5, durationMonths: 1.0 },
                { id: "r-t5", title: "Format document in Overleaf LaTeX", status: "todo", phase: 2, startMonth: 2.2, durationMonths: 0.6 },
                { id: "r-t6", title: "Gather feedback from 3 peer academic editors", status: "todo", phase: 3, startMonth: 2.5, durationMonths: 0.4 },
                { id: "r-t7", title: "Final proofreading & submit to portal", status: "todo", phase: 3, startMonth: 2.8, durationMonths: 0.2 }
            ]
        }
    }
};

/**
 * Procedural Fallback Plan Generator
 * If the user types an arbitrary goal, we generate a high-fidelity mock action plan based on standard templates.
 */
window.generateProceduralMock = function (userGoal, options = {}) {
    const timeframe = options.timeframe || "3 months";
    const budget = options.budget || "low budget";
    const experience = options.experience || "beginner";
    const focus = options.focus || "speed";
    const category = options.category || "general";
    const confidence = options.confidence || "High";
    const ragActive = options.ragActive || false;
    const attachmentCount = options.attachmentCount || 0;

    const formattedGoal = userGoal.length > 50 ? userGoal.substring(0, 50) + "..." : userGoal;

    // Extract custom parameters dynamically from uploaded file content
    let customAudience = "";
    let customStack = "";
    let customFocus = "";
    if (ragActive && options.attachedFiles && options.attachedFiles.length > 0) {
        options.attachedFiles.forEach(file => {
            const contentLower = file.content.toLowerCase();
            const audMatch = file.content.match(/(?:target\s+audience|audience|target|target\s+market|user):\s*([^\n\r.]+)/i);
            if (audMatch && !customAudience) customAudience = audMatch[1].trim();

            const stackMatch = file.content.match(/(?:tech\s+stack|stack|platform|technology|framework):\s*([^\n\r.]+)/i);
            if (stackMatch && !customStack) customStack = stackMatch[1].trim();

            const focusMatch = file.content.match(/(?:priority|focus|optimize|optimization):\s*([^\n\r.]+)/i);
            if (focusMatch && !customFocus) customFocus = focusMatch[1].trim();
        });
    }

    // Define Category specifics
    let insights = [];
    let persona = {};
    let competitors = [];
    let assumptions = [];
    let risks = [];
    let swot = { strengths: [], weaknesses: [], opportunities: [], threats: [] };
    let phases = [];
    let tasks = [];

    if (category === "business") {
        insights = [
            { title: "Market Niche Gap", text: `Secondary research indicates an unserved demand for '${formattedGoal}' in regional micro-markets, with a 35% year-over-year search growth.` },
            { title: "Bootstrap Viability", text: `Acquisition cost of the initial B2B contacts can be minimized via direct outreach, fitting the '${budget}' constraint.` },
            { title: "Regulatory Readiness", text: "Compliance audits should start in Phase 1 to avoid licensing blocks before product launch." }
        ];
        persona = {
            name: customAudience ? `Audience Segment: ${customAudience}` : "B2B Target Client",
            role: customAudience ? `${customAudience} Operator` : "Corporate Purchaser / Business Lead",
            age: 36,
            goals: `Integrate and streamline '${formattedGoal}' to capture local workflow efficiencies.`,
            frustrations: `High cost of bespoke solutions and lack of reliable technical guidance.`,
            quote: `I need a solution that fits our operational budget without cutting safety corners.`
        };
        competitors = [
            { name: "Traditional Agencies", strength: "Fully managed builds", weakness: "Prohibitively expensive", advantage: "Sankalp enables zero-code, AI-integrated bootstrap validation" },
            { name: "Off-the-shelf software", strength: "Instant activation", weakness: "No customization for local workflow", advantage: "Allows building bespoke logic targeting target audience needs" }
        ];
        assumptions = [
            { text: `Target clients have the problem and are willing to pay for '${formattedGoal}'.`, status: "passed" },
            { text: `Regulatory licensing forms are accessible online.`, status: "passed" },
            { text: `No-code systems are sufficient for initial MVP operations.`, status: "warning" }
        ];
        risks = [
            { title: "Funding Delay", severity: "medium", desc: "Operation expenses exceed initial bootstrap reserves.", mitigation: "Secure pre-sales waitlist agreements to confirm demand prior to billing." },
            { title: "Compliance Blocks", severity: "high", desc: "Failure to register business entities delays launch.", mitigation: "Incorporate legal registration checks on week 2 of execution." }
        ];
        swot = {
            strengths: ["Lean operational cost structure", "Dynamic pivot capabilities", "Direct customer interface"],
            weaknesses: ["Zero initial brand footprint", "Limited marketing capital", "Single-founder constraint"],
            opportunities: ["Local search engine optimization", "AI workflows integration", "B2B partnership loops"],
            threats: ["Low cost copycats", "Platform pricing changes", "Market interest rate shifts"]
        };
        phases = [
            { number: "PHASE 1", title: "Feasibility & Pitch", desc: "Build landing presentation, pitch target customers, obtain feedback, draft legal status check." },
            { number: "PHASE 2", title: "Bootstrap Launch", desc: "Set up no-code prototype with payment links, invite top 20 waitlist leads." },
            { number: "PHASE 3", title: "Acquisition Scale", desc: "Establish referral bonuses, run local search optimization campaigns." }
        ];
        tasks = [
            { id: "biz-t1", title: `Complete competitor analysis deck for ${formattedGoal}`, status: "done", phase: 1, startMonth: 0, durationMonths: 0.6 },
            { id: "biz-t2", title: "Conduct 10 prospect problem validation calls", status: "inprogress", phase: 1, startMonth: 0.4, durationMonths: 0.8 },
            { id: "biz-t3", title: "Draft entity registration & compliance forms", status: "todo", phase: 1, startMonth: 1.0, durationMonths: 0.5 },
            { id: "biz-t4", title: "Build waitlist Landing Page & SEO hooks", status: "todo", phase: 2, startMonth: 1.3, durationMonths: 0.8 },
            { id: "biz-t5", title: "Deploy no-code MVP version with Stripe integration", status: "todo", phase: 2, startMonth: 1.9, durationMonths: 1.0 },
            { id: "biz-t6", title: "Rollout private beta access to waitlist", status: "todo", phase: 3, startMonth: 2.5, durationMonths: 0.5 }
        ];
    } else if (category === "technical") {
        insights = [
            { title: "API Interface Efficiencies", text: "Integration of lightweight LLM wrappers reduces backend storage infrastructure costs by 60%." },
            { title: "Client-side Execution", text: "Compiling standalone modules that load locally avoids continuous database hosting overheads." },
            { title: "CORS Constraints", text: "Local browser security protocols block standard external resource sharing; using fetch endpoints prevents blocking." }
        ];
        persona = {
            name: customAudience ? `Target User: ${customAudience}` : "Technical User Persona",
            role: customAudience ? `${customAudience} Architect` : "Developer / Lead Architect",
            age: 28,
            goals: `Assemble and deploy a scalable build for '${formattedGoal}' leveraging modular files.`,
            frustrations: `Complex deployment configurations, API rate limits, and package dependency conflicts.`,
            quote: `I want to deploy clean, modular code that runs securely and loads instantly.`
        };
        competitors = [
            { name: "Custom Frameworks (Next.js)", strength: "Maximum architectural control", weakness: "Significant setup and hosting configuration overheads", advantage: "Sankalp outlines optimized micro-framework stacks" },
            { name: "Legacy Monoliths", strength: "Very stable databases", weakness: "Extremely slow loading speed on mobile", advantage: "Builds lightweight client-side frameworks with localized APIs" }
        ];
        assumptions = [
            { text: "Serverless endpoints support required request load.", status: "passed" },
            { text: "Local storage mechanisms are sufficient for client state.", status: "passed" },
            { text: "Third-party APIs have open endpoints with free limits.", status: "warning" }
        ];
        risks = [
            { title: "API Rate Limiting", severity: "high", desc: "API services block traffic when multiple parallel processes run.", mitigation: "Implement query caching and progressive throttling loops in codebase." },
            { title: "Dependency Deprecations", severity: "medium", desc: "Libraries update versions causing application crash.", mitigation: "Lock version numbers in package.json to guarantee stability." }
        ];
        swot = {
            strengths: ["Highly modular codebase", "Serverless cost structure", "Fast frontend rendering"],
            weaknesses: ["Dependent on external APIs", "Lack of complex query support", "Manual key configuration required"],
            opportunities: ["Edge database migrations", "PWA browser offline support", "Open-source codebase release"],
            threats: ["API provider downtime", "API price increases", "Web browser module deprecations"]
        };
        phases = [
            { number: "PHASE 1", title: "Architecture Design", desc: "Draft database schema relationships, model interface parameters, set up Git repository." },
            { number: "PHASE 2", title: "Core Logic Assembly", desc: "Build backend routes, integrate service callers, compile UI component files." },
            { number: "PHASE 3", title: "Optimize & Deploy", desc: "Clean up code assets, audit API security settings, host on Vercel/Netlify." }
        ];
        tasks = [
            { id: "tech-t1", title: `Draft schema mapping & architectural charts for ${formattedGoal}`, status: "done", phase: 1, startMonth: 0, durationMonths: 0.5 },
            { id: "tech-t2", title: `Setup local dev stack using ${customStack || "standard repo setup"}`, status: "inprogress", phase: 1, startMonth: 0.3, durationMonths: 0.4 },
            { id: "tech-t3", title: `Configure ${customStack || "API servers"} endpoints & handlers`, status: "todo", phase: 2, startMonth: 0.8, durationMonths: 1.0 },
            { id: "tech-t4", title: `Code frontend layouts using ${customStack || "CSS & JS variables"}`, status: "todo", phase: 2, startMonth: 1.4, durationMonths: 1.0 },
            { id: "tech-t5", title: "Integrate database storage & authentication", status: "todo", phase: 2, startMonth: 2.0, durationMonths: 0.6 },
            { id: "tech-t6", title: "Deploy production build & run lint audits", status: "todo", phase: 3, startMonth: 2.5, durationMonths: 0.5 }
        ];
    } else if (category === "academic") {
        insights = [
            { title: "Literature Sourcing Density", text: "Foundational citations receive 80% higher weight during peer-review audits." },
            { title: "Overleaf Compile Latency", text: "Overly complex nested packages crash LaTeX engines. Keep templates simple and index-grouped." },
            { title: "Journal Turnaround Times", text: "Conference workshops review drafts 4x faster than traditional print journals." }
        ];
        persona = {
            name: customAudience ? `Subject Domain: ${customAudience}` : "Academic Reviewer Profile",
            role: customAudience ? `${customAudience} Investigator` : "Research Scholar / Peer Reviewer",
            age: 32,
            goals: `Write and compile a draft research paper on '${formattedGoal}' matching formatting standards.`,
            frustrations: `Managing citation databases and navigating submission format portals.`,
            quote: `I need a structured pathway to review papers, outline arguments, and submit drafts.`
        };
        competitors = [
            { name: "Academic Word Processors", strength: "Simpler typing layout", weakness: "Fails on citation index linking", advantage: "Guides citation assembly in LaTeX directly" },
            { name: "Generic Blog Writing", strength: "Instant publishing", weakness: "Zero peer credibility", advantage: "Targets peer-reviewed open access workshops" }
        ];
        assumptions = [
            { text: "Access to Google Scholar and open access datasets is sufficient.", status: "passed" },
            { text: "Hypothesis is novel enough to pass reviewer scrutiny.", status: "passed" },
            { text: "Colleagues are available to perform initial proofreading.", status: "warning" }
        ];
        risks = [
            { title: "Desk Rejection", severity: "high", desc: "Rejection due to out-of-scope template formats.", mitigation: "Adhere strictly to official Overleaf conference templates and font specs." },
            { title: "Scope Overload", severity: "medium", desc: "Trying to answer too many questions in a single draft.", mitigation: "Keep the paper focused on a single key case study or hypothesis." }
        ];
        swot = {
            strengths: ["Deep domain expertise", "Comprehensive reference database", "Independent academic voice"],
            weaknesses: ["No university lab funding", "Access issues to paid journal archives", "Single author proofread constraints"],
            opportunities: ["arXiv preprint publication", "Collaborative online papers", "Workshop call submissions"],
            threats: ["Fast-changing state-of-the-art", "Reviewer bias", "Long indexing delay"]
        };
        phases = [
            { number: "PHASE 1", title: "Literature Synthesis", desc: "Gather 20 key reference citations, outline hypothesis, draft Abstract introduction." },
            { number: "PHASE 2", title: "Draft compilation", desc: "Write Methodology, Case study details, Results analysis and Discussion sections." },
            { number: "PHASE 3", title: "Format & Submit", desc: "Convert text to LaTeX, organize bibliography database, review PDF compliance, submit." }
        ];
        tasks = [
            { id: "acad-t1", title: `Conduct literature research for ${formattedGoal}`, status: "done", phase: 1, startMonth: 0, durationMonths: 0.6 },
            { id: "acad-t2", title: "Draft paper abstract & outline hypothesis", status: "inprogress", phase: 1, startMonth: 0.4, durationMonths: 0.4 },
            { id: "acad-t3", title: "Compile Methodology & Case Studies text", status: "todo", phase: 2, startMonth: 0.8, durationMonths: 0.8 },
            { id: "acad-t4", title: "Draft Results section & generate charts", status: "todo", phase: 2, startMonth: 1.4, durationMonths: 0.8 },
            { id: "acad-t5", title: "Format document in Overleaf LaTeX template", status: "todo", phase: 2, startMonth: 2.0, durationMonths: 0.5 },
            { id: "acad-t6", title: "Proofread citations & submit to workshop portal", status: "todo", phase: 3, startMonth: 2.4, durationMonths: 0.6 }
        ];
    } else {
        // GENERAL / CAREER / HEALTHCARE / PRODUCTIVITY
        insights = [
            { title: "Structured Milestones", text: `Dividing '${formattedGoal}' into weekly checkpoints increases goal achievement rates by 70%.` },
            { title: "Habit Stacking", text: "Pairing execution steps with existing routines builds immediate momentum." },
            { title: "Proof of Concept Focus", text: "Validate your target parameters within week 2 before buying any tool licenses." }
        ];
        persona = {
            name: customAudience ? `Beneficiary Target: ${customAudience}` : "General Goal Beneficiary",
            role: customAudience ? `${customAudience} Lead` : "Productivity Lead / Project Owner",
            age: 29,
            goals: `Achieve '${formattedGoal}' on a clear, step-by-step roadmap.`,
            frustrations: `Overwhelming information online and losing motivation after week 2.`,
            quote: `I need a clean plan that shows me what to do today and how to track my overall progress.`
        };
        competitors = [
            { name: "Generic Planner Apps", strength: "Attractive calendars", weakness: "No domain-specific guidance", advantage: "Sankalp compiles strategic frameworks and custom roadmaps" },
            { name: "Self Guided Search", strength: "Endless pages", weakness: "Conflicting paths and advice", advantage: "Synthesizes single unified pathway matching user experience" }
        ];
        assumptions = [
            { text: `Goal parameters fit the timeframe (${timeframe}).`, status: "passed" },
            { text: `User has daily commitment hours available.`, status: "passed" },
            { text: "Required documentation or files are accessible.", status: "warning" }
        ];
        risks = [
            { title: "Commitment Drops", severity: "medium", desc: "Day-to-day distractions delay planned roadmap tasks.", mitigation: "Schedule fixed 30-minute block sessions each morning to complete micro-tasks." },
            { title: "Tool Friction", severity: "medium", desc: "Running into unfamiliar tool layouts.", mitigation: "Use standard popular software choices to avoid technical debug hurdles." }
        ];
        swot = {
            strengths: ["Highly adaptable targets", "Low execution expenses", "Direct personal accountability"],
            weaknesses: ["Vulnerable to external schedule shifts", "No expert co-worker support", "Unclear metrics to evaluate success"],
            opportunities: ["AI assistants configuration", "Online cohort support", "Public progress tracking"],
            threats: ["Conflicting project priorities", "Unexpected software updates", "Resource access outages"]
        };
        phases = [
            { number: "PHASE 1", title: "Define & Align", desc: "Define target parameters, gather baseline resources, organize workspace tools." },
            { number: "PHASE 2", title: "Active Build Loop", desc: "Execute core roadmap tasks, solve blockers, document progress status." },
            { number: "PHASE 3", title: "Review & Deliver", desc: "Audit completed roadmap checklist, run quality test, consolidate deliverables." }
        ];
        tasks = [
            { id: "gen-t1", title: `Audit baseline assets for ${formattedGoal}`, status: "done", phase: 1, startMonth: 0, durationMonths: 0.5 },
            { id: "gen-t2", title: "Set up project folders & schedule timelines", status: "inprogress", phase: 1, startMonth: 0.4, durationMonths: 0.4 },
            { id: "gen-t3", title: "Complete Phase 1 discovery and outline actions", status: "todo", phase: 2, startMonth: 0.8, durationMonths: 0.8 },
            { id: "gen-t4", title: "Perform core roadmap execution work", status: "todo", phase: 2, startMonth: 1.4, durationMonths: 1.0 },
            { id: "gen-t5", title: "Run verification checks against objectives", status: "todo", phase: 3, startMonth: 2.2, durationMonths: 0.5 },
            { id: "gen-t6", title: "Assemble final deliverables & review roadmap", status: "todo", phase: 3, startMonth: 2.6, durationMonths: 0.4 }
        ];
    }

    // Adjust timeline values dynamically to fit target timeframe
    let timeframeMonths = 3;
    if (timeframe.includes("1 month")) timeframeMonths = 1;
    else if (timeframe.includes("6 months")) timeframeMonths = 6;
    else if (timeframe.includes("12 months")) timeframeMonths = 12;

    // Scale task startMonth and durationMonths to fit timeframe
    const scaleFactor = timeframeMonths / 3;
    tasks = tasks.map(t => {
        return {
            ...t,
            startMonth: t.startMonth * scaleFactor,
            durationMonths: t.durationMonths * scaleFactor
        };
    });

    // RAG source annotation
    const finalInsights = [...insights];
    if (ragActive && attachmentCount > 0) {
        finalInsights.unshift({
            title: "Retrieved Attachment Context",
            text: `RAG System parsed ${attachmentCount} local contextual files. Successfully extracted structural goals and target parameters, improving confidence score to High.`
        });
    }

    // Generate AI assistant response
    let assistantResponse = `## AI Assistant Final Blueprint Evaluation

Hello! I have compiled the strategic blueprint for your goal: **"${formattedGoal}"** based on the collaborative multi-agent execution pipeline.

`;

    if (ragActive && options.attachedFiles && options.attachedFiles.length > 0) {
        assistantResponse += `### RAG File Knowledge Extraction
I successfully read and analyzed the following uploaded file context:
`;
        options.attachedFiles.forEach(file => {
            // Include actual contents in response snippet
            const textSnippet = file.content.length > 200 ? file.content.substring(0, 200) + "..." : file.content;
            assistantResponse += `- **${file.name}** (Size: ${(file.size / 1024).toFixed(1)} KB)
  *Content Snippet:* "${textSnippet}"\n`;
        });
        assistantResponse += `\n`;
    }

    if (ragActive && options.attachedUrls && options.attachedUrls.length > 0) {
        assistantResponse += `### Referenced URL Metadata & Constraints
I analyzed the following referenced URL profiles:
`;
        options.attachedUrls.forEach(urlObj => {
            if (urlObj.url.includes('quora.com') || urlObj.url.includes('wikipedia.org') || urlObj.url.includes('reddit.com')) {
                assistantResponse += `- **${urlObj.name}** (${urlObj.url})
  *Cross-Origin Resource Sharing (CORS) limits direct retrieval from this domain.* I analyzed the URL slug structure and indexed public domain taxonomy keywords instead of inventing content.\n`;
            } else {
                assistantResponse += `- **${urlObj.name}** (${urlObj.url})
  *Analyzed context:* "${urlObj.content}"\n`;
            }
        });
        assistantResponse += `\n`;
    }

    assistantResponse += `### Executive Action Summary
- **Category Focus:** ${category.toUpperCase()}
- **Target Timeframe:** ${timeframe}
- **Assessed Confidence:** **${confidence}**

The agent team verified **${assumptions.length} key assumptions** and registered **${risks.length} potential risk vectors**. Based on the SWOT matrix, we formulated a **3-phase roadmap** consisting of **${tasks.length} strategic milestones**. 

*Click through the Research, Verification, Strategy, and Execution tabs to explore the detailed dashboards, Gantt charts, and Kanban boards.*`;

    return {
        timeframe: timeframe,
        budget: budget,
        experience: experience,
        focus: focus,
        category: category,
        confidence: confidence,
        ragActive: ragActive,
        assistantResponse: assistantResponse,
        research: {
            insights: finalInsights,
            persona: persona,
            competitors: competitors
        },
        verification: {
            grade: confidence === "High" ? "A" : confidence === "Medium" ? "B+" : "C+",
            assumptionsCount: assumptions.length,
            risksCount: risks.length,
            assumptions: assumptions,
            risks: risks
        },
        strategy: {
            swot: swot,
            phases: phases
        },
        execution: {
            tasks: tasks
        }
    };
};


/**
 * Predefined Agent log messages to feed into the live log console during execution.
 */
window.AGENT_LOGS = {
    research: [
        "Research Agent: Spawning search processes on Google Scholar, Devpost, and Crunchbase...",
        "Research Agent: Analyzing top 15 resources matching user goal...",
        "Research Agent: Extracting key demographic and market pain points...",
        "Research Agent: Synthesizing target user persona: 'Frustrated with current tool inefficiency'...",
        "Research Agent: Compiling alternative landscape: Strengths vs Weaknesses vs Sankalp Advantage...",
        "Research Agent: Generating detailed PDF research summary data structure...",
        "Research Agent: Completed research synthesis. Forwarding payload to Verification Agent."
    ],
    verification: [
        "Verification Agent: Payload received. Starting risk analysis run...",
        "Verification Agent: Verifying project assumptions against timeframe and budget constraints...",
        "Verification Agent: Assumption validation checks: 6 items tested, 2 warnings flagged.",
        "Verification Agent: Analyzing technical feasibility (no-code and low-cost viability)...",
        "Verification Agent: Cataloging risk items: Feature Creep, Funding delays, Setup issues...",
        "Verification Agent: Injecting mitigation steps to reduce risk impact by 40%...",
        "Verification Agent: Assigning Feasibility Score and generating credibility matrix...",
        "Verification Agent: Verification analysis complete. Handing off to Strategy Agent."
    ],
    strategy: [
        "Strategy Agent: Synthesizing research and verification datasets...",
        "Strategy Agent: Formulating SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)...",
        "Strategy Agent: Balancing strengths against cataloged market risks...",
        "Strategy Agent: Structuring positioning coordinates and competitor defense vectors...",
        "Strategy Agent: Phasing execution timeline into three clean logical milestones...",
        "Strategy Agent: Finalizing strategic alignment framework. Forwarding to Execution Agent."
    ],
    execution: [
        "Execution Agent: Initializing Gantt timeline and Kanban tasks engine...",
        "Execution Agent: Mapping 7 critical path tasks matching milestones...",
        "Execution Agent: Assigning calendar duration multipliers and phase overlaps...",
        "Execution Agent: Formatting JSON payload schema for client-side checklists...",
        "Execution Agent: Building markdown export files...",
        "Execution Agent: All specialized agent outputs reconciled. Ready for rendering.",
        "System: Workflow complete. Initializing Workspace Dashboard..."
    ]
};
