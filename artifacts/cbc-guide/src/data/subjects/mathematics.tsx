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
