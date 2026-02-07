// Дәрігерлер парақшасы үшін AI консультант - Толық нұсқа

class DoctorAIConsultant {
    constructor(doctorName, specialization, whatsappNumber) {
        this.doctorName = doctorName;
        this.specialization = specialization;
        this.whatsappNumber = whatsappNumber;
        this.chatHistory = [];
        this.currentLanguage = 'en';
        
        // Тілдер бойынша жауаптар
        this.responses = {
            'en': this.getEnglishResponses(),
            'ru': this.getRussianResponses(),
            'kk': this.getKazakhResponses()
        };
        
        // Медициналық білім базасы
        this.knowledgeBase = this.createKnowledgeBase();
    }
    
    // Ағылшын тіліндегі жауаптар
    getEnglishResponses() {
        return {
            welcome: `Hello! I'm your AI health assistant for Dr. ${this.doctorName}. I can help you with symptom analysis and connect you directly with the doctor via WhatsApp. What symptoms are you experiencing?`,
            emergency: '🚨 **EMERGENCY ALERT:** Your symptoms require immediate medical attention. Please call emergency services at **103** or go to the nearest hospital immediately.',
            thanks: 'Thank you for describing your symptoms. Based on your input, I recommend the following:',
            whatsappPrompt: 'Would you like me to connect you directly with Dr. {doctor} via WhatsApp for immediate consultation?',
            generalAdvice: 'For proper diagnosis and treatment, please consult with a medical professional. My advice is for informational purposes only.'
        };
    }
    
    // Орыс тіліндегі жауаптар
    getRussianResponses() {
        return {
            welcome: `Здравствуйте! Я ваш ИИ-помощник по здоровью для доктора ${this.doctorName}. Я могу помочь с анализом симптомов и связать вас напрямую с врачом через WhatsApp. Какие симптомы вы испытываете?`,
            emergency: '🚨 **СРОЧНАЯ ПОМОЩЬ:** Ваши симптомы требуют немедленного медицинского вмешательства. Пожалуйста, позвоните в скорую помощь по номеру **103** или немедленно обратитесь в ближайшую больницу.',
            thanks: 'Спасибо за описание ваших симптомов. На основе ваших данных, я рекомендую следующее:',
            whatsappPrompt: 'Хотите, чтобы я связал вас напрямую с доктором {doctor} через WhatsApp для немедленной консультации?',
            generalAdvice: 'Для точной диагностики и лечения, пожалуйста, проконсультируйтесь с медицинским специалистом. Мои рекомендации носят информационный характер.'
        };
    }
    
    // Қазақ тіліндегі жауаптар
    getKazakhResponses() {
        return {
            welcome: `Сәлеметсіз бе! Мен сіздің денсаулығыңызға көмектесетін AI көмекшісімін, дәрігер ${this.doctorName} үшін. Мен симптомдарды талдауға көмектесе аламын және сізді дәрігермен WhatsApp арқылы тікелей байланыстыра аламын. Қандай симптомдар байқалады?`,
            emergency: '🚨 **ЖЕДЕЛ КӨМЕК:** Сіздің симптомдарыңыз жедел медициналық көмекті қажет етеді. Өтінеміз, жедел жәрдемге **103** нөміріне қоңырау шалыңыз немесе жақын ауруханаға бараңыз.',
            thanks: 'Симптомдарыңызды сипаттағаныңыз үшін рахмет. Сіздің деректеріңізге сүйене отырып, мен келесіні ұсынамын:',
            whatsappPrompt: 'Сізді дәрігер {doctor} мен WhatsApp арқылы тікелей байланыстыруымды қалайсыз ба жедел консультация алу үшін?',
            generalAdvice: 'Дәл диагноз және емдеу үшін медициналық маманмен кеңесіңіз. Менің ұсыныстарым ақпараттық сипатта ғана.'
        };
    }
    
