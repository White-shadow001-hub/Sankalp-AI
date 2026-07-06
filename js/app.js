/**
 * SANKALP AI - CORE APPLICATION CONTROLLER
 * Orchestrates views, state management, agent executions, and workspace renderings.
 */

// Imports removed to support running via file:// protocol directly (global script execution).
const { MOCK_GOALS, generateProceduralMock } = window;
const { generateWithGemini } = window;
const { ResearchAgent, VerificationAgent, StrategyAgent, ExecutionAgent } = window;

// --- Global Application State ---
// --- Global Application State ---
const state = {
    apiKey: localStorage.getItem('sankalp_gemini_api_key') || '',
    plannerMode: localStorage.getItem('sankalp_planner_mode') || 'simulated',
    selectedModel: localStorage.getItem('sankalp_gemini_model') || 'gemini-2.5-flash',
    
    currentGoal: '',
    detectedCategory: 'general',
    parameters: {
        timeframe: '3 months',
        budget: 'low budget',
        experience: 'beginner',
        focus: 'speed'
    },
    
    // Capstone enhancements
    attachedFiles: [], // Array of { name, size, type, content }
    attachedUrls: [],  // Array of string URLs
    confidence: 'High', // High, Medium, Needs More Information
    ragActive: false,
    
    activePlanData: null,
    activeView: 'goal-capture-view',
    activeTab: 'tab-research'
};

// --- Instantiate Specialist Agents ---
const agents = {
    research: new ResearchAgent(),
    verification: new VerificationAgent(),
    strategy: new StrategyAgent(),
    execution: new ExecutionAgent()
};

// --- DOM Elements Cache ---
const DOM = {
    // Views
    goalCaptureView: document.getElementById('goal-capture-view'),
    pipelineView: document.getElementById('pipeline-view'),
    workspaceView: document.getElementById('workspace-view'),
    
    // Dynamic fields & uploads
    dropZone: document.getElementById('drop-zone'),
    fileInput: document.getElementById('file-input'),
    urlContextInput: document.getElementById('url-context-input'),
    addUrlBtn: document.getElementById('add-url-btn'),
    sourcesList: document.getElementById('sources-list'),
    dynamicParamsContainer: document.getElementById('dynamic-params-container'),
    dynamicParamsFields: document.getElementById('dynamic-params-fields'),
    ragStatusBadge: document.getElementById('rag-status-badge'),
    
    // Conversation dialog
    conversationalDialog: document.getElementById('conversational-dialog'),
    dialogBody: document.getElementById('dialog-body'),
    dialogFooter: document.getElementById('dialog-footer'),
    
    // Goal Capture Elements
    goalInput: document.getElementById('goal-input'),
    charCount: document.getElementById('char-count'),
    presetCards: document.querySelectorAll('.preset-card'),
    generatePlanBtn: document.getElementById('generate-plan-btn'),
    
    // Settings Elements
    settingsBtn: document.getElementById('settings-btn'),
    settingsModal: document.getElementById('settings-modal'),
    closeSettingsBtn: document.getElementById('close-settings-btn'),
    cancelSettingsBtn: document.getElementById('cancel-settings-btn'),
    saveSettingsBtn: document.getElementById('save-settings-btn'),
    apiStatusBadge: document.getElementById('api-status-badge'),
    geminiApiKeyInput: document.getElementById('gemini-api-key'),
    toggleKeyVisibilityBtn: document.getElementById('toggle-key-visibility'),
    geminiModelSelect: document.getElementById('gemini-model-select'),
    modeSimulated: document.getElementById('mode-simulated'),
    modeApi: document.getElementById('mode-api'),
    modeSimulatedLabel: document.getElementById('mode-simulated-label'),
    modeApiLabel: document.getElementById('mode-api-label'),
    apiKeyGroup: document.getElementById('api-key-group'),
    modelSelectGroup: document.getElementById('model-select-group'),
    
    // Pipeline Elements
    terminalOutput: document.getElementById('terminal-output'),
    agentCards: {
        research: document.getElementById('agent-card-research'),
        verification: document.getElementById('agent-card-verification'),
        strategy: document.getElementById('agent-card-strategy'),
        execution: document.getElementById('agent-card-execution')
    },
    
    // Workspace Sidebar Elements
    sidebarGoalTitle: document.getElementById('sidebar-goal-title'),
    sidebarMetaTime: document.getElementById('sidebar-meta-time'),
    sidebarMetaBudget: document.getElementById('sidebar-meta-budget'),
    sidebarMetaExperience: document.getElementById('sidebar-meta-experience'),
    sidebarConfidenceBadge: document.getElementById('sidebar-confidence-badge'),
    sidebarRagBadge: document.getElementById('sidebar-rag-badge'),
    sidebarMetaTimeItem: document.getElementById('sidebar-meta-time-item'),
    sidebarMetaBudgetItem: document.getElementById('sidebar-meta-budget-item'),
    sidebarMetaExperienceItem: document.getElementById('sidebar-meta-experience-item'),
    sidebarProgressFill: document.getElementById('sidebar-progress-fill'),
    progressPercentageVal: document.getElementById('progress-percentage-val'),
    sidebarCredibilityScore: document.getElementById('sidebar-credibility-score'),
    planNewGoalBtn: document.getElementById('plan-new-goal-btn'),
    miniAgentTabs: document.querySelectorAll('.mini-agent-item'),
    
    // Workspace Navigation & Viewport
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Final Response Card elements
    finalResponseCard: document.getElementById('final-ai-response-card'),
    finalResponseText: document.getElementById('ai-response-text'),
    
    // Research Tab
    researchInsightsContainer: document.getElementById('research-insights-container'),
    researchPersonaContainer: document.getElementById('research-persona-container'),
    researchCompetitorBody: document.getElementById('research-competitor-body'),
    
    // Verification Tab
    verificationGrade: document.getElementById('verification-grade'),
    verificationAssumptionsCount: document.getElementById('verification-assumptions-count'),
    verificationRisksCount: document.getElementById('verification-risks-count'),
    verificationAssumptionsList: document.getElementById('verification-assumptions-list'),
    verificationRiskRegistry: document.getElementById('verification-risk-registry'),
    
    // Strategy Tab
    swotStrengths: document.getElementById('swot-strengths'),
    swotWeaknesses: document.getElementById('swot-weaknesses'),
    swotOpportunities: document.getElementById('swot-opportunities'),
    swotThreats: document.getElementById('swot-threats'),
    strategyPhasesContainer: document.getElementById('strategy-phases-container'),
    
    // Execution Tab
    btnShowGantt: document.getElementById('btn-show-gantt'),
    btnShowKanban: document.getElementById('btn-show-kanban'),
    ganttSection: document.getElementById('gantt-section'),
    kanbanSection: document.getElementById('kanban-section'),
    ganttHeaders: document.getElementById('gantt-headers'),
    ganttRows: document.getElementById('gantt-rows'),
    kanbanListTodo: document.getElementById('kanban-list-todo'),
    kanbanListInprogress: document.getElementById('kanban-list-inprogress'),
    kanbanListDone: document.getElementById('kanban-list-done'),
    countTodo: document.getElementById('count-todo'),
    countInprogress: document.getElementById('count-inprogress'),
    countDone: document.getElementById('count-done'),
    exportDropdownBtn: document.getElementById('export-dropdown-btn'),
    exportMenu: document.getElementById('export-menu'),
    exportMdBtn: document.getElementById('export-md-btn'),
    exportJsonBtn: document.getElementById('export-json-btn')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Refresh Lucide Icons initially
    lucide.createIcons();
    
    // 2. Load configurations into Inputs
    DOM.geminiApiKeyInput.value = state.apiKey;
    DOM.geminiModelSelect.value = state.selectedModel;
    
    if (state.plannerMode === 'api') {
        DOM.modeApi.checked = true;
        DOM.modeApiLabel.classList.add('active');
        DOM.modeSimulatedLabel.classList.remove('active');
        DOM.apiKeyGroup.style.display = 'block';
        DOM.modelSelectGroup.style.display = 'block';
    } else {
        DOM.modeSimulated.checked = true;
        DOM.modeSimulatedLabel.classList.add('active');
        DOM.modeApiLabel.classList.remove('active');
        DOM.apiKeyGroup.style.display = 'none';
        DOM.modelSelectGroup.style.display = 'none';
    }
    updateApiBadge();
    
    // 3. Register Event Listeners
    setupEventListeners();
});

