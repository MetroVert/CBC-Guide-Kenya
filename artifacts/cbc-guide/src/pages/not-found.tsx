import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="subject-placeholder" aria-labelledby="not-found-title">
      <div className="subject-placeholder-inner">
        <div className="subject-placeholder-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>

        <div className="subject-placeholder-tag">404</div>

        <h1 id="not-found-title" className="subject-placeholder-title">
          Page not found
        </h1>

        <p className="subject-placeholder-text">
          We couldn't find the page you were looking for. The address may have a
          typo, or the page may have moved. Head to Grade 8 to keep studying, or
          go back to the homepage.
        </p>

        <Link href="/grades/grade-8" className="btn-primary">
          Browse Grade 8
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        <Link href="/" className="btn-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}