    // Білім базасын жасау
    createKnowledgeBase() {
        return {
            // Кардиология
            'cardiology': {
                symptoms: {
                    'chest pain': {
                        severity: 'high',
                        advice: 'Chest pain can indicate serious heart conditions. Avoid physical activity and seek immediate medical attention.',
                        tests: ['ECG', 'Blood Tests', 'Echocardiogram'],
                        urgency: 'immediate'
                    },
                    'palpitations': {
                        severity: 'medium',
                        advice: 'Heart palpitations may be caused by stress, caffeine, or underlying conditions. Monitor your symptoms.',
                        tests: ['Holter Monitor', 'ECG', 'Thyroid Tests'],
                        urgency: 'soon'
                    },
                    'shortness of breath': {
                        severity: 'high',
                        advice: 'Difficulty breathing with cardiac symptoms requires evaluation. Sit upright and try to breathe slowly.',
                        tests: ['Chest X-ray', 'Pulmonary Function Tests', 'Echocardiogram'],
                        urgency: 'immediate'
                    }
                },
                generalAdvice: 'Cardiac symptoms should never be ignored. Regular check-ups and healthy lifestyle are essential for heart health.'
            },
            
            // Неврология
            'neurology': {
                symptoms: {
                    'headache': {
                        severity: 'low',
                        advice: 'Persistent headaches should be evaluated. Keep a symptom diary and note triggers.',
                        tests: ['MRI', 'CT Scan', 'Blood Pressure Monitoring'],
                        urgency: 'soon'
                    },
                    'dizziness': {
                        severity: 'medium',
                        advice: 'Neurological dizziness requires evaluation. Move slowly when changing positions.',
                        tests: ['Neurological Exam', 'MRI Brain', 'Vestibular Tests'],
                        urgency: 'soon'
                    },
                    'numbness': {
                        severity: 'high',
                        advice: 'Sudden numbness, especially one-sided, requires urgent evaluation.',
                        tests: ['EMG', 'Nerve Conduction Studies', 'MRI Spine'],
                        urgency: 'immediate'
                    }
                },
                generalAdvice: 'Neurological symptoms can indicate various conditions. Early diagnosis is crucial for effective treatment.'
            },
            
            // Анестезиология
            'anesthesiology': {
                symptoms: {
                    'surgery preparation': {
                        severity: 'low',
                        advice: 'Proper pre-operative assessment is essential. Share all medical history and medications.',
                        tests: ['Pre-operative Blood Tests', 'ECG', 'Chest X-ray'],
                        urgency: 'planned'
                    },
                    'pain management': {
                        severity: 'medium',
                        advice: 'Effective pain control improves recovery. Discuss options with your anesthesiologist.',
                        tests: ['Pain Assessment', 'Medical History Review'],
                        urgency: 'soon'
                    }
                },
                generalAdvice: 'Anesthesia safety depends on complete medical disclosure and proper preparation.'
            },
            
            // Нейрохирургия
            'neurosurgery': {
                symptoms: {
                    'severe headache': {
                        severity: 'high',
                        advice: 'Sudden severe headache requires immediate evaluation. Go to emergency if accompanied by other symptoms.',
                        tests: ['CT Scan', 'MRI Brain', 'Lumbar Puncture'],
                        urgency: 'immediate'
                    },
                    'vision problems': {
                        severity: 'high',
                        advice: 'Neurological vision changes should be assessed promptly.',
                        tests: ['Visual Field Test', 'MRI Brain', 'Ophthalmology Consult'],
                        urgency: 'immediate'
                    }
                },
                generalAdvice: 'Neurosurgical conditions often require urgent attention. Do not delay seeking medical help.'
            }
        };
    }
    
    // Тілді өзгерту
    setLanguage(lang) {
        if (this.responses[lang]) {
            this.currentLanguage = lang;
            return true;
        }
        return false;
    }
    
    // Жауап алу
    getResponse(key, replacements = {}) {
        let response = this.responses[this.currentLanguage][key] || this.responses['en'][key];
        
        // Ауыстыруларды енгізу
        for (const [placeholder, value] of Object.entries(replacements)) {
            response = response.replace(`{${placeholder}}`, value);
        }
        
        return response;
    }
    
    // Симптомдарды талдау
    analyzeSymptoms(userInput) {
        const input = userInput.toLowerCase();
        const specialization = this.specialization.toLowerCase();
        const knowledge = this.knowledgeBase[specialization];
        
        if (!knowledge) {
            return this.getGeneralAnalysis(input);
        }
        
        // Симптомдарды анықтау
        const detectedSymptoms = [];
        let highestSeverity = 'low';
        let advice = '';
        const recommendedTests = new Set();
        let urgency = 'soon';
        
        // Әр симптомды тексеру
        for (const [symptom, data] of Object.entries(knowledge.symptoms)) {
            if (input.includes(symptom)) {
                detectedSymptoms.push({
                    symptom: symptom,
                    severity: data.severity,
                    advice: data.advice
                });
                
                // Ең жоғары қауіптілік деңгейін анықтау
                if (this.getSeverityLevel(data.severity) > this.getSeverityLevel(highestSeverity)) {
                    highestSeverity = data.severity;
                    urgency = data.urgency;
                }
                
                // Кеңес қосу
                advice += data.advice + ' ';
                
                // Тесттерді қосу
                data.tests.forEach(test => recommendedTests.add(test));
            }
        }
        
        // Жалпы талдау
        if (detectedSymptoms.length > 0) {
            return {
                success: true,
                symptoms: detectedSymptoms,
                advice: advice || knowledge.generalAdvice,
                severity: highestSeverity,
                urgency: urgency,
                tests: Array.from(recommendedTests),
                needsWhatsapp: highestSeverity === 'high',
                whatsappLink: this.generateWhatsAppLink(userInput),
                doctor: this.doctorName,
                specialization: this.specialization
            };
        }
        
        return this.getGeneralAnalysis(input);
    }
    
