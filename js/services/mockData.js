window.classifyGoalDomain = function(goalText) {
    const text = goalText.toLowerCase();
    
    // Check if educational
    if (text.includes('learn') || text.includes('study') || text.includes('course') || text.includes('tutorial') || text.includes('education') || text.includes('class') || text.includes('curriculum') || text.includes('exam') || text.includes('certification') || text.includes('scratch')) {
        return 'educational';
    }
    // Check if academic
    if (text.includes('paper') || text.includes('write') || text.includes('research') || text.includes('academic') || text.includes('thesis') || text.includes('citation') || text.includes('journal') || text.includes('ethics')) {
        return 'academic';
    }
    // Check if technical coding
    if (text.includes('code') || text.includes('python') || text.includes('program') || text.includes('app') || text.includes('website') || text.includes('database') || text.includes('software') || text.includes('api') || text.includes('technical') || text.includes('dev') || text.includes('coding') || text.includes('sql') || text.includes('backend') || text.includes('frontend')) {
        return 'technical';
    }
    // Check if physical business
    if (text.includes('coffee') || text.includes('shop') || text.includes('cafe') || text.includes('restaurant') || text.includes('gym') || text.includes('store') || text.includes('bookstore') || text.includes('bakery') || text.includes('retail') || text.includes('physical') || text.includes('brick') || text.includes('boutique') || text.includes('salon')) {
        return 'business_physical';
    }
    // Check if digital business/startup
    if (text.includes('startup') || text.includes('business') || text.includes('company') || text.includes('launch') || text.includes('saas') || text.includes('marketplace') || text.includes('product') || text.includes('revenue') || text.includes('marketing') || text.includes('sales')) {
        return 'business_digital';
    }
    // Fallback/General/Creative
    return 'general_personal';
};

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
                { name: "Traditional Agencies", strength: "High quality custom builds", weakness: "Extremely expensive ($20k+), slow delivery", advantage: "Your plan enables rapid, zero-code, AI-integrated bootstrap validation" },
                { name: "DIY Custom Code", strength: "Complete code ownership", weakness: "Long learning curve, high chance of quitting", advantage: "Your strategy details specific tool stack recommendations to launch in 4 weeks" },
                { name: "Freelancers (Upwork)", strength: "Flexible pricing models", weakness: "High management overhead, variable quality", advantage: "Your approach guides validation *before* spending money on external labor" }
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
                { id: "s-t1", title: "Design mockup & Landing Page", status: "todo", phase: 1, startMonth: 0, durationMonths: 1.2 },
                { id: "s-t2", title: "Perform 10 user discovery interviews", status: "todo", phase: 1, startMonth: 0.8, durationMonths: 1.0 },
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
                { name: "Online Hackathons (Devpost)", strength: "Global reach, easy to manage", weakness: "No physical community feel, low completion rate", advantage: "Your plan guides physical hybrid execution to build local connections" },
                { name: "Standard Academic Seminars", strength: "Supported by college admins", weakness: "Boring format, low practical engagement", advantage: "Your strategy provides an intense, project-focused weekend workflow blueprint" },
                { name: "Professional Tech Conferences", strength: "High profile speakers", weakness: "Extremely high cost, not student-friendly", advantage: "Your approach focuses on student-built MVPs with local corporate mentoring" }
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
                { id: "h-t1", title: "Submit venue request & club approval", status: "todo", phase: 1, startMonth: 0, durationMonths: 0.6 },
                { id: "h-t2", title: "Create sponsor prospectus deck", status: "todo", phase: 1, startMonth: 0.3, durationMonths: 0.6 },
                { id: "h-t3", title: "Pitch to 30 local tech companies", status: "todo", phase: 1, startMonth: 0.7, durationMonths: 1.0 },
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
                { name: "Interactive Platforms (DataCamp)", strength: "Easy browser coding", weakness: "Hand-holding makes you feel smart but fails on local IDEs", advantage: "Your plan guides setting up VS Code locally from day one" },
                { name: "Bootcamps (Udemy / Coursera)", strength: "Structured video lectures", weakness: "Passive watching, easy to fall asleep", advantage: "Your strategy enforces an active project-building rhythm" },
                { name: "Academic Textbooks", strength: "Covers deep theoretical fundamentals", weakness: "Too dry, overwhelming for beginners", advantage: "Your approach prioritizes practical automation utility over computer science theory" }
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
                { id: "p-t1", title: "Install VS Code, Python & extensions", status: "todo", phase: 1, startMonth: 0, durationMonths: 0.25 },
                { id: "p-t2", title: "Master variables, loops & functions", status: "todo", phase: 1, startMonth: 0.2, durationMonths: 0.35 },
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
                { name: "Expensive MBA Programs", strength: "Strong network, pedigree", weakness: "Costs $100k+, takes 2 years of zero income", advantage: "Your plan guides building a practical PM portfolio in 3 months for under $100" },
                { name: "PM Bootcamps", strength: "Structured classes, career coach", weakness: "Costs $5k+, cookie-cutter portfolio files", advantage: "Your strategy helps compile hyper-custom product teardowns on real apps" },
                { name: "Reading books (Cracking PM)", strength: "Deep interview prep tips", weakness: "Theoretical, does not get you an interview invitation", advantage: "Your approach focuses on building proof of work first, then interview prep" }
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
                { id: "pm-t1", title: "Read basic PM books (Inspired, Decode/Conquer)", status: "todo", phase: 1, startMonth: 0, durationMonths: 1.0 },
                { id: "pm-t2", title: "Write product teardown of Spotify queue UI", status: "todo", phase: 1, startMonth: 0.8, durationMonths: 0.8 },
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
                { name: "Academic University Fellowships", strength: "Full funding, library database access", weakness: "Hard to get, demands 2-year commitment", advantage: "Your plan optimizes independent researcher workflows" },
                { name: "Standard Blog Posts (Medium)", strength: "Instant publication, easy reading", weakness: "Zero academic credibility or indexing", advantage: "Your strategy guides towards open-access peer-reviewed workshops" },
                { name: "Pay-to-Publish Journals", strength: "Guaranteed fast acceptance", weakness: "Predatory pricing, viewed poorly by experts", advantage: "Your approach identifies high-repute, free-to-submit conference workshops" }
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
                { id: "r-t1", title: "Conduct literature search on Google Scholar", status: "todo", phase: 1, startMonth: 0, durationMonths: 0.8 },
                { id: "r-t2", title: "Draft abstract & introduce hypothesis", status: "todo", phase: 1, startMonth: 0.6, durationMonths: 0.5 },
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

    // Clean goal and extract keyword tokens
    const stopWords = new Set([
        'i', 'want', 'to', 'build', 'a', 'an', 'the', 'for', 'with', 'and', 'in', 'on', 'at', 'by', 'of',
        'from', 'my', 'our', 'your', 'into', 'create', 'make', 'setup', 'set', 'up', 'start', 'launch',
        'develop', 'write', 'learn', 'how', 'do', 'design', 'organize', 'about', 'on', 'ai'
    ]);
    const keywords = userGoal.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
        .split(/\s+/)
        .filter(w => w.length > 2 && !stopWords.has(w));
    
    const mainTopic = keywords.length > 0 ? keywords.slice(0, 3).join(' ') : 'project objectives';
    const mainSubject = keywords.length > 0 ? keywords[0] : 'target';

    // Extract custom parameters dynamically from uploaded file content
    let customAudience = "";
    let customStack = "";
    let customFocus = "";
    if (ragActive && options.attachedFiles && options.attachedFiles.length > 0) {
        options.attachedFiles.forEach(file => {
            const content = file.content;
            const audMatch = content.match(/(?:target\s+audience|audience|target|target\s+market|user):\s*([^\n\r.]+)/i);
            if (audMatch && !customAudience) customAudience = audMatch[1].trim();

            const stackMatch = content.match(/(?:tech\s+stack|stack|platform|technology|framework):\s*([^\n\r.]+)/i);
            if (stackMatch && !customStack) customStack = stackMatch[1].trim();

            const focusMatch = content.match(/(?:priority|focus|optimize|optimization):\s*([^\n\r.]+)/i);
            if (focusMatch && !customFocus) customFocus = focusMatch[1].trim();
        });
    }

    const targetAudience = customAudience || (category === 'technical' ? 'Developers' : category === 'academic' ? 'Researchers' : 'Target Consumers');

    // Dynamically generate all parts of the plan
    const insights = [
        { 
            title: `Market Niche Analysis for ${mainTopic.toUpperCase()}`, 
            text: `Initial analysis indicates key user groups demonstrate clear interest in '${formattedGoal}'. Identifying niche entry opportunities reduces competitive friction.` 
        },
        { 
            title: `Resource Allocation Constraint`, 
            text: `Executing this within '${timeframe}' and '${budget || "low budget"}' requires maximizing edge frameworks and focusing on a single high-impact feature.` 
        },
        { 
            title: `Validation Growth Loop`, 
            text: `Gathering direct feedback from the target audience (${targetAudience}) in Phase 1 yields higher retention than scaling prematurely.` 
        }
    ];

    const persona = {
        name: "Assumed Target Group / Segment",
        role: category === 'technical' ? 'Technical Lead / Engineer' : category === 'academic' ? 'Research Analyst / Scholar' : 'Project Coordinator / User',
        age: "Not specified (Assumed age range: 18-65)",
        goals: `Successfully execute and operationalize '${formattedGoal}' within constraints.`,
        frustrations: `Lack of a structured, step-by-step pathway to guide '${mainTopic}' milestones.`,
        quote: "Not provided (Assumed goal: to successfully execute this project)"
    };

    const competitors = [
        { 
            name: `Manual or legacy methods for ${mainSubject}`, 
            strength: "Familiar and established workflows", 
            weakness: "Extremely time-consuming, prone to human error", 
            advantage: "Our custom plan structures tasks to automate phases, achieving results 4x faster." 
        },
        { 
            name: "Generic/Off-the-shelf templates", 
            strength: "Quick setup", 
            weakness: "No custom adaptation to your specific parameters", 
            advantage: "Provides direct validation frameworks tailored around your goal." 
        }
    ];

    const assumptions = [
        { text: `Target group responds positively to the core features of '${mainTopic}'.`, status: "passed" },
        { text: `Key dependencies and free platforms are accessible without upfront subscription costs.`, status: "passed" },
        { text: `The targeted timeframe of ${timeframe} is realistic for prototype launch.`, status: "passed" },
        { text: `The project focus (${focus || 'speed'}) is aligned with user expectations.`, status: "warning" }
    ];

    const risks = [
        { 
            title: `Feature Scope Expansion`, 
            severity: "high", 
            desc: `Adding secondary attributes to '${mainTopic}' delays initial launch beyond ${timeframe}.`, 
            mitigation: "Strictly enforce a 'Single Core Feature' baseline in Phase 1." 
        },
        { 
            title: `Integration Debug Latency`, 
            severity: "medium", 
            desc: `Getting stuck on configuration issues for '${customStack || 'local tools'}' setup.`, 
            mitigation: "Utilize modular, well-documented open-source components with active communities." 
        }
    ];

    const swot = {
        strengths: [`Direct focus on ${mainTopic}`, `Low-cost bootstrap structure`, `Fast decision loops`],
        weaknesses: [`Limited initial footprint`, `Resource limits (${budget})`, `Independent execution overhead`],
        opportunities: [`Integrating lightweight helpers`, `Leveraging localized distribution channels`, `Collecting direct user feedback`],
        threats: [`Alternative generic options`, `External scheduler conflicts`, `Dependency version updates`]
    };

    const phases = [
        { 
            number: "PHASE 1", 
            title: "Validation & Blueprint Setup", 
            desc: `Conduct initial audits for '${mainTopic}', draft specifications, and verify core assumptions.` 
        },
        { 
            number: "PHASE 2", 
            title: "Core Execution & MVP Build", 
            desc: `Assemble functional components of '${mainTopic}' using localized free platforms.` 
        },
        { 
            number: "PHASE 3", 
            title: "User Testing & Optimization", 
            desc: `Validate build with target users, optimize performance parameters, and organize launch.` 
        }
    ];

    let tasks = [
        { id: "dyn-t1", title: `Audit existing resources for ${mainTopic}`, status: "todo", phase: 1, startMonth: 0, durationMonths: 0.5 },
        { id: "dyn-t2", title: `Draft requirements document for ${mainTopic}`, status: "todo", phase: 1, startMonth: 0.4, durationMonths: 0.4 },
        { id: "dyn-t3", title: `Setup developer workspace using ${customStack || "local environment"}`, status: "todo", phase: 1, startMonth: 0.7, durationMonths: 0.5 },
        { id: "dyn-t4", title: `Assemble core workflow logic for ${mainSubject}`, status: "todo", phase: 2, startMonth: 1.1, durationMonths: 1.0 },
        { id: "dyn-t5", title: `Run verification tests and audit results`, status: "todo", phase: 2, startMonth: 2.0, durationMonths: 0.6 },
        { id: "dyn-t6", title: `Deploy MVP and request target user reviews`, status: "todo", phase: 3, startMonth: 2.5, durationMonths: 0.5 }
    ];

    // Adjust timeline values dynamically to fit target timeframe
    let timeframeMonths = 3;
    if (timeframe.includes("1 month")) timeframeMonths = 1;
    else if (timeframe.includes("6 months")) timeframeMonths = 6;
    else if (timeframe.includes("12 months")) timeframeMonths = 12;

    const scaleFactor = timeframeMonths / 3;
    tasks = tasks.map(t => {
        return {
            ...t,
            startMonth: t.startMonth * scaleFactor,
            durationMonths: t.durationMonths * scaleFactor
        };
    });

    const finalInsights = [...insights];
    if (ragActive && attachmentCount > 0) {
        finalInsights.unshift({
            title: "Retrieved Local Attachment Context",
            text: `RAG system parsed ${attachmentCount} local contextual files. Successfully extracted structural parameters and target goal objectives.`
        });
    }

    let assistantResponse = `## Dynamic Action Blueprint Evaluation

Successfully compiled the strategic action plan for your goal: **"${userGoal}"** based on the collaborative multi-agent execution pipeline.

`;

    if (ragActive && options.attachedFiles && options.attachedFiles.length > 0) {
        assistantResponse += `### Attached File Analysis
`;
        options.attachedFiles.forEach(file => {
            const textSnippet = file.content.length > 150 ? file.content.substring(0, 150) + "..." : file.content;
            assistantResponse += `- **${file.name}** (Size: ${(file.size / 1024).toFixed(1)} KB)
  *Extracted Content:* "${textSnippet}"\n`;
        });
        assistantResponse += `\n`;
    }

    if (ragActive && options.attachedUrls && options.attachedUrls.length > 0) {
        assistantResponse += `### Referenced URL Metadata
`;
        options.attachedUrls.forEach(urlObj => {
            assistantResponse += `- **${urlObj.name}** (${urlObj.url})
  *Analyzed context:* "${urlObj.content}"\n`;
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
        "Research Agent: Compiling alternative landscape: Strengths vs Weaknesses vs Plan Advantage...",
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