// --- UPDATE BADGE UI ---
function updateApiBadge() {
    const badge = DOM.apiStatusBadge;
    const dot = badge.querySelector('.status-dot');
    const text = badge.querySelector('.status-text');
    
    if (state.plannerMode === 'api') {
        dot.className = 'status-dot live';
        text.textContent = 'Live Gemini API';
    } else {
        dot.className = 'status-dot simulated';
        text.textContent = 'Simulated Mode';
    }
}

// --- SETUP EVENT LISTENERS ---
function setupEventListeners() {
    // Character counter & category classification for textarea
    DOM.goalInput.addEventListener('input', (e) => {
        const text = e.target.value;
        DOM.charCount.textContent = text.length;
        state.currentGoal = text;
        
        // Hide greetings dialog if user resumes typing a custom goal
        DOM.conversationalDialog.style.display = 'none';

        // Auto-classify goal domain to show dynamic parameters
        classifyAndRenderParameters(text);
        
        // Remove preset card highlights if typing custom goal
        DOM.presetCards.forEach(c => c.classList.remove('active'));
    });

    // Preset cards selection
    DOM.presetCards.forEach(card => {
        card.addEventListener('click', () => {
            DOM.presetCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const goalText = card.getAttribute('data-goal');
            DOM.goalInput.value = goalText;
            DOM.charCount.textContent = goalText.length;
            state.currentGoal = goalText;
            DOM.conversationalDialog.style.display = 'none';
            classifyAndRenderParameters(goalText);
        });
    });

    // Drag-and-drop file upload listeners
    DOM.dropZone.addEventListener('click', () => DOM.fileInput.click());
    
    DOM.fileInput.addEventListener('change', (e) => handleFilesUpload(e.target.files));

    // Prevent default dragover and drop globally to prevent browser opening files in new tabs
    window.addEventListener('dragover', (e) => {
        e.preventDefault();
    }, false);
    window.addEventListener('drop', (e) => {
        e.preventDefault();
    }, false);

    DOM.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        DOM.dropZone.classList.add('dragover');
    });

    DOM.dropZone.addEventListener('dragleave', () => {
        DOM.dropZone.classList.remove('dragover');
    });

    DOM.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        DOM.dropZone.classList.remove('dragover');
        handleFilesUpload(e.dataTransfer.files);
    });

    // URL Reference Context Addition
    DOM.addUrlBtn.addEventListener('click', () => {
        const urlValue = DOM.urlContextInput.value.trim();
        if (urlValue) {
            try {
                const parsedUrl = new URL(urlValue); // validate format
                const isYouTube = parsedUrl.hostname.includes('youtube.com') || parsedUrl.hostname.includes('youtu.be');
                let name = urlValue;
                let content = "";
                
                if (isYouTube) {
                    let videoId = "";
                    if (parsedUrl.hostname.includes('youtu.be')) {
                        videoId = parsedUrl.pathname.substring(1);
                    } else {
                        videoId = parsedUrl.searchParams.get('v');
                    }
                    name = `YouTube: ${videoId || 'Video'}`;
                    content = `[YouTube transcript context for video ID ${videoId}. Extracted concepts: platform scaling, user analytics, and deployment pipelines.]`;
                    alert("YouTube reference added. Extracted simulated video transcript metadata context.");
                } else {
                    alert(`URL added: ${parsedUrl.hostname}. Note: Direct content retrieval from external servers may be limited by CORS policies. Sankalp AI will analyze public domain metadata for strategy planning.`);
                    content = `[External site context for ${parsedUrl.hostname}. Extracted public domain taxonomy and architectural keywords.]`;
                }

                state.attachedUrls.push({
                    url: urlValue,
                    name: name,
                    content: content
                });
                
                DOM.urlContextInput.value = '';
                renderContextSources();
                updateRagBadgeState();
            } catch (err) {
                alert("Please enter a valid URL (including http:// or https://)!");
            }
        }
    });

    // Generate Plan button
    DOM.generatePlanBtn.addEventListener('click', handlePlanGenerationRequest);

    // Settings Modal triggers
    DOM.settingsBtn.addEventListener('click', () => {
        DOM.geminiApiKeyInput.value = state.apiKey;
        DOM.geminiModelSelect.value = state.selectedModel;
        if (state.plannerMode === 'api') {
            DOM.modeApi.checked = true;
            DOM.modeApiLabel.classList.add('active');
            DOM.modeSimulatedLabel.classList.remove('active');
            DOM.apiKeyGroup.style.display = 'block';
            DOM.modelSelectGroup.style.display = 'block';
        } else {
            DOM.modeSimulated.checked = true;
            DOM.modeSimulatedLabel.classList.add('active');
            DOM.modeApiLabel.classList.remove('active');
            DOM.apiKeyGroup.style.display = 'none';
            DOM.modelSelectGroup.style.display = 'none';
        }
        DOM.settingsModal.classList.add('active');
    });

    // Close settings
    const closeSettings = () => DOM.settingsModal.classList.remove('active');
    DOM.closeSettingsBtn.addEventListener('click', closeSettings);
    DOM.cancelSettingsBtn.addEventListener('click', closeSettings);

    // Save configurations
    DOM.saveSettingsBtn.addEventListener('click', () => {
        const mode = DOM.modeApi.checked ? 'api' : 'simulated';
        const key = DOM.geminiApiKeyInput.value.trim();
        const model = DOM.geminiModelSelect.value;
        
        state.plannerMode = mode;
        state.apiKey = key;
        state.selectedModel = model;
        
        localStorage.setItem('sankalp_planner_mode', mode);
        localStorage.setItem('sankalp_gemini_api_key', key);
        localStorage.setItem('sankalp_gemini_model', model);
        
        updateApiBadge();
        closeSettings();
    });

    // Toggle Settings radios
    DOM.modeSimulated.addEventListener('change', () => {
        DOM.modeSimulatedLabel.classList.add('active');
        DOM.modeApiLabel.classList.remove('active');
        DOM.apiKeyGroup.style.display = 'none';
        DOM.modelSelectGroup.style.display = 'none';
    });

    DOM.modeApi.addEventListener('change', () => {
        DOM.modeApiLabel.classList.add('active');
        DOM.modeSimulatedLabel.classList.remove('active');
        DOM.apiKeyGroup.style.display = 'block';
        DOM.modelSelectGroup.style.display = 'block';
    });

    // Toggle API Key visibility
    DOM.toggleKeyVisibilityBtn.addEventListener('click', () => {
        const type = DOM.geminiApiKeyInput.type === 'password' ? 'text' : 'password';
        DOM.geminiApiKeyInput.type = type;
        const icon = DOM.toggleKeyVisibilityBtn.querySelector('i');
        if (type === 'password') {
            icon.setAttribute('data-lucide', 'eye');
        } else {
            icon.setAttribute('data-lucide', 'eye-off');
        }
        lucide.createIcons();
    });

    // Tab buttons switching
    DOM.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchWorkspaceTab(tabId);
        });
    });

    // Sidebar mini agent tabs clicking
    DOM.miniAgentTabs.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-target-tab');
            if (targetTab === 'tab-response') {
                if (DOM.finalResponseCard) {
                    DOM.finalResponseCard.scrollIntoView({ behavior: 'smooth' });
                    DOM.finalResponseCard.style.borderColor = 'var(--secondary-color)';
                    setTimeout(() => {
                        DOM.finalResponseCard.style.borderColor = 'var(--accent-purple)';
                    }, 1000);
                }
            } else {
                switchWorkspaceTab(targetTab);
            }
        });
    });

    // Plan new goal button
    DOM.planNewGoalBtn.addEventListener('click', resetToGoalCapture);

    // SWOT note creation listeners
    document.querySelectorAll('.add-note-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const quadrant = btn.getAttribute('data-quadrant');
            const noteText = prompt(`Add a new ${quadrant.substring(0, quadrant.length - 1)} detail:`);
            if (noteText && noteText.trim()) {
                state.activePlanData.strategy.swot[quadrant].push(noteText.trim());
                renderStrategyTab();
            }
        });
    });

    // Gantt vs Kanban buttons
    DOM.btnShowGantt.addEventListener('click', () => {
        DOM.btnShowGantt.classList.add('active');
        DOM.btnShowKanban.classList.remove('active');
        DOM.ganttSection.classList.add('active');
        DOM.kanbanSection.classList.remove('active');
    });

    DOM.btnShowKanban.addEventListener('click', () => {
        DOM.btnShowKanban.classList.add('active');
        DOM.btnShowGantt.classList.remove('active');
        DOM.kanbanSection.classList.add('active');
        DOM.ganttSection.classList.remove('active');
        renderKanbanBoard();
    });

    // Export dropdown toggle
    DOM.exportDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.exportMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        DOM.exportMenu.classList.remove('active');
    });

    DOM.exportMdBtn.addEventListener('click', downloadMarkdownFile);
    DOM.exportJsonBtn.addEventListener('click', downloadJsonFile);
}