    // Жалпы талдау
    getGeneralAnalysis(input) {
        const emergencyKeywords = [
            'chest pain', 'heart attack', 'stroke', 'unconscious',
            'difficulty breathing', 'severe bleeding', 'can\'t breathe',
            'broken bone', 'severe burn', 'poisoning'
        ];
        
        const isEmergency = emergencyKeywords.some(keyword => input.includes(keyword));
        
        return {
            success: false,
            symptoms: [],
            advice: isEmergency ? 
                this.getResponse('emergency') : 
                this.getResponse('generalAdvice'),
            severity: isEmergency ? 'high' : 'low',
            urgency: isEmergency ? 'immediate' : 'soon',
            tests: [],
            needsWhatsapp: isEmergency,
            whatsappLink: this.generateWhatsAppLink(input),
            doctor: this.doctorName,
            specialization: this.specialization
        };
    }
    
    // Қауіптілік деңгейін сандық мәнге айналдыру
    getSeverityLevel(severity) {
        const levels = { 'low': 1, 'medium': 2, 'high': 3 };
        return levels[severity] || 1;
    }
    
    // WhatsApp сілтемесін жасау
    generateWhatsAppLink(userMessage = '') {
        const baseMessage = `Hello Dr. ${this.doctorName}, I need consultation. Symptoms: ${userMessage.substring(0, 100)}`;
        const encodedMessage = encodeURIComponent(baseMessage);
        return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    }
    
    // Чат тарихын сақтау
    addToHistory(message, isUser = true, response = null) {
        this.chatHistory.push({
            id: Date.now(),
            message: message,
            isUser: isUser,
            response: response,
            timestamp: new Date().toISOString(),
            language: this.currentLanguage
        });
        
        // Тарихты 100 хабарламаға дейін шектеу
        if (this.chatHistory.length > 100) {
            this.chatHistory = this.chatHistory.slice(-100);
        }
        
        // LocalStorage-ке сақтау (егер қолжетімді болса)
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem(`aiChat_${this.doctorName}`, JSON.stringify(this.chatHistory));
            } catch (e) {
                console.warn('Chat history could not be saved:', e);
            }
        }
    }
    
    // Чат тарихын жүктеу
    loadHistory() {
        if (typeof localStorage !== 'undefined') {
            try {
                const saved = localStorage.getItem(`aiChat_${this.doctorName}`);
                if (saved) {
                    this.chatHistory = JSON.parse(saved);
                }
            } catch (e) {
                console.warn('Chat history could not be loaded:', e);
            }
        }
        return this.chatHistory;
    }
    
    // Тарихты тазарту
    clearHistory() {
        this.chatHistory = [];
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(`aiChat_${this.doctorName}`);
        }
    }
    
    // Симптомдық сұрақтар тізімі
    getSymptomQuestions() {
        const questions = {
            'cardiology': [
                "Do you have chest pain or discomfort?",
                "Are you experiencing palpitations or irregular heartbeat?",
                "Do you feel short of breath during normal activities?",
                "Do you have swelling in your legs or ankles?",
                "Do you feel dizzy or lightheaded frequently?"
            ],
            'neurology': [
                "Do you have frequent headaches or migraines?",
                "Are you experiencing dizziness or balance problems?",
                "Do you have numbness or tingling in any body parts?",
                "Are you having memory problems or confusion?",
                "Do you experience muscle weakness or tremors?"
            ],
            'anesthesiology': [
                "Are you preparing for surgery?",
                "Do you have concerns about anesthesia?",
                "Are you experiencing post-operative pain?",
                "Do you have questions about pain management?",
                "Do you have allergies to medications?"
            ],
            'neurosurgery': [
                "Do you have severe, persistent headaches?",
                "Are you experiencing vision problems or changes?",
                "Do you have balance or coordination issues?",
                "Are you experiencing weakness on one side of your body?",
                "Do you have speech difficulties or confusion?"
            ]
        };
        
        return questions[this.specialization.toLowerCase()] || [
            "What symptoms are you experiencing?",
            "How long have you had these symptoms?",
            "Are the symptoms constant or intermittent?",
            "What makes your symptoms better or worse?",
            "Have you taken any medication for these symptoms?"
        ];
    }
    
    // Қауіпті симптомдарды тексеру
    checkEmergencySymptoms(input) {
        const emergencyPatterns = [
            { pattern: /chest pain|heart attack|cardiac arrest/i, level: 'critical' },
            { pattern: /can't breathe|difficulty breathing|choking/i, level: 'critical' },
            { pattern: /stroke|facial droop|speech difficulty/i, level: 'critical' },
            { pattern: /severe bleeding|uncontrolled bleeding/i, level: 'critical' },
            { pattern: /unconscious|passed out|fainted/i, level: 'critical' },
            { pattern: /severe headache|worst headache/i, level: 'high' },
            { pattern: /sudden weakness|numbness one side/i, level: 'high' },
            { pattern: /high fever with stiff neck/i, level: 'high' },
            { pattern: /severe abdominal pain/i, level: 'medium' },
            { pattern: /broken bone|fracture/i, level: 'medium' }
        ];
        
        for (const { pattern, level } of emergencyPatterns) {
            if (pattern.test(input)) {
                return {
                    isEmergency: true,
                    level: level,
                    message: this.getEmergencyInstructions(level)
                };
            }
        }
        
        return { isEmergency: false, level: 'none', message: '' };
    }
    
    // Жедел көмек нұсқаулары
    getEmergencyInstructions(level) {
        const instructions = {
            'critical': `🚨 **CRITICAL EMERGENCY** 🚨
            
1. Call emergency services IMMEDIATELY: **103**
2. Do not move the patient unless in immediate danger
3. If unconscious, check breathing and pulse
4. If not breathing, begin CPR if trained
5. Stay on the line with emergency services

Our emergency team is available 24/7 at: **+7 777 810 74 272**`,
            
            'high': `⚠️ **URGENT MEDICAL ATTENTION NEEDED** ⚠️
            
1. Seek medical attention within 1 hour
2. Go to the nearest emergency department
3. Do not drive yourself if symptoms are severe
4. Call our emergency line for guidance: **+7 777 810 74 272**
5. Monitor symptoms closely`,
            
            'medium': `🔶 **MEDICAL EVALUATION RECOMMENDED** 🔶
            
1. Schedule appointment within 24 hours
2. Contact our clinic for same-day appointment
3. Monitor symptoms and note any changes
4. Avoid activities that worsen symptoms
5. Contact us via WhatsApp for quick consultation`
        };
        
        return instructions[level] || 'Please consult with a medical professional for proper evaluation.';
    }
    
    // AI ұсыныстары
    getRecommendations(analysis) {
        const recommendations = [];
        
        if (analysis.severity === 'high') {
            recommendations.push({
                icon: '🚑',
                text: 'Seek immediate medical attention',
                action: 'emergency'
            });
        }
        
        if (analysis.tests.length > 0) {
            recommendations.push({
                icon: '🩺',
                text: `Recommended tests: ${analysis.tests.join(', ')}`,
                action: 'tests'
            });
        }
        
        if (analysis.needsWhatsapp) {
            recommendations.push({
                icon: '💬',
                text: 'Connect with doctor via WhatsApp',
                action: 'whatsapp',
                link: analysis.whatsappLink
            });
        }
        
        recommendations.push({
            icon: '📅',
            text: 'Schedule appointment for proper evaluation',
            action: 'appointment'
        });
        
        return recommendations;
    }
    
    // AI бағасын есептеу
    calculateConfidenceScore(analysis) {
        let score = 50; // Бастапқы ұпай
        
        // Симптомдар саны
        score += Math.min(analysis.symptoms.length * 10, 30);
        
        // Қауіптілік деңгейі
        if (analysis.severity === 'high') score += 20;
        else if (analysis.severity === 'medium') score += 10;
        
        // Нақтылық
        if (analysis.success) score += 20;
        
        // Максимум 100 ұпай
        return Math.min(score, 100);
    }
}

