// Медициналық AI ядросы - Толық нұсқа

class MedicalAIEngine {
    constructor() {
        this.medicalDatabase = this.createMedicalDatabase();
        this.symptomPatterns = this.createSymptomPatterns();
        this.language = 'en';
        this.userHistory = [];
    }
    
    // Медициналық деректер базасын жасау
    createMedicalDatabase() {
        return {
            // Кардиология
            'cardiology': {
                name: 'Cardiology',
                conditions: {
                    'angina': {
                        name: 'Angina Pectoris',
                        symptoms: ['chest pain', 'chest tightness', 'shortness of breath', 'fatigue'],
                        severity: 'high',
                        urgent: true,
                        tests: ['ECG', 'Stress Test', 'Coronary Angiography'],
                        treatments: ['Medication', 'Lifestyle changes', 'Angioplasty', 'Bypass surgery']
                    },
                    'arrhythmia': {
                        name: 'Cardiac Arrhythmia',
                        symptoms: ['palpitations', 'dizziness', 'fainting', 'chest discomfort'],
                        severity: 'medium',
                        urgent: true,
                        tests: ['ECG', 'Holter Monitor', 'Electrophysiology Study'],
                        treatments: ['Medication', 'Cardioversion', 'Ablation', 'Pacemaker']
                    },
                    'heart_failure': {
                        name: 'Heart Failure',
                        symptoms: ['shortness of breath', 'fatigue', 'swelling in legs', 'rapid heartbeat'],
                        severity: 'high',
                        urgent: true,
                        tests: ['Echocardiogram', 'Blood Tests', 'Chest X-ray'],
                        treatments: ['Medication', 'Lifestyle changes', 'Device therapy', 'Surgery']
                    }
                },
                emergencyPatterns: [
                    'chest pain radiating to arm',
                    'severe chest pressure',
                    'sudden shortness of breath',
                    'fainting with chest pain'
                ]
            },
            
            // Неврология
            'neurology': {
                name: 'Neurology',
                conditions: {
                    'migraine': {
                        name: 'Migraine',
                        symptoms: ['severe headache', 'nausea', 'sensitivity to light', 'visual disturbances'],
                        severity: 'medium',
                        urgent: false,
                        tests: ['Neurological Exam', 'MRI', 'CT Scan'],
                        treatments: ['Pain relief', 'Preventive medication', 'Lifestyle changes']
                    },
                    'stroke': {
                        name: 'Stroke',
                        symptoms: ['facial drooping', 'arm weakness', 'speech difficulty', 'sudden confusion'],
                        severity: 'critical',
                        urgent: true,
                        tests: ['CT Scan', 'MRI', 'Carotid Ultrasound'],
                        treatments: ['Emergency medication', 'Thrombolysis', 'Rehabilitation']
                    },
                    'epilepsy': {
                        name: 'Epilepsy',
                        symptoms: ['seizures', 'loss of consciousness', 'uncontrollable movements', 'confusion'],
                        severity: 'high',
                        urgent: true,
                        tests: ['EEG', 'MRI Brain', 'Blood Tests'],
                        treatments: ['Anti-seizure medication', 'Diet therapy', 'Surgery']
                    }
                },
                emergencyPatterns: [
                    'sudden severe headache',
                    'weakness on one side',
                    'speech difficulty sudden',
                    'loss of consciousness'
                ]
            },
            
            // Гастроэнтерология
            'gastroenterology': {
                name: 'Gastroenterology',
                conditions: {
                    'gastritis': {
                        name: 'Gastritis',
                        symptoms: ['stomach pain', 'nausea', 'bloating', 'loss of appetite'],
                        severity: 'low',
                        urgent: false,
                        tests: ['Endoscopy', 'Blood Tests', 'Stool Test'],
                        treatments: ['Medication', 'Diet changes', 'Stress management']
                    },
                    'ibd': {
                        name: 'Inflammatory Bowel Disease',
                        symptoms: ['abdominal pain', 'diarrhea', 'weight loss', 'fatigue'],
                        severity: 'medium',
                        urgent: false,
                        tests: ['Colonoscopy', 'Biopsy', 'Blood Tests'],
                        treatments: ['Medication', 'Diet therapy', 'Surgery']
                    },
                    'gerd': {
                        name: 'GERD',
                        symptoms: ['heartburn', 'chest pain', 'difficulty swallowing', 'regurgitation'],
                        severity: 'low',
                        urgent: false,
                        tests: ['Endoscopy', 'pH Monitoring', 'Esophageal Manometry'],
                        treatments: ['Lifestyle changes', 'Medication', 'Surgery']
                    }
                },
                emergencyPatterns: [
                    'severe abdominal pain',
                    'vomiting blood',
                    'black tarry stools',
                    'unable to swallow'
                ]
            },
            
            // Ортопедия
            'orthopedics': {
                name: 'Orthopedics',
                conditions: {
                    'arthritis': {
                        name: 'Arthritis',
                        symptoms: ['joint pain', 'stiffness', 'swelling', 'reduced mobility'],
                        severity: 'medium',
                        urgent: false,
                        tests: ['X-ray', 'Blood Tests', 'Joint Fluid Analysis'],
                        treatments: ['Medication', 'Physical therapy', 'Joint injections', 'Surgery']
                    },
                    'fracture': {
                        name: 'Fracture',
                        symptoms: ['severe pain', 'swelling', 'bruising', 'deformity'],
                        severity: 'high',
                        urgent: true,
                        tests: ['X-ray', 'CT Scan', 'MRI'],
                        treatments: ['Casting', 'Splinting', 'Surgery', 'Physical therapy']
                    },
                    'tendonitis': {
                        name: 'Tendonitis',
                        symptoms: ['pain near joints', 'tenderness', 'mild swelling', 'stiffness'],
                        severity: 'low',
                        urgent: false,
                        tests: ['Physical Exam', 'Ultrasound', 'MRI'],
                        treatments: ['Rest', 'Physical therapy', 'Medication', 'Steroid injections']
                    }
                },
                emergencyPatterns: [
                    'obvious bone deformity',
                    'severe joint pain after injury',
                    'unable to move limb',
                    'numbness after injury'
                ]
            }
        };
    }
    
