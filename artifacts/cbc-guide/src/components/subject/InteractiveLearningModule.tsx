import { useState } from "react";
import type { InteractiveLearningModule as InteractiveLearningModuleData } from "../../types/subject";
import "./InteractiveLearningModule.css";

type QuizState = {
  questionIndex: number;
  selectedOption: number | null;
  submitted: boolean;
  score: number;
};

function getInitialQuizState(): QuizState {
  return {
    questionIndex: 0,
    selectedOption: null,
    submitted: false,
    score: 0,
  };
}

export default function InteractiveLearningModule({
  module,
}: {
  module: InteractiveLearningModuleData;
}) {
  const [answerKeyOpen, setAnswerKeyOpen] = useState(false);
  const [quizStates, setQuizStates] = useState<Record<string, QuizState>>({});

  const updateQuiz = (
    quizId: string,
    update: (state: QuizState) => QuizState,
  ) => {
    setQuizStates((current) => ({
      ...current,
      [quizId]: update(current[quizId] ?? getInitialQuizState()),
    }));
  };

  const printWorksheet = () => window.print();

  return (
    <section className="cbc-learning-module" aria-labelledby="clm-title">
      <div className="clm-shell">
        <header className="clm-lesson-header">
          <p className="clm-eyebrow">Mathematics lesson</p>
          <h2 className="clm-title" id="clm-title">
            {module.lessonTitle}
          </h2>
          <p className="clm-introduction">{module.introduction}</p>
        </header>

        <section className="clm-goals" aria-labelledby="clm-goals-title">
          <div className="clm-section-kicker">Start here</div>
          <h2 id="clm-goals-title">Lesson goals</h2>
          <ul className="clm-goal-list">
            {module.lessonGoals.map((goal, index) => (
              <li className="clm-goal" key={`${goal}-${index}`}>
                <span className="clm-goal-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="clm-content-grid">
          <div className="clm-lesson-content" id="notes">
            <div className="clm-section-heading">
              <div>
                <p className="clm-section-kicker">Learn</p>
                <h2>Lesson notes</h2>
              </div>
              <span className="clm-heading-rule" aria-hidden="true" />
            </div>

            {module.lessonSections.map((section, sectionIndex) => (
              <section
                className="clm-lesson-section"
                key={`${section.heading}-${sectionIndex}`}
                aria-labelledby={`clm-section-${sectionIndex}`}
              >
                <h3 id={`clm-section-${sectionIndex}`}>{section.heading}</h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${paragraphIndex}-${paragraph}`}>{paragraph}</p>
                ))}
                {section.examples?.map((example, exampleIndex) => (
                  <div
                    className="clm-example"
                    key={`${example.prompt}-${exampleIndex}`}
                  >
                    <div className="clm-example-label">Worked example</div>
                    <p className="clm-example-prompt">{example.prompt}</p>
                    <ol className="clm-example-steps">
                      {example.steps.map((step, stepIndex) => (
                        <li key={`${stepIndex}-${step}`}>
                          <span className="clm-step-number" aria-hidden="true">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="clm-example-answer">{example.answer}</p>
                  </div>
                ))}
              </section>
            ))}

            <aside className="clm-source" aria-label="Curriculum source">
              <div className="clm-source-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 3.75h7l5 5v11.5H7a2 2 0 0 1-2-2v-12a2.5 2.5 0 0 1 2-2.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4v5h5M9 13h7M9 16.5h7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="clm-source-copy">
                <p className="clm-source-label">
                  {module.curriculumSource.label}
                </p>
                <a
                  className="clm-source-link"
                  href={module.curriculumSource.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {module.curriculumSource.title}
                  <span className="clm-external-mark" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <p className="clm-source-note">
                  {module.curriculumSource.note}
                </p>
              </div>
            </aside>
          </div>

          <aside className="clm-side-note" aria-label="Lesson at a glance">
            <span className="clm-side-note-line" aria-hidden="true" />
            <p>Work through the notes, then try the practice and quizzes.</p>
          </aside>
        </div>

        <section
          className="clm-worksheet"
          id="practice-questions"
          aria-labelledby="clm-worksheet-title"
        >
          <div className="clm-worksheet-top">
            <div>
              <p className="clm-section-kicker">Put it into practice</p>
              <h2 id="clm-worksheet-title">{module.worksheet.title}</h2>
              <p className="clm-worksheet-instructions">
                {module.worksheet.instructions}
              </p>
            </div>
            <button
              className="clm-print-button"
              type="button"
              onClick={printWorksheet}
              data-testid="button-print-worksheet"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 8V3.75h10V8M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v6.25H7V14Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 11.5h.01"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              Print worksheet
            </button>
          </div>

          <ol className="clm-question-list">
            {module.worksheet.questions.map((question, index) => (
              <li
                className="clm-worksheet-question"
                key={`${question.prompt}-${index}`}
              >
                <p className="clm-question-prompt">{question.prompt}</p>
                <div className="clm-answer-space" aria-label="Answer space" />
              </li>
            ))}
          </ol>

          <div className="clm-answer-key">
            <button
              className="clm-answer-key-toggle"
              type="button"
              aria-expanded={answerKeyOpen}
              aria-controls="clm-answer-key-content"
              onClick={() => setAnswerKeyOpen((open) => !open)}
              data-testid="button-toggle-answer-key"
            >
              <span>
                {answerKeyOpen ? "Hide answer key" : "Show answer key"}
              </span>
              <svg
                className={
                  answerKeyOpen ? "clm-chevron clm-chevron-open" : "clm-chevron"
                }
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {answerKeyOpen && (
              <ol className="clm-answer-key-list" id="clm-answer-key-content">
                {module.worksheet.questions.map((question, index) => (
                  <li key={`${question.prompt}-key-${index}`}>
                    <p className="clm-key-answer">{question.answer}</p>
                    <p className="clm-key-explanation">
                      {question.explanation}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {module.quizzes.length > 0 && (
          <section
            className="clm-quizzes"
            id="quizzes"
            aria-labelledby="clm-quizzes-title"
          >
            <div className="clm-section-heading">
              <div>
                <p className="clm-section-kicker">Check your understanding</p>
                <h2 id="clm-quizzes-title">Quizzes</h2>
              </div>
              <span className="clm-heading-rule" aria-hidden="true" />
            </div>

            <div className="clm-quiz-list">
              {module.quizzes.map((quiz) => {
                const state = quizStates[quiz.id] ?? getInitialQuizState();
                const finished = state.questionIndex >= quiz.questions.length;
                const question = quiz.questions[state.questionIndex];
                const quizLabel = `clm-quiz-${quiz.id}`;

                return (
                  <article
                    className="clm-quiz"
                    key={quiz.id}
                    aria-labelledby={`${quizLabel}-title`}
                  >
                    <header className="clm-quiz-header">
                      <div className="clm-quiz-index" aria-hidden="true">
                        Q
                      </div>
                      <div>
                        <h3 id={`${quizLabel}-title`}>{quiz.title}</h3>
                        <p>{quiz.description}</p>
                      </div>
                    </header>

                    {quiz.questions.length === 0 ? (
                      <p className="clm-quiz-empty">
                        No questions are available.
                      </p>
                    ) : finished ? (
                      <div className="clm-quiz-result" aria-live="polite">
                        <p className="clm-result-label">Quiz complete</p>
                        <p className="clm-result-score">
                          {state.score} / {quiz.questions.length}
                        </p>
                        <button
                          className="clm-button clm-button-secondary"
                          type="button"
                          onClick={() =>
                            updateQuiz(quiz.id, () => getInitialQuizState())
                          }
                          data-testid={`button-retry-${quiz.id}`}
                        >
                          Retry quiz
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="clm-quiz-progress">
                          <span>
                            Question {state.questionIndex + 1} of{" "}
                            {quiz.questions.length}
                          </span>
                          <span
                            className="clm-progress-track"
                            aria-hidden="true"
                          >
                            <span
                              className="clm-progress-fill"
                              style={{
                                width: `${((state.questionIndex + 1) / quiz.questions.length) * 100}%`,
                              }}
                            />
                          </span>
                        </div>

                        <fieldset
                          className="clm-quiz-fieldset"
                          disabled={state.submitted}
                        >
                          <legend>{question.prompt}</legend>
                          <div className="clm-options">
                            {question.options.map((option, optionIndex) => {
                              const isCorrect =
                                optionIndex === question.correctAnswer;
                              const selected =
                                optionIndex === state.selectedOption;
                              let optionClass = "clm-option";
                              if (state.submitted && isCorrect)
                                optionClass += " clm-option-correct";
                              if (state.submitted && selected && !isCorrect)
                                optionClass += " clm-option-incorrect";

                              return (
                                <label
                                  className={optionClass}
                                  key={`${option}-${optionIndex}`}
                                >
                                  <input
                                    type="radio"
                                    name={`${quizLabel}-question-${state.questionIndex}`}
                                    value={optionIndex}
                                    checked={selected}
                                    onChange={() =>
                                      updateQuiz(quiz.id, (current) => ({
                                        ...current,
                                        selectedOption: optionIndex,
                                      }))
                                    }
                                    data-testid={`input-${quiz.id}-${state.questionIndex}-${optionIndex}`}
                                  />
                                  <span
                                    className="clm-option-marker"
                                    aria-hidden="true"
                                  >
                                    {String.fromCharCode(65 + optionIndex)}
                                  </span>
                                  <span>{option}</span>
                                  {state.submitted && isCorrect && (
                                    <span className="clm-correct-label">
                                      Correct answer
                                    </span>
                                  )}
                                </label>
                              );
                            })}
                          </div>
                        </fieldset>

                        {state.submitted && (
                          <div
                            className={
                              state.selectedOption === question.correctAnswer
                                ? "clm-feedback clm-feedback-correct"
                                : "clm-feedback clm-feedback-incorrect"
                            }
                            role="status"
                            aria-live="polite"
                          >
                            <strong>
                              {state.selectedOption === question.correctAnswer
                                ? "Correct"
                                : "Not quite"}
                            </strong>
                            <p>{question.feedback}</p>
                          </div>
                        )}

                        <div className="clm-quiz-actions">
                          {!state.submitted ? (
                            <button
                              className="clm-button clm-button-primary"
                              type="button"
                              disabled={state.selectedOption === null}
                              onClick={() =>
                                updateQuiz(quiz.id, (current) => {
                                  if (
                                    current.submitted ||
                                    current.selectedOption === null
                                  ) {
                                    return current;
                                  }

                                  return {
                                    ...current,
                                    submitted: true,
                                    score:
                                      current.score +
                                      (current.selectedOption ===
                                      question.correctAnswer
                                        ? 1
                                        : 0),
                                  };
                                })
                              }
                              data-testid={`button-check-${quiz.id}`}
                            >
                              Check answer
                            </button>
                          ) : (
                            <button
                              className="clm-button clm-button-primary"
                              type="button"
                              onClick={() =>
                                updateQuiz(quiz.id, (current) => {
                                  if (!current.submitted) return current;

                                  return {
                                    ...current,
                                    questionIndex: current.questionIndex + 1,
                                    selectedOption: null,
                                    submitted: false,
                                  };
                                })
                              }
                              data-testid={`button-next-${quiz.id}`}
                            >
                              {state.questionIndex === quiz.questions.length - 1
                                ? "See score"
                                : "Next question"}
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