// Глобальды AI консультанттар
const aiConsultants = {
    'arman': new DoctorAIConsultant('Arman Dauletiyarov', 'Cardiology', '777781074272'),
    'walter': new DoctorAIConsultant('Walter White', 'Anesthesiology', '777781074272'),
    'sarah-jhonson': new DoctorAIConsultant('Sarah Jhonson', 'Anesthesiology', '777781074272'),
    'sarah-wallenstein': new DoctorAIConsultant('Sarah Wallenstein', 'Neurosurgery', '777781074272')
};

// Дәрігерге арналған AI инициализациясы
function initializeDoctorAI(doctorId, containerId) {
    const consultant = aiConsultants[doctorId];
    if (!consultant) {
        console.error(`AI consultant not found for doctor: ${doctorId}`);
        return null;
    }
    
    // Чат тарихын жүктеу
    consultant.loadHistory();
    
    return {
        consultant: consultant,
        
        // Хабар жіберу
        sendMessage: function(message) {
            // Жедел көмекті тексеру
            const emergencyCheck = consultant.checkEmergencySymptoms(message);
            if (emergencyCheck.isEmergency) {
                consultant.addToHistory(message, true);
                consultant.addToHistory(emergencyCheck.message, false);
                return {
                    analysis: null,
                    emergency: emergencyCheck,
                    history: consultant.getHistory()
                };
            }
            
            // Кәдімгі талдау
            consultant.addToHistory(message, true);
            const analysis = consultant.analyzeSymptoms(message);
            consultant.addToHistory(analysis.advice, false, analysis);
            
            return {
                analysis: analysis,
                emergency: { isEmergency: false },
                history: consultant.getHistory(),
                confidence: consultant.calculateConfidenceScore(analysis),
                recommendations: consultant.getRecommendations(analysis)
            };
        },
        
        // WhatsApp сілтемесі
        getWhatsAppLink: function(customMessage = '') {
            return consultant.generateWhatsAppLink(customMessage);
        },
        
        // Тілді өзгерту
        setLanguage: function(lang) {
            return consultant.setLanguage(lang);
        },
        
        // Ағымдағы тіл
        getCurrentLanguage: function() {
            return consultant.currentLanguage;
        },
        
        // Чат тарихын алу
        getHistory: function() {
            return consultant.getHistory();
        },
        
        // Тарихты тазарту
        clearChat: function() {
            consultant.clearHistory();
        },
        
        // Симптом сұрақтары
        getQuestions: function() {
            return consultant.getSymptomQuestions();
        },
        
        // Жедел көмек нұсқаулары
        getEmergencyInfo: function(level = 'critical') {
            return consultant.getEmergencyInstructions(level);
        }
    };
}

