const portfolioData = {
  about: {
    lead: "Engineer who owns the follow-through.",
    body: "About three years of professional experience across telecom and healthcare, with a Master of Computer Science from NC State (May 2026). I build backend and full-stack software for real workflows; at Accenture, I cut API latency by 25% and PostgreSQL query latency by 40%. I focus on reliable delivery through testing, automation, and root-cause analysis, using Claude Code alongside code review and automated tests."
  },
  skillGroups: {
    Languages: ["Java", "Python", "Go", "TypeScript", "JavaScript", "C++", "SQL"],
    "Application Development": ["React", "Next.js", "Node.js", "Spring Boot", "FastAPI", "Pydantic", "REST APIs", "Microservices"],
    "Data and Messaging": ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "Prisma", "SQLAlchemy", "Alembic", "Kafka", "Amazon SQS", "Google Cloud Pub/Sub"],
    "Cloud and Delivery": ["AWS (EC2, S3, SQS, RDS)", "GCP", "Docker", "Kubernetes", "Helm (Proof of Concept)", "Terraform", "GitHub Actions CI/CD", "Linux", "Git"],
    "AI and Automation": ["LLM-assisted extraction and validation", "Model Context Protocol (MCP)", "Claude Code"],
    "Testing and Reliability": ["Pytest", "Unit and integration testing", "Regression testing", "Production troubleshooting", "Root-cause analysis", "On-call support", "CloudWatch", "Splunk", "SignalFx"]
  },
  certifications: [
    { label: "AWS Certified Cloud Practitioner" },
    { label: "Google Associate Cloud Engineer" }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "North Carolina State University",
      logoSrc: "assets/nc-state-logo.svg",
      logoAlt: "North Carolina State University",
      location: "Raleigh, NC",
      period: "Aug 2024 - May 2026",
      highlights: [
        "Coursework: Advanced Distributed Systems, Design and Analysis of Algorithms, Database Systems, Cloud Computing, Object-Oriented Design and Development, Software Engineering, Automated Learning and Data Analysis, Foundations of Data Science, Neural Networks, and HCI.",
        "Active member of the Women in Computer Science media committee, contributing to community engagement and student-facing initiatives."
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Vidyavardhaka College of Engineering",
      logoSrc: "assets/vvce_logo.jpg",
      logoAlt: "Vidyavardhaka College of Engineering",
      location: "Mysuru, India",
      period: "Aug 2017 - Aug 2021",
      highlights: [
        "Coursework: Data Structures, Web Development, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning"
      ]
    }
  ],
  work: [
    {
      role: "Software Engineer Intern",
      company: "iSimcha Health LLC",
      logoSrc: "assets/isimcha-logo.webp",
      logoAlt: "iSimcha Health LLC logo",
      context: "Healthcare company, collaborative application and report workflows.",
      period: "Jul 2026 - Present",
      location: "",
      type: "Internship",
      achievements: [
        "Took secure CSV ingestion from requirements through staging: 100% of uploads were SHA-256 verified and reviewer-approved before processing. Added role-based access, idempotent Cloud Run triggers, retry-only failure handling, recovery sweeps, and a feature-flagged rollout; kept row contents out of validation metadata and failure codes.",
        "Restored report generation after PostgreSQL connection exhaustion by bounding the pool and moving rendering to async Cloud Tasks on Cloud Run and Cloud Storage. Separating submission from rendering eliminated manual restarts.",
        "Made multi-investigator delivery all-or-none with PostgreSQL snapshots: 0 partial sets and no live warehouse lookups on the delivery page.",
        "Automated staging releases with GitHub Actions, Docker, and Terraform. OIDC keyless authentication and an Alembic migration gate block releases after failed database migrations.",
        "Improved correctness across 10+ sources with 12 pytest regression tests; recorded refreshes only after successful imports.",
        "Shipped white-label React, Next.js, and TypeScript across branded subdomains: 6 authentication screens, landing pages, and customer emails.",
        "Contributed to an MCP tool used through Claude Code to query PostgreSQL and validate reports."
      ],
      skills: ["Python / FastAPI", "PostgreSQL", "GCP", "GitHub Actions / Terraform", "React / Next.js", "TypeScript", "MCP"]
    },
    {
      role: "Software Engineer",
      company: "Accenture",
      logoSrc: "assets/accenture-logo.svg",
      logoAlt: "Accenture",
      context: "Telecom client (Canada) and an internal compliance-as-code platform.",
      period: "Nov 2021 - Jun 2024",
      location: "Bengaluru, India",
      type: "Full-time",
      achievements: [
        "Raised capacity by 30% across Java/Spring Boot and Node.js telecom microservices handling 20K+ daily requests.",
        "Cut API latency by 25% through backend and SQL optimization; secured provider integrations with Spring Security, JWT, RBAC, and JPA/JDBC. Built Validate and Eligibility REST APIs that blocked invalid requests.",
        "Cut PostgreSQL query latency by 40% through execution-plan analysis, indexing, and join optimization.",
        "Decoupled services into a fault-tolerant Kafka, Amazon SQS, and Pub/Sub architecture processing 10K+ daily events, with Redis lookups and DynamoDB workflow state.",
        "Built an XML-to-JSON conversion component that persisted incoming data and retried transient failures.",
        "Reduced compliance review effort by 50% with Python and Go services for LLM-assisted extraction and validation, plus React workflow features.",
        "Supported 99.9% uptime through on-call support and root-cause analysis with Splunk and SignalFx; supported Kubernetes deployments and mentored junior developers.",
        "Executed 150+ functional and regression tests supporting a near-zero-downtime migration."
      ],
      skills: ["Java / Spring Boot", "Node.js", "Python / Go", "React", "PostgreSQL", "Kafka / SQS / Pub/Sub", "AWS / GCP"]
    }
  ],
  earlierInternships: [
    {
      title: "Web Development Intern",
      company: "Adishiva Technologies",
      period: "Mar 2021 - Apr 2021",
      description: "Built responsive frontend components and integrated them with backend REST APIs in an Agile delivery environment.",
      skills: ["HTML", "CSS", "JavaScript", "REST APIs", "Agile"]
    },
    {
      title: "Machine Learning Intern",
      company: "Verzeo",
      period: "Jul 2019 - Sep 2019",
      description: "Built and tuned classical fraud detection models on 1M+ transactions and experimented with deep learning approaches.",
      skills: ["Python", "Machine Learning", "SVM", "Random Forest", "Gradient Boosting", "Deep Learning"]
    }
  ],
  featuredProjects: [
    {
      title: "SnapSpec",
      subtitle: "Distributed Snapshots with Redirect-on-Write",
      meta: "team of 3, NC State · Feb 2026 – Apr 2026",
      description: "My part: the durable pending-transfer outbox that replays interrupted cross-node credits after failure, the MySQL snapshot metadata registry, and the coordinator-driven two-phase restore logic. Team results across 10 configurations on three machines: non-pausing strategies cut median snapshot latency 20-37% and control messages 38% versus pause-based snapshots, and every snapshot passed causal consistency, token conservation, and restore checks.",
      tags: ["C++", "Python", "MySQL", "Distributed Systems"],
      image: "assets/snapspec-architecture.webp",
      imageAlt: "Architecture diagram showing SnapSpec distributed snapshot workflow across nodes.",
      links: [{ label: "View Project Paper", url: "https://drive.google.com/file/d/1xHc0BRLiUHhSIGQtz2nuhTNP6vbnkW1M/view?usp=sharing" }]
    },
    {
      title: "High Availability WordPress Deployment",
      meta: "team project · Sep 2025 – Dec 2025",
      description: "Co-designed a highly available AWS architecture covering 21 business requirements with ALB, RDS Multi-AZ (replicated standby with automatic failover), CloudFront, EFS, IAM, and CloudWatch. In a 100-user Locust load test on a local Kubernetes setup, pods autoscaled with no failed requests; authorization checks returned the expected HTTP 200 and 403. These are test results, not production outcomes.",
      tags: ["AWS", "Docker", "Kubernetes", "Locust"],
      image: "assets/aws-architecture.webp",
      imageAlt: "AWS architecture diagram for a highly available WordPress deployment with load balancing and autoscaling."
    },
    {
      title: "Inventory Management System",
      meta: "Sep 2025 – Dec 2025",
      description: "Designed a normalized PostgreSQL schema for BOM-based recipe management, FEFO inventory allocation, and batch-level traceability. Implemented stored procedures, triggers, and indexing strategies to optimize transactional queries and improve inventory accuracy.",
      tags: ["PostgreSQL", "Python", "Database Systems"],
      image: "assets/inventory-er-diagram.webp",
      imageAlt: "ER diagram for the inventory management system showing BOMs, allocations, and traceability.",
      links: [{ label: "View GitHub Repo", url: "https://github.com/niharikaaa26/InventoryManagement.git" }]
    }
  ],
  moreProjects: [
    {
      title: "Expertiza ReviewMappingController Refactor and Reimplementation",
      period: "Mar 2025 – Apr 2025",
      description: "Refactored and reimplemented ReviewMappingController in Expertiza to improve maintainability, scalability, and RESTful design. Modularized business logic, reduced duplication, applied stronger validation, and aligned the backend with Rails conventions and full test coverage.",
      tags: ["Ruby", "OOP", "Rails", "HTML", "JavaScript"],
      links: [
        { label: "View Refactor Repo", url: "https://github.com/niharikaaa26/expertiza" },
        { label: "View Reimplementation Repo", url: "https://github.com/niharikaaa26/reimplementation-back-end" }
      ]
    },
    {
      title: "Movie Ticketing System",
      period: "Jan 2025 – Feb 2025",
      description: "Built a role-based Ruby on Rails application for multiplex operations, covering show browsing, ticket booking and cancellation, user account management, and admin workflows with validations and real-time seat updates.",
      tags: ["Ruby", "Ruby on Rails", "Docker", "HTML", "JavaScript"],
      links: [{ label: "View GitHub Repo", url: "https://github.com/niharikaaa26/movie-ticketing.git" }]
    },
    {
      title: "PackFinder 2.0",
      period: "Sep 2024 – Dec 2024",
      description: "Developed a roommate matching web application for NC State students using Python, Django, and Bootstrap. Applied modular design, agile workflows, TDD, and GitHub Actions with Docker automation to deliver a scalable student-focused platform.",
      tags: ["Python", "Django", "Git", "GitHub Actions", "Docker"],
      links: [{ label: "View GitHub Repo", url: "https://github.com/niharikaaa26/PackFinder" }]
    },
    {
      title: "User Behavior Analysis for Movie Recommendations",
      period: "Sep 2024 – Dec 2024",
      description: "Built a collaborative filtering recommendation system using SVD and evaluated it with RMSE and MAE through cross-validation. Performed tuning and error analysis to understand how latent factors, regularization, and user behavior influence recommendation quality.",
      tags: ["Machine Learning", "Collaborative Filtering", "Matrix Factorization", "Python"],
      links: [{ label: "View GitHub Repo", url: "https://github.com/niharikaaa26/movie-recommendation.git" }]
    },
    {
      title: "Fog Computing in Healthcare Monitoring using IoT",
      period: "Aug 2020 – Jun 2021",
      description: "Designed a fog-computing-based healthcare monitoring system for real-time patient observation using IoT. Focused on low-latency notification delivery through fog-layer processing over TCP/IP with an open architecture approach.",
      tags: ["IoT", "Healthcare", "Fog Computing", "Mobile App"],
      link: "https://www.ijert.org/survey-on-fog-computing-in-healthcare-monitoring",
      linkLabel: "View Published Paper",
      publicationMeta: "IJERT article downloads/views: 480"
    },
    {
      title: "Hospital Management System",
      period: "Aug 2020 – Dec 2020",
      description: "Built a patient registration and hospital information management interface that captures and stores operational patient data required by doctors and care teams.",
      tags: ["MySQL", "CSS", "JavaScript", "HTML5"],
      links: [{ label: "View GitHub Repo", url: "https://github.com/niharikaaa26/hospitalmanagementsystem" }]
    },
    {
      title: "Student Information Management System",
      period: "Aug 2019 – Dec 2019",
      description: "Developed a database-backed student information system with a simple user interface for maintaining and managing academic records efficiently.",
      tags: ["MySQL", "Database Systems", "CSS", "JavaScript", "PHP"]
    }
  ],
  contact: {
    links: [
      { label: "Email", url: "mailto:niharika.suresh26@gmail.com", iconSrc: "assets/icon-email.svg", iconAlt: "Email" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/niharika-suresh11", iconSrc: "assets/linkedin-icon.svg", iconAlt: "LinkedIn" },
      { label: "GitHub", url: "https://github.com/niharikaaa26", iconSrc: "assets/github-icon.svg", iconAlt: "GitHub" }
    ]
  }
};