    // Симптом үлгілерін жасау
    createSymptomPatterns() {
        return {
            // Жедел көмек белгілері
            'emergency': [
                {
                    pattern: /chest pain.*radiat|severe chest pressure|heart attack/i,
                    department: 'cardiology',
                    level: 'critical',
                    action: 'Call 103 immediately. Do not drive yourself.'
                },
                {
                    pattern: /difficulty breathing|can't breathe|choking/i,
                    department: 'pulmonology',
                    level: 'critical',
                    action: 'Call 103. Sit upright. Try to stay calm.'
                },
                {
                    pattern: /sudden severe headache|worst headache|thunderclap/i,
                    department: 'neurology',
                    level: 'critical',
                    action: 'Call 103 immediately. This could be a stroke or aneurysm.'
                },
                {
                    pattern: /weakness.*one side|facial droop|speech difficulty/i,
                    department: 'neurology',
                    level: 'critical',
                    action: 'Call 103 immediately. Time is critical for stroke treatment.'
                },
                {
                    pattern: /severe abdominal pain|vomit.*blood|black.*stool/i,
                    department: 'gastroenterology',
                    level: 'high',
                    action: 'Go to emergency department immediately.'
                },
                {
                    pattern: /broken bone|fracture|deformity.*limb/i,
                    department: 'orthopedics',
                    level: 'high',
                    action: 'Go to emergency department. Immobilize the area.'
                }
            ],
            
            // Жедел емес белгілер
            'non_emergency': [
                {
                    pattern: /headache.*mild|migraine/i,
                    department: 'neurology',
                    level: 'low',
                    action: 'Schedule appointment within 1-2 weeks'
                },
                {
                    pattern: /joint pain|arthritis|stiffness/i,
                    department: 'orthopedics',
                    level: 'low',
                    action: 'Schedule appointment within 2 weeks'
                },
                {
                    pattern: /stomach pain|heartburn|indigestion/i,
                    department: 'gastroenterology',
                    level: 'low',
                    action: 'Schedule appointment within 1-2 weeks'
                },
                {
                    pattern: /palpitations|mild chest discomfort/i,
                    department: 'cardiology',
                    level: 'medium',
                    action: 'Schedule appointment within 1 week'
                },
                {
                    pattern: /back pain|spinal pain/i,
                    department: 'orthopedics',
                    level: 'medium',
                    action: 'Schedule appointment within 1 week'
                },
                {
                    pattern: /fatigue|tiredness|weakness general/i,
                    department: 'general',
                    level: 'low',
                    action: 'Schedule general checkup'
                }
            ]
        };
    }
    