// --- SWITCH PANEL VIEWS ---
function switchView(viewId) {
    state.activeView = viewId;
    DOM.goalCaptureView.classList.remove('active');
    DOM.pipelineView.classList.remove('active');
    DOM.workspaceView.classList.remove('active');
    
    const activePanel = document.getElementById(viewId);
    activePanel.classList.add('active');
}

// --- SWITCH TABS ---
function switchWorkspaceTab(tabId) {
    state.activeTab = tabId;
    DOM.tabButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    DOM.tabContents.forEach(content => {
        if (content.id === tabId) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Sync mini agent status highlight in sidebar
    DOM.miniAgentTabs.forEach(item => {
        if (item.getAttribute('data-target-tab') === tabId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// --- RESET TO CAPTURE ---
function resetToGoalCapture() {
    state.activePlanData = null;
    DOM.goalInput.value = '';
    DOM.charCount.textContent = '0';
    state.currentGoal = '';
    DOM.presetCards.forEach(c => c.classList.remove('active'));
    if (DOM.finalResponseCard) {
        DOM.finalResponseCard.style.display = 'none';
    }
    switchView('goal-capture-view');
}

// --- LOG CONSOLE PRINTER ---
function printConsoleLog(message, type = 'info') {
    const time = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.innerHTML = `<span class="timestamp">[${time}]</span> ${escapeHTML(message)}`;
    DOM.terminalOutput.appendChild(line);
    DOM.terminalOutput.scrollTop = DOM.terminalOutput.scrollHeight;
}

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- PIPELINE RUNNER ---
// --- INTERACTIVE CONVERSATIONAL INTERCEPTOR ---
function handlePlanGenerationRequest() {
    const goalText = DOM.goalInput.value.trim();
    if (!goalText) {
        showDialog("Hello! I am Sankalp AI, your collaborative multi-agent platform. I turn your goals into verified action blueprints. What goal or project are we working on today?", "greetings");
        return;
    }

    const textLower = goalText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'hola', 'sup', 'yo', 'howdy'];
    const identityQueries = ['who are you', 'whats your name', 'what is your name', 'your name', 'sankalp'];
    const usageQueries = ['how do i use you', 'how to use', 'what do you do', 'what is this', 'help', 'instructions', 'guide', 'tutorial'];
    const chitChatQueries = ['how are you', 'hows it going', 'whats up', 'are you there'];
    
    // Check matchers
    const words = textLower.split(/\s+/);
    const isGreeting = greetings.includes(textLower) || (words.length <= 3 && greetings.includes(words[0]));
    const isIdentity = identityQueries.some(q => textLower.includes(q));
    const isUsage = usageQueries.some(q => textLower.includes(q));
    const isChitChat = chitChatQueries.some(q => textLower.includes(q));

    if (isGreeting) {
        showDialog("Hello! I am Sankalp AI, your collaborative multi-agent platform. I turn your goals into verified action blueprints. What specific business, academic, technical, or personal goal would you like to plan today?", "greetings");
        return;
    }

    if (isIdentity) {
        showDialog("I am Sankalp AI, a team of specialized AI agents working together (Research, Verification, Strategy, and Execution) to turn your project goals into high-fidelity actionable roadmaps.", "greetings");
        return;
    }

    if (isUsage) {
        showDialog("To use Sankalp AI:<br>1. Enter your goal in the text box (e.g. 'Launch a localized coffee shop').<br>2. Upload reference documents (TXT, MD, CSV, PDF, DOCX) or links for custom context.<br>3. Review custom parameters.<br>4. Click 'Formulate Action Plan' to run the multi-agent pipeline!", "greetings");
        return;
    }

    if (isChitChat) {
        showDialog("I am doing great and ready to build blueprints! What goal or project are we planning today?", "greetings");
        return;
    }

    // 2. Detect vagueness
    if (goalText.length < 25) {
        showDialog(`I detected your goal: "<strong>${escapeHTML(goalText)}</strong>" is quite brief. To generate a high-fidelity roadmap, it helps to add details. What is your target audience or primary stack?`, "vagueness");
        return;
    }

    // Clear dialog and proceed
    DOM.conversationalDialog.style.display = 'none';
    startPlannerPipeline();
}

// --- SHOW INTERACTIVE CHAT DIALOG ---
function showDialog(message, type) {
    DOM.dialogBody.innerHTML = `<p>${message}</p>`;
    DOM.dialogFooter.innerHTML = '';
    
    if (type === "greetings") {
        // Offer templates as quick choices
        DOM.presetCards.forEach(card => {
            const btn = document.createElement('button');
            btn.className = 'secondary-btn dialog-btn';
            btn.textContent = card.querySelector('.preset-title').textContent;
            btn.onclick = () => {
                DOM.goalInput.value = card.getAttribute('data-goal');
                state.currentGoal = card.getAttribute('data-goal');
                DOM.charCount.textContent = state.currentGoal.length;
                DOM.conversationalDialog.style.display = 'none';
                classifyAndRenderParameters(state.currentGoal);
                DOM.goalInput.focus();
            };
            DOM.dialogFooter.appendChild(btn);
        });
    } else if (type === "vagueness") {
        const proceedBtn = document.createElement('button');
        proceedBtn.className = 'primary-btn dialog-btn';
        proceedBtn.textContent = "Proceed with Plan anyway";
        proceedBtn.onclick = () => {
            DOM.conversationalDialog.style.display = 'none';
            startPlannerPipeline();
        };
        
        const refineBtn = document.createElement('button');
        refineBtn.className = 'secondary-btn dialog-btn';
        refineBtn.textContent = "Let me add more details";
        refineBtn.onclick = () => {
            DOM.conversationalDialog.style.display = 'none';
            DOM.goalInput.focus();
        };
        
        DOM.dialogFooter.appendChild(proceedBtn);
        DOM.dialogFooter.appendChild(refineBtn);
    }
    
    DOM.conversationalDialog.style.display = 'block';
    lucide.createIcons();
}

// --- DOMAIN CLASSIFIER & PARAMETERS RENDERER ---
function classifyAndRenderParameters(goalText) {
    if (!goalText || goalText.trim().length === 0) {
        DOM.dynamicParamsContainer.style.display = 'none';
        return;
    }
    
    const text = goalText.toLowerCase();
    let category = 'general';
    
    if (text.includes('startup') || text.includes('business') || text.includes('company') || text.includes('launch') || text.includes('market') || text.includes('sales') || text.includes('revenue') || text.includes('product')) {
        category = 'business';
    } else if (text.includes('code') || text.includes('python') || text.includes('program') || text.includes('app') || text.includes('website') || text.includes('database') || text.includes('software') || text.includes('api') || text.includes('technical') || text.includes('dev')) {
        category = 'technical';
    } else if (text.includes('paper') || text.includes('write') || text.includes('research') || text.includes('academic') || text.includes('ethics') || text.includes('study') || text.includes('thesis') || text.includes('citation')) {
        category = 'academic';
    }
    
    state.detectedCategory = category;
    
    // Build parameters grid HTML based on Category
    let html = `
        <div class="param-group">
            <label for="param-timeframe">Target Timeframe</label>
            <select id="param-timeframe">
                <option value="1 month">1 Month (Fast Track)</option>
                <option value="3 months" selected>3 Months (Standard)</option>
                <option value="6 months">6 Months (Comprehensive)</option>
                <option value="12 months">1 Year (Long-term)</option>
            </select>
        </div>
    `;
    
    if (category === 'business') {
        html += `
            <div class="param-group">
                <label for="param-budget">Approximate Budget</label>
                <select id="param-budget">
                    <option value="zero budget">Zero Budget / Bootstrap</option>
                    <option value="low budget" selected>Low Budget (&lt;$500)</option>
                    <option value="medium budget">Medium Budget ($500 - $5k)</option>
                    <option value="enterprise scale">Enterprise Budget ($5k+)</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-industry">Industry Target</label>
                <select id="param-industry">
                    <option value="saas">B2B SaaS / Tech</option>
                    <option value="creator">Creator Economy / Media</option>
                    <option value="local">Local Service / Retail</option>
                    <option value="other" selected>Other / General Niche</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-experience">Experience Level</label>
                <select id="param-experience">
                    <option value="beginner" selected>Beginner / First startup</option>
                    <option value="intermediate">Intermediate / Operator</option>
                    <option value="expert">Expert / Serial Founder</option>
                </select>
            </div>
        `;
    } else if (category === 'technical') {
        html += `
            <div class="param-group">
                <label for="param-platform">Target Platform</label>
                <select id="param-platform">
                    <option value="web" selected>Web App (React/Vite/HTML)</option>
                    <option value="mobile">Mobile App (iOS/Android)</option>
                    <option value="cloud">Cloud Backend / Serverless</option>
                    <option value="desktop">Desktop / Standalone Executable</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-experience">Coding Experience</label>
                <select id="param-experience">
                    <option value="beginner" selected>Beginner / Learning</option>
                    <option value="intermediate">Intermediate / Builder</option>
                    <option value="expert">Expert / Professional Dev</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-focus">Optimization Focus</label>
                <select id="param-focus">
                    <option value="speed" selected>Development Speed</option>
                    <option value="quality">Clean Code & Performance</option>
                    <option value="cost">Minimize Hosting Costs</option>
                </select>
            </div>
        `;
    } else if (category === 'academic') {
        html += `
            <div class="param-group">
                <label for="param-format">Citation Format</label>
                <select id="param-format">
                    <option value="ieee" selected>IEEE Citation Standard</option>
                    <option value="acm">ACM Word/LaTeX standard</option>
                    <option value="apa">APA Citation Style</option>
                    <option value="mla">MLA Formatting Layout</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-scope">Research Scope</label>
                <select id="param-scope">
                    <option value="review" selected>Literature Review Synthesis</option>
                    <option value="empirical">Empirical Study / Data Experiment</option>
                    <option value="case">Case Study & Policy Analysis</option>
                </select>
            </div>
        `;
    } else {
        // General / Career
        html += `
            <div class="param-group">
                <label for="param-experience">Your Starting Experience</label>
                <select id="param-experience">
                    <option value="beginner" selected>Complete Novice</option>
                    <option value="intermediate">Familiar with Basics</option>
                    <option value="expert">Advanced Knowledge</option>
                </select>
            </div>
            <div class="param-group">
                <label for="param-focus">Priority Focus</label>
                <select id="param-focus">
                    <option value="quality" selected>Quality of Learning / Result</option>
                    <option value="speed">Velocity / Fast Checklist</option>
                </select>
            </div>
        `;
    }
    
    DOM.dynamicParamsFields.innerHTML = html;
    DOM.dynamicParamsContainer.style.display = 'block';
}

// --- FILE & DATA CONTEXT UPLOADS HANDLER (RAG) ---
function handleFilesUpload(files) {
    if (!files || files.length === 0) return;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Accept only certain types
        const extension = file.name.split('.').pop().toLowerCase();
        const allowed = ['txt', 'md', 'csv', 'pdf', 'docx', 'xlsx', 'xls', 'pptx'];
        if (!allowed.includes(extension)) {
            alert(`File format .${extension} not supported.`);
            continue;
        }

        // Reading plain text files directly
        if (['txt', 'md', 'csv'].includes(extension)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                state.attachedFiles.push({
                    name: file.name,
                    size: file.size,
                    content: e.target.result
                });
                renderContextSources();
                updateRagBadgeState();
            };
            reader.readAsText(file);
        } else {
            // Simulate binary extraction for PDF, Word, PowerPoint, Excel
            setTimeout(() => {
                const simulatedContext = `[Parsed content metadata from file "${file.name}" (${(file.size / 1024).toFixed(1)} KB): Target timeline: 4 weeks. Key details: optimize codebase dependencies and audit technical parameters.]`;
                state.attachedFiles.push({
                    name: file.name,
                    size: file.size,
                    content: simulatedContext
                });
                renderContextSources();
                updateRagBadgeState();
            }, 300);
        }
    }
}

// --- RENDER SOURCES LIST ---
function renderContextSources() {
    DOM.sourcesList.innerHTML = '';
    
    // Add Files
    state.attachedFiles.forEach((file, idx) => {
        const li = document.createElement('li');
        li.className = 'source-item';
        li.innerHTML = `
            <span class="source-name"><i data-lucide="file" style="width:10px;height:10px;margin-right:4px;"></i>${file.name} (${(file.size / 1024).toFixed(1)} KB)</span>
            <button class="source-remove" onclick="window.removeContextSource('file', ${idx})">&times;</button>
        `;
        DOM.sourcesList.appendChild(li);
    });

    // Add URLs
    state.attachedUrls.forEach((urlObj, idx) => {
        const li = document.createElement('li');
        li.className = 'source-item';
        li.innerHTML = `
            <span class="source-name" title="${urlObj.url}"><i data-lucide="link" style="width:10px;height:10px;margin-right:4px;"></i>${urlObj.name}</span>
            <button class="source-remove" onclick="window.removeContextSource('url', ${idx})">&times;</button>
        `;
        DOM.sourcesList.appendChild(li);
    });
    
    lucide.createIcons();
}

window.removeContextSource = (type, index) => {
    if (type === 'file') {
        state.attachedFiles.splice(index, 1);
    } else {
        state.attachedUrls.splice(index, 1);
    }
    renderContextSources();
    updateRagBadgeState();
};

// --- UPDATE RAG STATUS BADGES ---
function updateRagBadgeState() {
    const hasFiles = state.attachedFiles.length > 0;
    const hasUrls = state.attachedUrls.length > 0;
    const active = hasFiles || hasUrls;
    state.ragActive = active;
    
    const hBadge = DOM.ragStatusBadge;
    const dot = hBadge.querySelector('.status-dot');
    const text = hBadge.querySelector('.status-text');
    
    if (active) {
        dot.style.backgroundColor = 'var(--secondary-color)';
        dot.style.boxShadow = '0 0 8px var(--secondary-color)';
        text.textContent = 'RAG: Active';
    } else {
        dot.style.backgroundColor = 'var(--text-muted)';
        dot.style.boxShadow = 'none';
        text.textContent = 'RAG: Inactive';
    }
}

// --- CONCATENATE ATTACHED TEXTS ---
function compileRAGContext() {
    let contextStr = '';
    if (state.attachedFiles.length > 0) {
        contextStr += "--- UPLOADED FILE CONTENTS ---\n";
        state.attachedFiles.forEach(f => {
            contextStr += `File: ${f.name}\nContent:\n${f.content}\n\n`;
        });
    }
    if (state.attachedUrls.length > 0) {
        contextStr += "--- REFERENCED URL LINKS ---\n";
        state.attachedUrls.forEach(urlObj => {
            contextStr += `URL Link: ${urlObj.url}\nName: ${urlObj.name}\nContent:\n${urlObj.content}\n\n`;
        });
    }
    return contextStr;
}

// --- PIPELINE RUNNER (Gather Dynamic Parameters & Execute) ---
async function startPlannerPipeline() {
    const goalText = DOM.goalInput.value.trim();
    if (!goalText) {
        alert("Please enter or select a goal first!");
        return;
    }
    
    // Save capture parameters
    state.currentGoal = goalText;
    
    // Read dynamic params values from DOM
    const timeframeVal = document.getElementById('param-timeframe')?.value || '3 months';
    const budgetVal = document.getElementById('param-budget')?.value || '';
    const experienceVal = document.getElementById('param-experience')?.value || '';
    const focusVal = document.getElementById('param-focus')?.value || '';
    const industryVal = document.getElementById('param-industry')?.value || '';
    const platformVal = document.getElementById('param-platform')?.value || '';
    const formatVal = document.getElementById('param-format')?.value || '';
    const scopeVal = document.getElementById('param-scope')?.value || '';

    state.parameters = {
        category: state.detectedCategory,
        timeframe: timeframeVal,
        budget: budgetVal,
        experience: experienceVal,
        focus: focusVal,
        industry: industryVal,
        platform: platformVal,
        format: formatVal,
        scope: scopeVal
    };

    // Calculate Confidence rating
    let confidenceRating = "High";
    if (state.currentGoal.length < 40) {
        confidenceRating = "Medium";
    }
    if (state.attachedFiles.length === 0 && state.attachedUrls.length === 0) {
        // Less context available
        if (state.currentGoal.length < 30) {
            confidenceRating = "Needs More Information";
        } else {
            confidenceRating = "Medium";
        }
    }
    state.confidence = confidenceRating;

    // Transition view
    switchView('pipeline-view');
    DOM.terminalOutput.innerHTML = '';
    
    // Reset Agent Cards Visuals
    Object.keys(DOM.agentCards).forEach(key => {
        DOM.agentCards[key].className = 'agent-progress-card';
        DOM.agentCards[key].querySelector('.agent-status-label').textContent = 'Idle';
        DOM.agentCards[key].querySelector('.agent-progress-bar').style.width = '0%';
    });

    const ragContextText = compileRAGContext();

    printConsoleLog("Sankalp Multi-Agent System: Coordinating specialist pipeline...", "system");
    printConsoleLog(`Detected Domain: ${state.detectedCategory.toUpperCase()} | Timeframe: ${state.parameters.timeframe}`, "info");
    if (state.ragActive) {
        printConsoleLog(`RAG Engine: Active. Attached Context files detected: ${state.attachedFiles.length} files, ${state.attachedUrls.length} URLs.`, "success");
    }

    try {
        let compiledPlanData = null;

        if (state.plannerMode === 'api') {
            if (!state.apiKey) {
                throw new Error("Live Gemini API mode is active but no API key is set. Go to Settings to enter a key.");
            }
            printConsoleLog("Sankalp System: Querying Gemini API for structured action plan...", "system");
            
            // Execute fetching in background with RAG context
            compiledPlanData = await generateWithGemini(state.currentGoal, state.parameters, state.apiKey, state.selectedModel, ragContextText);
            printConsoleLog("System: API response received. Parsing payload...", "success");
        } else {
            // Simulated local mode
            printConsoleLog("Sankalp System: Loading simulation engine...", "system");
            
            // Generate procedurally customized plan matching the dynamic category parameters
            compiledPlanData = generateProceduralMock(state.currentGoal, {
                timeframe: timeframeVal,
                budget: budgetVal || focusVal,
                experience: experienceVal,
                focus: focusVal || scopeVal,
                category: state.detectedCategory,
                confidence: state.confidence,
                ragActive: state.ragActive,
                attachmentCount: state.attachedFiles.length + state.attachedUrls.length,
                attachedFiles: state.attachedFiles,
                attachedUrls: state.attachedUrls
            });
            
            // Artificial delay to simulate processing when offline
            await new Promise(resolve => setTimeout(resolve, 800));
        }

        // Run visual agents sequencer on the fetched payload
        await executeAgentsSequentially(compiledPlanData);

        // Save active data
        state.activePlanData = compiledPlanData;
        
        // Render workspace tabs
        renderWorkspace();
        
        // Transition to workspace
        setTimeout(() => {
            switchView('workspace-view');
            switchWorkspaceTab('tab-research');
        }, 800);

    } catch (err) {
        printConsoleLog(`[ERROR] Orchard orchestration failed: ${err.message}`, "danger");
        console.error(err);
        
        // Add a back button to terminal
        const backBtn = document.createElement('button');
        backBtn.className = 'secondary-btn';
        backBtn.style.marginTop = '12px';
        backBtn.textContent = 'Go Back to Edit Goal';
        backBtn.onclick = () => resetToGoalCapture();
        DOM.terminalOutput.appendChild(backBtn);
    }
}

// --- SEQUENTIAL AGENTS EXECUTION ---
async function executeAgentsSequentially(planData) {
    const delayMs = state.plannerMode === 'api' ? 200 : 500; // Fast-track logs in API mode since fetch is complete

    // 1. Research Agent
    await runAgentStep('research', planData, delayMs);

    // 2. Verification Agent
    await runAgentStep('verification', planData, delayMs);

    // 3. Strategy Agent
    await runAgentStep('strategy', planData, delayMs);

    // 4. Execution Agent
    await runAgentStep('execution', planData, delayMs);
    
    printConsoleLog("Sankalp System: Action plan reconciled. Finalizing Workspace components...", "success");
}

async function runAgentStep(agentKey, planData, delayMs) {
    const card = DOM.agentCards[agentKey];
    card.classList.add('active');
    card.querySelector('.agent-status-label').textContent = 'Thinking...';
    
    // Fill progress bar gradually
    const progressBar = card.querySelector('.agent-progress-bar');
    let width = 0;
    const interval = setInterval(() => {
        width += 8;
        if (width <= 90) {
            progressBar.style.width = `${width}%`;
        }
    }, 150);

    // Execute agent function
    const agentInstance = agents[agentKey];
    const logCallback = (msg, type) => printConsoleLog(msg, type);
    await agentInstance.execute(state.currentGoal, planData, logCallback, delayMs);
    
    clearInterval(interval);
    progressBar.style.width = '100%';
    card.classList.remove('active');
    card.classList.add('completed');
    card.querySelector('.agent-status-label').textContent = 'Completed';

    // Log detailed data-passing context to show real data transmission
    if (agentKey === 'research') {
        const insightsCount = planData.research.insights.length;
        const compCount = planData.research.competitors.length;
        printConsoleLog(`Research Hub: Generated user persona '${planData.research.persona.name}' (${planData.research.persona.role}), compiled ${insightsCount} insights, and audited ${compCount} competitors. Handoff: Transferring research dataset to Verification Agent...`, "success");
    } else if (agentKey === 'verification') {
        const passCount = planData.verification.assumptions.filter(a => a.status === 'passed').length;
        const riskCount = planData.verification.risks.length;
        printConsoleLog(`Feasibility Hub: Audited assumptions (${passCount} verified) and registered ${riskCount} risk mitigations. Grade assigned: ${planData.verification.grade}. Handoff: Forwarding risk parameters to Strategy Agent...`, "success");
    } else if (agentKey === 'strategy') {
        const phaseCount = planData.strategy.phases.length;
        printConsoleLog(`Strategy Hub: SWOT quadrants aligned and structured into ${phaseCount} logical roadmap phases. Handoff: Directing roadmap milestones to Execution Agent...`, "success");
    } else if (agentKey === 'execution') {
        const taskCount = planData.execution.tasks.length;
        printConsoleLog(`Execution Hub: Assembled Gantt scheduler and populated ${taskCount} Kanban backlog items. Handoff: Finalizing custom AI response summary.`, "success");
    }
}

// ==========================================================================
// RENDER WORKSPACE HUB
// ==========================================================================
function renderWorkspace() {
    const plan = state.activePlanData;
    
    // Sidebar details
    DOM.sidebarGoalTitle.textContent = state.currentGoal.length > 45 ? state.currentGoal.substring(0, 42) + '...' : state.currentGoal;
    DOM.sidebarMetaTime.textContent = state.parameters.timeframe;
    
    // Conditional display of dynamic inputs in sidebar metadata
    if (state.parameters.budget) {
        DOM.sidebarMetaBudgetItem.style.display = 'flex';
        DOM.sidebarMetaBudget.textContent = state.parameters.budget;
    } else {
        DOM.sidebarMetaBudgetItem.style.display = 'none';
    }

    if (state.parameters.experience) {
        DOM.sidebarMetaExperienceItem.style.display = 'flex';
        DOM.sidebarMetaExperience.textContent = state.parameters.experience;
    } else {
        DOM.sidebarMetaExperienceItem.style.display = 'none';
    }

    // Set Confidence badge
    const confVal = plan.confidence || state.confidence || "High";
    DOM.sidebarConfidenceBadge.textContent = confVal;
    if (confVal === "High") {
        DOM.sidebarConfidenceBadge.style.color = "var(--accent-emerald)";
    } else if (confVal === "Medium") {
        DOM.sidebarConfidenceBadge.style.color = "var(--accent-amber)";
    } else {
        DOM.sidebarConfidenceBadge.style.color = "var(--accent-rose)";
    }

    // Set RAG Source Badge
    if (state.ragActive) {
        const count = state.attachedFiles.length + state.attachedUrls.length;
        DOM.sidebarRagBadge.textContent = `Active (${count} source${count > 1 ? 's' : ''})`;
        DOM.sidebarRagBadge.style.color = "var(--secondary-color)";
    } else {
        DOM.sidebarRagBadge.textContent = "Inactive";
        DOM.sidebarRagBadge.style.color = "var(--text-muted)";
    }
    
    // Credibility Score in sidebar
    DOM.sidebarCredibilityScore.textContent = plan.verification.grade === 'A' ? '95%' : plan.verification.grade === 'A-' ? '90%' : plan.verification.grade === 'B+' ? '85%' : '80%';
    
    // Render each tab and response card
    renderFinalResponseText();
    renderResearchTab();
    renderVerificationTab();
    renderStrategyTab();
    
    // Trigger Progress calculations & Gantt/Kanban layout
    recalculateProgress();
    renderGanttTimeline();
}

// --- RENDER FINAL AI RESPONSE CARD ---
function renderFinalResponseText() {
    const plan = state.activePlanData;
    if (DOM.finalResponseCard && DOM.finalResponseText) {
        DOM.finalResponseCard.style.display = 'block';
        DOM.finalResponseText.innerHTML = parseMarkdownToHTML(plan.assistantResponse);
    }
}

function parseMarkdownToHTML(markdownText) {
    if (!markdownText) return "";
    let html = markdownText
        // Replace Headers
        .replace(/^### (.*$)/gim, '<h4 style="margin-top: 16px; margin-bottom: 8px; color: var(--accent-purple); font-weight: 600; font-family: Outfit, sans-serif;">$1</h4>')
        .replace(/^## (.*$)/gim, '<h3 style="margin-top: 20px; margin-bottom: 10px; color: var(--primary-color); font-weight: 700; font-family: Outfit, sans-serif; border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">$1</h3>')
        .replace(/^# (.*$)/gim, '<h2 style="margin-top: 24px; margin-bottom: 12px; color: var(--text-primary); font-weight: 800; font-family: Outfit, sans-serif;">$1</h2>')
        // Replace Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 600;">$1</strong>')
        // Replace Bullet points
        .replace(/^\s*-\s*(.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 6px; list-style-type: disc;">$1</li>')
        // Replace line breaks (double)
        .replace(/\n\n/g, '<p style="margin-bottom: 12px;"></p>');

    return html;
}

// --- RENDER RESEARCH HUB ---
function renderResearchTab() {
    const res = state.activePlanData.research;
    
    // 1. Insights
    DOM.researchInsightsContainer.innerHTML = res.insights.map((ins, idx) => `
        <div class="insight-item">
            <div class="insight-num">${idx + 1}</div>
            <div class="insight-text">
                <h4>${ins.title}</h4>
                <p>${ins.text}</p>
            </div>
        </div>
    `).join('');

    // 2. Persona Card
    DOM.researchPersonaContainer.innerHTML = `
        <div class="persona-header">
            <div class="persona-avatar">${res.persona.name.charAt(0)}</div>
            <div class="persona-meta">
                <h4>${res.persona.name}</h4>
                <span>${res.persona.role} (Age ${res.persona.age})</span>
            </div>
        </div>
        <div class="persona-details">
            <p><strong>Goal:</strong> ${res.persona.goals}</p>
            <p><strong>Frustration:</strong> ${res.persona.frustrations}</p>
            <p style="font-style: italic; color: var(--text-primary); margin-top: 8px;">"${res.persona.quote}"</p>
        </div>
    `;

    // 3. Competitors table
    DOM.researchCompetitorBody.innerHTML = res.competitors.map(c => `
        <tr>
            <td><strong>${c.name}</strong></td>
            <td>${c.strength}</td>
            <td>${c.weakness}</td>
            <td class="sankalp-adv-cell">${c.advantage}</td>
        </tr>
    `).join('');
}

// --- RENDER VERIFICATION TAB ---
function renderVerificationTab() {
    const ver = state.activePlanData.verification;
    
    DOM.verificationGrade.textContent = ver.grade;
    DOM.verificationAssumptionsCount.textContent = ver.assumptions.length;
    DOM.verificationRisksCount.textContent = ver.risks.length;
    
    // Assumptions
    DOM.verificationAssumptionsList.innerHTML = ver.assumptions.map(item => `
        <div class="assumption-item">
            <span class="assumption-text">${item.text}</span>
            <span class="assumption-status ${item.status}">${item.status === 'passed' ? 'Verified' : 'Risk Flagged'}</span>
        </div>
    `).join('');
    
    // Risk Registry
    DOM.verificationRiskRegistry.innerHTML = ver.risks.map(risk => `
        <div class="risk-item severity-${risk.severity}">
            <div class="risk-header">
                <span class="risk-title">${risk.title}</span>
                <span class="risk-severity-badge">${risk.severity} risk</span>
            </div>
            <p class="risk-description">${risk.desc}</p>
            <div class="risk-mitigation">
                <strong>Mitigation:</strong> ${risk.mitigation}
            </div>
        </div>
    `).join('');
}

// --- RENDER STRATEGY TAB ---
function renderStrategyTab() {
    const strat = state.activePlanData.strategy;
    
    // Renders SWOT Quadrants
    const renderQuadrant = (container, list, quadrantKey) => {
        container.innerHTML = list.map((note, idx) => `
            <li class="swot-note" data-idx="${idx}">
                <span class="swot-note-text">${note}</span>
                <button class="swot-note-delete" onclick="window.deleteSwotNote('${quadrantKey}', ${idx})">&times;</button>
            </li>
        `).join('');
    };

    renderQuadrant(DOM.swotStrengths, strat.swot.strengths, 'strengths');
    renderQuadrant(DOM.swotWeaknesses, strat.swot.weaknesses, 'weaknesses');
    renderQuadrant(DOM.swotOpportunities, strat.swot.opportunities, 'opportunities');
    renderQuadrant(DOM.swotThreats, strat.swot.threats, 'threats');
    
    // Strategic Phasing Timeline
    DOM.strategyPhasesContainer.innerHTML = strat.phases.map((phase, idx) => `
        <div class="phase-node phase-${idx + 1}">
            <div class="phase-number">${phase.number}</div>
            <h4>${phase.title}</h4>
            <p>${phase.desc}</p>
        </div>
    `).join('');
}

// Window hook to delete SWOT notes
window.deleteSwotNote = (quadrant, index) => {
    state.activePlanData.strategy.swot[quadrant].splice(index, 1);
    renderStrategyTab();
};

// --- RENDER GANTT ROADMAP ---
function renderGanttTimeline() {
    const tasks = state.activePlanData.execution.tasks;
    
    // Build Months timeline columns based on parameters.timeframe
    let monthCount = 3;
    if (state.parameters.timeframe.includes("1 month")) monthCount = 1;
    else if (state.parameters.timeframe.includes("6 months")) monthCount = 6;
    else if (state.parameters.timeframe.includes("12 months")) monthCount = 12;
    
    let headerHTML = '';
    for (let m = 1; m <= monthCount; m++) {
        headerHTML += `<span>Month ${m}</span>`;
    }
    DOM.ganttHeaders.innerHTML = headerHTML;
    
    // Render task rows
    DOM.ganttRows.innerHTML = tasks.map(task => {
        // Calculate relative coordinates
        // Let's assume maximum width of timeline grid container is 100%
        // Max startMonth is monthCount, max duration is monthCount
        const leftPercent = (task.startMonth / monthCount) * 100;
        const widthPercent = (task.durationMonths / monthCount) * 100;
        
        // Ensure bounds
        const left = Math.min(Math.max(leftPercent, 0), 95);
        const width = Math.min(widthPercent, 100 - left);
        
        return `
            <div class="gantt-row">
                <div class="gantt-row-task-name">${task.title}</div>
                <div class="gantt-track">
                    <div class="gantt-bar-wrapper" style="left: ${left}%; width: ${width}%;">
                        <div class="gantt-bar">
                            <span class="gantt-bar-label">Phase ${task.phase}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// --- RENDER KANBAN BOARD ---
function renderKanbanBoard() {
    const tasks = state.activePlanData.execution.tasks;
    
    const filterAndRenderColumn = (container, listStatus) => {
        const filteredTasks = tasks.filter(t => t.status === listStatus);
        container.innerHTML = filteredTasks.map(task => `
            <div class="kanban-card">
                <div class="kanban-card-title">${task.title}</div>
                <div class="kanban-card-meta">
                    <span class="kanban-card-phase-badge">Phase ${task.phase}</span>
                    <div class="kanban-card-actions">
                        ${listStatus !== 'todo' ? `<button class="kanban-card-btn" title="Move Left" onclick="window.moveKanbanTask('${task.id}', 'left')"><i data-lucide="arrow-left" style="width:12px;height:12px;"></i></button>` : ''}
                        ${listStatus !== 'done' ? `<button class="kanban-card-btn" title="Move Right" onclick="window.moveKanbanTask('${task.id}', 'right')"><i data-lucide="arrow-right" style="width:12px;height:12px;"></i></button>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    };

    filterAndRenderColumn(DOM.kanbanListTodo, 'todo');
    filterAndRenderColumn(DOM.kanbanListInprogress, 'inprogress');
    filterAndRenderColumn(DOM.kanbanListDone, 'done');
    
    // Update count labels
    DOM.countTodo.textContent = tasks.filter(t => t.status === 'todo').length;
    DOM.countInprogress.textContent = tasks.filter(t => t.status === 'inprogress').length;
    DOM.countDone.textContent = tasks.filter(t => t.status === 'done').length;
    
    lucide.createIcons();
}

// Window hook to move Kanban cards
window.moveKanbanTask = (taskId, direction) => {
    const tasks = state.activePlanData.execution.tasks;
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const stages = ['todo', 'inprogress', 'done'];
    const currentIdx = stages.indexOf(task.status);
    
    if (direction === 'left' && currentIdx > 0) {
        task.status = stages[currentIdx - 1];
    } else if (direction === 'right' && currentIdx < 2) {
        task.status = stages[currentIdx + 1];
    }
    
    renderKanbanBoard();
    recalculateProgress();
};

// --- RECALCULATE ROADMAP PROGRESS ---
function recalculateProgress() {
    const tasks = state.activePlanData.execution.tasks;
    if (!tasks.length) return;
    
    const doneCount = tasks.filter(t => t.status === 'done').length;
    const progressPercent = Math.round((doneCount / tasks.length) * 100);
    
    DOM.sidebarProgressFill.style.width = `${progressPercent}%`;
    DOM.progressPercentageVal.textContent = `${progressPercent}%`;
}

// ==========================================================================
// EXPORT BLUEPRINT FILES
// ==========================================================================
function compileMarkdownBlueprint() {
    const plan = state.activePlanData;
    const parameters = state.parameters;
    
    let md = `# Sankalp AI - Execution Blueprint\n`;
    md += `**Goal:** ${state.currentGoal}\n`;
    md += `**Timeframe:** ${parameters.timeframe} | **Budget:** ${parameters.budget} | **Experience:** ${parameters.experience} | **Focus:** ${parameters.focus}\n`;
    md += `**Feasibility Grade:** ${plan.verification.grade} | **Readiness Score:** ${DOM.progressPercentageVal.textContent}\n\n`;
    md += `*Generated on ${new Date().toLocaleDateString()}*\n\n`;
    
    md += `## 1. Research & Synthesis Findings\n`;
    plan.research.insights.forEach((ins, idx) => {
        md += `### Insight ${idx + 1}: ${ins.title}\n${ins.text}\n\n`;
    });
    
    md += `### Target User Profile\n`;
    md += `- **Name:** ${plan.research.persona.name}\n`;
    md += `- **Role:** ${plan.research.persona.role} (Age ${plan.research.persona.age})\n`;
    md += `- **Core Goal:** ${plan.research.persona.goals}\n`;
    md += `- **Pain Point:** ${plan.research.persona.frustrations}\n`;
    md += `> "${plan.research.persona.quote}"\n\n`;

    md += `### Competitor & Alternative Audits\n`;
    md += `| Alternative | Strength | Weakness | Sankalp Advantage |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    plan.research.competitors.forEach(c => {
        md += `| ${c.name} | ${c.strength} | ${c.weakness} | ${c.advantage} |\n`;
    });
    md += `\n`;
    
    md += `## 2. Risk & Feasibility Audit\n`;
    md += `### Key Assumptions\n`;
    plan.verification.assumptions.forEach(a => {
        md += `- [${a.status === 'passed' ? 'x' : ' '}] ${a.text} (${a.status === 'passed' ? 'Verified' : 'Flagged Risk'})\n`;
    });
    md += `\n`;

    md += `### Risk Registry & Mitigations\n`;
    plan.verification.risks.forEach(r => {
        md += `#### - [${r.severity.toUpperCase()} RISK] ${r.title}\n`;
        md += `  - **Description:** ${r.desc}\n`;
        md += `  - **Mitigation Action:** ${r.mitigation}\n\n`;
    });

    md += `## 3. Strategic Alignment Map\n`;
    md += `### SWOT Analysis\n`;
    md += `#### Strengths\n`;
    plan.strategy.swot.strengths.forEach(s => md += `- ${s}\n`);
    md += `\n#### Weaknesses\n`;
    plan.strategy.swot.weaknesses.forEach(w => md += `- ${w}\n`);
    md += `\n#### Opportunities\n`;
    plan.strategy.swot.opportunities.forEach(o => md += `- ${o}\n`);
    md += `\n#### Threats\n`;
    plan.strategy.swot.threats.forEach(t => md += `- ${t}\n`);
    md += `\n`;

    md += `### Strategic Roadmap Phasing\n`;
    plan.strategy.phases.forEach(p => {
        md += `### ${p.number}: ${p.title}\n${p.desc}\n\n`;
    });

    md += `## 4. Operational Action Steps\n`;
    md += `| Task Title | Phase | Gantt Timing (Start / Length) | Current Status |\n`;
    md += `| :--- | :---: | :---: | :--- |\n`;
    plan.execution.tasks.forEach(t => {
        md += `| ${t.title} | ${t.phase} | Month ${t.startMonth.toFixed(1)} (+${t.durationMonths.toFixed(1)}m) | ${t.status.toUpperCase()} |\n`;
    });

    return md;
}

function downloadMarkdownFile() {
    try {
        const mdText = compileMarkdownBlueprint();
        const blob = new Blob([mdText], { type: 'text/markdown;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `sankalp-blueprint-${state.currentGoal.substring(0, 15).replace(/\s+/g, '-').toLowerCase()}.md`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.error("Markdown download failed:", e);
        alert("Failed to export Markdown blueprint.");
    }
}

function downloadJsonFile() {
    try {
        const fullPayload = {
            goal: state.currentGoal,
            parameters: state.parameters,
            compiledPlan: state.activePlanData,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(fullPayload, null, 2)], { type: 'application/json;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `sankalp-blueprint-${state.currentGoal.substring(0, 15).replace(/\s+/g, '-').toLowerCase()}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.error("JSON download failed:", e);
        alert("Failed to export JSON blueprint.");
    }
}
