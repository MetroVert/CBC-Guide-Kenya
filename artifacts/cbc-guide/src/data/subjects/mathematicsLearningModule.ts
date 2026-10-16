import type { InteractiveLearningModule } from "../../types/subject";

export const mathematicsLearningModule: InteractiveLearningModule = {
  lessonTitle: "Cubes and Cube Roots",
  introduction:
    "A cube is made by multiplying a number by itself three times. A cube root reverses that operation. These ideas help us work with perfect cubes and find the side length of a cube when its volume is known.",
  lessonGoals: [
    "Calculate the cube of a whole number.",
    "Recognise common perfect cubes and find their exact cube roots.",
    "Use cube roots to solve simple cube-volume problems.",
  ],
  lessonSections: [
    {
      heading: "1. Finding the cube of a number",
      paragraphs: [
        "The cube of a number n is written n³ and means n × n × n. The small 3 tells us to use three equal factors; it does not mean multiply n by 3.",
        "For example, 4³ = 4 × 4 × 4 = 16 × 4 = 64.",
      ],
      examples: [
        {
          prompt: "Find 7³.",
          steps: [
            "Write three equal factors: 7 × 7 × 7.",
            "Multiply: 49 × 7 = 343.",
          ],
          answer: "7³ = 343",
        },
      ],
    },
    {
      heading: "2. Perfect cubes and cube roots",
      paragraphs: [
        "A perfect cube is a number that can be written as n³ for a whole number n. For instance, 125 is a perfect cube because 5³ = 125.",
        "The cube root symbol ∛ asks which number was cubed to make the value inside it. Therefore, ∛125 = 5. Check by cubing the answer: 5³ = 125.",
        "Useful perfect cubes include 1, 8, 27, 64, 125, 216, 343, 512, 729, and 1,000.",
      ],
      examples: [
        {
          prompt: "Find ∛216.",
          steps: [
            "Recall that 6 × 6 × 6 = 216.",
            "So 6 is the number whose cube is 216.",
          ],
          answer: "∛216 = 6",
        },
      ],
    },
    {
      heading: "3. Applying cube roots to volume",
      paragraphs: [
        "The volume of a cube is side length × side length × side length, or s³. If the volume is known, take its cube root to find the side length: s = ∛V.",
        "Keep the units consistent: if volume is measured in cubic centimetres (cm³), the side length is measured in centimetres (cm).",
      ],
      examples: [
        {
          prompt:
            "A cube-shaped box has a volume of 512 cm³. Find its side length.",
          steps: ["Use s = ∛V.", "s = ∛512 = 8 because 8³ = 512."],
          answer: "The side length is 8 cm.",
        },
      ],
    },
    {
      heading: "4. Common checks",
      paragraphs: [
        "Do not confuse a cube with multiplication by 3: 5³ is 5 × 5 × 5 = 125, not 5 × 3.",
        "To check a cube root, cube your answer. To check a cube-volume question, make sure the final length unit is not a cubic unit.",
      ],
    },
  ],
  curriculumSource: {
    title: "Kenya Institute of Curriculum Development (KICD)",
    label: "Grade Eight Designs — Mathematics Grade 8 (July 2024)",
    url: "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/",
    note: "This is an original supplementary lesson with worked examples, not an official KICD publication. The official KICD page lists the Grade 8 Mathematics curriculum design.",
  },
  worksheet: {
    title: "Cubes and Cube Roots — Practice Worksheet",
    instructions:
      "Show your working. Check each cube root by cubing your answer, and include units in the word problems.",
    questions: [
      {
        prompt: "1. Calculate 3³.",
        answer: "27",
        explanation: "3³ = 3 × 3 × 3 = 27.",
      },
      {
        prompt: "2. Calculate 12³.",
        answer: "1,728",
        explanation: "12³ = 12 × 12 × 12 = 144 × 12 = 1,728.",
      },
      {
        prompt: "3. Find ∛729.",
        answer: "9",
        explanation: "9³ = 9 × 9 × 9 = 729, so ∛729 = 9.",
      },
      {
        prompt: "4. Find ∛3,375.",
        answer: "15",
        explanation: "15³ = 15 × 15 × 15 = 3,375, so ∛3,375 = 15.",
      },
      {
        prompt: "5. Complete the statement: 8³ = ____.",
        answer: "512",
        explanation: "8 × 8 × 8 = 64 × 8 = 512.",
      },
      {
        prompt:
          "6. Is 200 a perfect cube? Give the two consecutive whole-number cubes between which it lies.",
        answer: "No; 125 < 200 < 216.",
        explanation:
          "5³ = 125 and 6³ = 216, so 200 is not a whole-number perfect cube.",
      },
      {
        prompt:
          "7. A cube-shaped container has a volume of 64 cm³. What is its side length?",
        answer: "4 cm",
        explanation:
          "The side length is ∛64 = 4 because 4³ = 64. The length unit is cm.",
      },
      {
        prompt:
          "8. Complete the table: the cube of 2 is ____ and the cube of 5 is ____.",
        answer: "8 and 125",
        explanation: "2³ = 2 × 2 × 2 = 8; 5³ = 5 × 5 × 5 = 125.",
      },
      {
        prompt:
          "9. A cube-shaped storage box has a volume of 216 cm³. Find its side length.",
        answer: "6 cm",
        explanation: "∛216 = 6 because 6³ = 216; the side length is 6 cm.",
      },
      {
        prompt: "10. Correct this error: “7³ = 21 because 7 × 3 = 21.”",
        answer: "7³ = 7 × 7 × 7 = 343.",
        explanation:
          "Cubing means multiplying three equal factors, not multiplying by 3.",
      },
    ],
  },
  quizzes: [
    {
      id: "numbers",
      title: "Numbers Quick Quiz",
      description: "Cubes, cube roots, and reciprocals.",
      questions: [
        {
          prompt: "What is 4³?",
          options: ["12", "16", "64", "81"],
          correctAnswer: 2,
          feedback: "4³ = 4 × 4 × 4 = 64.",
        },
        {
          prompt: "What is ∛125?",
          options: ["25", "5", "15", "625"],
          correctAnswer: 1,
          feedback: "5 is correct because 5³ = 125.",
        },
        {
          prompt: "What is 7 × 7 × 7?",
          options: ["49", "343", "21", "2,401"],
          correctAnswer: 1,
          feedback: "7 × 7 × 7 = 49 × 7 = 343.",
        },
        {
          prompt: "What is ∛512?",
          options: ["7", "8", "9", "64"],
          correctAnswer: 1,
          feedback: "∛512 = 8 because 8³ = 512.",
        },
        {
          prompt: "A cube has side length 6 cm. What is its volume?",
          options: ["36 cm³", "216 cm³", "18 cm³", "12 cm³"],
          correctAnswer: 1,
          feedback: "Volume = 6³ = 6 × 6 × 6 = 216 cm³.",
        },
        {
          prompt: "What is 10³?",
          options: ["100", "300", "1,000", "10,000"],
          correctAnswer: 2,
          feedback: "10³ = 10 × 10 × 10 = 1,000.",
        },
        {
          prompt: "What is the reciprocal of 3/5?",
          options: ["3/5", "5/3", "1/5", "5"],
          correctAnswer: 1,
          feedback:
            "Swap numerator and denominator: the reciprocal of 3/5 is 5/3.",
        },
        {
          prompt: "Which of these is a perfect cube?",
          options: ["32", "64", "72", "100"],
          correctAnswer: 1,
          feedback: "64 is a perfect cube because 4³ = 64.",
        },
      ],
    },
    {
      id: "algebra",
      title: "Algebra Quick Quiz",
      description: "Expressions, equations, inequalities, and patterns.",
      questions: [
        {
          prompt: "Simplify 3x + 2x.",
          options: ["5x", "5x²", "6x", "x"],
          correctAnswer: 0,
          feedback: "Like terms combine by adding coefficients: 3x + 2x = 5x.",
        },
        {
          prompt: "Simplify 4a + 3 − a.",
          options: ["3a + 3", "5a + 3", "3a − 3", "4a + 2"],
          correctAnswer: 0,
          feedback: "Combine 4a − a to get 3a; the constant 3 remains.",
        },
        {
          prompt: "Expand 2(x + 5).",
          options: ["2x + 5", "2x + 10", "x + 10", "7x"],
          correctAnswer: 1,
          feedback: "Multiply 2 by both terms: 2 × x + 2 × 5 = 2x + 10.",
        },
        {
          prompt: "Solve x + 7 = 15.",
          options: ["7", "8", "22", "105"],
          correctAnswer: 1,
          feedback: "Subtract 7 from both sides: x = 15 − 7 = 8.",
        },
        {
          prompt: "Solve 5y = 35.",
          options: ["5", "7", "30", "40"],
          correctAnswer: 1,
          feedback: "Divide both sides by 5: y = 35 ÷ 5 = 7.",
        },
        {
          prompt: "Solve x − 4 = 3.",
          options: ["−1", "1", "7", "12"],
          correctAnswer: 2,
          feedback: "Add 4 to both sides: x = 3 + 4 = 7.",
        },
        {
          prompt: "What is the next term in 2, 5, 8, 11, …?",
          options: ["12", "13", "14", "16"],
          correctAnswer: 2,
          feedback: "The pattern adds 3 each time, so 11 + 3 = 14.",
        },
        {
          prompt: "Solve x + 2 < 6.",
          options: ["x < 4", "x > 4", "x < 8", "x > 8"],
          correctAnswer: 0,
          feedback: "Subtract 2 from both sides: x < 6 − 2, so x < 4.",
        },
      ],
    },
    {
      id: "comprehensive",
      title: "End-of-Topic Assessment",
      description: "A mixed review of Grade 8 Mathematics topics.",
      questions: [
        {
          prompt: "What is ∛729?",
          options: ["8", "9", "81", "243"],
          correctAnswer: 1,
          feedback: "9³ = 729, so ∛729 = 9.",
        },
        {
          prompt: "What is the reciprocal of 3/5?",
          options: ["3/5", "5/3", "1/3", "5"],
          correctAnswer: 1,
          feedback: "Interchange numerator and denominator: 5/3.",
        },
        {
          prompt: "What is 25% of 80?",
          options: ["15", "20", "25", "40"],
          correctAnswer: 1,
          feedback: "25% is one quarter, and 80 ÷ 4 = 20.",
        },
        {
          prompt: "Simplify the ratio 12:18.",
          options: ["2:3", "3:2", "4:9", "6:9"],
          correctAnswer: 0,
          feedback:
            "Divide both parts by their greatest common factor, 6: 12:18 = 2:3.",
        },
        {
          prompt: "Solve 3x + 1 = 16.",
          options: ["4", "5", "6", "15"],
          correctAnswer: 1,
          feedback: "Subtract 1, then divide by 3: x = 15 ÷ 3 = 5.",
        },
        {
          prompt: "Solve x + 3 ≥ 8.",
          options: ["x ≥ 5", "x ≤ 5", "x ≥ 11", "x ≤ 11"],
          correctAnswer: 0,
          feedback: "Subtract 3 from both sides: x ≥ 8 − 3, so x ≥ 5.",
        },
        {
          prompt: "What is the next term in 4, 7, 10, …?",
          options: ["11", "12", "13", "14"],
          correctAnswer: 2,
          feedback: "The pattern adds 3, so the next term is 10 + 3 = 13.",
        },
        {
          prompt: "Find the area of a rectangle 9 cm long and 4 cm wide.",
          options: ["13 cm²", "26 cm²", "36 cm²", "36 cm"],
          correctAnswer: 2,
          feedback: "Area = length × width = 9 × 4 = 36 cm².",
        },
        {
          prompt: "What is the volume of a cube with side length 3 cm?",
          options: ["9 cm³", "18 cm³", "27 cm³", "27 cm"],
          correctAnswer: 2,
          feedback: "Volume = 3³ = 3 × 3 × 3 = 27 cm³.",
        },
        {
          prompt:
            "Two angles on a straight line add to 180°. One is 68°. Find the other.",
          options: ["22°", "102°", "112°", "248°"],
          correctAnswer: 2,
          feedback: "The angles are supplementary: 180° − 68° = 112°.",
        },
        {
          prompt: "Find the mean of 3, 5, and 7.",
          options: ["3", "5", "7", "15"],
          correctAnswer: 1,
          feedback: "Mean = (3 + 5 + 7) ÷ 3 = 15 ÷ 3 = 5.",
        },
        {
          prompt:
            "A bag has 2 red counters and 3 blue counters. What is the probability of picking a red counter?",
          options: ["2/3", "2/5", "3/5", "1/2"],
          correctAnswer: 1,
          feedback:
            "There are 2 red counters out of 5 counters altogether, so the probability is 2/5.",
        },
      ],
    },
  ],
};
