// VCLA Study App - Main Application
class VCLAStudyApp {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.totalAnswered = 0;
        this.missedQuestions = [];
        this.sessionActive = false;
        this.currentDifficulty = 'all';
        this.currentTopic = 'all';
        this.questionCount = 10;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.updateStats();
        this.showWelcomeScreen();
        // Initialize question count options
        setTimeout(() => updateAvailableQuestions(), 100);
    }
    
    showWelcomeScreen() {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
            <div class="welcome-screen fade-in">
                <h2>🌟 Welcome to VCLA Mastery Challenge!</h2>
                <div class="welcome-content">
                    <p>Master the Virginia Communication and Literacy Assessment with our interactive study tool.</p>
                    
                    <div class="features">
                        <div class="feature">
                            <h3>🎯 Adaptive Learning</h3>
                            <p>Questions adapt to your skill level</p>
                        </div>
                        <div class="feature">
                            <h3>📊 Progress Tracking</h3>
                            <p>Monitor your improvement over time</p>
                        </div>
                        <div class="feature">
                            <h3>🧠 Detailed Explanations</h3>
                            <p>Learn from mistakes with step-by-step guidance</p>
                        </div>
                        <div class="feature">
                            <h3>🔀 Customizable Practice</h3>
                            <p>Filter by topic and difficulty level</p>
                        </div>
                    </div>
                    
                    <div class="quick-stats">
                        <div class="quick-stat">
                            <span class="stat-number">${questionBank.length}</span>
                            <span class="stat-desc">Total Questions</span>
                        </div>
                        <div class="quick-stat">
                            <span class="stat-number">${new Set(questionBank.map(q => q.topic)).size}</span>
                            <span class="stat-desc">Topics Covered</span>
                        </div>
                        <div class="quick-stat">
                            <span class="stat-number">4</span>
                            <span class="stat-desc">Difficulty Levels</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add welcome screen styles
        const style = document.createElement('style');
        style.textContent = `
            .welcome-screen {
                text-align: center;
                padding: 20px;
            }
            .welcome-content {
                max-width: 800px;
                margin: 0 auto;
            }
            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .feature {
                background: rgba(255, 255, 255, 0.8);
                padding: 20px;
                border-radius: 10px;
                border: 2px solid rgba(0,0,0,0.1);
            }
            .feature h3 {
                margin-top: 0;
                color: #667eea;
            }
            .quick-stats {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin: 30px 0;
                flex-wrap: wrap;
            }
            .quick-stat {
                text-align: center;
            }
            .stat-number {
                display: block;
                font-size: 2em;
                font-weight: bold;
                color: #667eea;
            }
            .stat-desc {
                font-size: 0.9em;
                color: #666;
            }
        `;
        document.head.appendChild(style);
    }
    
    startSession() {
        this.sessionActive = true;
        this.score = 0;
        this.streak = 0;
        this.totalAnswered = 0;
        this.missedQuestions = [];
        this.currentQuestionIndex = 0;
        
        // Get filtered questions
        const availableQuestions = this.getFilteredQuestions();
        
        if (availableQuestions.length === 0) {
            alert('No questions match your current filters. Please adjust your selections.');
            return;
        }
        
        // Get question count from selector
        const questionCountSelect = document.getElementById('questionCountSelect');
        const selectedCount = questionCountSelect.value;
        
        // Shuffle all available questions first
        const shuffledQuestions = shuffleArray(availableQuestions);
        
        // Select the specified number of questions
        if (selectedCount === 'all') {
            this.currentQuestions = shuffledQuestions;
        } else {
            const count = parseInt(selectedCount);
            this.currentQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
        }
        
        // Show info about selected questions
        this.showSessionInfo();
        
        this.updateStats();
        this.displayCurrentQuestion();
        
        // Show navigation
        document.getElementById('startBtn').style.display = 'none';
        this.updateNavigation();
    }
    
    showSessionInfo() {
        const difficulty = this.currentDifficulty === 'all' ? 'All Levels' : this.formatDifficulty(this.currentDifficulty);
        const topic = this.currentTopic === 'all' ? 'All Topics' : this.formatTopicName(this.currentTopic);
        const count = this.currentQuestions.length;
        
        // Create session info display
        const sessionInfo = document.createElement('div');
        sessionInfo.id = 'sessionInfo';
        sessionInfo.className = 'session-info fade-in';
        sessionInfo.innerHTML = `
            <div class="session-info-content">
                <h3>🚀 Session Started!</h3>
                <div class="session-details">
                    <div class="session-detail">
                        <strong>Questions:</strong> ${count}
                    </div>
                    <div class="session-detail">
                        <strong>Difficulty:</strong> ${difficulty}
                    </div>
                    <div class="session-detail">
                        <strong>Topic:</strong> ${topic}
                    </div>
                </div>
                <p class="session-message">Good luck! Take your time and learn from each explanation.</p>
            </div>
        `;
        
        // Insert before question container
        const container = document.querySelector('.container');
        const questionContainer = document.getElementById('questionContainer');
        container.insertBefore(sessionInfo, questionContainer);
        
        // Remove after 4 seconds
        setTimeout(() => {
            if (sessionInfo && sessionInfo.parentNode) {
                sessionInfo.remove();
            }
        }, 4000);
        
        // Add session info styles
        this.addSessionInfoStyles();
    }
    
    formatDifficulty(difficulty) {
        return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    }
    
    addSessionInfoStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .session-info {
                background: linear-gradient(45deg, #48bb78 0%, #38a169 100%);
                color: white;
                padding: 20px;
                border-radius: 10px;
                margin: 20px 0;
                text-align: center;
                border: 2px solid rgba(255, 255, 255, 0.2);
            }
            
            .session-info-content h3 {
                color: white;
                margin-bottom: 15px;
                font-size: 1.4em;
            }
            
            .session-details {
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
                margin: 15px 0;
            }
            
            .session-detail {
                background: rgba(255, 255, 255, 0.2);
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 0.95em;
            }
            
            .session-message {
                margin: 15px 0 5px 0;
                font-style: italic;
                opacity: 0.9;
            }
            
            @media (max-width: 768px) {
                .session-details {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .session-detail {
                    margin: 0 auto;
                    width: fit-content;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    getFilteredQuestions() {
        return getFilteredQuestions(this.currentDifficulty, this.currentTopic);
    }
    
    displayCurrentQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.completeSession();
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const container = document.getElementById('questionContainer');
        
        let choicesHtml = '';
        question.choices.forEach((choice, index) => {
            choicesHtml += `
                <div class="choice" onclick="app.selectAnswer(${index})">
                    ${String.fromCharCode(65 + index)}) ${choice}
                </div>
            `;
        });
        
        let originalSentenceHtml = '';
        if (question.originalSentence) {
            originalSentenceHtml = `
                <div class="original-sentence">
                    <strong>Original:</strong> "${question.originalSentence}"
                </div>
            `;
        }
        
        container.innerHTML = `
            <div class="slide-up">
                <div class="question-header">
                    ${this.getTopicIcon(question.topic)} ${this.formatTopicName(question.topic).toUpperCase()} - Question ${this.currentQuestionIndex + 1}
                    <span class="difficulty-badge">${question.difficulty.toUpperCase()}</span>
                </div>
                <div class="question-text">
                    ${question.question}
                    ${originalSentenceHtml}
                </div>
                <div class="choices">
                    ${choicesHtml}
                </div>
                <div class="step-by-step" id="explanation" style="display: none;">
                    ${this.buildExplanation(question)}
                </div>
            </div>
        `;
        
        this.updateProgress();
    }
    
    selectAnswer(choiceIndex) {
        if (!this.sessionActive) return;
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const choices = document.querySelectorAll('.choice');
        const explanation = document.getElementById('explanation');
        const isCorrect = choiceIndex === question.correct;
        
        // Mark the selected choice
        choices[choiceIndex].classList.add('selected');
        choices[choiceIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Show correct answer if wrong was selected
        if (!isCorrect) {
            choices[question.correct].classList.add('correct');
            this.missedQuestions.push({
                question: question,
                userAnswer: choiceIndex,
                correctAnswer: question.correct
            });
            this.streak = 0;
        } else {
            this.score++;
            this.streak++;
        }
        
        this.totalAnswered++;
        
        // Disable all choices
        choices.forEach(choice => {
            choice.style.pointerEvents = 'none';
        });
        
        // Show explanation
        explanation.style.display = 'block';
        
        this.updateStats();
        this.updateNavigation();
        
        // Show navigation after answering
        this.updateNavigation();
        
        // If this is the last question, show final review after delay
        if (this.currentQuestionIndex >= this.currentQuestions.length - 1) {
            setTimeout(() => {
                this.showFinalReview();
            }, 2000);
        }
    }
    
    buildExplanation(question) {
        let stepsHtml = '';
        
        question.explanation.steps.forEach(step => {
            const stepClass = this.getStepClass(step.type);
            stepsHtml += `
                <div class="step">
                    <span class="step-number">${step.number}</span>
                    <div class="step-content">
                        <div class="step-title">${step.title}</div>
                        <div class="${stepClass}">
                            ${step.content}
                        </div>
                    </div>
                </div>
            `;
        });
        
        const reasoningHtml = question.reasoning ? `
            <div class="reasoning-section">
                <div class="reasoning-header">💡 Why This Answer is Correct</div>
                <div class="reasoning-content">${question.reasoning}</div>
            </div>
        ` : '';

        return `
            ${reasoningHtml}
            <div class="step-header">🎯 ${question.explanation.title}</div>
            ${stepsHtml}
        `;
    }
    
    getStepClass(type) {
        const classes = {
            'thinking': 'thinking-process',
            'correct': 'correct-highlight',
            'mistake': 'mistake-highlight',
            'tip': 'pro-tip'
        };
        return classes[type] || '';
    }
    
    getTopicIcon(topic) {
        const icons = {
            'pronoun-agreement': '🔴',
            'modifier-placement': '🟣',
            'sentence-combining': '🔵',
            'subject-verb': '🟢',
            'parallel-structure': '🟡',
            'comma-usage': '🟠',
            'mechanics': '🔧',
            'word-usage': '💭'
        };
        return icons[topic] || '📝';
    }
    
    formatTopicName(topic) {
        return topic.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.displayCurrentQuestion();
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }
    
    updateStats() {
        document.getElementById('score').textContent = `${this.score}/${this.totalAnswered}`;
        document.getElementById('streak').textContent = `${this.streak} ${this.streak > 0 ? '🔥' : ''}`;
        
        const accuracy = this.totalAnswered > 0 ? Math.round((this.score / this.totalAnswered) * 100) : 0;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
    }
    
    updateProgress() {
        if (this.currentQuestions.length > 0) {
            const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
            document.getElementById('progress').style.width = progress + '%';
            document.getElementById('progressText').textContent = 
                `${Math.round(progress)}% Complete (${this.currentQuestionIndex + 1}/${this.currentQuestions.length})`;
        }
    }
    
    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (this.sessionActive && this.totalAnswered > 0) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'inline-block' : 'none';
            nextBtn.style.display = this.currentQuestionIndex < this.currentQuestions.length - 1 ? 'inline-block' : 'none';
        }
    }
    
    showFinalReview() {
        this.sessionActive = false;
        
        // Hide question container and navigation
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        
        // Show comprehensive review
        const accuracy = this.totalAnswered > 0 ? Math.round((this.score / this.totalAnswered) * 100) : 0;
        
        const reviewContainer = document.createElement('div');
        reviewContainer.id = 'finalReview';
        reviewContainer.className = 'final-review-container';
        reviewContainer.innerHTML = `
            <div class="final-review-header">
                <h2>🎉 Quiz Complete! Let's Review</h2>
                <div class="final-stats-summary">
                    <div class="stat-item">
                        <span class="stat-number">${this.score}</span>
                        <span class="stat-label">Correct</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${this.totalAnswered - this.score}</span>
                        <span class="stat-label">Missed</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${accuracy}%</span>
                        <span class="stat-label">Accuracy</span>
                    </div>
                </div>
            </div>
            
            <div class="review-sections">
                ${this.missedQuestions.length > 0 ? this.buildMissedQuestionsReview() : ''}
                ${this.buildAllQuestionsReview()}
            </div>
            
            <div class="final-actions">
                <button onclick="app.restartQuiz()" class="action-btn primary">🔄 Practice Again</button>
                <button onclick="app.exportResults()" class="action-btn">📊 Export Results</button>
                <button onclick="app.resetSession()" class="action-btn">🏠 Back to Home</button>
            </div>
        `;
        
        // Insert after question container
        const container = document.querySelector('.container');
        const questionContainer = document.getElementById('questionContainer');
        container.insertBefore(reviewContainer, questionContainer.nextSibling);
        
        // Add review styles
        this.addFinalReviewStyles();
    }
    
    buildMissedQuestionsReview() {
        if (this.missedQuestions.length === 0) return '';
        
        let html = `
            <div class="review-section missed-questions">
                <h3>📝 Questions to Review (${this.missedQuestions.length})</h3>
                <p class="section-description">Let's understand what went wrong and learn from these questions:</p>
        `;
        
        this.missedQuestions.forEach((missed, index) => {
            const question = missed.question;
            html += `
                <div class="review-question-card missed">
                    <div class="question-number">Question ${index + 1}</div>
                    <div class="question-topic">${this.getTopicIcon(question.topic)} ${this.formatTopicName(question.topic)} - ${question.difficulty.toUpperCase()}</div>
                    <div class="question-text">${question.question}</div>
                    ${question.originalSentence ? `<div class="original-sentence">${question.originalSentence}</div>` : ''}
                    
                    <div class="answer-comparison">
                        <div class="your-answer incorrect">
                            <strong>Your Answer:</strong> ${String.fromCharCode(65 + missed.userAnswer)}) ${question.choices[missed.userAnswer]}
                        </div>
                        <div class="correct-answer correct">
                            <strong>Correct Answer:</strong> ${String.fromCharCode(65 + missed.correctAnswer)}) ${question.choices[missed.correctAnswer]}
                        </div>
                    </div>
                    
                    <div class="explanation-review">
                        ${this.buildExplanation(question)}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    buildAllQuestionsReview() {
        let html = `
            <div class="review-section all-questions">
                <h3>📚 Complete Question Review</h3>
                <p class="section-description">Review all questions from this session:</p>
        `;
        
        this.currentQuestions.forEach((question, index) => {
            const wasAnswered = index <= this.currentQuestionIndex;
            const userAnswerIndex = this.findUserAnswer(question, index);
            const isCorrect = userAnswerIndex === question.correct;
            
            if (!wasAnswered) return;
            
            html += `
                <div class="review-question-card ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="question-number">Question ${index + 1}</div>
                    <div class="question-topic">${this.getTopicIcon(question.topic)} ${this.formatTopicName(question.topic)} - ${question.difficulty.toUpperCase()}</div>
                    <div class="question-text">${question.question}</div>
                    ${question.originalSentence ? `<div class="original-sentence">${question.originalSentence}</div>` : ''}
                    
                    <div class="answer-summary ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? 
                            `<div class="status-correct">✅ Correct! You chose: ${String.fromCharCode(65 + userAnswerIndex)}) ${question.choices[userAnswerIndex]}</div>` :
                            `<div class="status-incorrect">❌ Your answer: ${String.fromCharCode(65 + userAnswerIndex)}) ${question.choices[userAnswerIndex]}<br>
                             ✅ Correct answer: ${String.fromCharCode(65 + question.correct)}) ${question.choices[question.correct]}</div>`
                        }
                    </div>
                    
                    <div class="explanation-review">
                        ${this.buildExplanation(question)}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }
    
    findUserAnswer(question, questionIndex) {
        // Find the user's answer for this question
        const missed = this.missedQuestions.find(m => m.question.id === question.id);
        if (missed) {
            return missed.userAnswer;
        }
        // If not in missed questions, they got it right
        return question.correct;
    }
    
    addFinalReviewStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .final-review-container {
                margin: 30px 0;
                padding: 30px;
                background: #ffffff;
                border-radius: 12px;
                border: 2px solid #e2e8f0;
            }
            
            .final-review-header {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .final-review-header h2 {
                color: #2d3748;
                font-size: 2.2em;
                margin-bottom: 20px;
            }
            
            .final-stats-summary {
                display: flex;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
            }
            
            .stat-item {
                text-align: center;
                padding: 15px;
                background: #f7fafc;
                border-radius: 8px;
                min-width: 80px;
            }
            
            .stat-number {
                display: block;
                font-size: 2em;
                font-weight: bold;
                color: #4299e1;
            }
            
            .stat-label {
                font-size: 0.9em;
                color: #4a5568;
            }
            
            .review-sections {
                margin: 30px 0;
            }
            
            .review-section {
                margin: 30px 0;
            }
            
            .review-section h3 {
                color: #2d3748;
                font-size: 1.5em;
                margin-bottom: 10px;
            }
            
            .section-description {
                color: #4a5568;
                margin-bottom: 20px;
                font-size: 1.1em;
            }
            
            .review-question-card {
                background: #f7fafc;
                border-radius: 10px;
                padding: 20px;
                margin: 20px 0;
                border-left: 5px solid #cbd5e0;
            }
            
            .review-question-card.missed {
                border-left-color: #fc8181;
                background: #fed7d7;
            }
            
            .review-question-card.correct {
                border-left-color: #48bb78;
                background: #f0fff4;
            }
            
            .review-question-card.incorrect {
                border-left-color: #fc8181;
                background: #fed7d7;
            }
            
            .question-number {
                font-weight: bold;
                color: #2d3748;
                font-size: 1.1em;
                margin-bottom: 5px;
            }
            
            .question-topic {
                color: #805ad5;
                font-weight: 600;
                margin-bottom: 10px;
                font-size: 0.9em;
            }
            
            .answer-comparison, .answer-summary {
                margin: 15px 0;
                padding: 15px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
            }
            
            .your-answer.incorrect {
                color: #742a2a;
                padding: 8px;
                background: rgba(254, 178, 178, 0.5);
                border-radius: 5px;
                margin-bottom: 8px;
            }
            
            .correct-answer.correct {
                color: #276749;
                padding: 8px;
                background: rgba(154, 230, 180, 0.5);
                border-radius: 5px;
            }
            
            .status-correct {
                color: #276749;
                font-weight: 600;
                background: rgba(154, 230, 180, 0.5);
                padding: 10px;
                border-radius: 6px;
            }
            
            .status-incorrect {
                color: #742a2a;
                font-weight: 600;
                background: rgba(254, 178, 178, 0.5);
                padding: 10px;
                border-radius: 6px;
            }
            
            .explanation-review {
                margin-top: 15px;
            }
            
            .final-actions {
                text-align: center;
                margin-top: 30px;
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
            }
            
            .action-btn.primary {
                background: #48bb78;
            }
            
            .action-btn.primary:hover {
                background: #38a169;
            }
            
            @media (max-width: 768px) {
                .final-stats-summary {
                    gap: 15px;
                }
                
                .final-actions {
                    flex-direction: column;
                    align-items: center;
                }
                
                .review-question-card {
                    padding: 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    restartQuiz() {
        // Remove the final review
        const finalReview = document.getElementById('finalReview');
        if (finalReview) {
            finalReview.remove();
        }
        
        // Reset and start new session
        this.sessionActive = true;
        this.score = 0;
        this.streak = 0;
        this.totalAnswered = 0;
        this.missedQuestions = [];
        this.currentQuestionIndex = 0;
        
        // Get filtered questions and shuffle  
        const availableQuestions = this.getFilteredQuestions();
        const shuffledQuestions = shuffleArray(availableQuestions);
        
        // Get question count from selector
        const questionCountSelect = document.getElementById('questionCountSelect');
        const selectedCount = questionCountSelect.value;
        
        // Select the specified number of questions
        if (selectedCount === 'all') {
            this.currentQuestions = shuffledQuestions;
        } else {
            const count = parseInt(selectedCount);
            this.currentQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
        }
        
        // Show question container
        document.getElementById('questionContainer').style.display = 'block';
        
        this.updateStats();
        this.displayCurrentQuestion();
        this.updateNavigation();
    }
    
    reviewMissedQuestions() {
        if (this.missedQuestions.length === 0) {
            alert('No missed questions to review!');
            return;
        }
        
        document.getElementById('completion').style.display = 'none';
        document.getElementById('reviewMode').style.display = 'block';
        
        let reviewHtml = '';
        this.missedQuestions.forEach((missed, index) => {
            const question = missed.question;
            reviewHtml += `
                <div class="review-question">
                    <h4>Question ${index + 1}: ${this.formatTopicName(question.topic)}</h4>
                    <div class="review-question-text">${question.question}</div>
                    <div class="review-choices">
                        <div class="review-choice incorrect">Your answer: ${String.fromCharCode(65 + missed.userAnswer)}) ${question.choices[missed.userAnswer]}</div>
                        <div class="review-choice correct">Correct answer: ${String.fromCharCode(65 + missed.correctAnswer)}) ${question.choices[missed.correctAnswer]}</div>
                    </div>
                    ${this.buildExplanation(question)}
                </div>
            `;
        });
        
        document.getElementById('reviewContent').innerHTML = reviewHtml;
        
        // Add review styles
        const style = document.createElement('style');
        style.textContent = `
            .review-question {
                background: rgba(255, 255, 255, 0.9);
                padding: 20px;
                margin: 15px 0;
                border-radius: 10px;
                border-left: 5px solid #ff9800;
            }
            .review-question-text {
                margin: 10px 0;
                padding: 10px;
                background: rgba(255, 248, 225, 0.9);
                border-radius: 5px;
            }
            .review-choice {
                padding: 8px;
                margin: 5px 0;
                border-radius: 5px;
            }
            .review-choice.incorrect {
                background: rgba(244, 67, 54, 0.2);
                border-left: 3px solid #f44336;
            }
            .review-choice.correct {
                background: rgba(76, 175, 80, 0.2);
                border-left: 3px solid #4caf50;
            }
        `;
        document.head.appendChild(style);
    }
    
    exitReview() {
        document.getElementById('reviewMode').style.display = 'none';
        document.getElementById('completion').style.display = 'block';
    }
    
    exportResults() {
        const accuracy = this.totalAnswered > 0 ? Math.round((this.score / this.totalAnswered) * 100) : 0;
        
        const results = {
            timestamp: new Date().toISOString(),
            score: this.score,
            totalQuestions: this.totalAnswered,
            accuracy: accuracy,
            streak: this.streak,
            difficulty: this.currentDifficulty,
            topic: this.currentTopic,
            missedQuestions: this.missedQuestions.map(m => ({
                topic: m.question.topic,
                difficulty: m.question.difficulty,
                question: m.question.question,
                userAnswer: m.userAnswer,
                correctAnswer: m.correctAnswer
            }))
        };
        
        const dataStr = JSON.stringify(results, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `vcla-study-results-${new Date().toISOString().slice(0,10)}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    
    resetSession() {
        this.sessionActive = false;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.totalAnswered = 0;
        this.missedQuestions = [];
        
        // Remove final review if it exists
        const finalReview = document.getElementById('finalReview');
        if (finalReview) {
            finalReview.remove();
        }
        
        document.getElementById('completion').style.display = 'none';
        document.getElementById('reviewMode').style.display = 'none';
        document.getElementById('questionContainer').style.display = 'block';
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        
        this.updateStats();
        this.showWelcomeScreen();
        
        // Reset progress bar
        document.getElementById('progress').style.width = '0%';
        document.getElementById('progressText').textContent = '0% Complete';
    }
    
    shuffleQuestions() {
        if (this.sessionActive && this.currentQuestions.length > 0) {
            // Store current progress
            const answered = this.currentQuestionIndex;
            
            // Reshuffle remaining questions
            const remaining = this.currentQuestions.slice(this.currentQuestionIndex + 1);
            const shuffledRemaining = shuffleArray(remaining);
            
            // Reconstruct questions array
            this.currentQuestions = [
                ...this.currentQuestions.slice(0, this.currentQuestionIndex + 1),
                ...shuffledRemaining
            ];
            
            alert(`Shuffled ${remaining.length} remaining questions!`);
        } else {
            alert('Start a session first to shuffle questions.');
        }
    }
}

// Global functions for HTML event handlers
function changeDifficulty() {
    const select = document.getElementById('difficultySelect');
    app.currentDifficulty = select.value;
    updateAvailableQuestions();
}

function changeTopic() {
    const select = document.getElementById('topicSelect');
    app.currentTopic = select.value;
    updateAvailableQuestions();
}

function changeQuestionCount() {
    const select = document.getElementById('questionCountSelect');
    app.questionCount = select.value;
    updateAvailableQuestions();
}

function updateAvailableQuestions() {
    // Update the welcome screen with current filter info
    if (!app.sessionActive) {
        const availableQuestions = app.getFilteredQuestions();
        const questionCountSelect = document.getElementById('questionCountSelect');
        const selectedCount = questionCountSelect.value;
        
        // Update question count options based on available questions
        updateQuestionCountOptions(availableQuestions.length);
        
        // Show available questions count in welcome screen
        updateWelcomeScreen(availableQuestions.length, selectedCount);
    }
}

function updateQuestionCountOptions(availableCount) {
    const select = document.getElementById('questionCountSelect');
    const currentValue = select.value;
    
    // Clear existing options except for "all"
    select.innerHTML = '';
    
    // Add options based on available questions
    const counts = [5, 10, 15, 20];
    counts.forEach(count => {
        if (count <= availableCount) {
            const option = document.createElement('option');
            option.value = count;
            option.textContent = `${count} Questions`;
            select.appendChild(option);
        }
    });
    
    // Always add "all" option
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = `All Available (${availableCount})`;
    select.appendChild(allOption);
    
    // Restore previous selection if still valid
    if ([...select.options].some(option => option.value === currentValue)) {
        select.value = currentValue;
    } else {
        // Default to 10 or all if less than 10 available
        select.value = availableCount >= 10 ? '10' : 'all';
    }
}

function updateWelcomeScreen(availableCount, selectedCount) {
    const container = document.getElementById('questionContainer');
    if (container.querySelector('.welcome-screen')) {
        const countDisplay = selectedCount === 'all' ? availableCount : Math.min(parseInt(selectedCount), availableCount);
        
        // Update the quick stats
        const statNumbers = container.querySelectorAll('.stat-number');
        if (statNumbers.length >= 1) {
            statNumbers[0].textContent = countDisplay; // Total Questions stat
        }
    }
}

function startSession() {
    app.startSession();
}

function nextQuestion() {
    app.nextQuestion();
}

function previousQuestion() {
    app.previousQuestion();
}

function shuffleQuestions() {
    app.shuffleQuestions();
}

function resetSession() {
    app.resetSession();
}

function reviewMissedQuestions() {
    app.reviewMissedQuestions();
}

function exitReview() {
    app.exitReview();
}

function exportResults() {
    app.exportResults();
}

function restartQuiz() {
    app.restartQuiz();
}

// Initialize the app when the page loads
let app;
document.addEventListener('DOMContentLoaded', function() {
    app = new VCLAStudyApp();
});