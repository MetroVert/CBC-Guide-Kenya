import type { SubjectContent } from "../../types/subject";

const MathIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
export const mathematicsContent: SubjectContent = {
  slug: "mathematics",
  name: "Mathematics",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "blue",
  icon: MathIcon,
  description:
    "Grade 8 Mathematics builds on the numeracy and problem-solving skills from Grade 7, moving into deeper algebraic reasoning, geometry, and data analysis. This subject strengthens logical thinking and equips you with practical skills for measurement, computation, and real-world problem solving — all aligned to the CBC curriculum.",

  outcomes: [
    "Apply cubes, cube roots, and reciprocals to solve real-life numerical problems",
    "Simplify, factorise, and manipulate algebraic expressions with confidence",
    "Solve linear equations and inequalities in one variable",
    "Calculate area, volume, and capacity of composite geometric shapes",
    "Construct and interpret angles, triangles, and geometric figures accurately",
    "Collect, organise, and interpret data using statistical measures and basic probability",
  ],
  topics: [
    {
      title: "Cubes and Cube Roots",
      description:
        "Finding cubes and cube roots of numbers, and applying them in practical contexts.",
    },
    {
      title: "Reciprocals",
      description:
        "Understanding reciprocals of numbers and using them in computations.",
    },
    {
      title: "Ratio, Proportion & Percentage",
      description:
        "Working with ratios, direct and inverse proportion, and percentage change.",
    },
    {
      title: "Algebraic Expressions",
      description:
        "Simplifying, expanding, and factorising expressions with two or more variables.",
    },
    {
      title: "Linear Equations & Inequalities",
      description:
        "Solving and graphing linear equations and inequalities in one variable.",
    },
    {
      title: "Sequences and Patterns",
      description:
        "Identifying number patterns and finding terms in arithmetic sequences.",
    },
    {
      title: "Length, Area & Volume",
      description:
        "Calculating perimeter, area, and volume of composite 2D and 3D shapes.",
    },
    {
      title: "Angles & Geometric Constructions",
      description:
        "Measuring, constructing, and applying angle properties in geometric figures.",
    },
    {
      title: "Data Handling & Probability",
      description:
        "Organising data, computing averages, and understanding basic probability.",
    },
  ],
  notes: [
    {
      title: "Numbers Strand Notes",
      description:
        "Concise notes covering cubes, cube roots, reciprocals, and number properties.",
      meta: "In preparation",
    },
    {
      title: "Algebra Strand Notes",
      description:
        "Step-by-step breakdowns of algebraic expressions, equations, and inequalities.",
      meta: "In preparation",
    },
    {
      title: "Geometry Strand Notes",
      description:
        "Illustrated notes on angles, constructions, and measurement.",
      meta: "In preparation",
    },
    {
      title: "Data Handling Notes",
      description:
        "Guided notes on data organisation, averages, and probability basics.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Numbers Practice Set",
      description:
        "Exercises on cubes, cube roots, and reciprocals with worked solutions.",
      meta: "Coming soon",
    },
    {
      title: "Algebra Practice Set",
      description:
        "Graded questions on expressions, equations, and inequalities.",
      meta: "Coming soon",
    },
    {
      title: "Geometry Practice Set",
      description:
        "Construction and angle-property problems for hands-on practice.",
      meta: "Coming soon",
    },
    {
      title: "Data & Probability Set",
      description: "Applied questions on data interpretation and probability.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Numbers Quick Quiz",
      description:
        "A short auto-marked quiz to test cubes, cube roots, and reciprocals.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "Algebra Quick Quiz",
      description: "Check your understanding of expressions and equations.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "End-of-Topic Assessment",
      description:
        "A comprehensive quiz covering all Grade 8 Mathematics strands.",
      meta: "20 questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Mathematics Syllabus",
      description: "Official KICD-aligned topic breakdown for the term.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Formula & Reference Sheet",
      description: "Quick-reference sheet of key formulas for revision.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Printable Worksheet Pack",
      description: "A set of printable exercises for offline practice.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Cubes & Cube Roots",
      description: "A visual walkthrough of finding cubes and cube roots.",
      meta: "Coming soon",
    },
    {
      title: "Mastering Algebraic Expressions",
      description:
        "Step-by-step video on simplifying and factorising expressions.",
      meta: "Coming soon",
    },
    {
      title: "Geometric Constructions Made Easy",
      description:
        "Learn to construct angles and shapes using a ruler and compass.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "What topics are covered in Grade 8 Mathematics under CBC?",
      answer:
        "Grade 8 Mathematics covers five main strands: Numbers, Algebra, Measurement, Geometry, and Data Handling & Probability — including cubes and cube roots, algebraic expressions, linear equations, area and volume, angles, and basic statistics.",
    },
    {
      question: "How is Grade 8 Mathematics assessed under CBC?",
      answer:
        "Assessment combines continuous formative assessment throughout the term with summative assessments at the end of each term, focusing on both conceptual understanding and practical application of mathematical skills.",
    },
    {
      question: "Do I need a calculator for Grade 8 Mathematics?",
      answer:
        "A basic scientific calculator can be helpful for checking computations, but most Grade 8 topics emphasise manual working and understanding of methods, so mental math and written workings remain essential.",
    },
    {
      question: "When will notes and practice questions be available?",
      answer:
        "We're actively building out notes, practice questions, quizzes, and video lessons for this subject. Check back soon — new content is being added regularly.",
    },
  ],
};

const EnglishIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);
export const englishContent: SubjectContent = {
  slug: "english",
  name: "English",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "green",
  icon: EnglishIcon,
  description:
    "Grade 8 English develops learners' communication, reading, writing, grammar, and critical thinking skills. Learners engage with a variety of texts, improve spoken and written communication, appreciate literature, and apply English confidently in academic and everyday situations in line with the CBC curriculum.",

  outcomes: [
    "Communicate effectively through listening and speaking in different situations",
    "Read and comprehend a wide range of literary and non-literary texts",
    "Use correct grammar, vocabulary, and language structures in communication",
    "Write clear, creative, and well-organised texts for different audiences and purposes",
    "Develop critical thinking and analytical skills through literature",
    "Use digital literacy skills to enhance language learning and communication",
  ],
  topics: [
    {
      title: "Listening & Speaking",
      description:
        "Developing effective listening, oral presentation, pronunciation, and discussion skills.",
    },
    {
      title: "Reading Comprehension",
      description:
        "Reading literary and informational texts for understanding and interpretation.",
    },
    {
      title: "Grammar in Use",
      description:
        "Using parts of speech, sentence structures, punctuation, and vocabulary correctly.",
    },
    {
      title: "Creative Writing",
      description:
        "Writing narratives, descriptive compositions, and imaginative texts.",
    },
    {
      title: "Functional Writing",
      description:
        "Writing letters, reports, speeches, notices, and other practical documents.",
    },
    {
      title: "Literature",
      description:
        "Studying poems, short stories, plays, and appreciating literary devices.",
    },
    {
      title: "Vocabulary Development",
      description:
        "Building word choice, idioms, synonyms, antonyms, and contextual meaning.",
    },
    {
      title: "Critical Reading",
      description:
        "Analysing ideas, identifying opinions, facts, bias, and author's purpose.",
    },
    {
      title: "Digital Communication",
      description:
        "Using English appropriately in digital platforms and online communication.",
    },
  ],
  notes: [
    {
      title: "Listening & Speaking Notes",
      description:
        "Revision notes covering oral communication and listening skills.",
      meta: "In preparation",
    },
    {
      title: "Grammar Notes",
      description:
        "Comprehensive explanations of grammar concepts with examples.",
      meta: "In preparation",
    },
    {
      title: "Writing Skills Notes",
      description:
        "Guided notes on creative, functional, and academic writing.",
      meta: "In preparation",
    },
    {
      title: "Literature Notes",
      description:
        "Study notes on poems, short stories, and literary appreciation.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Grammar Practice",
      description:
        "Exercises on grammar, punctuation, and sentence construction.",
      meta: "Coming soon",
    },
    {
      title: "Reading Practice",
      description: "Comprehension passages with guided questions.",
      meta: "Coming soon",
    },
    {
      title: "Writing Practice",
      description: "Creative and functional writing exercises.",
      meta: "Coming soon",
    },
    {
      title: "Literature Practice",
      description: "Practice questions based on literary texts.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Grammar Quiz",
      description: "Test your grammar and language skills.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "Reading Quiz",
      description: "Check your reading comprehension skills.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "End-of-Topic Assessment",
      description: "Comprehensive English assessment covering all strands.",
      meta: "20 questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 English Syllabus",
      description: "Official KICD-aligned Grade 8 English curriculum guide.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Grammar Reference Sheet",
      description: "Quick-reference grammar guide for revision.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Printable Writing Worksheets",
      description: "Printable exercises for classroom and home practice.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Listening & Speaking Skills",
      description: "Improve communication through practical demonstrations.",
      meta: "Coming soon",
    },
    {
      title: "Mastering English Grammar",
      description: "Step-by-step lessons covering essential grammar concepts.",
      meta: "Coming soon",
    },
    {
      title: "Creative Writing Workshop",
      description:
        "Learn techniques for writing engaging compositions and stories.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "What skills are developed in Grade 8 English?",
      answer:
        "Grade 8 English develops learners' reading, writing, speaking, listening, grammar, vocabulary, and critical thinking skills through a variety of texts and communication activities.",
    },
    {
      question: "How is Grade 8 English assessed under CBC?",
      answer:
        "Assessment is continuous and competency-based, focusing on communication, comprehension, writing, and practical language use throughout the term.",
    },
    {
      question: "What kinds of texts are studied?",
      answer:
        "Learners study narratives, poems, plays, informational texts, functional writing, and digital texts to improve language and literacy skills.",
    },
    {
      question: "Will notes and revision materials be available?",
      answer:
        "Yes. Comprehensive notes, practice questions, revision papers, and quizzes will be added as the website grows.",
    },
  ],
};

const KiswahiliIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" />
    <path d="M6.5 7v10" />
  </svg>
);
export const kiswahiliContent: SubjectContent = {
  slug: "kiswahili",
  name: "Kiswahili",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "orange",
  icon: KiswahiliIcon,

  description:
    "Grade 8 Kiswahili develops learners' listening, speaking, reading and writing skills while strengthening grammar, vocabulary, creativity and appreciation of Kiswahili culture. Learners communicate confidently in different situations in line with the CBC curriculum.",

  outcomes: [
    "Kuwasiliana kwa ufasaha katika mazingira mbalimbali.",
    "Kutumia msamiati na sarufi sahihi katika mawasiliano.",
    "Kusoma na kuelewa aina mbalimbali za matini.",
    "Kuandika insha, barua na kazi nyingine kwa ufasaha.",
    "Kuchambua kazi za fasihi na kuzielezea.",
    "Kuthamini lugha ya Kiswahili na tamaduni zake.",
  ],
  topics: [
    {
      title: "Kusikiliza na Kuzungumza",
      description:
        "Kuimarisha uwezo wa kusikiliza, kujibu na kuwasiliana kwa ufasaha.",
    },
    {
      title: "Ufahamu",
      description: "Kusoma na kuelewa vifungu vya aina mbalimbali.",
    },
    {
      title: "Sarufi",
      description:
        "Matumizi sahihi ya nomino, vitenzi, vivumishi na sehemu nyingine za lugha.",
    },
    {
      title: "Uandishi",
      description:
        "Kuandika insha, barua rasmi na zisizo rasmi pamoja na ripoti.",
    },
    {
      title: "Fasihi",
      description: "Hadithi, mashairi, tamthilia na methali.",
    },
    {
      title: "Msamiati",
      description: "Kuongeza hazina ya maneno na matumizi yake.",
    },
    {
      title: "Matamshi",
      description: "Kutamka maneno na sentensi kwa usahihi.",
    },
    {
      title: "Utamaduni",
      description:
        "Kujifunza kuhusu mila na desturi zinazohusiana na lugha ya Kiswahili.",
    },
    {
      title: "Mawasiliano ya Kila Siku",
      description: "Kutumia Kiswahili katika mazingira halisi ya maisha.",
    },
  ],
  notes: [
    {
      title: "Sarufi Notes",
      description: "Muhtasari wa mada zote za sarufi.",
      meta: "In preparation",
    },
    {
      title: "Fasihi Notes",
      description: "Maelezo ya hadithi, mashairi na tamthilia.",
      meta: "In preparation",
    },
    {
      title: "Ufahamu Notes",
      description: "Mbinu za kujibu maswali ya ufahamu.",
      meta: "In preparation",
    },
    {
      title: "Uandishi Notes",
      description: "Mwongozo wa kuandika insha na barua.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Sarufi Exercises",
      description: "Mazoezi ya sarufi.",
      meta: "Coming soon",
    },
    {
      title: "Ufahamu Exercises",
      description: "Maswali ya ufahamu.",
      meta: "Coming soon",
    },
    {
      title: "Insha Practice",
      description: "Mazoezi ya uandishi.",
      meta: "Coming soon",
    },
    {
      title: "Fasihi Questions",
      description: "Maswali ya fasihi.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Sarufi Quiz",
      description: "Jaribio la sarufi.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "Ufahamu Quiz",
      description: "Jaribio la ufahamu.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "End of Topic Assessment",
      description: "Jaribio la mada zote.",
      meta: "20 Questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Kiswahili Syllabus",
      description: "Mpangilio rasmi wa mada za KICD.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Notes",
      description: "Muhtasari wa mada zote.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Worksheet Pack",
      description: "Mazoezi ya kuchapisha.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Sarufi Explained",
      description: "Video ya kujifunza sarufi.",
      meta: "Coming soon",
    },
    {
      title: "Writing Skills",
      description: "Mbinu za kuandika insha nzuri.",
      meta: "Coming soon",
    },
    {
      title: "Fasihi Lessons",
      description: "Video za fasihi.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Nitajifunza nini katika Kiswahili cha Grade 8?",
      answer:
        "Utajifunza kusoma, kuandika, kuzungumza, sarufi, fasihi na matumizi sahihi ya Kiswahili.",
    },
    {
      question: "Je, kutakuwa na notes za kupakua?",
      answer: "Ndiyo. Notes na revision materials zitaongezwa hatua kwa hatua.",
    },
    {
      question: "Je, kutakuwa na majaribio?",
      answer: "Ndiyo. Kutakuwa na quizzes na assessments kwa kila mada.",
    },
    {
      question: "Je, yaliyomo yanafuata KICD?",
      answer:
        "Ndiyo. Maudhui yote yanaandaliwa kulingana na mtaala rasmi wa CBC wa KICD.",
    },
  ],
};

const IntegratedScienceIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
  </svg>
);
export const integratedScienceContent: SubjectContent = {
  slug: "integrated-science",
  name: "Integrated Science",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "purple",
  icon: IntegratedScienceIcon,

  description:
    "Grade 8 Integrated Science helps learners understand the natural world through scientific investigation. It combines Biology, Chemistry, Physics and Earth Science while promoting inquiry, experimentation and problem-solving skills in line with the CBC curriculum.",

  outcomes: [
    "Apply scientific knowledge to solve everyday problems.",
    "Carry out simple scientific investigations safely.",
    "Explain interactions between living and non-living things.",
    "Understand matter, energy and their everyday applications.",
    "Develop observation, measurement and analytical skills.",
    "Appreciate environmental conservation and sustainable living.",
  ],
  topics: [
    {
      title: "Scientific Investigation",
      description: "Scientific method, laboratory safety and measurement.",
    },
    {
      title: "Living Things",
      description:
        "Classification, characteristics and organisation of living organisms.",
    },
    {
      title: "Human Body Systems",
      description: "Structure and functions of major body systems.",
    },
    {
      title: "Matter",
      description: "States of matter, physical and chemical changes.",
    },
    {
      title: "Force and Motion",
      description: "Movement, speed, force and balanced forces.",
    },
    {
      title: "Energy",
      description: "Forms, sources, transfer and conservation of energy.",
    },
    {
      title: "Plants and Environment",
      description:
        "Plant nutrition, ecosystems and environmental conservation.",
    },
    {
      title: "Weather and Climate",
      description: "Weather patterns, climate and environmental changes.",
    },
    {
      title: "Technology in Science",
      description: "Application of science and technology in everyday life.",
    },
  ],
  notes: [
    {
      title: "Scientific Investigation Notes",
      description: "Laboratory safety and practical skills.",
      meta: "In preparation",
    },
    {
      title: "Biology Notes",
      description: "Living organisms and body systems.",
      meta: "In preparation",
    },
    {
      title: "Chemistry Notes",
      description: "Matter and chemical processes.",
      meta: "In preparation",
    },
    {
      title: "Physics Notes",
      description: "Energy, force and motion.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Scientific Skills Exercises",
      description: "Practical investigation activities.",
      meta: "Coming soon",
    },
    {
      title: "Biology Questions",
      description: "Revision exercises on living things.",
      meta: "Coming soon",
    },
    {
      title: "Chemistry Questions",
      description: "Practice on matter and changes.",
      meta: "Coming soon",
    },
    {
      title: "Physics Questions",
      description: "Problems on force and energy.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Science Basics Quiz",
      description: "Test scientific concepts.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "Laboratory Skills Quiz",
      description: "Safety and practical work.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "End of Topic Assessment",
      description: "Comprehensive Integrated Science test.",
      meta: "20 Questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Integrated Science Syllabus",
      description: "Official KICD topic outline.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Notes",
      description: "Summary notes for all strands.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Practical Worksheet Pack",
      description: "Printable science activities.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Scientific Investigation",
      description: "Introduction to practical science.",
      meta: "Coming soon",
    },
    {
      title: "Living Organisms",
      description: "Understanding Biology concepts.",
      meta: "Coming soon",
    },
    {
      title: "Energy and Motion",
      description: "Interactive Physics lessons.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "What is Integrated Science?",
      answer:
        "It combines Biology, Chemistry, Physics and Earth Science into one subject to help learners understand the natural world.",
    },
    {
      question: "Will there be practical activities?",
      answer:
        "Yes. Learners are encouraged to perform experiments and investigations safely.",
    },
    {
      question: "Are downloadable notes available?",
      answer:
        "Yes. CBC-aligned notes and worksheets will be added progressively.",
    },
    {
      question: "Does this content follow KICD?",
      answer:
        "Yes. All topics are based on the official Grade 8 CBC curriculum.",
    },
  ],
};

const SocialStudiesIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="3" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    <path d="M2 12h4M18 12h4" />
  </svg>
);
export const socialStudiesContent: SubjectContent = {
  slug: "social-studies",
  name: "Social Studies",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "purple",
  icon: SocialStudiesIcon,

  description:
    "Grade 8 Social Studies enables learners to understand people, places and environments while developing responsible citizenship, national values, historical awareness and geographical skills in accordance with the CBC curriculum.",

  outcomes: [
    "Demonstrate responsible citizenship and national values.",
    "Explain Kenya's physical and human environment.",
    "Understand major historical events and their significance.",
    "Interpret simple maps and geographical information.",
    "Appreciate cultural diversity and peaceful coexistence.",
    "Develop environmental conservation and decision-making skills.",
  ],
  topics: [
    {
      title: "Citizenship",
      description: "Rights, responsibilities and good governance.",
    },
    {
      title: "National Values",
      description: "Integrity, patriotism, unity and leadership.",
    },
    {
      title: "Physical Environment",
      description: "Relief, climate, vegetation and natural resources.",
    },
    {
      title: "Population",
      description: "Population distribution and settlement patterns.",
    },
    {
      title: "History of Kenya",
      description: "Early communities and historical developments.",
    },
    {
      title: "Maps and Map Reading",
      description: "Using maps, scale, direction and symbols.",
    },
    {
      title: "Economic Activities",
      description: "Agriculture, trade, industry and tourism.",
    },
    {
      title: "Environment",
      description:
        "Conservation of natural resources and sustainable development.",
    },
    {
      title: "Regional Integration",
      description: "East African Community and international cooperation.",
    },
  ],
  notes: [
    {
      title: "Citizenship Notes",
      description: "National values and civic responsibility.",
      meta: "In preparation",
    },
    {
      title: "Geography Notes",
      description: "Physical features and map work.",
      meta: "In preparation",
    },
    {
      title: "History Notes",
      description: "Key historical events and communities.",
      meta: "In preparation",
    },
    {
      title: "Environment Notes",
      description: "Environmental conservation and sustainability.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Citizenship Exercises",
      description: "Practice questions on civic education.",
      meta: "Coming soon",
    },
    {
      title: "Map Work",
      description: "Map reading and interpretation exercises.",
      meta: "Coming soon",
    },
    {
      title: "History Questions",
      description: "Revision questions on Kenyan history.",
      meta: "Coming soon",
    },
    {
      title: "Geography Revision",
      description: "Exercises on physical and human geography.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Citizenship Quiz",
      description: "Test your understanding of civic concepts.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "Map Skills Quiz",
      description: "Practice map interpretation.",
      meta: "10 Questions · Coming soon",
    },
    {
      title: "End of Topic Assessment",
      description: "Comprehensive Social Studies assessment.",
      meta: "20 Questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Social Studies Syllabus",
      description: "Official CBC topic outline.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Notes",
      description: "Summary notes for all strands.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Worksheet Pack",
      description: "Printable revision exercises.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Citizenship Explained",
      description: "Understanding responsible citizenship.",
      meta: "Coming soon",
    },
    {
      title: "Map Reading Skills",
      description: "Learn map interpretation techniques.",
      meta: "Coming soon",
    },
    {
      title: "History of Kenya",
      description: "Important historical events.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "What do learners study in Social Studies?",
      answer:
        "Learners study citizenship, geography, history, environment, map work and national values.",
    },
    {
      question: "Why is map work important?",
      answer:
        "Map work develops geographical skills needed to understand locations, directions and physical features.",
    },
    {
      question: "Will downloadable revision materials be available?",
      answer:
        "Yes. CBC-aligned notes, worksheets and revision resources will be added progressively.",
    },
    {
      question: "Is this content based on KICD?",
      answer:
        "Yes. All topics follow the official Grade 8 CBC curriculum by KICD.",
    },
  ],
};

const CreativeArtsIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 17.2 8 11.7 4 7.8 9.5 7z" />
  </svg>
);

export const creativeArtsContent: SubjectContent = {
  slug: "creative-arts",
  name: "Creative Arts & Sports",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "purple",
  icon: CreativeArtsIcon,

  description:
    "Grade 8 Creative Arts & Sports develops learners' creativity, imagination, artistic expression, physical fitness, teamwork, and appreciation of culture. Learners participate in music, visual arts, physical education, and performing arts while building confidence, discipline, and healthy lifestyles in line with the CBC curriculum.",

  outcomes: [
    "Demonstrate creativity through visual and performing arts",
    "Develop practical skills in drawing, painting and design",
    "Perform music using voice and simple instruments",
    "Participate safely in physical education and sports activities",
    "Appreciate Kenyan culture through artistic expression",
    "Develop teamwork, leadership and sportsmanship skills",
  ],
  topics: [
    {
      title: "Visual Arts",
      description: "Drawing, painting, colour mixing and creative design.",
    },
    {
      title: "Music",
      description:
        "Singing, rhythm, melody and basic instrumental performance.",
    },
    {
      title: "Dance & Drama",
      description: "Creative movement, acting and stage performance.",
    },
    {
      title: "Craft & Design",
      description: "Creating artworks using locally available materials.",
    },
    {
      title: "Physical Education",
      description: "Fitness exercises, warm-ups and healthy living.",
    },
    {
      title: "Team Sports",
      description: "Football, volleyball, athletics and teamwork.",
    },
    {
      title: "Traditional Games",
      description: "Appreciating indigenous games and cultural heritage.",
    },
    {
      title: "Safety in Sports",
      description: "Preventing injuries and observing safety rules.",
    },
    {
      title: "Talent Development",
      description: "Identifying and nurturing artistic and sporting talents.",
    },
  ],
  notes: [
    {
      title: "Visual Arts Notes",
      description: "Drawing techniques, colour theory and design principles.",
      meta: "In preparation",
    },
    {
      title: "Music Notes",
      description: "Rhythm, melody, notation and performance skills.",
      meta: "In preparation",
    },
    {
      title: "Sports & PE Notes",
      description: "Fitness, games and physical education concepts.",
      meta: "In preparation",
    },
    {
      title: "Performing Arts Notes",
      description: "Drama, dance and stage performance skills.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Drawing Activities",
      description: "Creative drawing and colouring exercises.",
      meta: "Coming soon",
    },
    {
      title: "Music Practice",
      description: "Rhythm and singing exercises.",
      meta: "Coming soon",
    },
    {
      title: "PE Activities",
      description: "Fitness drills and sports practice.",
      meta: "Coming soon",
    },
    {
      title: "Creative Projects",
      description: "Hands-on art and craft activities.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Creative Arts Quiz",
      description: "Test your understanding of art concepts.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "Sports Quiz",
      description: "Assess your knowledge of games and fitness.",
      meta: "10 questions · Coming soon",
    },
    {
      title: "End of Topic Assessment",
      description: "Comprehensive Creative Arts & Sports assessment.",
      meta: "20 questions · Coming soon",
    },
  ],
  downloads: [
    {
      title: "Creative Arts Syllabus",
      description: "Official CBC topic outline.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Art Project Booklet",
      description: "Printable practical activities.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Sports Activities Guide",
      description: "Games and physical education exercises.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Visual Arts",
      description: "Learn basic drawing and painting techniques.",
      meta: "Coming soon",
    },
    {
      title: "Music Performance Skills",
      description: "Develop rhythm and vocal performance.",
      meta: "Coming soon",
    },
    {
      title: "Physical Fitness Training",
      description: "Exercise routines and sports demonstrations.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "What is taught in Creative Arts & Sports?",
      answer:
        "Learners study visual arts, music, drama, physical education and sports while developing creativity, fitness and teamwork.",
    },
    {
      question: "Why is this subject important?",
      answer:
        "It nurtures talents, promotes healthy living, builds confidence and encourages creative thinking.",
    },
    {
      question: "How is the subject assessed?",
      answer:
        "Assessment includes practical activities, projects, performance tasks and classroom participation under CBC.",
    },
    {
      question: "Will learning resources be available?",
      answer:
        "Yes. CBC Guide Kenya will provide notes, revision materials, worksheets and quizzes.",
    },
  ],
};

const PreTechnicalIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2l8 8-8 8" />
    <path d="M2 22l7-7" />
    <path d="M17 7l-5 5" />
  </svg>
);

