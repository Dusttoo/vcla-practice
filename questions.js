// VCLA Question Database
const questionBank = [
    {
        id: 1,
        topic: "pronoun-agreement",
        difficulty: "expert",
        type: "multiple-choice",
        question: "Choose the sentence with correct pronoun usage:",
        choices: [
            "Each of the students should bring their own calculator to the exam.",
            "Each of the students should bring his or her own calculator to the exam.",
            "Each of the students should bring there own calculator to the exam.",
            "Each of the students should bring its own calculator to the exam."
        ],
        correct: 1,
        explanation: {
            title: "Pronoun-Antecedent Agreement",
            steps: [
                {
                    number: 1,
                    title: "Identify the antecedent",
                    content: "The key word: 'Each' - This is SINGULAR, not 'students' (which is just part of a prepositional phrase)",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Singular antecedents need singular pronouns",
                    content: "Option B: 'Each... his or her' → Singular pronoun matches singular antecedent",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Common errors",
                    content: "Option A: 'Each... their' → PLURAL pronoun with SINGULAR antecedent (common error!)",
                    type: "mistake"
                },
                {
                    number: 4,
                    title: "Pro tip",
                    content: "Words like 'each,' 'every,' 'anyone,' 'someone' are ALWAYS singular!",
                    type: "tip"
                }
            ]
        }
    },
    {
        id: 2,
        topic: "modifier-placement",
        difficulty: "hard",
        type: "multiple-choice",
        question: "Which sentence has correct modifier placement?",
        choices: [
            "Walking down the hallway, the fire alarm suddenly started ringing.",
            "The fire alarm suddenly started ringing walking down the hallway.",
            "Walking down the hallway, I heard the fire alarm suddenly start ringing.",
            "The fire alarm, walking down the hallway, suddenly started ringing."
        ],
        correct: 2,
        explanation: {
            title: "Dangling Modifier Detection",
            steps: [
                {
                    number: 1,
                    title: "Identify the modifier",
                    content: "'Walking down the hallway' → This describes WHO is doing the walking",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "The modifier rule",
                    content: "The word immediately after the modifier must be WHO is doing the action",
                    type: "thinking"
                },
                {
                    number: 3,
                    title: "Test each option",
                    content: "Options A & D: Fire alarms don't walk! Option C: 'Walking..., I heard...' → I am the one walking ✓",
                    type: "correct"
                },
                {
                    number: 4,
                    title: "Memory trick",
                    content: "After a modifier, ask 'WHO is doing this?' That person must come immediately next!",
                    type: "tip"
                }
            ]
        }
    },
    {
        id: 3,
        topic: "sentence-combining",
        difficulty: "hard",
        type: "sentence-combining",
        question: "Combine these sentences MOST effectively:",
        originalSentence: "The library was built in 1952. It serves over 50,000 residents. The residents live in the surrounding area. The library offers many programs.",
        choices: [
            "The library was built in 1952, and it serves over 50,000 residents who live in the surrounding area, and it offers many programs.",
            "Built in 1952, the library serves over 50,000 area residents and offers many programs.",
            "The library that was built in 1952 serves over 50,000 residents living in the surrounding area and offers many programs.",
            "In 1952, the library was built to serve over 50,000 residents in the surrounding area, and it offers many programs."
        ],
        correct: 1,
        explanation: {
            title: "Sentence Combining Mastery",
            steps: [
                {
                    number: 1,
                    title: "Goal: Eliminate redundancy",
                    content: "Four sentences → One powerful sentence. Cut repeated subjects and unnecessary words",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Why Option B wins",
                    content: "Participial phrase: 'Built in 1952' (eliminates 'was'). Efficient: 'area residents' (eliminates 'surrounding area'). Word count: 13 words vs. 26+ in others!",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Why others fail",
                    content: "Option A: Overuses 'and' + keeps redundancy. Option C: Wordy clause 'that was built'. Option D: Changes meaning + keeps wordiness",
                    type: "mistake"
                }
            ]
        }
    },
    {
        id: 4,
        topic: "subject-verb",
        difficulty: "expert",
        type: "multiple-choice",
        question: "Choose the sentence with correct subject-verb agreement:",
        choices: [
            "The group of students, along with their teacher, are planning a field trip.",
            "The group of students, along with their teacher, is planning a field trip.",
            "The group of students, along with their teacher, were planning a field trip.",
            "The groups of students, along with their teacher, is planning a field trip."
        ],
        correct: 1,
        explanation: {
            title: "Subject-Verb Agreement Traps",
            steps: [
                {
                    number: 1,
                    title: "Find the REAL subject",
                    content: "'The group' is the subject (singular). 'of students' = prepositional phrase (ignore). 'along with their teacher' = interrupting phrase (ignore)",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Strip away distractors",
                    content: "Core sentence: 'The group... is planning'",
                    type: "thinking"
                },
                {
                    number: 3,
                    title: "Why others are wrong",
                    content: "Option A: 'group... are' → Wrong. Option C: 'group... were' → Wrong tense + plurality. Option D: 'groups... is' → Backwards error",
                    type: "mistake"
                },
                {
                    number: 4,
                    title: "Pro tip",
                    content: "'along with,' 'as well as' → These DON'T change the subject!",
                    type: "tip"
                }
            ]
        }
    },
    {
        id: 5,
        topic: "parallel-structure",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Which sentence demonstrates correct parallel structure?",
        choices: [
            "She enjoys reading, writing, and to paint in her free time.",
            "She enjoys reading, writing, and painting in her free time.",
            "She enjoys to read, writing, and painting in her free time.",
            "She enjoys reading, to write, and painting in her free time."
        ],
        correct: 1,
        explanation: {
            title: "Parallel Structure Mastery",
            steps: [
                {
                    number: 1,
                    title: "Identify the series",
                    content: "Three activities listed after 'enjoys': reading, writing, painting",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Check consistency",
                    content: "All items must follow the same grammatical pattern: gerund + gerund + gerund (-ing forms)",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Common error",
                    content: "Mixing gerunds (-ing) with infinitives (to + verb) breaks parallelism",
                    type: "mistake"
                }
            ]
        }
    },
    {
        id: 6,
        topic: "comma-usage",
        difficulty: "medium",
        type: "multiple-choice",
        question: "Which sentence uses commas correctly?",
        choices: [
            "Before leaving the house I always check that I have my keys, wallet and phone.",
            "Before leaving the house, I always check that I have my keys, wallet, and phone.",
            "Before leaving the house, I always check that I have my keys wallet, and phone.",
            "Before leaving, the house I always check that I have my keys, wallet, and phone."
        ],
        correct: 1,
        explanation: {
            title: "Comma Usage Rules",
            steps: [
                {
                    number: 1,
                    title: "Introductory phrase",
                    content: "'Before leaving the house' is an introductory phrase and needs a comma after it",
                    type: "correct"
                },
                {
                    number: 2,
                    title: "Series comma",
                    content: "Items in a series (keys, wallet, and phone) should be separated by commas, including the Oxford comma",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Avoid comma splicing",
                    content: "Don't separate closely related words or phrases unnecessarily",
                    type: "tip"
                }
            ]
        }
    },
    {
        id: 7,
        topic: "pronoun-agreement",
        difficulty: "easy",
        type: "multiple-choice",
        question: "Select the sentence with proper pronoun usage:",
        choices: [
            "Every student must bring their textbook to class.",
            "Every student must bring his or her textbook to class.",
            "Every student must bring there textbook to class.",
            "Every student must bring it's textbook to class."
        ],
        correct: 1,
        explanation: {
            title: "Basic Pronoun Agreement",
            steps: [
                {
                    number: 1,
                    title: "Identify the antecedent",
                    content: "'Every student' is singular and refers to a person",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Match singular with singular",
                    content: "'his or her' correctly matches the singular antecedent 'every student'",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Common errors",
                    content: "'their' is plural, 'there' indicates location, 'it's' is for objects",
                    type: "mistake"
                }
            ]
        }
    },
    {
        id: 8,
        topic: "modifier-placement",
        difficulty: "easy",
        type: "multiple-choice",
        question: "Which sentence places the modifier correctly?",
        choices: [
            "Running quickly, the bus was barely caught by Sarah.",
            "The bus was barely caught running quickly by Sarah.",
            "Running quickly, Sarah barely caught the bus.",
            "Sarah barely caught running quickly the bus."
        ],
        correct: 2,
        explanation: {
            title: "Basic Modifier Placement",
            steps: [
                {
                    number: 1,
                    title: "Find the modifier",
                    content: "'Running quickly' describes who is running",
                    type: "thinking"
                },
                {
                    number: 2,
                    title: "Place correctly",
                    content: "The person doing the running (Sarah) should immediately follow the modifier",
                    type: "correct"
                },
                {
                    number: 3,
                    title: "Avoid confusion",
                    content: "Buses don't run quickly in this context - people do!",
                    type: "tip"
                }
            ]
        }
    }
];