// DOM жүктегенде AI бастау
document.addEventListener('DOMContentLoaded', function() {
    console.log('Doctor AI initialized');
    
    // Барлық AI чаттарды инициализациялау
    const chatContainers = document.querySelectorAll('[data-doctor-ai]');
    
    chatContainers.forEach(container => {
        const doctorId = container.getAttribute('data-doctor-ai');
        const aiInstance = initializeDoctorAI(doctorId, container.id);
        
        if (aiInstance && container.id) {
            setupChatInterface(container.id, aiInstance);
        }
    });
    
    // WhatsApp түймелерін баптау
    setupWhatsAppButtons();
    
    // Жедел көмек түймелерін баптау
    setupEmergencyButtons();
    
    // Тіл таңдау түймелерін баптау
    setupLanguageButtons();
});

// Чат интерфейсін баптау
function setupChatInterface(containerId, aiInstance) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const input = container.querySelector('.ai-chat-input');
    const sendBtn = container.querySelector('.ai-chat-send');
    const messagesContainer = container.querySelector('.ai-chat-messages');
    const whatsappSection = container.querySelector('.ai-whatsapp-section');
    const symptomButtons = container.querySelectorAll('.symptom-quick-btn');
    
    if (!input || !sendBtn || !messagesContainer) {
        console.warn('Chat elements not found in container:', containerId);
        return;
    }
    
    // Бұрынғы хабарламаларды көрсету
    const history = aiInstance.getHistory();
    if (history.length > 0) {
        history.forEach(item => {
            if (item.isUser) {
                addMessageToChat(messagesContainer, item.message, 'user');
            } else {
                addMessageToChat(messagesContainer, item.message, 'ai', item.response);
            }
        });
    } else {
        // Алғашқы хабарлама
        const welcomeMessage = aiInstance.consultant.getResponse('welcome');
        addMessageToChat(messagesContainer, welcomeMessage, 'ai');
    }
    
    // Жіберу түймесі
    sendBtn.addEventListener('click', function() {
        const message = input.value.trim();
        if (message) {
            handleUserMessage(message, input, messagesContainer, whatsappSection, aiInstance);
        }
    });
    
    // Enter пернесі
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
    
    // Симптом түймелері
    symptomButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const symptom = this.getAttribute('data-symptom');
            if (symptom) {
                input.value = symptom;
                sendBtn.click();
            }
        });
    });
    
    // Автофокус
    setTimeout(() => {
        input.focus();
    }, 500);
}

// Пайдаланушы хабарламасын өңдеу
function handleUserMessage(message, input, messagesContainer, whatsappSection, aiInstance) {
    // Пайдаланушы хабарламасын көрсету
    addMessageToChat(messagesContainer, message, 'user');
    input.value = '';
    
    // Жазу индикаторы
    showTypingIndicator(messagesContainer);
    
    // AI жауабы
    setTimeout(() => {
        removeTypingIndicator(messagesContainer);
        
        const response = aiInstance.sendMessage(message);
        
        // Жедел көмек жағдайында
        if (response.emergency.isEmergency) {
            addMessageToChat(messagesContainer, response.emergency.message, 'ai', null, true);
            
            // Жедел көмек түймесін көрсету
            if (whatsappSection) {
                showEmergencySection(whatsappSection, aiInstance, message);
            }
        } 
        // Кәдімгі жауап
        else if (response.analysis) {
            addMessageToChat(messagesContainer, response.analysis.advice, 'ai', response.analysis);
            
            // WhatsApp бөлімін көрсету
            if (response.analysis.needsWhatsapp && whatsappSection) {
                showWhatsAppSection(whatsappSection, aiInstance, response.analysis);
            }
            
            // Ұсыныстарды көрсету
            if (response.recommendations && response.recommendations.length > 0) {
                showRecommendations(messagesContainer, response.recommendations, aiInstance);
            }
        }
    }, 1500);
}