    // Тілді орнату
    setLanguage(lang) {
        const supportedLanguages = ['en', 'ru', 'kk'];
        if (supportedLanguages.includes(lang)) {
            this.language = lang;
            return true;
        }
        return false;
    }
    
    // Симптомдарды талдау
    analyzeSymptoms(userInput) {
        const input = userInput.toLowerCase();
        
        // Жедел көмекті тексеру
        const emergencyResult = this.checkForEmergency(input);
        if (emergencyResult.isEmergency) {
            return emergencyResult;
        }
        
        // Бөлімді анықтау
        const departmentAnalysis = this.identifyDepartment(input);
        
        // Мүмкін болатын ауруларды анықтау
        const possibleConditions = this.identifyConditions(input, departmentAnalysis.department);
        
        // Талдау нәтижесі
        return {
            isEmergency: false,
            department: departmentAnalysis.department,
            departmentName: departmentAnalysis.name,
            confidence: departmentAnalysis.confidence,
            possibleConditions: possibleConditions,
            recommendedActions: this.generateRecommendations(departmentAnalysis, possibleConditions),
            urgency: this.calculateUrgency(possibleConditions),
            tests: this.suggestTests(possibleConditions),
            nextSteps: this.generateNextSteps(departmentAnalysis, possibleConditions)
        };
    }
    
    // Жедел көмекті тексеру
    checkForEmergency(input) {
        for (const emergency of this.symptomPatterns.emergency) {
            if (emergency.pattern.test(input)) {
                return {
                    isEmergency: true,
                    level: emergency.level,
                    department: emergency.department,
                    action: emergency.action,
                    message: this.getEmergencyMessage(emergency.level, emergency.department)
                };
            }
        }
        
        return {
            isEmergency: false,
            level: 'none',
            department: null,
            action: null,
            message: null
        };
    }
    
    // Жедел көмек хабарламасы
    getEmergencyMessage(level, department) {
        const messages = {
            'critical': `🚨 CRITICAL EMERGENCY DETECTED 🚨

Based on your symptoms, you may be experiencing a medical emergency that requires immediate attention.

IMMEDIATE ACTION REQUIRED:
1. Call emergency services: 103
2. Do not drive yourself to the hospital
3. Stay calm and follow emergency instructions
4. Our emergency team is available: +7 777 810 74 272

Possible conditions: ${this.getEmergencyConditions(department)}`,
            
            'high': `⚠️ URGENT MEDICAL ATTENTION NEEDED ⚠️

Your symptoms indicate a condition that requires prompt medical evaluation.

RECOMMENDED ACTION:
1. Go to emergency department within 1 hour
2. Do not ignore these symptoms
3. Contact our emergency line for guidance
4. Avoid any strenuous activity

Department: ${this.getDepartmentName(department)}`
        };
        
        return messages[level] || 'Please seek medical attention promptly.';
    }
    
    // Бөлімді анықтау
    identifyDepartment(input) {
        let bestMatch = { department: 'general', name: 'General Medicine', confidence: 0 };
        const departmentScores = {};
        
        // Әр бөлімге ұпай беру
        for (const [deptKey, deptData] of Object.entries(this.medicalDatabase)) {
            let score = 0;
            
            // Әр аурудың симптомдарын тексеру
            for (const condition of Object.values(deptData.conditions)) {
                for (const symptom of condition.symptoms) {
                    if (input.includes(symptom)) {
                        score += 10;
                    }
                }
            }
            
            // Төтенше жағдайларды тексеру
            for (const pattern of deptData.emergencyPatterns) {
                if (input.includes(pattern)) {
                    score += 20;
                }
            }
            
            departmentScores[deptKey] = {
                department: deptKey,
                name: deptData.name,
                confidence: score
            };
            
            if (score > bestMatch.confidence) {
                bestMatch = departmentScores[deptKey];
            }
        }
        
        // Сенімділік деңгейін нормалау
        bestMatch.confidence = Math.min(100, bestMatch.confidence);
        
        return bestMatch;
    }
    
