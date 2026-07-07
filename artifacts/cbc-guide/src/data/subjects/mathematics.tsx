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
