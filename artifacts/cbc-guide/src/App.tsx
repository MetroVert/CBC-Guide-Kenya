import { useEffect, useState } from "react";
import "./index.css";

const NAV_ITEMS = ["Home", "Grades", "Subjects", "Resources", "About"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="logo" aria-label="CBC Guide Kenya">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">CBC Guide</span>
              <span className="logo-sub">Kenya</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={item === active ? "active" : ""}
                  onClick={(e) => { e.preventDefault(); setActive(item); }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
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

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className={item === active ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActive(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

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
          Everything{" "}
          <span className="highlight-green">CBC</span>{" "}
          in{" "}
          <span className="highlight-blue">One Place</span>
        </h1>

        <p className="hero-subtitle">
          Your complete guide to the Kenyan CBC curriculum — organised notes, past papers,
          and learning resources for every grade and subject, all in one place.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn-primary" onClick={(e) => e.preventDefault()}>
            Explore Grade 8
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const GRADES = Array.from({ length: 9 }, (_, i) => ({
  number: i + 1,
  label: `Grade ${i + 1}`,
  featured: i + 1 === 8,
}));

function GradesSection({ onCardClick }: { onCardClick: () => void }) {
  return (
    <section className="grades-section" aria-labelledby="grades-heading">
      <div className="grades-inner">
        <div className="section-label">
          <span className="section-label-line" />
          CBC Curriculum
          <span className="section-label-line" />
        </div>
        <h2 id="grades-heading" className="section-heading">Choose Your Grade</h2>
        <p className="section-sub">
          Select your grade level to access notes, exercises, and learning resources tailored just for you.
        </p>

        <div className="grades-grid">
          {GRADES.map((grade) => (
            <button
              key={grade.number}
              className={`grade-card${grade.featured ? " featured" : ""}`}
              onClick={onCardClick}
              aria-label={`${grade.label}${grade.featured ? " — Featured" : ""}`}
            >
              {grade.featured && (
                <span className="featured-badge" aria-label="Featured grade">Featured</span>
              )}
              <div className="grade-icon-wrap">
                <GradeIcon />
              </div>
              <div>
                <div className="grade-name">{grade.label}</div>
                <div className="grade-sub">Explore learning resources</div>
              </div>
              <div className="grade-arrow" aria-hidden="true">
                View resources
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoon() {
  return (
    <section className="coming-soon-section" id="coming-soon" aria-labelledby="coming-soon-title">
      <div className="coming-soon-inner">
        <div className="coming-soon-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h2 id="coming-soon-title" className="coming-soon-title">Content Coming Soon</h2>
        <p className="coming-soon-text">
          We're working hard to bring you high-quality CBC learning materials for every grade.
          Check back soon — great things are on the way!
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const scrollToComingSoon = () => {
    const el = document.getElementById("coming-soon");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GradesSection onCardClick={scrollToComingSoon} />
        <ComingSoon />
      </main>
    </>
  );
}