// Хабарламаны чатқа қосу
function addMessageToChat(container, text, type, analysis = null, isEmergency = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message mb-3`;
    
    if (type === 'ai') {
        messageDiv.innerHTML = `
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <div class="ai-avatar-small">
                        <i class="fas fa-robot"></i>
                    </div>
                </div>
                <div class="flex-grow-1 ms-3">
                    <div class="message-content p-3 rounded ${isEmergency ? 'bg-danger text-white' : 'bg-light'}">
                        <strong>AI Assistant:</strong> ${formatMessage(text, analysis, isEmergency)}
                    </div>
                </div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="d-flex">
                <div class="flex-grow-1 me-3">
                    <div class="message-content p-3 rounded bg-primary text-white">
                        <strong>You:</strong> ${text}
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <div class="user-avatar-small">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.appendChild(messageDiv);
    scrollToBottom(container);
}

// Хабарламаны форматтау
function formatMessage(text, analysis, isEmergency) {
    let formattedText = text;
    
    // Жедел көмек жағдайында
    if (isEmergency) {
        formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
    }
    
    // Талдау бар болса
    if (analysis && analysis.severity === 'high') {
        formattedText += `<div class="mt-2 p-2 bg-warning bg-opacity-10 border-start border-warning border-3">
            <small><i class="fas fa-exclamation-triangle text-warning me-1"></i> 
            <strong>Urgency:</strong> ${analysis.urgency.toUpperCase()} | 
            <strong>Confidence:</strong> ${analysis.confidence || 'N/A'}%</small>
        </div>`;
    }
    
    return formattedText;
}

// Жазу индикаторын көрсету
function showTypingIndicator(container) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message mb-3';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="d-flex">
            <div class="flex-shrink-0">
                <div class="ai-avatar-small">
                    <i class="fas fa-robot"></i>
                </div>
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="typing-indicator p-3 rounded bg-light">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
    container.appendChild(typingDiv);
    scrollToBottom(container);
}

// Жазу индикаторын жою
function removeTypingIndicator(container) {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// WhatsApp бөлімін көрсету
function showWhatsAppSection(section, aiInstance, analysis) {
    if (!section) return;
    
    const doctorName = aiInstance.consultant.doctorName;
    const whatsappLink = aiInstance.getWhatsAppLink(analysis.advice);
    
    section.innerHTML = `
        <div class="alert alert-success border-0 shadow-sm">
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <i class="fab fa-whatsapp fa-2x me-3"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="alert-heading mb-2">
                        <i class="fas fa-user-md me-2"></i>Connect with Dr. ${doctorName}
                    </h6>
                    <p class="mb-3">Based on your symptoms, AI recommends consulting with ${doctorName}. Click below to chat directly on WhatsApp:</p>
                    
                    <div class="d-grid gap-2 d-md-flex">
                        <a href="${whatsappLink}" 
                           class="btn btn-success btn-lg flex-grow-1 whatsapp-direct-btn" 
                           target="_blank">
                            <i class="fab fa-whatsapp me-2"></i>Chat on WhatsApp
                        </a>
                        <a href="tel:+77781074272" class="btn btn-outline-danger btn-lg">
                            <i class="fas fa-phone me-2"></i>Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Жедел көмек бөлімін көрсету
function showEmergencySection(section, aiInstance, message) {
    if (!section) return;
    
    const whatsappLink = aiInstance.getWhatsAppLink(`EMERGENCY: ${message}`);
    
    section.innerHTML = `
        <div class="alert alert-danger border-0 shadow-sm">
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <i class="fas fa-ambulance fa-2x me-3"></i>
                </div>
                <div class="flex-grow-1">
                    <h6 class="alert-heading mb-2">
                        <i class="fas fa-exclamation-triangle me-2"></i>Emergency Assistance Needed
                    </h6>
                    <p class="mb-3">Your symptoms indicate a potential emergency. Immediate action is required:</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-3 border-danger">
                                <div class="card-body">
                                    <h6 class="card-title text-danger">
                                        <i class="fas fa-phone me-2"></i>Emergency Contacts
                                    </h6>
                                    <ul class="list-unstyled mb-0">
                                        <li><strong>Ambulance:</strong> 103</li>
                                        <li><strong>Police:</strong> 102</li>
                                        <li><strong>Fire:</strong> 101</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-3 border-success">
                                <div class="card-body">
                                    <h6 class="card-title text-success">
                                        <i class="fab fa-whatsapp me-2"></i>TAUP Emergency
                                    </h6>
                                    <div class="d-grid">
                                        <a href="${whatsappLink}" 
                                           class="btn btn-success whatsapp-direct-btn" 
                                           target="_blank">
                                            <i class="fab fa-whatsapp me-2"></i>Emergency WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Ұсыныстарды көрсету
function showRecommendations(container, recommendations, aiInstance) {
    const recommendationsDiv = document.createElement('div');
    recommendationsDiv.className = 'message ai-message mb-3';
    
    let recommendationsHTML = `
        <div class="d-flex">
            <div class="flex-shrink-0">
                <div class="ai-avatar-small">
                    <i class="fas fa-lightbulb"></i>
                </div>
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="message-content p-3 rounded bg-info bg-opacity-10">
                    <strong><i class="fas fa-star me-2"></i>AI Recommendations:</strong>
                    <div class="mt-2">
    `;
    
    recommendations.forEach((rec, index) => {
        recommendationsHTML += `
            <div class="recommendation-item d-flex align-items-center mb-2 p-2 border rounded">
                <span class="me-3" style="font-size: 1.2rem;">${rec.icon}</span>
                <div class="flex-grow-1">
                    <span class="d-block">${rec.text}</span>
                </div>
                ${rec.link ? `
                    <a href="${rec.link}" class="btn btn-sm btn-outline-success" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                ` : ''}
            </div>
        `;
    });
    
    recommendationsHTML += `
                    </div>
                </div>
            </div>
        </div>
    `;
    
    recommendationsDiv.innerHTML = recommendationsHTML;
    container.appendChild(recommendationsDiv);
    scrollToBottom(container);
}

// WhatsApp түймелерін баптау
function setupWhatsAppButtons() {
    document.querySelectorAll('.whatsapp-direct-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.href.includes('wa.me')) {
                e.preventDefault();
                const phone = this.getAttribute('data-phone') || '777781074272';
                const message = this.getAttribute('data-message') || 'Hello, I need medical consultation from TAUP Medical Center';
                const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(whatsappLink, '_blank', 'noopener,noreferrer');
            }
        });
    });
}