function byId(id) {
  return document.getElementById(id);
}

function renderAbout() {
  const aboutLead = byId("aboutLead");
  if (aboutLead) aboutLead.textContent = portfolioData.about.lead;

  const aboutBody = byId("aboutBody");
  if (aboutBody) aboutBody.textContent = portfolioData.about.body;

  const certList = byId("certificationList");
  if (certList) {
    certList.innerHTML = portfolioData.certifications
      .map((item) => `<span class="cert-link">${item.label}</span>`)
      .join("");
  }
}

function renderSkills(groups) {
  const host = byId("skillGroups");
  if (!host) return;
  host.innerHTML = "";

  Object.entries(groups).forEach(([label, skills]) => {
    const group = document.createElement("article");
    group.className = "skill-group";

    const heading = document.createElement("h3");
    heading.textContent = label;

    const list = document.createElement("ul");
    list.className = "skill-group-list";

    skills.forEach((skill) => {
      const item = document.createElement("li");
      item.textContent = skill;
      list.appendChild(item);
    });

    group.append(heading, list);
    host.appendChild(group);
  });
}

function renderEducation(items) {
  const host = byId("educationList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "education-card";

    const highlightMarkup = (entry.highlights || [])
      .map((item) => `<li>${item}</li>`)
      .join("");

    article.innerHTML = `
      <div class="education-top">
        <div class="education-badge">
          <img class="education-badge-icon" src="${entry.logoSrc || "assets/icon-education.svg"}" alt="${entry.logoAlt || "Education"}" />
        </div>
        <p class="education-period">${entry.period}</p>
      </div>
      <h3>${entry.degree}</h3>
      <div class="education-facts">
        <p class="education-fact education-institution"><strong>${entry.institution}${entry.location ? `, ${entry.location}` : ""}</strong></p>
      </div>
      <div class="education-divider"></div>
      <div class="education-highlights">
        <p class="education-highlights-title">Highlights</p>
        <ul>${highlightMarkup}</ul>
      </div>
    `;
    host.appendChild(article);
  });
}