    // Ауруларды анықтау
    identifyConditions(input, department) {
        if (!this.medicalDatabase[department]) {
            return [];
        }
        
        const possibleConditions = [];
        const deptConditions = this.medicalDatabase[department].conditions;
        
        for (const [conditionKey, conditionData] of Object.entries(deptConditions)) {
            let matchScore = 0;
            const matchedSymptoms = [];
            
            // Симптомдарды салыстыру
            for (const symptom of conditionData.symptoms) {
                if (input.includes(symptom)) {
                    matchScore += 10;
                    matchedSymptoms.push(symptom);
                }
            }
            
            if (matchScore > 0) {
                possibleConditions.push({
                    key: conditionKey,
                    name: conditionData.name,
                    severity: conditionData.severity,
                    matchScore: matchScore,
                    matchedSymptoms: matchedSymptoms,
                    tests: conditionData.tests,
                    treatments: conditionData.treatments,
                    confidence: Math.min(100, matchScore)
                });
            }
        }
        
        // Сенімділігі жоғарыларды сорттау
        possibleConditions.sort((a, b) => b.matchScore - a.matchScore);
        
        return possibleConditions.slice(0, 3); // Тек 3 ең жоғары сенімді нәтижені қайтару
    }
    
    // Ұсыныстарды жасау
    generateRecommendations(departmentAnalysis, possibleConditions) {
        const recommendations = [];
        
        if (possibleConditions.length > 0) {
            recommendations.push({
                type: 'department',
                text: `Consult with ${departmentAnalysis.name} specialist`,
                priority: 'high'
            });
            
            possibleConditions.forEach((condition, index) => {
                recommendations.push({
                    type: 'condition',
                    text: `Possible: ${condition.name} (${condition.confidence}% match)`,
                    priority: condition.severity === 'high' ? 'high' : 'medium'
                });
            });
        } else {
            recommendations.push({
                type: 'general',
                text: 'Consult with general practitioner for evaluation',
                priority: 'medium'
            });
        }
        
        // Тест ұсыныстары
        const testRecommendations = this.suggestTests(possibleConditions);
        testRecommendations.forEach(test => {
            recommendations.push({
                type: 'test',
                text: `Recommended test: ${test}`,
                priority: 'medium'
            });
        });
        
        return recommendations;
    }
    
    // Шамалы уақытты есептеу
    calculateUrgency(possibleConditions) {
        if (possibleConditions.length === 0) return 'low';
        
        const highestSeverity = possibleConditions.reduce((max, condition) => {
            const severityLevels = { 'low': 1, 'medium': 2, 'high': 3, 'critical': 4 };
            return Math.max(max, severityLevels[condition.severity] || 1);
        }, 1);
        
        switch (highestSeverity) {
            case 4: return 'immediate';
            case 3: return 'within 24 hours';
            case 2: return 'within 1 week';
            default: return 'when convenient';
        }
    }
    
    // Тест ұсыныстары
    suggestTests(possibleConditions) {
        const tests = new Set();
        
        possibleConditions.forEach(condition => {
            condition.tests.forEach(test => tests.add(test));
        });
        
        // Жалпы тесттерді қосу
        if (tests.size === 0) {
            tests.add('Complete Blood Count');
            tests.add('Basic Metabolic Panel');
            tests.add('General Physical Examination');
        }
        
        return Array.from(tests).slice(0, 5); // 5 тестке дейін
    }
    
    // Келесі қадамдар
    generateNextSteps(departmentAnalysis, possibleConditions) {
        const steps = [];
        
        steps.push({
            step: 1,
            action: 'Schedule consultation',
            details: `Book appointment with ${departmentAnalysis.name} specialist`
        });
        
        if (possibleConditions.length > 0) {
            steps.push({
                step: 2,
                action: 'Prepare for appointment',
                details: 'Write down symptoms, duration, and any triggers'
            });
            
            steps.push({
                step: 3,
                action: 'Gather medical history',
                details: 'Collect previous test results and medication list'
            });
        }
        
        steps.push({
            step: steps.length + 1,
            action: 'Monitor symptoms',
            details: 'Note any changes or worsening of symptoms'
        });
        
        return steps;
    }
    
    // Бөлім атауын алу
    getDepartmentName(deptKey) {
        return this.medicalDatabase[deptKey]?.name || 'General Medicine';
    }
    
