"use client";

import { useEffect } from "react";
import Image from "next/image";
import { education, experience, githubFacts, impactStats, profile, projects, skills } from "./site-data";

const navItems = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".block-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-shell">
      <div className="tech-background" aria-hidden="true">
        <div className="tech-grid-layer" />
        <div className="tech-scanlines" />
        <div className="tech-orb tech-orb-a" />
        <div className="tech-orb tech-orb-b" />
        <div className="tech-rain tech-rain-a">
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
        </div>
        <div className="tech-rain tech-rain-b">
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
          <span>01001110 01101001 01110100 01101000 01101001 01101110</span>
        </div>
      </div>
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <section className="hero-card block-reveal reveal-up is-visible">
        <header className="topbar">
          <div>
            <p className="eyebrow">Portfolio / 2026</p>
            <p className="brand">{profile.name}</p>
          </div>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy block-reveal reveal-left is-visible" style={{ ["--delay" as string]: "80ms" }}>
            <p className="kicker">Software engineer focused on backend systems and cloud platforms</p>
            <h1>
              Software Engineer
              <span> with measurable impact.</span>
            </h1>
            <p className="lede">{profile.hero}</p>
            <p className="summary">{profile.summary}</p>

            <div className="cta-row">
              <a className="button button-uniform" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button button-uniform" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button button-uniform" href={`mailto:${profile.email}`}>
                Email Me
              </a>
            </div>

            <div className="hero-balance-grid">
              <article className="hero-balance-card">
                <span>Core impact</span>
                <strong>97% lower latency</strong>
                <p>Redesigned backend execution flow and shipped cleaner, faster configuration paths.</p>
              </article>
              <article className="hero-balance-card">
                <span>Current focus</span>
                <strong>Backend, platform, full-stack</strong>
                <p>Go services, cloud infrastructure, modern APIs, and polished product delivery.</p>
              </article>
            </div>
          </div>

          <aside className="hero-panel block-reveal reveal-right is-visible" style={{ ["--delay" as string]: "160ms" }}>
            <div className="profile-card">
              <Image
                src="/profile-picture.png"
                alt="Portrait of Nithin Reddy Challa"
                fill
                sizes="(max-width: 980px) 100vw, 420px"
                className="profile-card-image"
                priority
              />
              <div className="profile-card-overlay" />
              <div className="profile-card-content">
                <p className="profile-name">{profile.name}</p>
                <p className="profile-bio">{profile.bio}</p>
                <div className="profile-card-contact">
                  <p>
                    <span>Phone</span>
                    <strong>{profile.phone}</strong>
                  </p>
                  <p>
                    <span>Email</span>
                    <strong>{profile.email}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="profile-chip profile-chip-below">
              <span className="status-dot" />
              {profile.location} / {profile.relocation}
            </div>

            <div className="orbit-panel">
              <span>Backend systems</span>
              <span>Cloud platforms</span>
              <span>Full-stack delivery</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="stats-grid">
        {impactStats.map((stat, index) => (
          <article
            key={stat.label}
            className="stat-card block-reveal reveal-up"
            style={{ ["--delay" as string]: `${index * 90}ms` }}
          >
            <p>{stat.value}</p>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="story-grid">
        <article className="story-card block-reveal reveal-left">
          <p className="section-label">Why me</p>
          <h2>Backend depth with product taste.</h2>
          <p>
            My work sits at the intersection of distributed systems, cloud infrastructure, and end-user experience.
            I enjoy designing the unseen layers that make products feel fast, dependable, and easy to trust.
          </p>
        </article>
        <article className="story-card block-reveal reveal-right" style={{ ["--delay" as string]: "120ms" }}>
          <p className="section-label">GitHub pulse</p>
          <h2>Shipping across multiple domains.</h2>
          <p>
            Personal projects span backend services, machine learning, frontend applications, and desktop tooling, with
            recent activity across {githubFacts.recent.join(", ")}.
          </p>
        </article>
      </section>

      <section className="section" id="experience">
        <div className="section-heading block-reveal reveal-up">
          <p className="section-label">Experience</p>
          <h2>Built in production, not just in demos.</h2>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className={`timeline-card block-reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ ["--delay" as string]: `${index * 80}ms` }}
            >
              <div className="timeline-meta">
                <p>{job.period}</p>
                <span>{job.location}</span>
              </div>
              <div>
                <h3>
                  {job.role}
                  <span>@ {job.company}</span>
                </h3>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading block-reveal reveal-up">
          <p className="section-label">Projects</p>
          <h2>Projects that show range.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card block-reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <div className="project-top">
                <span>{project.tag}</span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open repo
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading block-reveal reveal-up">
          <p className="section-label">Skill Map</p>
          <h2>Modern backend and cloud tooling.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className="skill-card block-reveal reveal-up"
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split">
        <article className="education-card block-reveal reveal-left">
          <p className="section-label">Education</p>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.location}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="contact-card block-reveal reveal-right" style={{ ["--delay" as string]: "120ms" }} id="contact">
          <p className="section-label">Let&apos;s build</p>
          <h2>Open to strong engineering teams and ambitious products.</h2>
          <p>
            If you&apos;re hiring for backend, platform, or full-stack roles, I&apos;d love to talk about systems,
            reliability, and product execution.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
              github.com/nchalla5
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
