import type { InteractiveLearningModule } from "../../types/subject";
import { mathematicsLearningModule } from "./mathematicsLearningModule";

// Topic 1 of Grade 8 Mathematics. The lesson and worksheet come from the
// existing module; the quiz below covers only cubes and cube roots.
export const cubesAndCubeRootsModule: InteractiveLearningModule = {
  ...mathematicsLearningModule,
  quizzes: [
    {
      id: "cubes",
      title: "Cubes and Cube Roots Quiz",
      description: "Cubes, perfect cubes, cube roots and cube volumes.",
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
          prompt: "Which of these is a perfect cube?",
          options: ["32", "64", "72", "100"],
          correctAnswer: 1,
          feedback: "64 is a perfect cube because 4³ = 64.",
        },
        {
          prompt:
            "A cube-shaped tank has a volume of 343 cm³. What is its side length?",
          options: ["6 cm", "7 cm", "8 cm", "9 cm"],
          correctAnswer: 1,
          feedback:
            "∛343 = 7 because 7³ = 343, so the side length is 7 cm.",
        },
      ],
    },
  ],
};