function renderWork(items) {
  const host = byId("workList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "experience-box";
    const skills = (entry.skills || [])
      .map((skill) => `<span class="experience-pill">${skill}</span>`)
      .join("");

    article.innerHTML = `
      <div class="experience-top">
        <div class="education-badge">
          <img class="education-badge-icon experience-badge-icon" src="${entry.logoSrc || "assets/icon-briefcase.svg"}" alt="${entry.logoAlt || "Experience"}" />
        </div>
        <div class="experience-meta">
          <p class="education-period">${entry.period}</p>
          <p class="experience-type-badge">${entry.type}</p>
        </div>
      </div>
      <div class="experience-card">
        <h3>${entry.role}</h3>
        <div class="experience-facts">
          <p class="education-fact experience-company"><strong>${entry.company}</strong></p>
          ${entry.location ? `<p class="education-fact">${entry.location}</p>` : ""}
          ${entry.context ? `<p class="education-fact">${entry.context}</p>` : ""}
        </div>
        <div class="education-divider"></div>
        <ul class="experience-achievements">${(entry.achievements || []).map((achievement) => `<li>${achievement}</li>`).join("")}</ul>
        <div class="experience-pills">${skills}</div>
      </div>
    `;
    host.appendChild(article);
  });

  const details = document.createElement("details");
  details.className = "details-card";
  details.innerHTML = `
    <summary>Earlier internships</summary>
    <ul>
      ${portfolioData.earlierInternships.map((internship) => `
        <li>
          <strong>${internship.title}, ${internship.company} (${internship.period})</strong>
          <p>${internship.description}</p>
          <div class="experience-pills">${internship.skills.map((skill) => `<span class="experience-pill">${skill}</span>`).join("")}</div>
        </li>
      `).join("")}
    </ul>
  `;
  host.appendChild(details);
}

