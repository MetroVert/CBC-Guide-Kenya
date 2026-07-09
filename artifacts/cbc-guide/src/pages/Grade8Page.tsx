import { useState } from "react";
import { Link } from "wouter";

const SUBJECTS = [
  {
    slug: "mathematics",
    name: "Mathematics",
    icon: (
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
    ),
    color: "blue",
    description: "Numbers, algebra, geometry & data handling",
  },
  {
    slug: "english",
    name: "English Language",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
      </svg>
    ),
    color: "green",
    description: "Reading, writing, grammar & comprehension",
  },
  {
    slug: "kiswahili",
    name: "Kiswahili",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "green",
    description: "Lugha, ushairi, fasihi & mawasiliano",
  },
  {
    slug: "integrated-science",
    name: "Integrated Science",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    color: "blue",
    description: "Biology, chemistry, physics & earth science",
  },
  {
    slug: "social-studies",
    name: "Social Studies",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    color: "teal",
    description: "Geography, history, civics & environment",
  },
  {
    slug: "creative-arts",
    name: "Creative Arts & Sports",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9h.01M15 15h.01" />
      </svg>
    ),
    color: "purple",
    description: "Visual arts, music, drama & physical education",
  },
  {
    slug: "pre-technical",
    name: "Pre-Technical Studies",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    color: "orange",
    description: "Woodwork, metalwork, electricity & drawing",
  },
  {
    slug: "agriculture-nutrition",
    name: "Agriculture & Nutrition",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M8 5.2C5.8 6 4 8.3 4 11c0 .9.2 1.8.5 2.6" />
        <path d="M19.5 13.6A8 8 0 0 0 20 11c0-2.7-1.8-5-4-5.8" />
        <path d="M15.5 4.8a6 6 0 0 0-7 0" />
      </svg>
    ),
    color: "green",
    description: "Farming, food science, nutrition & health",
  },
  {
    slug: "life-skills",
    name: "Life Skills & Values",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: "pink",
    description: "Decision-making, citizenship & personal wellbeing",
  },
  {
    slug: "religious-education",
    name: "Religious Education",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    color: "gold",
    description: "CRE / IRE — faith, ethics & moral values",
  },
  {
    slug: "business-studies",
    name: "Business Studies",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    color: "orange",
    description: "Entrepreneurship, commerce, accounting & financial literacy",
  },
  {
    slug: "health-studies",
    name: "Health Studies",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M8 5.2C5.8 6 4 8.3 4 11c0 .9.2 1.8.5 2.6" />
        <path d="M19.5 13.6A8 8 0 0 0 20 11c0-2.7-1.8-5-4-5.8" />
        <path d="M15.5 4.8a6 6 0 0 0-7 0" />
      </svg>
    ),
    color: "red",
    description: "Healthy living, hygiene, nutrition & physical wellbeing",
  },
];

const COLOR_MAP: Record<string, { bg: string; icon: string; border: string }> =
  {
    blue: {
      bg: "hsl(210, 85%, 40%, 0.08)",
      icon: "hsl(210, 85%, 40%)",
      border: "hsl(210, 85%, 40%, 0.2)",
    },
    green: {
      bg: "hsl(152, 64%, 35%, 0.08)",
      icon: "hsl(152, 64%, 33%)",
      border: "hsl(152, 64%, 35%, 0.2)",
    },
    teal: {
      bg: "hsl(172, 60%, 35%, 0.08)",
      icon: "hsl(172, 60%, 33%)",
      border: "hsl(172, 60%, 35%, 0.2)",
    },
    purple: {
      bg: "hsl(265, 55%, 48%, 0.08)",
      icon: "hsl(265, 55%, 45%)",
      border: "hsl(265, 55%, 48%, 0.2)",
    },
    orange: {
      bg: "hsl(25, 85%, 50%, 0.08)",
      icon: "hsl(25, 85%, 47%)",
      border: "hsl(25, 85%, 50%, 0.2)",
    },
    pink: {
      bg: "hsl(340, 65%, 48%, 0.08)",
      icon: "hsl(340, 65%, 45%)",
      border: "hsl(340, 65%, 48%, 0.2)",
    },
    gold: {
      bg: "hsl(42, 90%, 45%, 0.08)",
      icon: "hsl(42, 90%, 40%)",
      border: "hsl(42, 90%, 45%, 0.2)",
    },
    red: {
      bg: "hsl(0, 75%, 50%, 0.08)",
      icon: "hsl(0, 75%, 45%)",
      border: "hsl(0, 75%, 50%, 0.2)",
    },
  };

export default function Grade8Page() {
  const [query, setQuery] = useState("");

  const filtered = SUBJECTS.filter(
    (s) =>
      query.trim() === "" ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/" className="breadcrumb-link">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="breadcrumb-sep">
              ›
            </li>
            <li>
              <Link
                href="/grades/grade-8"
                className="breadcrumb-link breadcrumb-link--active"
                aria-current="page"
              >
                Grade 8
              </Link>
            </li>
          </ol>
        </div>
      </nav>

      {/* Page header */}
      <section className="grade-page-header">
        <div className="grade-page-header-inner">
          <div className="grade-page-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Grade 8 · Junior Secondary
          </div>
          <h1 className="grade-page-title">Grade 8 Subjects &amp; Resources</h1>
          <p className="grade-page-intro">
            Welcome to your Grade 8 hub! This is where Junior Secondary gets
            serious — and exciting. You are building on everything you learned in
            primary, diving deeper into science, language, and technology. Pick
            a subject below to access organised notes, practice questions, and
            learning activities crafted to match the required CBC curriculum. Every
            resource here is mapped to your learning outcomes, so you study
            smarter, not harder.
          </p>

          {/* Search bar */}
          <div className="subject-search-wrap">
            <div className="subject-search">
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                placeholder="Search subjects…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
                aria-label="Search Grade 8 subjects"
              />
              {query && (
                <button
                  className="search-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects grid */}
      <section className="subjects-section" aria-label="Grade 8 subjects">
        <div className="subjects-inner">
          {filtered.length > 0 ? (
            <div className="subjects-grid">
              {filtered.map((subject) => {
                const c = COLOR_MAP[subject.color];
                return (
                  <Link
                    key={subject.slug}
                    href={`/grades/grade-8/${subject.slug}`}
                    className="subject-card"
                    aria-label={`${subject.name} — ${subject.description}`}
                  >
                    <div
                      className="subject-icon-wrap"
                      style={{ background: c.bg, borderColor: c.border }}
                    >
                      <span style={{ color: c.icon }}>{subject.icon}</span>
                    </div>
                    <div className="subject-card-body">
                      <div className="subject-name">{subject.name}</div>
                      <div className="subject-desc">{subject.description}</div>
                    </div>
                    <div className="subject-card-arrow" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="subjects-empty">
              <p>
                No subjects match "<strong>{query}</strong>". Try a different
                search.
              </p>
              <button
                className="subjects-empty-reset"
                onClick={() => setQuery("")}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