export const preTechnicalStudiesContent: SubjectContent = {
  slug: "pre-technical-studies",
  name: "Pre-Technical Studies",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "orange",
  icon: PreTechnicalIcon,

  description:
    "Grade 8 Pre-Technical Studies introduces learners to practical technical skills, engineering concepts, design thinking, safety procedures, and the responsible use of tools and materials. The subject nurtures innovation, creativity, entrepreneurship, and problem-solving in preparation for technical careers under the CBC curriculum.",

  outcomes: [
    "Demonstrate safe use and care of tools and workshop equipment",
    "Apply engineering design processes to solve practical problems",
    "Identify properties and uses of common materials",
    "Develop simple technical drawings and sketches",
    "Construct basic practical projects using appropriate tools",
    "Demonstrate creativity, innovation, and teamwork in technical activities",
  ],
  topics: [
    {
      title: "Workshop Safety",
      description:
        "Safety rules, protective equipment, hazard identification, and safe working habits.",
    },
    {
      title: "Tools and Equipment",
      description:
        "Identification, proper use, maintenance, and storage of common hand tools.",
    },
    {
      title: "Engineering Design",
      description:
        "Understanding the design process from identifying problems to evaluating solutions.",
    },
    {
      title: "Technical Drawing",
      description:
        "Basic sketching, dimensioning, and simple orthographic drawings.",
    },
    {
      title: "Materials Technology",
      description:
        "Properties and applications of wood, metals, plastics, and other materials.",
    },
    {
      title: "Simple Construction Projects",
      description:
        "Planning and building practical projects using basic workshop techniques.",
    },
    {
      title: "Entrepreneurship",
      description:
        "Using technical skills to solve community problems and create business opportunities.",
    },
    {
      title: "Innovation and Creativity",
      description:
        "Developing original ideas and improving existing products through design.",
    },
    {
      title: "Technology in Everyday Life",
      description:
        "Exploring how technology improves transport, communication, agriculture, and manufacturing.",
    },
  ],
  notes: [
    {
      title: "Workshop Safety Notes",
      description: "Comprehensive notes on workshop rules and safe practices.",
      meta: "In preparation",
    },
    {
      title: "Technical Drawing Notes",
      description: "Illustrated notes on drawing techniques and symbols.",
      meta: "In preparation",
    },
    {
      title: "Engineering Design Notes",
      description: "Understanding the design cycle with examples.",
      meta: "In preparation",
    },
    {
      title: "Materials Technology Notes",
      description: "Properties and uses of common engineering materials.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Workshop Safety Exercises",
      description: "Questions on safety procedures and tool handling.",
      meta: "Coming soon",
    },
    {
      title: "Technical Drawing Practice",
      description: "Drawing exercises and simple sketching tasks.",
      meta: "Coming soon",
    },
    {
      title: "Engineering Design Activities",
      description: "Problem-solving and design challenges.",
      meta: "Coming soon",
    },
    {
      title: "Materials Revision",
      description: "Practice questions on materials and their applications.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Workshop Safety Quiz",
      description: "Assess understanding of workshop rules.",
      meta: "10 Questions",
    },
    {
      title: "Technical Drawing Quiz",
      description: "Test drawing concepts and symbols.",
      meta: "10 Questions",
    },
    {
      title: "End of Strand Assessment",
      description: "Revision covering all major topics.",
      meta: "20 Questions",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Pre-Technical Studies Notes",
      description: "Complete printable revision notes.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Workshop Safety Guide",
      description: "Safety handbook for learners.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Technical Drawing Worksheets",
      description: "Practice drawing sheets.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Workshop Safety",
      description: "Learn essential workshop safety rules.",
      meta: "Coming soon",
    },
    {
      title: "Using Common Hand Tools",
      description: "Practical demonstration of workshop tools.",
      meta: "Coming soon",
    },
    {
      title: "Engineering Design Process",
      description: "Step-by-step guide to solving engineering problems.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why do learners study Pre-Technical Studies?",
      answer:
        "The subject equips learners with practical technical, engineering, and problem-solving skills useful in everyday life and future careers.",
    },
    {
      question: "Is practical work important?",
      answer:
        "Yes. Learners gain hands-on experience through projects, workshop activities, and design tasks.",
    },
    {
      question: "Do learners use real tools?",
      answer:
        "Yes, under teacher supervision and while following workshop safety procedures.",
    },
    {
      question: "Will revision materials be available?",
      answer:
        "Yes. MetroVert will provide notes, worksheets, quizzes, and downloadable revision resources.",
    },
  ],
};

const AgricultureNutritionIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" />
    <path d="M12 8v12" />
    <path d="M8 12h8" />
  </svg>
);

export const agricultureNutritionContent: SubjectContent = {
  slug: "agriculture-and-nutrition",
  name: "Agriculture & Nutrition",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "green",
  icon: AgricultureNutritionIcon,

  description:
    "Grade 8 Agriculture and Nutrition introduces learners to sustainable farming practices, food production, healthy eating, environmental conservation, and food safety. The subject develops practical agricultural skills while promoting proper nutrition and responsible use of natural resources in line with the CBC curriculum.",
  outcomes: [
    "Apply sustainable farming practices in crop and livestock production",
    "Explain the importance of balanced diets and proper nutrition",
    "Demonstrate food hygiene and food preservation techniques",
    "Identify common agricultural tools and their uses",
    "Practice environmental conservation in agricultural activities",
    "Develop problem-solving and entrepreneurial skills through agriculture",
  ],
  topics: [
    {
      title: "Introduction to Agriculture",
      description:
        "Importance of agriculture, agricultural careers, and sustainable farming.",
    },
    {
      title: "Crop Production",
      description:
        "Land preparation, planting, crop management, and harvesting techniques.",
    },
    {
      title: "Livestock Production",
      description:
        "Basic livestock management, housing, feeding, and animal welfare.",
    },
    {
      title: "Agricultural Tools",
      description:
        "Identification, safe use, maintenance, and storage of farm tools.",
    },
    {
      title: "Nutrition and Balanced Diet",
      description: "Food nutrients, balanced meals, and healthy eating habits.",
    },
    {
      title: "Food Hygiene",
      description:
        "Safe food handling, preparation, storage, and prevention of food contamination.",
    },
    {
      title: "Food Preservation",
      description:
        "Methods of preserving food to reduce waste and improve food security.",
    },
    {
      title: "Environmental Conservation",
      description:
        "Soil conservation, water conservation, and sustainable resource management.",
    },
    {
      title: "Agribusiness",
      description:
        "Introduction to agricultural entrepreneurship and value addition.",
    },
  ],
  notes: [
    {
      title: "Crop Production Notes",
      description: "Comprehensive notes on crop farming practices.",
      meta: "In preparation",
    },
    {
      title: "Livestock Notes",
      description: "Basic livestock management and animal care.",
      meta: "In preparation",
    },
    {
      title: "Nutrition Notes",
      description: "Healthy diets, nutrients, and meal planning.",
      meta: "In preparation",
    },
    {
      title: "Food Preservation Notes",
      description: "Methods of preserving food safely.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Crop Farming Exercises",
      description: "Practice questions on crop production.",
      meta: "Coming soon",
    },
    {
      title: "Livestock Activities",
      description: "Revision questions on animal production.",
      meta: "Coming soon",
    },
    {
      title: "Nutrition Revision",
      description: "Balanced diet and nutrient exercises.",
      meta: "Coming soon",
    },
    {
      title: "Food Safety Questions",
      description: "Practice food hygiene and preservation questions.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Agriculture Quiz",
      description: "Test your understanding of agriculture.",
      meta: "10 Questions",
    },
    {
      title: "Nutrition Quiz",
      description: "Assess knowledge on nutrition and food safety.",
      meta: "10 Questions",
    },
    {
      title: "End of Strand Assessment",
      description: "Revision covering all Agriculture & Nutrition topics.",
      meta: "20 Questions",
    },
  ],
  downloads: [
    {
      title: "Agriculture Notes",
      description: "Printable Agriculture & Nutrition revision notes.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Balanced Diet Chart",
      description: "Illustrated food groups and nutrient guide.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Worksheet",
      description: "Practice worksheet for Grade 8 learners.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Agriculture",
      description: "Overview of Grade 8 Agriculture & Nutrition.",
      meta: "Coming soon",
    },
    {
      title: "Balanced Diet Explained",
      description: "Learn about food nutrients and healthy meals.",
      meta: "Coming soon",
    },
    {
      title: "Food Preservation Methods",
      description: "Simple techniques for preserving food.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why is Agriculture & Nutrition important?",
      answer:
        "The subject equips learners with practical farming skills, healthy eating habits, and environmental conservation knowledge for everyday life.",
    },
    {
      question: "Will learners do practical activities?",
      answer:
        "Yes. Learners participate in farming projects, food preparation, and practical demonstrations where resources are available.",
    },
    {
      question: "Does the subject encourage entrepreneurship?",
      answer:
        "Yes. Learners explore agribusiness opportunities and value addition in agriculture.",
    },
    {
      question: "Will revision resources be available?",
      answer:
        "Yes. MetroVert will provide notes, quizzes, worksheets, and downloadable learning materials.",
    },
  ],
};

const LifeSkillsIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0113 0" />
  </svg>
);

export const lifeSkillsValuesContent: SubjectContent = {
  slug: "life-skills-and-values",
  name: "Life Skills & Values",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "purple",
  icon: LifeSkillsIcon,

  description:
    "Grade 8 Life Skills and Values equips learners with personal, social, emotional, and ethical competencies needed for responsible citizenship. The subject promotes self-awareness, resilience, communication, leadership, integrity, and healthy decision-making in accordance with the CBC curriculum.",
  outcomes: [
    "Develop self-awareness and positive self-esteem",
    "Demonstrate effective communication and interpersonal skills",
    "Apply critical thinking and problem-solving skills in daily life",
    "Practice responsible decision-making and conflict resolution",
    "Demonstrate leadership, teamwork, and responsible citizenship",
    "Promote personal well-being, integrity, and respect for diversity",
  ],
  topics: [
    {
      title: "Self-Awareness",
      description:
        "Understanding personal strengths, talents, emotions, and values.",
    },
    {
      title: "Self-Esteem",
      description:
        "Building confidence, resilience, and a positive self-image.",
    },
    {
      title: "Communication Skills",
      description:
        "Effective speaking, listening, non-verbal communication, and active listening.",
    },
    {
      title: "Interpersonal Relationships",
      description:
        "Building healthy friendships, cooperation, empathy, and respect.",
    },
    {
      title: "Decision Making",
      description:
        "Making responsible choices using critical thinking and reasoning.",
    },
    {
      title: "Conflict Resolution",
      description:
        "Managing disagreements peacefully through dialogue and negotiation.",
    },
    {
      title: "Leadership and Teamwork",
      description:
        "Developing leadership qualities while working effectively with others.",
    },
    {
      title: "Citizenship and Values",
      description:
        "Integrity, patriotism, responsibility, accountability, and respect.",
    },
    {
      title: "Personal Safety and Well-being",
      description:
        "Managing emotions, avoiding risky behaviour, and maintaining healthy lifestyles.",
    },
  ],
  notes: [
    {
      title: "Self-Awareness Notes",
      description: "Notes on personal development and emotional intelligence.",
      meta: "In preparation",
    },
    {
      title: "Communication Skills Notes",
      description: "Effective communication and interpersonal skills.",
      meta: "In preparation",
    },
    {
      title: "Leadership Notes",
      description: "Developing responsible leadership qualities.",
      meta: "In preparation",
    },
    {
      title: "Citizenship Notes",
      description: "CBC values and responsible citizenship.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Communication Activities",
      description: "Exercises on communication and teamwork.",
      meta: "Coming soon",
    },
    {
      title: "Decision-Making Exercises",
      description: "Practice scenarios for responsible decision-making.",
      meta: "Coming soon",
    },
    {
      title: "Leadership Activities",
      description: "Classroom leadership and teamwork exercises.",
      meta: "Coming soon",
    },
    {
      title: "Values Revision",
      description: "Practice questions on CBC core values.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Life Skills Quiz",
      description: "Assess understanding of life skills concepts.",
      meta: "10 Questions",
    },
    {
      title: "Values Quiz",
      description: "Test knowledge of responsible citizenship and values.",
      meta: "10 Questions",
    },
    {
      title: "End of Strand Assessment",
      description: "Comprehensive assessment covering all strands.",
      meta: "20 Questions",
    },
  ],
  downloads: [
    {
      title: "Life Skills Notes",
      description: "Printable revision notes.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Values Workbook",
      description: "Activity workbook for learners.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Worksheets",
      description: "Practice questions for revision.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Life Skills",
      description: "Overview of Grade 8 Life Skills & Values.",
      meta: "Coming soon",
    },
    {
      title: "Communication Skills",
      description: "Learning effective communication techniques.",
      meta: "Coming soon",
    },
    {
      title: "Leadership and Citizenship",
      description: "Building leadership and responsible citizenship.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why is Life Skills and Values important?",
      answer:
        "The subject prepares learners to make responsible decisions, develop healthy relationships, and become ethical and productive members of society.",
    },
    {
      question: "Is this subject examined?",
      answer:
        "Learners are assessed continuously through CBC competency-based assessment activities and classroom participation.",
    },
    {
      question: "What values are emphasized?",
      answer:
        "Integrity, responsibility, respect, patriotism, accountability, honesty, empathy, and cooperation are among the core CBC values.",
    },
    {
      question: "Will MetroVert provide revision resources?",
      answer:
        "Yes. Revision notes, quizzes, worksheets, and learning activities will be added progressively.",
    },
  ],
};

const ReligiousEducationIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18" />
    <path d="M7 8h10" />
    <path d="M8 21h8" />
  </svg>
);