function renderFeaturedProjects(items) {
  const host = byId("featuredProjectList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card project-box";

    const tags = (project.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
    const links = (project.links || [])
      .map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer" aria-label="${link.label}: ${project.title}">${link.label}</a>`)
      .join("");

    const imageMarkup = `
      <div class="project-visual">
        <img
          src="${project.image || ""}"
          alt="${project.imageAlt || project.title}"
          loading="lazy"
          width="1200"
          height="780"
          onerror="this.style.display='none'; this.parentNode.classList.add('image-fallback');"
        />
      </div>
    `;

    card.innerHTML = `
      ${project.image ? imageMarkup : '<div class="project-visual image-fallback" aria-hidden="true"></div>'}
      <div class="project-content">
        <p class="project-meta-label">${project.meta || ""}</p>
        <h3>${project.title}</h3>
        ${project.subtitle ? `<p class="project-subtitle">${project.subtitle}</p>` : ""}
        <p class="project-description">${project.description}</p>
        ${project.results ? `<ul class="project-results">${project.results.map((result) => `<li>${result}</li>`).join("")}</ul>` : ""}
        <div class="education-divider"></div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
        <div class="project-tags">${tags}</div>
      </div>
    `;
    host.appendChild(card);
  });
}

function renderMoreProjects(items) {
  const host = byId("moreProjectList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "more-project-card";

    const tags = (project.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
    const links = (project.links || [])
      .map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer" aria-label="${link.label}: ${project.title}">${link.label}</a>`)
      .join("");
    const singleLink = project.link
      ? `<div class="paper-link-group"><a class="project-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.linkLabel || "Open Project"}: ${project.title}">${project.linkLabel || "Open Project"}</a>${project.publicationMeta ? `<small class="project-caption">${project.publicationMeta}</small>` : ""}</div>`
      : "";

    card.innerHTML = `
      <h3>${project.title}</h3>
      ${project.period ? `<p class="project-meta-label">${project.period}</p>` : ""}
      <p>${project.description}</p>
      <div class="project-tags">${tags}</div>
      ${(links || singleLink) ? `<div class="project-links">${links}${singleLink}</div>` : ""}
    `;
    host.appendChild(card);
  });
}

