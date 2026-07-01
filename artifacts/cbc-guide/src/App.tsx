import { useEffect, useState } from "react";
import { Router, Route, Link, useLocation } from "wouter";
import Grade8Page from "./pages/Grade8Page";
import SubjectPage from "./pages/SubjectPage";
import "./index.css";

/* ─── Shared: Navbar ────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Grades", href: "/grades/grade-8" },
  { label: "Subjects", href: "/grades/grade-8" },
  { label: "Resources", href: "/" },
  { label: "About", href: "/" },
];

const LogoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label="CBC Guide Kenya">
            <div className="logo-icon">
              <LogoIcon />
            </div>
            <div className="logo-text">
              <span className="logo-name">CBC Guide</span>
              <span className="logo-sub">Kenya</span>
            </div>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

/* ─── Home page ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg-pattern" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Kenya's Competency Based Curriculum
        </div>

        <h1 id="hero-heading" className="hero-heading">
          Everything <span className="highlight-green">CBC</span> in{" "}
          <span className="highlight-blue">One Place</span>
        </h1>

        <p className="hero-subtitle">
          Your complete guide to the Kenyan CBC curriculum — organised notes,
          questions &amp; learning resources for every grade and subject, all in
          one place.
        </p>

        <div className="hero-actions">
          <Link href="/grades/grade-8" className="btn-primary">
            Explore Grade 8
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="hero-stats" aria-label="Key statistics">
          <div className="hero-stat">
            <div className="hero-stat-number green">9+</div>
            <div className="hero-stat-label">Grade Levels</div>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <div className="hero-stat-number blue">30+</div>
            <div className="hero-stat-label">Subjects</div>
          </div>
          <div className="hero-stat-divider" aria-hidden="true" />
          <div className="hero-stat">
            <div className="hero-stat-number">Free</div>
            <div className="hero-stat-label">Always</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GradeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const GRADES = Array.from({ length: 9 }, (_, i) => ({
  number: i + 1,
  label: `Grade ${i + 1}`,
  featured: i + 1 === 8,
  href: i + 1 === 8 ? "/grades/grade-8" : "#",
}));

function GradesSection() {
  const scrollToComingSoon = () => {
    const el = document.getElementById("coming-soon");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="grades-section" aria-labelledby="grades-heading">
      <div className="grades-inner">
        <div className="section-label">
          <span className="section-label-line" />
          CBC Curriculum
          <span className="section-label-line" />
        </div>
        <h2 id="grades-heading" className="section-heading">
          Choose Your Grade
        </h2>
        <p className="section-sub">
          Select your grade level to access notes, exercises, and learning
          resources tailored just for you.
        </p>

        <div className="grades-grid">
          {GRADES.map((grade) =>
            grade.featured ? (
              <Link
                key={grade.number}
                href={grade.href}
                className="grade-card featured"
                aria-label={`${grade.label} — Featured`}
              >
                <span className="featured-badge">Featured</span>
                <div className="grade-icon-wrap">
                  <GradeIcon />
                </div>
                <div>
                  <div className="grade-name">{grade.label}</div>
                  <div className="grade-sub">Explore learning resources</div>
                </div>
                <div className="grade-arrow" aria-hidden="true">
                  View resources
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
            ) : (
              <button
                key={grade.number}
                className="grade-card"
                onClick={scrollToComingSoon}
                aria-label={grade.label}
              >
                <div className="grade-icon-wrap">
                  <GradeIcon />
                </div>
                <div>
                  <div className="grade-name">{grade.label}</div>
                  <div className="grade-sub">Explore learning resources</div>
                </div>
                <div className="grade-arrow" aria-hidden="true">
                  View resources
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
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section
      className="coming-soon-section"
      id="coming-soon"
      aria-labelledby="coming-soon-title"
    >
      <div className="coming-soon-inner">
        <div className="coming-soon-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h2 id="coming-soon-title" className="coming-soon-title">
          Content Coming Soon
        </h2>
        <p className="coming-soon-text">
          We're working hard to bring you high-quality CBC content &amp;
          learning materials for every grade. Check back soon — great things are
          on the way!
        </p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <GradesSection />
      <ComingSoon />
    </main>
  );
}

/* ─── Grade 8 layout wrapper ────────────────────────────── */
function Grade8Layout() {
  return (
    <main className="inner-page">
      <Grade8Page />
    </main>
  );
}

function SubjectLayout() {
  return (
    <main className="inner-page">
      <SubjectPage />
    </main>
  );
}

/* ─── Root app with router ──────────────────────────────── */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/grades/grade-8" component={Grade8Layout} />
      <Route path="/grades/grade-8/:subject" component={SubjectLayout} />
    </Router>
  );
}
