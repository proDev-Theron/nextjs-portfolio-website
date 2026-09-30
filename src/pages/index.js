import { useState } from 'react';

import Logo from '../components/Logo';
import {
  cases, certifications, howIWork, links, models, results, reviewSteps, roles, stack, testimonials, tools, wins,
} from '../data/content';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
  };

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="wrap">
          <a className="brand" href="#" aria-label="Theron Bueno, home">
            <Logo />
            Theron Bueno
          </a>
          <nav className="nav" aria-label="Sections">
            <a href="#models">How I think</a>
            <a href="#results">Results</a>
            <a href="#experience">Experience</a>
            <a href="#start">Start here</a>
          </nav>
          <button type="button" className="toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>
      </header>

      <main id="main" className="wrap">
        <div className="hero">
          <div>
            <h1>I keep production apps running, so customers never notice when something breaks.</h1>
            <p className="lede">
              Site Reliability Engineer for fintech and regulated SaaS on AWS and Azure, with banking experience at a
              digital bank and ING. I prevent outages, fix them fast, and make every change safe and auditable.
            </p>
            <p className="terms mono">
              <span className="dot" aria-hidden="true" />
              Available for remote SRE contracts · UTC+8
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={links.email}>Email me</a>
              <a className="btn btn-secondary" href={links.linkedin}>LinkedIn</a>
            </div>
          </div>
          <table className="ledger">
            <caption>Recent results</caption>
            <tbody>
              {results.map((r) => (
                <tr key={r.value}>
                  <td className="mono">{r.value}</td>
                  <td>{r.text}{r.ok && <> <span className="ok">{r.ok}</span></>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section id="what">
          <h2>What I do for a team</h2>
          <p className="sub">In plain terms, this is what hiring an SRE gets you.</p>
          <div className="cards">
            {wins.map((w) => (
              <div key={w.title}><b>{w.title}</b><p>{w.text}</p></div>
            ))}
          </div>
        </section>

        <section id="tools">
          <h2>Tools I built</h2>
          <p className="sub">AI-assisted operations tools, built so they can&apos;t do damage without a human saying yes.</p>
          <div className="cards">
            {tools.map((t) => (
              <div key={t.title}><b>{t.title}</b><p>{t.text}</p><span className="tech">{t.tech}</span></div>
            ))}
          </div>
        </section>

        <section id="models">
          <h2>How I think</h2>
          <p className="sub">
            I use mental models, the latticework Charlie Munger describes, as everyday working tools. Here&apos;s where
            each one paid off in production.
          </p>
          <div className="cards models">
            {models.map((m) => (
              <div key={m.name}>
                <b>{m.name}</b>
                <p className="meaning">{m.meaning}</p>
                <p>{m.applied}</p>
                <span className="res">{m.result}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="results">
          <h2>Problems I&apos;ve solved</h2>
          <p className="sub">Each one in plain English, with the technical details underneath for engineers.</p>
          <table className="incident">
            <thead>
              <tr><th>Case</th><th>The problem</th><th>Why it mattered</th><th>What I did</th><th>Result</th></tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.ref}>
                  <td>{c.ref}</td>
                  <td>{c.problem}</td>
                  <td>{c.why}</td>
                  <td>{c.did}<span className="tech">{c.tech}</span></td>
                  <td><span className="ok">{c.result.ok}</span>{c.result.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="people">
          <h2>What people say</h2>
          <p className="sub">
            I started as one of ten ULAP.org cloud scholars in the Philippines. Today I mentor the next cohort.
          </p>
          {testimonials.map((t) => (
            <figure key={t.name} className="quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption><b>{t.name}</b> · {t.role}</figcaption>
            </figure>
          ))}
        </section>

        <section id="start">
          <h2>Start here: a 2-week reliability review</h2>
          <p className="sub">A small, fixed-scope first step, so you can judge my work before committing to a monthly contract.</p>
          <div className="how">
            {reviewSteps.map((s) => (
              <div key={s.title}><b>{s.title}</b><span>{s.text}</span></div>
            ))}
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={links.review}>Ask about a reliability review</a>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <p className="sub">Regulated, customer-facing platforms in banking and legal tech.</p>
          <dl className="roles">
            {roles.map((r) => (
              <div key={r.title} style={{ display: 'contents' }}>
                <dt>{r.period}</dt>
                <dd>
                  <b>{r.title}</b>
                  <p>{r.text}</p>
                  {r.tech && <span className="tech">{r.tech}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="how">
          <h2>How I work</h2>
          <div className="how">
            {howIWork.map((h) => (
              <div key={h.title}>
                <b>{h.title}</b>
                {h.mono && <span className="mono">{h.mono}</span>}
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="stack">
          <h2>Tools I use</h2>
          <p className="sub">For engineers and technical reviewers.</p>
          <table>
            <thead><tr><th>Area</th><th>Tools</th></tr></thead>
            <tbody>
              {stack.map(([area, list]) => (
                <tr key={area}><td>{area}</td><td>{list}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="credentials">
          <div className="two-col">
            <div>
              <h3>Certifications</h3>
              <ul className="list">
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div>
              <h3>Education and community</h3>
              <ul className="list">
                <li>BS Computer Engineering, Pamantasan ng Lungsod ng Maynila (2023)</li>
                <li>Mentor at ULAP.org, helping early-career developers land their first engineering roles</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="closing">
            <h2>Need someone to keep your systems running?</h2>
            <a className="btn btn-primary" href={links.email}>Email me</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Theron Bueno</span>
          <nav aria-label="Contact">
            <a href={links.email}>Email</a>
            <a href={links.linkedin}>LinkedIn</a>
            <a href={links.github}>GitHub</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