function renderContacts(links) {
  const host = byId("contactLinks");
  if (!host) return;
  host.innerHTML = "";

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "contact-link";
    anchor.href = link.url;
    anchor.setAttribute("aria-label", link.label);
    if (!link.url.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }

    const icon = document.createElement("img");
    icon.src = link.iconSrc;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    anchor.appendChild(icon);

    const label = document.createElement("span");
    label.textContent = link.label;
    anchor.appendChild(label);

    host.appendChild(anchor);
  });
}

function setupMenu() {
  const btn = byId("menuBtn");
  const nav = byId("nav");
  if (!btn || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !btn.contains(event.target)) setOpen(false);
  });

  window.matchMedia("(max-width: 860px)").addEventListener("change", () => setOpen(false));
}

function typeTextEffect(element, text, speed = 70) {
  if (!element || !text) return;

  let index = 0;
  element.textContent = "";

  const tick = () => {
    if (index <= text.length) {
      element.textContent = text.slice(0, index);
      index += 1;
      window.setTimeout(tick, speed);
    }
  };

  tick();
}

function hydrate() {
  const brand = byId("brandName");
  if (brand) brand.textContent = "N";

  const footerLine = byId("footerLine");
  if (footerLine) {
    footerLine.textContent = `© ${new Date().getFullYear()} Niharika Maruvanahalli Suresh`;
  }

  const typedText = document.querySelector(".typed-text");
  if (typedText) {
    const text = typedText.dataset.text || typedText.textContent || "";
    typeTextEffect(typedText, text, 65);
  }

  renderAbout();
  renderSkills(portfolioData.skillGroups);
  renderEducation(portfolioData.education);
  renderWork(portfolioData.work);
  renderFeaturedProjects(portfolioData.featuredProjects);
  renderMoreProjects(portfolioData.moreProjects);
  renderContacts(portfolioData.contact.links);
}

hydrate();
setupMenu();