export const religiousEducationContent: SubjectContent = {
  slug: "religious-education",
  name: "Religious Education",
  tagline: "Grade 8 • Junior Secondary",
  colorKey: "purple",
  icon: ReligiousEducationIcon,

  description:
    "Grade 8 Religious Education nurtures learners' spiritual, moral, and ethical values through the study of faith, character development, responsible citizenship, and peaceful coexistence. Learners appreciate religious diversity while applying positive values in everyday life under the CBC curriculum.",
  outcomes: [
    "Demonstrate moral and ethical decision-making.",
    "Appreciate the teachings and values of religious traditions.",
    "Promote peace, unity, and responsible citizenship.",
    "Respect people of different beliefs and cultures.",
    "Develop personal integrity and self-discipline.",
    "Apply religious values to everyday life.",
  ],
  topics: [
    {
      title: "Creation and Responsibility",
      description:
        "Understanding God's creation and caring for the environment.",
    },
    {
      title: "Prayer and Worship",
      description: "Importance of prayer, worship, and spiritual growth.",
    },
    {
      title: "Moral Values",
      description:
        "Honesty, respect, responsibility, compassion, and integrity.",
    },
    {
      title: "Leadership and Service",
      description: "Developing servant leadership and community service.",
    },
    {
      title: "Family Life",
      description:
        "Roles, responsibilities, and healthy relationships within families.",
    },
    {
      title: "Peace and Conflict Resolution",
      description:
        "Promoting peaceful coexistence and resolving conflicts positively.",
    },
    {
      title: "Citizenship",
      description: "Rights, responsibilities, and national values.",
    },
    {
      title: "Religious Festivals",
      description:
        "Appreciating important religious celebrations and traditions.",
    },
    {
      title: "Contemporary Moral Issues",
      description: "Applying religious values to modern-day challenges.",
    },
  ],
  notes: [
    {
      title: "CRE Notes",
      description:
        "Comprehensive notes covering Grade 8 Religious Education topics.",
      meta: "Coming soon",
    },
    {
      title: "Bible & Religious Teachings",
      description: "Key teachings and practical applications.",
      meta: "Coming soon",
    },
    {
      title: "Values Summary",
      description: "Quick revision guide on moral and social values.",
      meta: "Coming soon",
    },
    {
      title: "Revision Notes",
      description: "End-of-topic revision material.",
      meta: "Coming soon",
    },
  ],
  practiceSets: [
    {
      title: "Topic Exercises",
      description: "Practice questions for every topic.",
      meta: "Coming soon",
    },
    {
      title: "Values Assessment",
      description: "Questions on ethical decision-making.",
      meta: "Coming soon",
    },
    {
      title: "CBC Activities",
      description: "Competency-based learning activities.",
      meta: "Coming soon",
    },
    {
      title: "End of Term Practice",
      description: "Comprehensive revision exercises.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Quick Quiz",
      description: "Test understanding of each topic.",
      meta: "10 Questions",
    },
    {
      title: "Values Quiz",
      description: "Assess understanding of moral values.",
      meta: "Coming soon",
    },
    {
      title: "Religious Teachings Quiz",
      description: "Practice questions from religious teachings.",
      meta: "Coming soon",
    },
  ],
  downloads: [
    {
      title: "Grade 8 Religious Education Notes",
      description: "Printable revision notes.",
      meta: "PDF",
    },
    {
      title: "Worksheet Pack",
      description: "Practice worksheets.",
      meta: "PDF",
    },
    {
      title: "Revision Guide",
      description: "End-term revision booklet.",
      meta: "PDF",
    },
  ],
  videos: [
    {
      title: "Introduction to Religious Education",
      description: "Overview of Grade 8 Religious Education.",
      meta: "Coming soon",
    },
    {
      title: "Values and Citizenship",
      description: "Understanding responsible citizenship.",
      meta: "Coming soon",
    },
    {
      title: "Peace and Leadership",
      description: "Leadership and peaceful living.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why is Religious Education important?",
      answer:
        "It helps learners develop moral values, responsible behaviour, spiritual growth, and respect for others.",
    },
    {
      question: "Is Religious Education examined?",
      answer:
        "Yes. Learners are assessed through CBC continuous assessment and classroom activities.",
    },
    {
      question: "Do learners study different religions?",
      answer:
        "Learners appreciate religious diversity while focusing on the approved curriculum.",
    },
    {
      question: "Will revision materials be available?",
      answer:
        "Yes. CBC Guide Kenya will provide notes, quizzes, worksheets, and revision guides.",
    },
  ],
};

const BusinessStudiesIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M7 21V9h10v12" />
    <path d="M9 5h6v4H9z" />
  </svg>
);

export const businessStudiesContent: SubjectContent = {
  slug: "business-studies",
  name: "Business Studies",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "green",
  icon: BusinessStudiesIcon,

  description:
    "Grade 8 Business Studies introduces learners to entrepreneurship, financial literacy, trade, consumer awareness, and business management. The subject equips learners with practical business skills, creativity, and an entrepreneurial mindset in line with the CBC curriculum.",
  outcomes: [
    "Explain the importance of business in everyday life.",
    "Demonstrate basic entrepreneurial and financial management skills.",
    "Identify different forms of trade and business activities.",
    "Practice responsible consumer decision-making.",
    "Develop budgeting and saving skills.",
    "Appreciate ethical business practices and innovation.",
  ],
  topics: [
    {
      title: "Introduction to Business",
      description: "Meaning, importance and functions of business.",
    },
    {
      title: "Entrepreneurship",
      description:
        "Characteristics of entrepreneurs and identifying business opportunities.",
    },
    {
      title: "Trade",
      description:
        "Internal and external trade, buying and selling goods and services.",
    },
    {
      title: "Consumer Education",
      description: "Consumer rights, responsibilities and protection.",
    },
    {
      title: "Financial Literacy",
      description:
        "Saving, budgeting, banking and responsible money management.",
    },
    {
      title: "Business Communication",
      description: "Communication methods used in business environments.",
    },
    {
      title: "Record Keeping",
      description: "Simple business records and financial documents.",
    },
    {
      title: "Ethics in Business",
      description: "Honesty, integrity and responsible business conduct.",
    },
    {
      title: "Technology in Business",
      description: "Using technology to improve business operations.",
    },
  ],
  notes: [
    {
      title: "Entrepreneurship Notes",
      description: "Comprehensive notes on entrepreneurship and innovation.",
      meta: "In preparation",
    },
    {
      title: "Trade Notes",
      description: "Buying, selling and distribution of goods and services.",
      meta: "In preparation",
    },
    {
      title: "Financial Literacy Notes",
      description: "Saving, budgeting and banking concepts.",
      meta: "In preparation",
    },
    {
      title: "Consumer Education Notes",
      description: "Consumer rights and responsibilities.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Entrepreneurship Exercises",
      description: "Practice questions on business opportunities.",
      meta: "Coming soon",
    },
    {
      title: "Financial Literacy Activities",
      description: "Budgeting and money management exercises.",
      meta: "Coming soon",
    },
    {
      title: "Trade Revision",
      description: "Questions on trade and commerce.",
      meta: "Coming soon",
    },
    {
      title: "Consumer Protection Questions",
      description: "Revision on consumer rights and ethics.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Business Basics Quiz",
      description: "Test understanding of business concepts.",
      meta: "10 Questions",
    },
    {
      title: "Financial Literacy Quiz",
      description: "Assess budgeting and saving skills.",
      meta: "10 Questions",
    },
    {
      title: "End of Strand Assessment",
      description: "Comprehensive Grade 8 Business Studies assessment.",
      meta: "20 Questions",
    },
  ],
  downloads: [
    {
      title: "Business Studies Notes",
      description: "Printable revision notes for Grade 8.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Worksheets",
      description: "Business Studies practice worksheets.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Entrepreneurship Workbook",
      description: "Activities to develop entrepreneurial skills.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Business",
      description: "Overview of Business Studies concepts.",
      meta: "Coming soon",
    },
    {
      title: "Entrepreneurship Skills",
      description: "Developing entrepreneurial thinking.",
      meta: "Coming soon",
    },
    {
      title: "Financial Literacy",
      description: "Saving, budgeting and banking explained.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why is Business Studies important?",
      answer:
        "The subject equips learners with practical business, financial and entrepreneurial skills useful in everyday life.",
    },
    {
      question: "Will learners carry out business projects?",
      answer:
        "Yes. CBC encourages practical business activities, problem-solving and entrepreneurship projects.",
    },
    {
      question: "Does Business Studies teach financial literacy?",
      answer:
        "Yes. Learners study saving, budgeting, banking and responsible money management.",
    },
    {
      question: "Will MetroVert provide revision resources?",
      answer:
        "Yes. Notes, worksheets, quizzes and downloadable learning resources will be added progressively.",
    },
  ],
};

const HealthEducationIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.7A4 4 0 0119 11c0 5.5-7 10-7 10z" />
  </svg>
);

export const healthEducationContent: SubjectContent = {
  slug: "health-education",
  name: "Health Education",
  tagline: "Grade 8 · Junior Secondary",
  colorKey: "green",
  icon: HealthEducationIcon,

  description:
    "Grade 8 Health Education equips learners with knowledge, skills, attitudes, and values that promote healthy living. Learners explore personal hygiene, nutrition, disease prevention, mental well-being, reproductive health, first aid, and healthy lifestyles in line with the CBC curriculum.",
  outcomes: [
    "Practice personal hygiene and healthy living habits.",
    "Explain the importance of balanced nutrition and physical activity.",
    "Identify common diseases and methods of prevention.",
    "Demonstrate basic first aid skills in emergency situations.",
    "Promote positive mental health and emotional well-being.",
    "Make responsible decisions that support lifelong health.",
  ],
  topics: [
    {
      title: "Personal Hygiene",
      description:
        "Maintaining cleanliness to prevent diseases and promote health.",
    },
    {
      title: "Nutrition",
      description: "Balanced diets, nutrients and healthy eating habits.",
    },
    {
      title: "Communicable Diseases",
      description:
        "Causes, transmission, prevention and control of common diseases.",
    },
    {
      title: "Mental Health",
      description: "Managing emotions, stress and building resilience.",
    },
    {
      title: "Physical Fitness",
      description: "Exercise, active living and maintaining body fitness.",
    },
    {
      title: "First Aid",
      description: "Basic first aid procedures and emergency response.",
    },
    {
      title: "Safety and Injury Prevention",
      description: "Preventing accidents at home, school and in the community.",
    },
    {
      title: "Substance Abuse Prevention",
      description: "Understanding the dangers of alcohol, tobacco and drugs.",
    },
    {
      title: "Healthy Relationships",
      description: "Respect, communication and responsible decision-making.",
    },
  ],
  notes: [
    {
      title: "Personal Hygiene Notes",
      description: "Study notes on hygiene and disease prevention.",
      meta: "In preparation",
    },
    {
      title: "Nutrition Notes",
      description: "Balanced diet, nutrients and healthy eating.",
      meta: "In preparation",
    },
    {
      title: "Mental Health Notes",
      description: "Building emotional well-being and resilience.",
      meta: "In preparation",
    },
    {
      title: "First Aid Notes",
      description: "Basic first aid procedures and emergency care.",
      meta: "In preparation",
    },
  ],
  practiceSets: [
    {
      title: "Healthy Living Exercises",
      description: "Practice questions on healthy lifestyles.",
      meta: "Coming soon",
    },
    {
      title: "Nutrition Activities",
      description: "Exercises on food groups and balanced diets.",
      meta: "Coming soon",
    },
    {
      title: "Disease Prevention Questions",
      description: "Revision exercises on communicable diseases.",
      meta: "Coming soon",
    },
    {
      title: "First Aid Practice",
      description: "Scenario-based first aid questions.",
      meta: "Coming soon",
    },
  ],
  quizzes: [
    {
      title: "Health Education Quiz",
      description: "Test your understanding of healthy living.",
      meta: "10 Questions",
    },
    {
      title: "Nutrition Quiz",
      description: "Assess your knowledge of balanced diets.",
      meta: "10 Questions",
    },
    {
      title: "End of Strand Assessment",
      description: "Comprehensive Grade 8 Health Education assessment.",
      meta: "20 Questions",
    },
  ],
  downloads: [
    {
      title: "Health Education Notes",
      description: "Printable Grade 8 revision notes.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Healthy Living Guide",
      description: "Quick reference guide for learners.",
      meta: "PDF · Coming soon",
    },
    {
      title: "Revision Worksheet Pack",
      description: "Printable revision exercises.",
      meta: "PDF · Coming soon",
    },
  ],
  videos: [
    {
      title: "Introduction to Health Education",
      description: "Overview of Grade 8 Health Education.",
      meta: "Coming soon",
    },
    {
      title: "Healthy Living Habits",
      description: "Daily practices that promote good health.",
      meta: "Coming soon",
    },
    {
      title: "First Aid Basics",
      description: "Simple emergency response skills.",
      meta: "Coming soon",
    },
  ],
  faqs: [
    {
      question: "Why is Health Education important?",
      answer:
        "It helps learners develop healthy habits, prevent diseases, make responsible decisions and improve their overall well-being.",
    },
    {
      question: "Does Health Education include practical activities?",
      answer:
        "Yes. Learners participate in practical demonstrations, discussions and competency-based activities where appropriate.",
    },
    {
      question: "Will learners study first aid?",
      answer:
        "Yes. Basic first aid knowledge and emergency response are part of the learning experience.",
    },
    {
      question: "Will MetroVert provide revision resources?",
      answer:
        "Yes. Notes, worksheets, quizzes and downloadable learning resources will continue to be added.",
    },
  ],
};