    // Жедел көмек жағдайлары
    getEmergencyConditions(department) {
        const conditions = {
            'cardiology': 'Heart attack, cardiac arrest, severe angina',
            'neurology': 'Stroke, brain hemorrhage, seizure',
            'gastroenterology': 'Internal bleeding, bowel obstruction',
            'orthopedics': 'Compound fracture, spinal injury',
            'pulmonology': 'Respiratory failure, pulmonary embolism'
        };
        
        return conditions[department] || 'Medical emergency';
    }
    
    // Пайдаланушы тарихын сақтау
    addToHistory(analysis, userInput) {
        this.userHistory.push({
            timestamp: new Date().toISOString(),
            input: userInput,
            analysis: analysis,
            language: this.language
        });
        
        // Тарихты 50 жазбаға дейін шектеу
        if (this.userHistory.length > 50) {
            this.userHistory.shift();
        }
        
        // LocalStorage-ке сақтау
        this.saveHistory();
    }
    
    // Тарихты сақтау
    saveHistory() {
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem('medicalAIHistory', JSON.stringify(this.userHistory));
            } catch (e) {
                console.warn('Could not save history to localStorage:', e);
            }
        }
    }
    
    // Тарихты жүктеу
    loadHistory() {
        if (typeof localStorage !== 'undefined') {
            try {
                const saved = localStorage.getItem('medicalAIHistory');
                if (saved) {
                    this.userHistory = JSON.parse(saved);
                }
            } catch (e) {
                console.warn('Could not load history from localStorage:', e);
            }
        }
        return this.userHistory;
    }
    
    // Тарихты тазарту
    clearHistory() {
        this.userHistory = [];
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('medicalAIHistory');
        }
    }
    
    // AI сенімділігін есептеу
    calculateConfidence(analysis) {
        let confidence = 50; // Бастапқы ұпай
        
        if (analysis.isEmergency) {
            confidence += 30;
        }
        
        if (analysis.department !== 'general') {
            confidence += analysis.confidence * 0.3;
        }
        
        if (analysis.possibleConditions.length > 0) {
            analysis.possibleConditions.forEach(condition => {
                confidence += condition.confidence * 0.1;
            });
        }
        
        return Math.min(100, Math.round(confidence));
    }
    
    // Жедел көмек нұсқаулары
    getEmergencyInstructions(level = 'critical') {
        const instructions = {
            'critical': {
                title: 'CRITICAL EMERGENCY PROCEDURE',
                steps: [
                    'Call 103 immediately for ambulance',
                    'Stay with the person, do not leave them alone',
                    'Check breathing and consciousness',
                    'If trained, perform CPR if no breathing',
                    'Do not give anything to eat or drink',
                    'Loosen any tight clothing',
                    'Stay on the line with emergency services'
                ],
                contacts: [
                    'Ambulance: 103',
                    'Police: 102',
                    'Fire: 101',
                    'TAUP Emergency: +7 777 810 74 272'
                ]
            },
            'high': {
                title: 'URGENT MEDICAL ATTENTION',
                steps: [
                    'Go to emergency department within 1 hour',
                    'Do not drive yourself if symptoms are severe',
                    'Bring all medications and medical documents',
                    'Have someone accompany you',
                    'Contact our emergency line en route'
                ],
                contacts: [
                    'Nearest Hospital Emergency',
                    'TAUP Emergency Line: +7 778 107 42 72',
                    'WhatsApp Emergency: +7 777 810 74 272'
                ]
            },
            'medium': {
                title: 'MEDICAL EVALUATION NEEDED',
                steps: [
                    'Schedule appointment within 24-48 hours',
                    'Monitor symptoms closely',
                    'Avoid activities that worsen symptoms',
                    'Take notes of symptom patterns',
                    'Contact clinic for same-day appointment if available'
                ],
                contacts: [
                    'TAUP Appointment: +7 778 107 42 72',
                    'WhatsApp Consultation',
                    'Online Booking Available'
                ]
            }
        };
        
        return instructions[level] || instructions.medium;
    }
    
    // WhatsApp сілтемесін жасау
    generateWhatsAppLink(phone, message) {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phone}?text=${encodedMessage}`;
    }
    
    // AI жауабын форматтау
    formatResponse(analysis, includeDetails = true) {
        let response = '';
        
        if (analysis.isEmergency) {
            response += `🚨 **EMERGENCY ALERT** 🚨\n\n`;
            response += `${analysis.message}\n\n`;
            response += `**Department:** ${this.getDepartmentName(analysis.department)}\n`;
            response += `**Urgency Level:** ${analysis.level.toUpperCase()}\n`;
            response += `**Immediate Action:** ${analysis.action}\n`;
        } else {
            response += `🔍 **AI MEDICAL ANALYSIS** 🔍\n\n`;
            response += `**Recommended Department:** ${analysis.departmentName}\n`;
            response += `**Confidence Level:** ${analysis.confidence}%\n`;
            response += `**Urgency:** ${analysis.urgency}\n\n`;
            
            if (analysis.possibleConditions.length > 0) {
                response += `**Possible Conditions:**\n`;
                analysis.possibleConditions.forEach((condition, index) => {
                    response += `${index + 1}. ${condition.name} (${condition.confidence}% match)\n`;
                });
                response += `\n`;
            }
            
            response += `**Recommended Actions:**\n`;
            analysis.recommendedActions.forEach((action, index) => {
                response += `${index + 1}. ${action.text}\n`;
            });
            
            if (includeDetails) {
                response += `\n**Next Steps:**\n`;
                analysis.nextSteps.forEach(step => {
                    response += `Step ${step.step}: ${step.action} - ${step.details}\n`;
                });
                
                if (analysis.tests.length > 0) {
                    response += `\n**Suggested Tests:**\n`;
                    analysis.tests.forEach((test, index) => {
                        response += `${index + 1}. ${test}\n`;
                    });
                }
            }
        }
        
        // AI сенімділік ескертуі
        response += `\n---\n`;
        response += `*Note: This AI analysis is for informational purposes only. `;
        response += `Always consult with a qualified healthcare professional for medical diagnosis and treatment.*`;
        
        return response;
    }
    
    // Жедел диагноз (жедел жағдайлар үшін)
    quickTriage(userInput) {
        const input = userInput.toLowerCase();
        
        // Өте жедел жағдайлар
        const criticalPatterns = [
            /not breathing|stopped breathing/i,
            /unconscious|passed out|unresponsive/i,
            /severe bleeding|arterial bleeding/i,
            /chest pain.*severe|heart attack/i,
            /stroke symptoms|facial droop/i,
            /seizure.*continuous|status epilepticus/i
        ];
        
        for (const pattern of criticalPatterns) {
            if (pattern.test(input)) {
                return {
                    level: 'critical',
                    action: 'CALL 103 IMMEDIATELY',
                    instructions: 'Do not wait. Call emergency services now.',
                    color: 'danger'
                };
            }
        }
        
        // Жедел жағдайлар
        const urgentPatterns = [
            /difficulty breathing|shortness of breath/i,
            /severe pain.*uncontrolled/i,
            /high fever.*stiff neck/i,
            /poisoning|overdose/i,
            /severe burn/i,
            /head injury.*unconscious/i
        ];
        
        for (const pattern of urgentPatterns) {
            if (pattern.test(input)) {
                return {
                    level: 'urgent',
                    action: 'Go to Emergency Department',
                    instructions: 'Seek medical attention within 1 hour.',
                    color: 'warning'
                };
            }
        }
        
        // Тез көру керек
        const soonPatterns = [
            /pain.*worsening|severe headache/i,
            /fever.*persistent/i,
            /unexplained weight loss/i,
            /new lump or growth/i,
            /vision changes sudden/i,
            /blood.*urine|blood.*stool/i
        ];
        
        for (const pattern of soonPatterns) {
            if (pattern.test(input)) {
                return {
                    level: 'soon',
                    action: 'Schedule Appointment Soon',
                    instructions: 'See doctor within 24-48 hours.',
                    color: 'info'
                };
            }
        }
        
        // Кәдімгі көру
        return {
            level: 'routine',
            action: 'Schedule Regular Appointment',
            instructions: 'Consult with doctor at your convenience.',
            color: 'success'
        };
    }
}

// Глобальды AI движогі
window.MedicalAI = new MedicalAIEngine();

// DOM дайын болғанда
document.addEventListener('DOMContentLoaded', function() {
    console.log('Medical AI Engine loaded');
    
    // Тарихты жүктеу
    MedicalAI.loadHistory();
    
    // Жедел диагноз функциясы
    window.performQuickTriage = function(inputElementId, resultElementId) {
        const input = document.getElementById(inputElementId)?.value;
        const resultElement = document.getElementById(resultElementId);
        
        if (!input || !resultElement) return;
        
        const triageResult = MedicalAI.quickTriage(input);
        
        resultElement.innerHTML = `
            <div class="alert alert-${triageResult.color}">
                <h5 class="alert-heading">
                    <i class="fas fa-${triageResult.level === 'critical' ? 'ambulance' : 'stethoscope'} me-2"></i>
                    ${triageResult.action}
                </h5>
                <p class="mb-2"><strong>Level:</strong> ${triageResult.level.toUpperCase()}</p>
                <p class="mb-0">${triageResult.instructions}</p>
                ${triageResult.level === 'critical' ? `
                    <hr>
                    <div class="d-grid">
                        <a href="tel:103" class="btn btn-danger">
                            <i class="fas fa-phone me-2"></i> Call 103 Now
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Тарихқа қосу
        MedicalAI.addToHistory({ triage: triageResult }, input);
    };
    
    // Толық талдау функциясы
    window.performFullAnalysis = function(inputElementId, resultElementId) {
        const input = document.getElementById(inputElementId)?.value;
        const resultElement = document.getElementById(resultElementId);
        
        if (!input || !resultElement) return;
        
        // Жүктеу индикаторы
        resultElement.innerHTML = `
            <div class="text-center py-4">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Analyzing symptoms...</span>
                </div>
                <p class="mt-2">AI is analyzing your symptoms...</p>
            </div>
        `;
        
        // Талдау (кейінгі уақытта)
        setTimeout(() => {
            const analysis = MedicalAI.analyzeSymptoms(input);
            const confidence = MedicalAI.calculateConfidence(analysis);
            const formattedResponse = MedicalAI.formatResponse(analysis);
            
            resultElement.innerHTML = `
                <div class="ai-analysis-result">
                    <div class="analysis-header p-3 bg-primary text-white rounded-top">
                        <h5 class="mb-0">
                            <i class="fas fa-robot me-2"></i>
                            AI Medical Analysis
                        </h5>
                        <small>Confidence: ${confidence}%</small>
                    </div>
                    
                    <div class="analysis-body p-3 bg-light">
                        <pre style="white-space: pre-wrap; font-family: inherit;">${formattedResponse}</pre>
                    </div>
                    
                    <div class="analysis-footer p-3 bg-white border-top">
                        <div class="row">
                            <div class="col-md-6">
                                <button class="btn btn-outline-primary w-100" onclick="printAnalysis()">
                                    <i class="fas fa-print me-2"></i> Print
                                </button>
                            </div>
                            <div class="col-md-6 mt-2 mt-md-0">
                                <button class="btn btn-success w-100" onclick="shareAnalysis()">
                                    <i class="fas fa-share-alt me-2"></i> Share
                                </button>
                            </div>
                        </div>
                        
                        <div class="mt-3">
                            <a href="https://wa.me/777781074272?text=AI%20Analysis%20Result:%20${encodeURIComponent(formattedResponse.substring(0, 200))}" 
                               class="btn btn-outline-success w-100" target="_blank">
                                <i class="fab fa-whatsapp me-2"></i> Send to Doctor via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `;
            
            // Тарихқа қосу
            MedicalAI.addToHistory(analysis, input);
            
            // Егер жедел көмек болса
            if (analysis.isEmergency) {
                showEmergencyAlert(analysis);
            }
        }, 2000);
    };
    
    // Жедел көмек ескертуін көрсету
    function showEmergencyAlert(analysis) {
        const alertHTML = `
            <div class="modal fade" id="emergencyAlertModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title">
                                <i class="fas fa-exclamation-triangle me-2"></i>
                                Emergency Alert
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-danger">
                                <h6>🚨 URGENT MEDICAL ATTENTION REQUIRED 🚨</h6>
                                <p class="mt-2">Based on your symptoms, immediate medical attention is needed.</p>
                                
                                <div class="mt-3">
                                    <h6><i class="fas fa-ambulance me-2"></i>Immediate Actions:</h6>
                                    <ol class="mt-2">
                                        <li>Call emergency services: <strong>103</strong></li>
                                        <li>Do not drive yourself</li>
                                        <li>Stay calm and follow instructions</li>
                                        <li>Contact our emergency team</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="mt-3">
                                <h6><i class="fas fa-phone-alt me-2"></i>Emergency Contacts:</h6>
                                <div class="list-group">
                                    <a href="tel:103" class="list-group-item list-group-item-action list-group-item-danger">
                                        <i class="fas fa-ambulance me-2"></i> Call 103 (Ambulance)
                                    </a>
                                    <a href="tel:+77781074272" class="list-group-item list-group-item-action">
                                        <i class="fas fa-phone me-2"></i> TAUP Emergency Line
                                    </a>
                                    <a href="https://wa.me/777781074272?text=EMERGENCY%20HELP%20NEEDED" 
                                       class="list-group-item list-group-item-action list-group-item-success" target="_blank">
                                        <i class="fab fa-whatsapp me-2"></i> WhatsApp Emergency
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="tel:103" class="btn btn-danger">
                                <i class="fas fa-phone me-2"></i> Call 103 Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Модалды терезені жасау
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = alertHTML;
        document.body.appendChild(modalContainer);
        
        // Модалды терезені көрсету
        const modal = new bootstrap.Modal(document.getElementById('emerggencyAlertModal'));
        modal.show();
        
        // Модалды терезені жою
        document.getElementById('emergencyAlertModal').addEventListener('hidden.bs.modal', function() {
            modalContainer.remove();
        });
    }
    
    // Талдауды басып шығару
    window.printAnalysis = function() {
        window.print();
    };
    
    // Талдауды бөлісу
    window.shareAnalysis = function() {
        if (navigator.share) {
            navigator.share({
                title: 'TAUP AI Medical Analysis',
                text: 'Check out my medical analysis from TAUP AI Assistant',
                url: window.location.href
            });
        } else {
            alert('Share feature is not supported in your browser. You can copy the URL manually.');
        }
    };
    
    // AI тарихын көрсету
    window.showAIHistory = function() {
        const history = MedicalAI.loadHistory();
        const historyModal = `
            <div class="modal fade" id="aiHistoryModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">
                                <i class="fas fa-history me-2"></i>
                                AI Consultation History
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            ${history.length === 0 ? 
                                '<p class="text-center py-4">No consultation history found.</p>' : 
                                createHistoryHTML(history)
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            ${history.length > 0 ? `
                                <button type="button" class="btn btn-danger" onclick="clearAIHistory()">
                                    <i class="fas fa-trash me-2"></i> Clear History
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        function createHistoryHTML(history) {
            let html = '<div class="ai-history-list">';
            
            history.reverse().forEach((item, index) => {
                const date = new Date(item.timestamp).toLocaleString();
                html += `
                    <div class="history-item border rounded p-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-muted">${date}</small>
                            <span class="badge bg-${item.analysis.isEmergency ? 'danger' : 'primary'}">
                                ${item.language.toUpperCase()}
                            </span>
                        </div>
                        <p class="mb-2"><strong>Input:</strong> ${item.input}</p>
                        ${item.analysis.triage ? `
                            <div class="alert alert-${item.analysis.triage.color} p-2 mb-0">
                                <strong>Triage:</strong> ${item.analysis.triage.action}
                            </div>
                        ` : ''}
                    </div>
                `;
            });
            
            html += '</div>';
            return html;
        }
        
        // Модалды терезені жасау
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = historyModal;
        document.body.appendChild(modalContainer);
        
        // Модалды терезені көрсету
        const modal = new bootstrap.Modal(document.getElementById('aiHistoryModal'));
        modal.show();
        
        // Модалды терезені жою
        document.getElementById('aiHistoryModal').addEventListener('hidden.bs.modal', function() {
            modalContainer.remove();
        });
    };
    
    // AI тарихын тазарту
    window.clearAIHistory = function() {
        if (confirm('Are you sure you want to clear all AI consultation history?')) {
            MedicalAI.clearHistory();
            const modal = bootstrap.Modal.getInstance(document.getElementById('aiHistoryModal'));
            if (modal) {
                modal.hide();
            }
            alert('AI consultation history has been cleared.');
        }
    };
});

console.log('Medical AI System initialized successfully');