// Question management utilities
function getQuestionsByDifficulty(difficulty) {
    if (difficulty === 'all') return questionBank;
    return questionBank.filter(q => q.difficulty === difficulty);
}

function getQuestionsByTopic(topic) {
    if (topic === 'all') return questionBank;
    return questionBank.filter(q => q.topic === topic);
}

function getFilteredQuestions(difficulty = 'all', topic = 'all') {
    let questions = questionBank;
    
    if (difficulty !== 'all') {
        questions = questions.filter(q => q.difficulty === difficulty);
    }
    
    if (topic !== 'all') {
        questions = questions.filter(q => q.topic === topic);
    }
    
    return questions;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Easy way to add new questions - just add to this array!
function addNewQuestion(question) {
    const newId = Math.max(...questionBank.map(q => q.id)) + 1;
    questionBank.push({
        id: newId,
        ...question
    });
}

/* 
Example of how to add a new question:

addNewQuestion({
    topic: "comma-usage",
    difficulty: "hard", 
    type: "multiple-choice",
    question: "Your question here?",
    choices: [
        "Choice A",
        "Choice B", 
        "Choice C",
        "Choice D"
    ],
    correct: 1, // 0-based index (so 1 = Choice B)
    explanation: {
        title: "Your explanation title",
        steps: [
            {
                number: 1,
                title: "Step 1 title",
                content: "Step 1 explanation",
                type: "thinking" // or "correct", "mistake", "tip"
            }
        ]
    }
});
*/