// Жедел көмек түймелерін баптау
function setupEmergencyButtons() {
    document.querySelectorAll('.emergency-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showEmergencyModal();
        });
    });
}

// Тіл таңдау түймелерін баптау
function setupLanguageButtons() {
    document.querySelectorAll('.ai-language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Барлық түймелерді белсенсіз ету
            this.closest('.ai-language-selector')?.querySelectorAll('.ai-language-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Ағымдағы түймені белсенді ету
            this.classList.add('active');
            
            // Тілді өзгерту
            // Ескерту: Бұл функция барлық AI консультанттарға әсер етеді
            console.log('Language changed to:', lang);
            
            // Хабарламаны көрсету
            const chatContainer = this.closest('.ai-chat-box')?.querySelector('.ai-chat-messages');
            if (chatContainer) {
                const langMessage = document.createElement('div');
                langMessage.className = 'message ai-message mb-3';
                langMessage.innerHTML = `
                    <div class="d-flex">
                        <div class="flex-shrink-0">
                            <div class="ai-avatar-small">
                                <i class="fas fa-language"></i>
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <div class="message-content p-3 rounded bg-light">
                                <strong>AI Assistant:</strong> Language changed to ${getLanguageName(lang)}. How can I help you?
                            </div>
                        </div>
                    </div>
                `;
                chatContainer.appendChild(langMessage);
                scrollToBottom(chatContainer);
            }
        });
    });
}

// Тіл атауын алу
function getLanguageName(code) {
    const languages = {
        'en': 'English',
        'ru': 'Russian',
        'kk': 'Kazakh'
    };
    return languages[code] || code;
}

