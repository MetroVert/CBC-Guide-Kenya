import type { SubjectContent } from "../../types/subject";

const MathIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
    { title: "Cubes and Cube Roots", description: "Finding cubes and cube roots of numbers, and applying them in practical contexts." },
    { title: "Reciprocals", description: "Understanding reciprocals of numbers and using them in computations." },
    { title: "Ratio, Proportion & Percentage", description: "Working with ratios, direct and inverse proportion, and percentage change." },
    { title: "Algebraic Expressions", description: "Simplifying, expanding, and factorising expressions with two or more variables." },
    { title: "Linear Equations & Inequalities", description: "Solving and graphing linear equations and inequalities in one variable." },
    { title: "Sequences and Patterns", description: "Identifying number patterns and finding terms in arithmetic sequences." },
    { title: "Length, Area & Volume", description: "Calculating perimeter, area, and volume of composite 2D and 3D shapes." },
    { title: "Angles & Geometric Constructions", description: "Measuring, constructing, and applying angle properties in geometric figures." },
    { title: "Data Handling & Probability", description: "Organising data, computing averages, and understanding basic probability." },
  ],
  notes: [
    { title: "Numbers Strand Notes", description: "Concise notes covering cubes, cube roots, reciprocals, and number properties.", meta: "In preparation" },
    { title: "Algebra Strand Notes", description: "Step-by-step breakdowns of algebraic expressions, equations, and inequalities.", meta: "In preparation" },
    { title: "Geometry Strand Notes", description: "Illustrated notes on angles, constructions, and measurement.", meta: "In preparation" },
    { title: "Data Handling Notes", description: "Guided notes on data organisation, averages, and probability basics.", meta: "In preparation" },
  ],
  practiceSets: [
    { title: "Numbers Practice Set", description: "Exercises on cubes, cube roots, and reciprocals with worked solutions.", meta: "Coming soon" },
    { title: "Algebra Practice Set", description: "Graded questions on expressions, equations, and inequalities.", meta: "Coming soon" },
    { title: "Geometry Practice Set", description: "Construction and angle-property problems for hands-on practice.", meta: "Coming soon" },
    { title: "Data & Probability Set", description: "Applied questions on data interpretation and probability.", meta: "Coming soon" },
  ],
  quizzes: [
    { title: "Numbers Quick Quiz", description: "A short auto-marked quiz to test cubes, cube roots, and reciprocals.", meta: "10 questions · Coming soon" },
    { title: "Algebra Quick Quiz", description: "Check your understanding of expressions and equations.", meta: "10 questions · Coming soon" },
    { title: "End-of-Topic Assessment", description: "A comprehensive quiz covering all Grade 8 Mathematics strands.", meta: "20 questions · Coming soon" },
  ],
  downloads: [
    { title: "Grade 8 Mathematics Syllabus", description: "Official KICD-aligned topic breakdown for the term.", meta: "PDF · Coming soon" },
    { title: "Formula & Reference Sheet", description: "Quick-reference sheet of key formulas for revision.", meta: "PDF · Coming soon" },
    { title: "Printable Worksheet Pack", description: "A set of printable exercises for offline practice.", meta: "PDF · Coming soon" },
  ],
  videos: [
    { title: "Introduction to Cubes & Cube Roots", description: "A visual walkthrough of finding cubes and cube roots.", meta: "Coming soon" },
    { title: "Mastering Algebraic Expressions", description: "Step-by-step video on simplifying and factorising expressions.", meta: "Coming soon" },
    { title: "Geometric Constructions Made Easy", description: "Learn to construct angles and shapes using a ruler and compass.", meta: "Coming soon" },
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
