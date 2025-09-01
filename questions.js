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
      "Each of the students should bring its own calculator to the exam.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'each' is a singular indefinite pronoun that requires a singular pronoun. 'His or her' is the appropriate singular form, while 'their' is plural and doesn't agree with the singular antecedent 'each.'",
    explanation: {
      title: "Pronoun-Antecedent Agreement",
      steps: [
        {
          number: 1,
          title: "Identify the antecedent",
          content:
            "The key word: 'Each' - This is SINGULAR, not 'students' (which is just part of a prepositional phrase)",
          type: "thinking",
        },
        {
          number: 2,
          title: "Singular antecedents need singular pronouns",
          content:
            "Option B: 'Each... his or her' → Singular pronoun matches singular antecedent",
          type: "correct",
        },
        {
          number: 3,
          title: "Common errors",
          content:
            "Option A: 'Each... their' → PLURAL pronoun with SINGULAR antecedent (common error!)",
          type: "mistake",
        },
        {
          number: 4,
          title: "Pro tip",
          content:
            "Words like 'each,' 'every,' 'anyone,' 'someone' are ALWAYS singular!",
          type: "tip",
        },
      ],
    },
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
      "The fire alarm, walking down the hallway, suddenly started ringing.",
    ],
    correct: 2,
    reasoning:
      "Option C is correct because the person doing the walking (I) immediately follows the participial phrase 'Walking down the hallway.' This prevents the dangling modifier error that occurs when the fire alarm appears to be doing the walking.",
    explanation: {
      title: "Dangling Modifier Detection",
      steps: [
        {
          number: 1,
          title: "Identify the modifier",
          content:
            "'Walking down the hallway' → This describes WHO is doing the walking",
          type: "thinking",
        },
        {
          number: 2,
          title: "The modifier rule",
          content:
            "The word immediately after the modifier must be WHO is doing the action",
          type: "thinking",
        },
        {
          number: 3,
          title: "Test each option",
          content:
            "Options A & D: Fire alarms don't walk! Option C: 'Walking..., I heard...' → I am the one walking ✓",
          type: "correct",
        },
        {
          number: 4,
          title: "Memory trick",
          content:
            "After a modifier, ask 'WHO is doing this?' That person must come immediately next!",
          type: "tip",
        },
      ],
    },
  },
  {
    id: 3,
    topic: "sentence-combining",
    difficulty: "hard",
    type: "sentence-combining",
    question: "Combine these sentences MOST effectively:",
    originalSentence:
      "The library was built in 1952. It serves over 50,000 residents. The residents live in the surrounding area. The library offers many programs.",
    choices: [
      "The library was built in 1952, and it serves over 50,000 residents who live in the surrounding area, and it offers many programs.",
      "Built in 1952, the library serves over 50,000 area residents and offers many programs.",
      "The library that was built in 1952 serves over 50,000 residents living in the surrounding area and offers many programs.",
      "In 1952, the library was built to serve over 50,000 residents in the surrounding area, and it offers many programs.",
    ],
    correct: 1,
    reasoning:
      "Option B is the most effective combination because it uses a participial phrase ('Built in 1952') to eliminate wordiness, combines related ideas efficiently ('area residents'), and creates one concise sentence instead of four choppy ones, reducing the word count significantly.",
    explanation: {
      title: "Sentence Combining Mastery",
      steps: [
        {
          number: 1,
          title: "Goal: Eliminate redundancy",
          content:
            "Four sentences → One powerful sentence. Cut repeated subjects and unnecessary words",
          type: "thinking",
        },
        {
          number: 2,
          title: "Why Option B wins",
          content:
            "Participial phrase: 'Built in 1952' (eliminates 'was'). Efficient: 'area residents' (eliminates 'surrounding area'). Word count: 13 words vs. 26+ in others!",
          type: "correct",
        },
        {
          number: 3,
          title: "Why others fail",
          content:
            "Option A: Overuses 'and' + keeps redundancy. Option C: Wordy clause 'that was built'. Option D: Changes meaning + keeps wordiness",
          type: "mistake",
        },
      ],
    },
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
      "The groups of students, along with their teacher, is planning a field trip.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because the true subject is 'group' (singular), not 'students.' The phrase 'along with their teacher' is an interrupting phrase that doesn't change the subject, so we use the singular verb 'is' to agree with 'group.'",
    explanation: {
      title: "Subject-Verb Agreement Traps",
      steps: [
        {
          number: 1,
          title: "Find the REAL subject",
          content:
            "'The group' is the subject (singular). 'of students' = prepositional phrase (ignore). 'along with their teacher' = interrupting phrase (ignore)",
          type: "thinking",
        },
        {
          number: 2,
          title: "Strip away distractors",
          content: "Core sentence: 'The group... is planning'",
          type: "thinking",
        },
        {
          number: 3,
          title: "Why others are wrong",
          content:
            "Option A: 'group... are' → Wrong. Option C: 'group... were' → Wrong tense + plurality. Option D: 'groups... is' → Backwards error",
          type: "mistake",
        },
        {
          number: 4,
          title: "Pro tip",
          content:
            "'along with,' 'as well as' → These DON'T change the subject!",
          type: "tip",
        },
      ],
    },
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
      "She enjoys reading, to write, and painting in her free time.",
    ],
    correct: 1,
    reasoning:
      "Option B maintains parallel structure by using three gerunds (-ing forms) in the series: 'reading, writing, and painting.' All items follow the same grammatical pattern, while the other options mix gerunds with infinitives, breaking parallelism.",
    explanation: {
      title: "Parallel Structure Mastery",
      steps: [
        {
          number: 1,
          title: "Identify the series",
          content:
            "Three activities listed after 'enjoys': reading, writing, painting",
          type: "thinking",
        },
        {
          number: 2,
          title: "Check consistency",
          content:
            "All items must follow the same grammatical pattern: gerund + gerund + gerund (-ing forms)",
          type: "correct",
        },
        {
          number: 3,
          title: "Common error",
          content:
            "Mixing gerunds (-ing) with infinitives (to + verb) breaks parallelism",
          type: "mistake",
        },
      ],
    },
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
      "Before leaving, the house I always check that I have my keys, wallet, and phone.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because it properly places a comma after the introductory phrase 'Before leaving the house' and uses commas to separate all items in the series, including the Oxford comma before 'and phone.'",
    explanation: {
      title: "Comma Usage Rules",
      steps: [
        {
          number: 1,
          title: "Introductory phrase",
          content:
            "'Before leaving the house' is an introductory phrase and needs a comma after it",
          type: "correct",
        },
        {
          number: 2,
          title: "Series comma",
          content:
            "Items in a series (keys, wallet, and phone) should be separated by commas, including the Oxford comma",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid comma splicing",
          content:
            "Don't separate closely related words or phrases unnecessarily",
          type: "tip",
        },
      ],
    },
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
      "Every student must bring it's textbook to class.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'every student' is singular, requiring the singular pronoun form 'his or her.' The word 'every' always takes singular pronouns, making 'their' (plural) incorrect in formal writing.",
    explanation: {
      title: "Basic Pronoun Agreement",
      steps: [
        {
          number: 1,
          title: "Identify the antecedent",
          content: "'Every student' is singular and refers to a person",
          type: "thinking",
        },
        {
          number: 2,
          title: "Match singular with singular",
          content:
            "'his or her' correctly matches the singular antecedent 'every student'",
          type: "correct",
        },
        {
          number: 3,
          title: "Common errors",
          content:
            "'their' is plural, 'there' indicates location, 'it's' is for objects",
          type: "mistake",
        },
      ],
    },
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
      "Sarah barely caught running quickly the bus.",
    ],
    correct: 2,
    reasoning:
      "Option C correctly places the modifier by having Sarah (the person who is running) immediately follow the phrase 'Running quickly.' This makes it clear who is performing the action described by the modifier.",
    explanation: {
      title: "Basic Modifier Placement",
      steps: [
        {
          number: 1,
          title: "Find the modifier",
          content: "'Running quickly' describes who is running",
          type: "thinking",
        },
        {
          number: 2,
          title: "Place correctly",
          content:
            "The person doing the running (Sarah) should immediately follow the modifier",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid confusion",
          content: "Buses don't run quickly in this context - people do!",
          type: "tip",
        },
      ],
    },
  },
  {
    id: 9,
    topic: "pronoun-agreement",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence uses pronouns correctly?",
    choices: [
      "Neither Sarah nor Maria brought their lunch today.",
      "Neither Sarah nor Maria brought her lunch today.",
      "Neither Sarah nor Maria brought there lunch today.",
      "Neither Sarah nor Maria brought she lunch today.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because with 'neither...nor' constructions, the pronoun agrees with the noun closest to it. Since 'Maria' is closest and is feminine singular, we use 'her' rather than 'their' (plural).",
    explanation: {
      title: "Neither/Nor Pronoun Agreement",
      steps: [
        {
          number: 1,
          title: "Understand neither/nor structure",
          content:
            "With 'neither/nor,' the pronoun agrees with the CLOSEST noun",
          type: "thinking",
        },
        {
          number: 2,
          title: "Find the closest noun",
          content:
            "'Maria' is closest to the pronoun, so use 'her' (singular feminine)",
          type: "correct",
        },
        {
          number: 3,
          title: "Common error",
          content: "Using 'their' (plural) when both subjects are singular",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 10,
    topic: "pronoun-agreement",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence with correct pronoun usage:",
    choices: [
      "The committee will announce their decision tomorrow.",
      "The committee will announce its decision tomorrow.",
      "The committee will announce there decision tomorrow.",
      "The committee will announce it's decision tomorrow.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'committee' is a collective noun that acts as a single unit. Collective nouns take singular pronouns ('its'), not plural ones ('their'), when the group is acting together as one entity.",
    explanation: {
      title: "Collective Noun Pronoun Agreement",
      steps: [
        {
          number: 1,
          title: "Identify collective nouns",
          content:
            "'Committee' is a collective noun - one group acting as a unit",
          type: "thinking",
        },
        {
          number: 2,
          title: "Collective nouns are singular",
          content:
            "Use 'its' (singular) not 'their' (plural) for collective nouns",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid common errors",
          content: "'there' = location, 'it's' = it is (contraction)",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 11,
    topic: "pronoun-agreement",
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Which sentence demonstrates correct pronoun-antecedent agreement?",
    choices: [
      "Anyone who wants to join the team should submit their application by Friday.",
      "Anyone who wants to join the team should submit his or her application by Friday.",
      "Anyone who wants to join the team should submit there application by Friday.",
      "Anyone who wants to join the team should submit they application by Friday.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'anyone' is a singular indefinite pronoun that requires a singular pronoun reference. In formal writing, 'his or her' is the standard singular form, though 'their' is becoming more accepted in informal contexts.",
    explanation: {
      title: "Indefinite Pronoun Agreement",
      steps: [
        {
          number: 1,
          title: "Identify indefinite pronouns",
          content:
            "'Anyone' is singular indefinite pronoun (like everyone, someone, each)",
          type: "thinking",
        },
        {
          number: 2,
          title: "Singular requires singular",
          content:
            "'his or her' matches singular 'anyone' - formal written standard",
          type: "correct",
        },
        {
          number: 3,
          title: "Modern usage note",
          content:
            "While 'their' is increasingly accepted in speech, formal writing still prefers 'his or her'",
          type: "tip",
        },
      ],
    },
  },

  // MODIFIER PLACEMENT QUESTIONS
  {
    id: 12,
    topic: "modifier-placement",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which sentence has correct modifier placement?",
    choices: [
      "Driving to work, my coffee spilled all over my shirt.",
      "My coffee spilled all over my shirt driving to work.",
      "Driving to work, I spilled coffee all over my shirt.",
      "I spilled driving to work coffee all over my shirt.",
    ],
    correct: 2,
    reasoning:
      "Option C is correct because 'I' (the person driving) immediately follows the participial phrase 'Driving to work.' This prevents the illogical interpretation that the coffee was driving, creating a clear and grammatically correct sentence.",
    explanation: {
      title: "Participial Phrase Placement",
      steps: [
        {
          number: 1,
          title: "Find the participial phrase",
          content: "'Driving to work' describes WHO is driving",
          type: "thinking",
        },
        {
          number: 2,
          title: "Place the doer immediately after",
          content: "The person driving (I) must come right after the phrase",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid illogical subjects",
          content:
            "Coffee can't drive! Objects don't perform actions meant for people",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 13,
    topic: "modifier-placement",
    difficulty: "hard",
    type: "multiple-choice",
    question: "Choose the sentence with the correctly placed modifier:",
    choices: [
      "Having studied all night, the test was easy for Jennifer.",
      "The test was easy for Jennifer having studied all night.",
      "Having studied all night, Jennifer found the test easy.",
      "Jennifer found having studied all night the test easy.",
    ],
    correct: 2,
    reasoning:
      "Option C is correct because Jennifer (the person who studied) immediately follows the phrase 'Having studied all night.' This creates a logical connection between the modifier and the person performing the action, avoiding the dangling modifier error.",
    explanation: {
      title: "Dangling Modifier Correction",
      steps: [
        {
          number: 1,
          title: "Identify the modifier",
          content: "'Having studied all night' - WHO did the studying?",
          type: "thinking",
        },
        {
          number: 2,
          title: "Logical subject placement",
          content:
            "Jennifer studied, so 'Jennifer' must immediately follow the modifier",
          type: "correct",
        },
        {
          number: 3,
          title: "Test dangling",
          content:
            "Tests don't study! The modifier must connect to a logical subject",
          type: "mistake",
        },
      ],
    },
  },

  // SUBJECT-VERB AGREEMENT QUESTIONS
  {
    id: 14,
    topic: "subject-verb",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence has correct subject-verb agreement?",
    choices: [
      "The books on the shelf needs to be organized.",
      "The books on the shelf need to be organized.",
      "The book on the shelves need to be organized.",
      "The books on the shelf needing to be organized.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because the subject 'books' is plural, requiring the plural verb 'need.' The prepositional phrase 'on the shelf' doesn't affect the subject-verb agreement and should be ignored when determining the correct verb form.",
    explanation: {
      title: "Basic Subject-Verb Agreement",
      steps: [
        {
          number: 1,
          title: "Find the true subject",
          content:
            "'The books' is plural subject. 'on the shelf' is just a prepositional phrase",
          type: "thinking",
        },
        {
          number: 2,
          title: "Match plural subject with plural verb",
          content: "'books need' - both are plural",
          type: "correct",
        },
        {
          number: 3,
          title: "Ignore prepositional phrases",
          content: "Don't let phrases between subject and verb confuse you",
          type: "tip",
        },
      ],
    },
  },

  {
    id: 15,
    topic: "subject-verb",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence with correct subject-verb agreement:",
    choices: [
      "Either the manager or the employees is responsible for the mistake.",
      "Either the manager or the employees are responsible for the mistake.",
      "Either the managers or the employee are responsible for the mistake.",
      "Either the manager or the employee are responsible for the mistake.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because with 'either...or' constructions, the verb agrees with the subject closest to it. Since 'employees' (plural) is closest to the verb, we use the plural verb 'are.'",
    explanation: {
      title: "Either/Or Agreement Rule",
      steps: [
        {
          number: 1,
          title: "Either/or rule",
          content: "The verb agrees with the subject CLOSEST to it",
          type: "thinking",
        },
        {
          number: 2,
          title: "Find the closest subject",
          content: "'employees' (plural) is closest to the verb, so use 'are'",
          type: "correct",
        },
        {
          number: 3,
          title: "Memory trick",
          content: "With either/or and neither/nor, the LAST subject wins!",
          type: "tip",
        },
      ],
    },
  },

  {
    id: 16,
    topic: "subject-verb",
    difficulty: "expert",
    type: "multiple-choice",
    question: "Which sentence demonstrates correct subject-verb agreement?",
    choices: [
      "The number of students in the class are increasing each year.",
      "A number of students in the class is increasing each year.",
      "The number of students in the class is increasing each year.",
      "The number of students in the class have been increasing each year.",
    ],
    correct: 2,
    reasoning:
      "Option C is correct because 'the number' refers to a specific quantity as a single concept, making it singular and requiring the singular verb 'is.' This is different from 'a number of,' which would be plural.",
    explanation: {
      title: "Number vs. A Number Agreement",
      steps: [
        {
          number: 1,
          title: "Distinguish the phrases",
          content:
            "'THE number' = singular concept. 'A number' = plural concept",
          type: "thinking",
        },
        {
          number: 2,
          title: "THE number is singular",
          content:
            "'The number... is' - we're talking about one specific quantity",
          type: "correct",
        },
        {
          number: 3,
          title: "A number is plural",
          content:
            "'A number of students are' - we're talking about multiple students",
          type: "tip",
        },
      ],
    },
  },

  // PARALLEL STRUCTURE QUESTIONS
  {
    id: 17,
    topic: "parallel-structure",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence demonstrates correct parallel structure?",
    choices: [
      "She likes to swim, running, and bike riding.",
      "She likes swimming, to run, and bike riding.",
      "She likes swimming, running, and bike riding.",
      "She likes to swim, to run, and bike riding.",
    ],
    correct: 2,
    reasoning:
      "Option C maintains parallel structure by using consistent gerund forms (-ing) for all three activities: 'swimming, running, and bike riding.' This creates a balanced, grammatically correct list structure.",
    explanation: {
      title: "Parallel Structure in Lists",
      steps: [
        {
          number: 1,
          title: "Identify the series",
          content:
            "Three activities after 'likes': swimming, running, bike riding",
          type: "thinking",
        },
        {
          number: 2,
          title: "Use consistent forms",
          content: "All gerunds (-ing forms): swimming, running, bike riding",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid mixing forms",
          content:
            "Don't mix infinitives (to + verb) with gerunds (-ing forms)",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 18,
    topic: "parallel-structure",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Choose the sentence with correct parallel structure:",
    choices: [
      "The job requires attention to detail, working well with others, and you must be punctual.",
      "The job requires attention to detail, the ability to work well with others, and punctuality.",
      "The job requires being attentive to detail, to work well with others, and punctual.",
      "The job requires that you pay attention to detail, work well with others, and being punctual.",
    ],
    correct: 1,
    reasoning:
      "Option B maintains parallel structure by using three noun phrases: 'attention to detail,' 'the ability to work well with others,' and 'punctuality.' All items follow the same grammatical pattern as objects of the verb 'requires.'",
    explanation: {
      title: "Parallel Structure with Noun Phrases",
      steps: [
        {
          number: 1,
          title: "Identify the pattern",
          content: "Three job requirements listed after 'requires'",
          type: "thinking",
        },
        {
          number: 2,
          title: "Match the structure",
          content: "All noun phrases: 'attention,' 'ability,' 'punctuality'",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid shifts",
          content:
            "Don't shift from nouns to clauses or change subjects mid-sentence",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 19,
    topic: "parallel-structure",
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which sentence maintains parallel structure throughout?",
    choices: [
      "The new policy will reduce costs, improve efficiency, and customers will be more satisfied.",
      "The new policy will reduce costs, improve efficiency, and increase customer satisfaction.",
      "The new policy will reduce costs, improving efficiency, and increase customer satisfaction.",
      "The new policy will be reducing costs, improve efficiency, and increase customer satisfaction.",
    ],
    correct: 1,
    reasoning:
      "Option B maintains parallel structure by using three base verbs that the policy 'will' perform: 'reduce,' 'improve,' and 'increase.' This keeps the same subject (policy) and verb structure throughout the series.",
    explanation: {
      title: "Complex Parallel Structure",
      steps: [
        {
          number: 1,
          title: "Find the series",
          content: "Three things the policy 'will' do",
          type: "thinking",
        },
        {
          number: 2,
          title: "Maintain verb consistency",
          content: "All base verbs: 'reduce,' 'improve,' 'increase'",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid subject shifts",
          content:
            "Don't change from policy doing actions to customers being satisfied",
          type: "mistake",
        },
      ],
    },
  },

  // COMMA USAGE QUESTIONS
  {
    id: 20,
    topic: "comma-usage",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence uses commas correctly?",
    choices: [
      "My favorite colors are blue green and yellow.",
      "My favorite colors are blue, green, and yellow.",
      "My favorite colors are, blue green and yellow.",
      "My favorite colors are blue green, and yellow.",
    ],
    correct: 1,
    reasoning:
      "Option B correctly uses commas to separate items in a series, including the Oxford comma before 'and yellow.' This standard punctuation pattern clearly separates the three colors and prevents potential confusion.",
    explanation: {
      title: "Series Comma Usage",
      steps: [
        {
          number: 1,
          title: "Identify items in series",
          content: "Three colors listed: blue, green, yellow",
          type: "thinking",
        },
        {
          number: 2,
          title: "Separate with commas",
          content:
            "Use commas between items, including before 'and' (Oxford comma)",
          type: "correct",
        },
        {
          number: 3,
          title: "Oxford comma clarity",
          content: "The final comma before 'and' prevents ambiguity",
          type: "tip",
        },
      ],
    },
  },

  {
    id: 21,
    topic: "comma-usage",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence with correct comma placement:",
    choices: [
      "Although it was raining we decided to go hiking.",
      "Although it was raining, we decided to go hiking.",
      "Although it was, raining we decided to go hiking.",
      "Although, it was raining we decided to go hiking.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because when a dependent clause begins a sentence, it should be followed by a comma before the independent clause. 'Although it was raining' is dependent and needs the comma after it.",
    explanation: {
      title: "Dependent Clause Comma Rule",
      steps: [
        {
          number: 1,
          title: "Identify the dependent clause",
          content: "'Although it was raining' cannot stand alone",
          type: "thinking",
        },
        {
          number: 2,
          title: "Comma after introductory clause",
          content:
            "When a dependent clause starts the sentence, put comma after it",
          type: "correct",
        },
        {
          number: 3,
          title: "Don't break up clauses",
          content: "Never put commas within the dependent clause itself",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 22,
    topic: "comma-usage",
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Which sentence uses commas correctly with nonrestrictive elements?",
    choices: [
      "My brother who lives in Texas is visiting next week.",
      "My brother, who lives in Texas, is visiting next week.",
      "My brother who lives in Texas, is visiting next week.",
      "My brother, who lives in Texas is visiting next week.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'who lives in Texas' is nonrestrictive information (assuming you have only one brother). Nonrestrictive clauses require commas on both sides to set off the additional, non-essential information.",
    explanation: {
      title: "Restrictive vs. Nonrestrictive Clauses",
      steps: [
        {
          number: 1,
          title: "Determine if information is essential",
          content:
            "If I have only one brother, 'who lives in Texas' is extra info",
          type: "thinking",
        },
        {
          number: 2,
          title: "Nonrestrictive = commas",
          content: "Extra information gets commas on both sides",
          type: "correct",
        },
        {
          number: 3,
          title: "Consider context",
          content: "If I had multiple brothers, no commas needed (restrictive)",
          type: "tip",
        },
      ],
    },
  },

  // SENTENCE COMBINING QUESTIONS
  {
    id: 23,
    topic: "sentence-combining",
    difficulty: "medium",
    type: "sentence-combining",
    question: "Combine these sentences most effectively:",
    originalSentence:
      "The storm was severe. It knocked out power lines. The power lines served the entire neighborhood. Many residents were without electricity for hours.",
    choices: [
      "The storm was severe, and it knocked out power lines that served the entire neighborhood, and many residents were without electricity for hours.",
      "The severe storm knocked out neighborhood power lines, leaving many residents without electricity for hours.",
      "The storm that was severe knocked out power lines serving the entire neighborhood, so many residents were without electricity for hours.",
      "Because the storm was severe, it knocked out power lines, and the power lines served the entire neighborhood, so many residents were without electricity for hours.",
    ],
    correct: 1,
    reasoning:
      "Option B effectively combines the sentences by using a participial phrase ('The severe storm'), creating a clear cause-and-effect relationship, and using a participial phrase ('leaving residents') to show the result, all while eliminating unnecessary words.",
    explanation: {
      title: "Effective Sentence Combining",
      steps: [
        {
          number: 1,
          title: "Identify key relationships",
          content:
            "Cause and effect: severe storm → power outage → residents affected",
          type: "thinking",
        },
        {
          number: 2,
          title: "Eliminate redundancy",
          content:
            "Combine related ideas: 'severe storm,' 'neighborhood power lines,' 'leaving residents'",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid overuse of conjunctions",
          content: "Too many 'and' or 'so' connections make sentences choppy",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 24,
    topic: "sentence-combining",
    difficulty: "hard",
    type: "sentence-combining",
    question: "Which combination is most effective?",
    originalSentence:
      "Maria studied medicine in college. She graduated with honors. She decided to become a pediatrician. She loves working with children.",
    choices: [
      "Maria studied medicine in college and graduated with honors, and she decided to become a pediatrician because she loves working with children.",
      "After studying medicine in college and graduating with honors, Maria decided to become a pediatrician because of her love for working with children.",
      "Maria studied medicine in college, graduated with honors, decided to become a pediatrician, and loves working with children.",
      "Maria, who studied medicine in college and graduated with honors, decided to become a pediatrician, and she loves working with children.",
    ],
    correct: 1,
    reasoning:
      "Option B uses effective subordination with 'After' to show time sequence and 'because of' to show motivation. This creates logical relationships between ideas while maintaining conciseness and avoiding choppy construction.",
    explanation: {
      title: "Advanced Sentence Combining",
      steps: [
        {
          number: 1,
          title: "Show logical relationships",
          content:
            "Sequence: study → graduate → decide (because of love for children)",
          type: "thinking",
        },
        {
          number: 2,
          title: "Use subordination effectively",
          content: "'After' shows time sequence, 'because of' shows motivation",
          type: "correct",
        },
        {
          number: 3,
          title: "Avoid comma splices",
          content: "Don't just link independent clauses with commas",
          type: "mistake",
        },
      ],
    },
  },

  // MECHANICS QUESTIONS (Capitalization, Punctuation, Spelling)
  {
    id: 25,
    topic: "mechanics",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence has correct capitalization?",
    choices: [
      "we visited the grand canyon last Summer.",
      "We visited the Grand Canyon last summer.",
      "We visited the grand canyon last Summer.",
      "we visited the Grand Canyon last Summer.",
    ],
    correct: 1,
    reasoning:
      "Option B correctly capitalizes the first word of the sentence ('We') and the proper noun ('Grand Canyon'), while keeping 'summer' lowercase since seasons are not capitalized unless they begin a sentence.",
    explanation: {
      title: "Capitalization Rules",
      steps: [
        {
          number: 1,
          title: "Sentence beginnings",
          content: "Always capitalize the first word of a sentence",
          type: "correct",
        },
        {
          number: 2,
          title: "Proper nouns",
          content: "'Grand Canyon' is a proper noun (specific place name)",
          type: "correct",
        },
        {
          number: 3,
          title: "Seasons",
          content: "Don't capitalize seasons unless they start a sentence",
          type: "tip",
        },
      ],
    },
  },

  {
    id: 26,
    topic: "mechanics",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which sentence uses apostrophes correctly?",
    choices: [
      "The student's books were left in the teachers' lounge.",
      "The students book's were left in the teacher's lounge.",
      "The student's books were left in the teachers lounge.",
      "The students books were left in the teachers' lounge.",
    ],
    correct: 0,
    reasoning:
      "Option A correctly uses apostrophes for possession: 'student's' (singular possessive) for one student's books, and 'teachers'' (plural possessive) for the lounge belonging to multiple teachers. The word 'books' is simply plural, not possessive.",
    explanation: {
      title: "Apostrophe Usage Rules",
      steps: [
        {
          number: 1,
          title: "Singular possession",
          content: "'student's' shows one student owns the books",
          type: "correct",
        },
        {
          number: 2,
          title: "Plural possession",
          content: "'teachers'' shows multiple teachers share the lounge",
          type: "correct",
        },
        {
          number: 3,
          title: "Don't use for plurals",
          content: "Just 'books' (plural), not 'book's' (possession)",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 27,
    topic: "mechanics",
    difficulty: "hard",
    type: "multiple-choice",
    question: "Choose the sentence with correct punctuation:",
    choices: [
      "The conference will address three topics: climate change, renewable energy, and sustainable development.",
      "The conference will address three topics; climate change, renewable energy, and sustainable development.",
      "The conference will address three topics, climate change, renewable energy, and sustainable development.",
      "The conference will address three topics: climate change; renewable energy; and sustainable development.",
    ],
    correct: 0,
    reasoning:
      "Option A correctly uses a colon after a complete statement to introduce the list, then uses simple commas to separate the three topics. Colons are appropriate for introducing lists, while semicolons are not needed for simple series.",
    explanation: {
      title: "Colon vs. Semicolon Usage",
      steps: [
        {
          number: 1,
          title: "Colon introduces lists",
          content: "Use colon (:) after complete statement introducing a list",
          type: "correct",
        },
        {
          number: 2,
          title: "Simple series punctuation",
          content: "Use commas to separate items in a simple list",
          type: "correct",
        },
        {
          number: 3,
          title: "Semicolon usage",
          content:
            "Use semicolons only for complex lists or between independent clauses",
          type: "tip",
        },
      ],
    },
  },

  // USAGE QUESTIONS (Word Choice, Commonly Confused Words)
  {
    id: 28,
    topic: "word-usage",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence uses the correct word?",
    choices: [
      "The medicine had no affect on my headache.",
      "The medicine had no effect on my headache.",
      "The medicine had no efect on my headache.",
      "The medicine had know effect on my headache.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'effect' is the noun form meaning 'a result or consequence.' The sentence needs a noun after 'no,' and the medicine had no result/consequence on the headache. 'Affect' is the verb form.",
    explanation: {
      title: "Effect vs. Affect",
      steps: [
        {
          number: 1,
          title: "Effect is a noun",
          content: "'Effect' = a result or consequence (noun)",
          type: "correct",
        },
        {
          number: 2,
          title: "Affect is a verb",
          content: "'Affect' = to influence or change (verb)",
          type: "thinking",
        },
        {
          number: 3,
          title: "Memory trick",
          content: "Effect = End result, Affect = Action verb",
          type: "tip",
        },
      ],
    },
  },

  {
    id: 29,
    topic: "word-usage",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence with correct word usage:",
    choices: [
      "I could care less about what he thinks.",
      "I couldn't care less about what he thinks.",
      "I could care fewer about what he thinks.",
      "I couldn't care fewer about what he thinks.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'couldn't care less' logically means you care zero amount, which is the intended meaning. 'Could care less' actually implies you do care some amount, making it illogical for expressing complete indifference.",
    explanation: {
      title: "Common Usage Errors",
      steps: [
        {
          number: 1,
          title: "Logic of the phrase",
          content: "If you 'couldn't care less,' you care zero amount",
          type: "thinking",
        },
        {
          number: 2,
          title: "Standard expression",
          content: "'Couldn't care less' is the logical, correct form",
          type: "correct",
        },
        {
          number: 3,
          title: "Common mistake",
          content: "'Could care less' actually means you DO care some amount",
          type: "mistake",
        },
      ],
    },
  },

  {
    id: 30,
    topic: "word-usage",
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which sentence demonstrates correct word choice?",
    choices: [
      "The amount of students in each class should not exceed twenty.",
      "The number of students in each class should not exceed twenty.",
      "The amount of student in each class should not exceed twenty.",
      "The number of student in each class should not exceed twenty.",
    ],
    correct: 1,
    reasoning:
      "Option B is correct because 'number' is used with countable nouns like students. Since you can count individual students, use 'number of students.' 'Amount' is reserved for uncountable nouns like water, money, or time.",
    explanation: {
      title: "Amount vs. Number",
      steps: [
        {
          number: 1,
          title: "Count vs. measure",
          content: "Students can be counted individually",
          type: "thinking",
        },
        {
          number: 2,
          title: "Number for countable nouns",
          content: "'Number of students' - use NUMBER for things you can count",
          type: "correct",
        },
        {
          number: 3,
          title: "Amount for uncountable",
          content: "'Amount of water/money' - use AMOUNT for mass nouns",
          type: "tip",
        },
      ],
    },
  },
];

// Question management utilities
function getQuestionsByDifficulty(difficulty) {
  if (difficulty === "all") return questionBank;
  return questionBank.filter((q) => q.difficulty === difficulty);
}

function getQuestionsByTopic(topic) {
  if (topic === "all") return questionBank;
  return questionBank.filter((q) => q.topic === topic);
}

function getFilteredQuestions(difficulty = "all", topic = "all") {
  let questions = questionBank;

  if (difficulty !== "all") {
    questions = questions.filter((q) => q.difficulty === difficulty);
  }

  if (topic !== "all") {
    questions = questions.filter((q) => q.topic === topic);
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
  const newId = Math.max(...questionBank.map((q) => q.id)) + 1;
  questionBank.push({
    id: newId,
    ...question,
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

// Expanded VCLA Question Database - Add these to your existing questions.js file

const additionalQuestions = [
  {
    id: 31,
    topic: "mechanics",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence uses apostrophes correctly?",
    choices: [
      "The teachers lounge is near the students' lockers.",
      "The teacher's lounge is near the students lockers.",
      "The teachers' lounge is near the students' lockers.",
      "The teachers lounge is near the student's lockers.",
    ],
    correct: 2,
    reasoning:
      "Option C is correct: plural possessive 'teachers\\'' (lounge for multiple teachers) and plural possessive 'students\\'' (lockers belonging to many students).",
    explanation: {
      title: "Apostrophes for Singular vs. Plural Possession",
      steps: [
        {
          number: 1,
          title: "Find the owners",
          content:
            "Lounge of teachers; lockers of students → both plural owners.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Form plural possessive",
          content:
            "Plural nouns ending in s take apostrophe after s: teachers' / students'.",
          type: "correct",
        },
        {
          number: 3,
          title: "Why others fail",
          content:
            "A: missing apostrophe before lounge; B: 'students' needs apostrophe; D: 'student\\'s' is singular while lockers are many.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 32,
    topic: "mechanics",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Choose the sentence that corrects the comma splice:",
    choices: [
      "The meeting ended, everyone left quickly.",
      "The meeting ended; everyone left quickly.",
      "The meeting ended everyone left quickly.",
      "The meeting ended, and everyone left quickly.",
    ],
    correct: 1,
    reasoning:
      "Options B and D both fix the splice; D uses a comma + coordinating conjunction, but the most concise correction with proper punctuation is B (semicolon).",
    explanation: {
      title: "Fixing Comma Splices",
      steps: [
        {
          number: 1,
          title: "Spot two independent clauses",
          content:
            "'The meeting ended' + 'everyone left quickly' are complete thoughts.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Acceptable fixes",
          content: "Use a semicolon (B) or comma + FANBOYS (D).",
          type: "correct",
        },
        {
          number: 3,
          title: "Eliminate errors",
          content: "A is a splice; C is a run-on without needed punctuation.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 33,
    topic: "word-usage",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence that uses who/whom correctly:",
    choices: [
      "Who did you give the notes to?",
      "Whom is leading the workshop today?",
      "To whom did you give the notes?",
      "Who did you give the notes?",
    ],
    correct: 2,
    reasoning:
      "'To whom' is the object of the preposition 'to.' The subject form 'who' is required only when the pronoun functions as the subject of the verb.",
    explanation: {
      title: "Who vs. Whom",
      steps: [
        {
          number: 1,
          title: "Subject or object?",
          content:
            "Ask: Is the pronoun doing the action (subject) or receiving it (object)?",
          type: "thinking",
        },
        {
          number: 2,
          title: "Apply the rule",
          content:
            "Object → 'whom,' especially after a preposition: 'to whom.'",
          type: "correct",
        },
        {
          number: 3,
          title: "Common errors",
          content:
            "A & D improperly place 'who' as object; B uses 'whom' as subject of 'is leading.'",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 34,
    topic: "word-usage",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence uses fewer/less correctly?",
    choices: [
      "There were less errors on the second draft.",
      "Fewer people attended the meeting this week.",
      "I drank fewer water after the run.",
      "The store had fewer milk than yesterday.",
    ],
    correct: 1,
    reasoning:
      "Use 'fewer' with countable nouns. 'People' is countable, so 'Fewer people' is correct.",
    explanation: {
      title: "Fewer vs. Less",
      steps: [
        {
          number: 1,
          title: "Countable vs. uncountable",
          content:
            "Use 'fewer' for countables (cars, people); 'less' for mass nouns (water, milk).",
          type: "correct",
        },
        {
          number: 2,
          title: "Why others fail",
          content:
            "A: 'errors' (countable) → 'fewer.' C & D: 'water/milk' are mass nouns → 'less.'",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 35,
    topic: "word-usage",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Choose the sentence with correct use of among/between:",
    choices: [
      "We divided the prizes between the five winners.",
      "The discussion is among the two co-chairs.",
      "Negotiations between the three departments resumed.",
      "We split the bill among the four of us.",
    ],
    correct: 3,
    reasoning:
      "Use 'between' with two; 'among' with three or more. Splitting a bill among four is correct.",
    explanation: {
      title: "Between vs. Among",
      steps: [
        {
          number: 1,
          title: "Identify the number",
          content: "Two → between; three+ → among (general rule).",
          type: "thinking",
        },
        {
          number: 2,
          title: "Apply",
          content: "D has four people → among.",
          type: "correct",
        },
        {
          number: 3,
          title: "Why others fail",
          content:
            "A uses 'between' for five; B uses 'among' for two; C uses 'between' for three.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 36,
    topic: "verb-tense",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which sentence maintains consistent verb tense?",
    choices: [
      "She enters the lab, took notes, and begins the trial.",
      "She entered the lab, takes notes, and begins the trial.",
      "She entered the lab, took notes, and began the trial.",
      "She had entered the lab, takes notes, and began the trial.",
    ],
    correct: 2,
    reasoning: "Option C keeps past tense consistently across all verbs.",
    explanation: {
      title: "Verb Tense Consistency",
      steps: [
        {
          number: 1,
          title: "Scan verbs",
          content: "entered / took / began → all past.",
          type: "correct",
        },
        {
          number: 2,
          title: "Detect shifts",
          content:
            "A, B, D shift between present/past or past perfect without need.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 37,
    topic: "pronoun-reference",
    difficulty: "hard",
    type: "multiple-choice",
    question: "Which sentence avoids ambiguous pronoun reference?",
    choices: [
      "When Alex spoke to Jordan about their paper, he got confused.",
      "When the teacher met with the student, she clarified the rubric.",
      "If you place the binder on the shelf, it might break it.",
      "Sam told Lee that they should revise his thesis statement.",
    ],
    correct: 1,
    reasoning:
      "In B, 'she' clearly refers to 'the teacher.' The others have unclear or conflicting antecedents.",
    explanation: {
      title: "Clear Pronoun Antecedents",
      steps: [
        {
          number: 1,
          title: "Find the pronoun",
          content: "Identify 'she/they/it/he' and ask: Who exactly?",
          type: "thinking",
        },
        {
          number: 2,
          title: "Choose clarity",
          content:
            "B has an unambiguous antecedent; A, C, D are unclear or contradictory.",
          type: "correct",
        },
      ],
    },
  },
  {
    id: 38,
    topic: "modifier-placement",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which sentence places the modifier correctly?",
    choices: [
      "Driving to school, the rain drenched Maya's jacket.",
      "While driving to school, Maya's jacket was drenched by the rain.",
      "While Maya was driving to school, the rain drenched her jacket.",
      "Driving to school, Maya's jacket got drenched.",
    ],
    correct: 2,
    reasoning:
      "Option C states the logical subject ('Maya') with the driving action and avoids a dangling modifier.",
    explanation: {
      title: "Avoiding Dangling Modifiers",
      steps: [
        {
          number: 1,
          title: "Identify the modifier phrase",
          content: "'While driving to school' must modify the person driving.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Place near the doer",
          content: "C makes 'Maya' the driver, then describes the result.",
          type: "correct",
        },
      ],
    },
  },
  {
    id: 39,
    topic: "organization",
    difficulty: "medium",
    type: "multiple-choice",
    question:
      "A paragraph explains that reusable bottles reduce waste, save money, and keep drinks cold longer. Which sentence would be the best concluding sentence?",
    choices: [
      "Bottled water sales have increased every year since 2010.",
      "For these reasons, choosing a reusable bottle is a simple way to help both your wallet and the planet.",
      "Some reusable bottles are made of metal, and others are made of plastic.",
      "The first reusable bottle was invented long before single-use bottles existed.",
    ],
    correct: 1,
    reasoning:
      "Option B synthesizes the paragraph's points and provides a clear, persuasive takeaway.",
    explanation: {
      title: "Writing Effective Conclusions",
      steps: [
        {
          number: 1,
          title: "Synthesize, don't introduce",
          content: "Conclusions restate and unify key benefits.",
          type: "correct",
        },
        {
          number: 2,
          title: "Why others fail",
          content:
            "A adds unrelated stats; C adds a minor detail; D adds history off-topic.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 40,
    topic: "cohesion",
    difficulty: "hard",
    type: "multiple-choice",
    question:
      "Which transition best completes the sentence? 'Attendance dropped in June; _____, the committee postponed the workshop to August.'",
    choices: ["however", "therefore", "for example", "meanwhile"],
    correct: 1,
    reasoning:
      "A cause–effect relationship is implied; 'therefore' signals a logical result.",
    explanation: {
      title: "Choosing Logical Transitions",
      steps: [
        {
          number: 1,
          title: "Identify relationship",
          content: "Drop in attendance → decision to postpone = result.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Match the connector",
          content: "'Therefore' communicates consequence.",
          type: "correct",
        },
        {
          number: 3,
          title: "Eliminate",
          content:
            "'However' contrasts; 'for example' illustrates; 'meanwhile' indicates time.",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 41,
    topic: "sentence-combining",
    difficulty: "easy",
    type: "sentence-combining",
    question:
      "Combine most effectively: 'The museum opened in 1925. It houses over 10,000 artifacts. It offers tours daily.'",
    choices: [
      "The museum opened in 1925, and it houses over 10,000 artifacts, and it offers tours daily.",
      "Opened in 1925, the museum houses over 10,000 artifacts and offers daily tours.",
      "The museum, which opened in 1925, and houses over 10,000 artifacts, offers tours daily.",
      "The museum opened in 1925 and it houses over 10,000 artifacts, offering tours daily.",
    ],
    correct: 1,
    reasoning:
      "Option B is concise and uses a participial phrase to reduce repetition while preserving meaning.",
    explanation: {
      title: "Effective Concision",
      steps: [
        {
          number: 1,
          title: "Remove repetition",
          content: "Avoid repeating subjects/verbs unnecessarily.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Prefer compact structures",
          content: "Participial phrase + coordinated verbs.",
          type: "correct",
        },
      ],
    },
  },
  {
    id: 42,
    topic: "comma-usage",
    difficulty: "medium",
    type: "multiple-choice",
    question:
      "Which sentence uses commas correctly with a nonrestrictive clause?",
    choices: [
      "My sister who lives in Norfolk is visiting tomorrow.",
      "My sister, who lives in Norfolk is visiting tomorrow.",
      "My sister who lives in Norfolk, is visiting tomorrow.",
      "My sister, who lives in Norfolk, is visiting tomorrow.",
    ],
    correct: 3,
    reasoning:
      "Assuming there is one sister, 'who lives in Norfolk' is nonessential and requires commas on both sides.",
    explanation: {
      title: "Restrictive vs. Nonrestrictive",
      steps: [
        {
          number: 1,
          title: "Determine essentiality",
          content: "If the clause merely adds info, set it off with commas.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Apply punctuation",
          content: "Place commas before and after the nonrestrictive clause.",
          type: "correct",
        },
      ],
    },
  },
  {
    id: 43,
    topic: "mechanics",
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which sentence has correct capitalization?",
    choices: [
      'Professor Martinez assigned "The Great gatsby" last Spring.',
      "Professor martinez assigned 'the Great Gatsby' last spring.",
      'Professor Martinez assigned "The Great Gatsby" last spring.',
      "professor Martinez assigned " + '"The Great Gatsby" last Spring.',
    ],
    correct: 2,
    reasoning:
      "Capitalize titles, names, and the first word of a sentence; seasons are lowercase unless personified or at sentence start.",
    explanation: {
      title: "Capitalization Basics",
      steps: [
        {
          number: 1,
          title: "Proper nouns & titles",
          content: "Capitalize names and major words in book titles.",
          type: "correct",
        },
        {
          number: 2,
          title: "Seasons",
          content: "'spring' is lowercase in general use.",
          type: "tip",
        },
      ],
    },
  },
  {
    id: 44,
    topic: "parallel-structure",
    difficulty: "hard",
    type: "multiple-choice",
    question:
      'Choose the sentence with correct "not only... but also" parallelism:',
    choices: [
      "The policy not only reduces costs but also increasing efficiency.",
      "The policy not only reduces costs but also improves efficiency.",
      "Not only the policy reduces costs but also improves efficiency.",
      "The policy reduces not only costs but also is improving efficiency.",
    ],
    correct: 1,
    reasoning: "Both verb phrases must be parallel: 'reduces' / 'improves.'",
    explanation: {
      title: "Correlative Conjunctions",
      steps: [
        {
          number: 1,
          title: "Match structures",
          content: "Keep the same grammatical form after each correlative.",
          type: "correct",
        },
        {
          number: 2,
          title: "Eliminate mismatches",
          content: "A and D mix forms; C misplaces 'not only.'",
          type: "mistake",
        },
      ],
    },
  },
  {
    id: 45,
    topic: "subject-verb",
    difficulty: "medium",
    type: "multiple-choice",
    question: "Select the sentence with correct subject–verb agreement:",
    choices: [
      "The team were celebrating its victory late into the night.",
      "The committee have submitted its recommendations.",
      "The staff is meeting to discuss their options.",
      "The data are convincing and support the hypothesis.",
    ],
    correct: 3,
    reasoning:
      "In formal American English, 'data' is often treated as plural in scientific contexts ('data are'). The others mismatch collective nouns and pronouns/verbs.",
    explanation: {
      title: "Agreement with Collective & Plural Nouns",
      steps: [
        {
          number: 1,
          title: "Identify the noun type",
          content:
            "Collective nouns (team/committee/staff) usually take singular verbs when acting as a unit.",
          type: "thinking",
        },
        {
          number: 2,
          title: "Check pronouns",
          content: "Singular collective → 'its' not 'their.'",
          type: "tip",
        },
        {
          number: 3,
          title: "Apply exception",
          content: "'Data' as plural in academic usage → 'are.'",
          type: "correct",
        },
      ],
    },
  },
  {
    id: 46,
    topic: "rhetoric",
    difficulty: "medium",
    type: "multiple-choice",
    question:
      "A paragraph outlines the history of a community garden and ends by inviting volunteers to join. What is the writer's primary purpose?",
    choices: [
      "to narrate a personal anecdote",
      "to persuade readers to participate",
      "to analyze competing policies",
      "to critique prior leadership",
    ],
    correct: 1,
    reasoning:
      "The invitation suggests a persuasive purpose—encouraging readers to take action.",
    explanation: {
      title: "Identifying Purpose",
      steps: [
        {
          number: 1,
          title: "Look at the call to action",
          content: "Invitations/requests typically signal persuasion.",
          type: "correct",
        },
        {
          number: 2,
          title: "Eliminate mismatches",
          content:
            "No personal story, policy analysis, or critique is described.",
          type: "mistake",
        },
      ],
    },
  },
];

// Merge with the existing bank
questionBank.push(...additionalQuestions);