// Жедел көмек модалды терезесін көрсету
function showEmergencyModal() {
    const modalHTML = `
        <div class="modal fade" id="emergencyModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content emergency-modal">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-ambulance me-2"></i>Emergency Assistance
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger">
                            <h6><i class="fas fa-exclamation-triangle"></i> IF THIS IS A LIFE-THREATENING EMERGENCY:</h6>
                            <ol class="mt-2">
                                <li>Call <strong>103</strong> immediately for ambulance</li>
                                <li>State your location clearly</li>
                                <li>Describe the emergency situation</li>
                                <li>Follow the operator's instructions</li>
                                <li>Do not hang up until help arrives</li>
                            </ol>
                        </div>
                        
                        <h6 class="mt-4">TAUP Medical Center Emergency Contacts:</h6>
                        <div class="list-group mt-2">
                            <div class="list-group-item">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-phone text-danger fa-lg me-3"></i>
                                    <div>
                                        <strong>Emergency Line</strong>
                                        <div class="mt-1">
                                            <a href="tel:103" class="btn btn-sm btn-danger me-2">
                                                <i class="fas fa-phone"></i> Call 103
                                            </a>
                                            <a href="tel:+77781074272" class="btn btn-sm btn-outline-danger">
                                                <i class="fas fa-phone"></i> +7 778 107 42 72
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="list-group-item">
                                <div class="d-flex align-items-center">
                                    <i class="fab fa-whatsapp text-success fa-lg me-3"></i>
                                    <div>
                                        <strong>WhatsApp Emergency</strong>
                                        <div class="mt-1">
                                            <a href="https://wa.me/777781074272?text=EMERGENCY%20HELP%20NEEDED%20-%20TAUP%20Medical%20Center" 
                                               class="btn btn-sm btn-success" 
                                               target="_blank">
                                                <i class="fab fa-whatsapp"></i> WhatsApp Emergency
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <h6><i class="fas fa-first-aid me-2"></i>Common Emergency Instructions:</h6>
                            <div class="accordion mt-2" id="emergencyInstructions">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHeart">
                                            <i class="fas fa-heart text-danger me-2"></i> Heart Attack Symptoms
                                        </button>
                                    </h2>
                                    <div id="collapseHeart" class="accordion-collapse collapse" data-bs-parent="#emergencyInstructions">
                                        <div class="accordion-body">
                                            <ul class="mb-0">
                                                <li>Chest pain or discomfort</li>
                                                <li>Shortness of breath</li>
                                                <li>Nausea or lightheadedness</li>
                                                <li>Pain in arms, back, neck, or jaw</li>
                                            </ul>
                                            <p class="mt-2 mb-0"><strong>Action:</strong> Call 103 immediately, chew aspirin if available</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStroke">
                                            <i class="fas fa-brain text-danger me-2"></i> Stroke Symptoms (FAST)
                                        </button>
                                    </h2>
                                    <div id="collapseStroke" class="accordion-collapse collapse" data-bs-parent="#emergencyInstructions">
                                        <div class="accordion-body">
                                            <ul class="mb-0">
                                                <li><strong>F</strong>ace drooping</li>
                                                <li><strong>A</strong>rm weakness</li>
                                                <li><strong>S</strong>peech difficulty</li>
                                                <li><strong>T</strong>ime to call 103</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="tel:103" class="btn btn-danger">
                            <i class="fas fa-phone"></i> Call 103 Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Модалды терезені жасау
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Модалды терезені көрсету
    const modal = new bootstrap.Modal(document.getElementById('emergencyModal'));
    modal.show();
    
    // Модалды терезені жою
    document.getElementById('emergencyModal').addEventListener('hidden.bs.modal', function() {
        modalContainer.remove();
    });
}

// Чаттың төменгі жағына скролл
function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

// AI чатты экспорттау
function exportChatHistory(aiInstance, format = 'txt') {
    const history = aiInstance.getHistory();
    let content = '';
    
    if (format === 'txt') {
        content = `TAUP Medical Center - AI Consultation History\n`;
        content += `Doctor: ${aiInstance.consultant.doctorName}\n`;
        content += `Date: ${new Date().toLocaleString()}\n`;
        content += '='.repeat(50) + '\n\n';
        
        history.forEach((item, index) => {
            const time = new Date(item.timestamp).toLocaleTimeString();
            const sender = item.isUser ? 'You' : 'AI Assistant';
            content += `[${time}] ${sender}:\n${item.message}\n\n`;
        });
    }
    
    // Файлды жүктеу
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TAUP-AI-Chat-${aiInstance.consultant.doctorName}-${Date.now()}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// AI чатты басып шығару
function printChatHistory(aiInstance) {
    const history = aiInstance.getHistory();
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>TAUP AI Consultation - ${aiInstance.consultant.doctorName}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3fbbc0; padding-bottom: 20px; }
                .chat-item { margin-bottom: 20px; padding: 15px; border-radius: 5px; }
                .user-message { background: #e8f7f7; border-left: 4px solid #3fbbc0; }
                .ai-message { background: #f8f9fa; border-left: 4px solid #6c757d; }
                .timestamp { font-size: 12px; color: #6c757d; margin-bottom: 5px; }
                .sender { font-weight: bold; margin-bottom: 5px; }
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>TAUP Medical Center</h1>
                <h2>AI Consultation History</h2>
                <p><strong>Doctor:</strong> ${aiInstance.consultant.doctorName}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="chat-history">
    `);
    
    history.forEach(item => {
        const time = new Date(item.timestamp).toLocaleString();
        const sender = item.isUser ? 'Patient' : 'AI Assistant';
        const messageClass = item.isUser ? 'user-message' : 'ai-message';
        
        printWindow.document.write(`
            <div class="chat-item ${messageClass}">
                <div class="timestamp">${time}</div>
                <div class="sender">${sender}:</div>
                <div>${item.message.replace(/\n/g, '<br>')}</div>
            </div>
        `);
    });
    
    printWindow.document.write(`
            </div>
            
            <div class="footer no-print" style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                <button onclick="window.print()" style="padding: 10px 20px; background: #3fbbc0; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Print This Conversation
                </button>
                <button onclick="window.close()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                    Close Window
                </button>
            </div>
            
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// Глобальды функциялар
window.DoctorAI = {
    initialize: initializeDoctorAI,
    exportChat: exportChatHistory,
    printChat: printChatHistory,
    showEmergencyModal: showEmergencyModal,
    consultants: aiConsultants
};

console.log('Doctor AI system loaded successfully');