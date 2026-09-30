import { useState } from 'react';

import Logo from '../components/Logo';
import {
  capabilities, cases, certifications, evidence, feedback, links, mentorQuote, principles, roles, tooling, writing,
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
            <a href="#cases">Case studies</a>
            <a href="#principles">How I think</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <button type="button" className="toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>
      </header>

      <main id="main" className="wrap">
        <div className="hero">
          <div>
            <p className="eyebrow mono">Site Reliability Engineer · Platform</p>
            <h1>I find the actual failure mechanism, then change the system so it&apos;s less likely to recur.</h1>
            <p className="lede">
              SRE at a digital bank, working across AWS, EKS, Terraform, and networking. Software engineering background,
              7+ years building and running production systems.
            </p>
            <p className="terms mono">
              <span className="dot" aria-hidden="true" />
              Open to senior SRE and platform roles · UTC+8
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={links.email}>Email me</a>
              <a className="btn btn-secondary" href={links.linkedin}>LinkedIn</a>
            </div>
          </div>
          <table className="ledger">
            <caption>Selected evidence</caption>
            <tbody>
              {evidence.map((e) => (
                <tr key={e.value}>
                  <td className="mono">{e.value}</td>
                  <td>{e.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section id="cases">
          <h2>Case studies</h2>
          <p className="sub">
            Context, signal, evidence, decision, result. Proven outcomes are stated as proven. Open investigations are
            labeled as open.
          </p>
          <div className="case-list">
            {cases.map((c) => (
              <article key={c.id} className="case" id={c.id}>
                <header>
                  <h3>{c.title}</h3>
                  <span className="badge mono">{c.status}</span>
                </header>
                <dl>
                  {c.steps.map(([label, text]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{text}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="principles">
          <h2>How I think</h2>
          <p className="sub">
            I use mental models, Charlie Munger&apos;s latticework, as everyday tools. Each one below changed a real
            decision.
          </p>
          <div className="cards models">
            {principles.map((p) => (
              <div key={p.name}>
                <b>{p.name}</b>
                <p className="meaning mono">{p.model}</p>
                <p>{p.applied}</p>
                <span className="res">{p.result}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="tooling">
          <h2>Tooling with guardrails</h2>
          <p className="sub">Built to shorten diagnosis without giving automation the power to do damage.</p>
          <div className="cards">
            {tooling.map((t) => (
              <div key={t.title}><b>{t.title}</b><p>{t.text}</p><span className="tech">{t.tech}</span></div>
            ))}
          </div>
        </section>

        <section id="feedback">
          <h2>What colleagues noticed</h2>
          <p className="sub">Independent recognition, summarized. Names withheld.</p>
          <ul className="feedback">
            {feedback.map((f) => (
              <li key={f.source}><p>{f.text}</p><span className="tech">{f.source}</span></li>
            ))}
          </ul>
          <figure className="quote">
            <blockquote>“{mentorQuote.quote}”</blockquote>
            <figcaption><b>{mentorQuote.name}</b> · {mentorQuote.role}</figcaption>
          </figure>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <dl className="roles">
            {roles.map((r) => (
              <div key={r.title} style={{ display: 'contents' }}>
                <dt>{r.period}</dt>
                <dd>
                  <b>{r.title}</b>
                  <p>{r.text}</p>
                  {r.bullets && (
                    <ul className="bullets">
                      {r.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                  {r.tech && <span className="tech">{r.tech}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="writing">
          <div className="two-col">
            <div>
              <h3>Technical writing</h3>
              <ul className="list">
                {writing.map((w) => <li key={w}>{w}</li>)}
              </ul>
              <p className="note">Written for internal use, so not public. Happy to walk through the approach.</p>
            </div>
            <div>
              <h3>Capabilities</h3>
              <table>
                <tbody>
                  {capabilities.map(([area, list]) => (
                    <tr key={area}><td>{area}</td><td>{list}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                <li>ULAP.org cloud scholar (2021), now a mentor to later cohorts</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="closing">
            <div>
              <h2>Hiring for production infrastructure?</h2>
              <p className="sub">Open to senior SRE and platform roles, as an employee or on a long-term contract. UTC+8.</p>
            </div>
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
