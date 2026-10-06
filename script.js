const portfolioData = {
  navBrand: "N",
  brandName: "Niharika Maruvanahalli Suresh",
  hero: {
    kicker: "Software Engineer · Durham, NC",
    name: "Niharika Maruvanahalli Suresh",
    avatarText: "NS",
    profileImage: "assets/profile.jpeg",
    headline:
      "I build reliable software<span class=\"accent\">—from customer-facing experiences to the services and data behind them.</span>",
    summary:
      "My work spans healthcare applications, distributed telecom services, and AI-assisted automation. I build web experiences, APIs, and data workflows, and support them through testing, cloud deployment, and production operations.",
    resumeUrl: "https://drive.google.com/file/d/1TVfOh6EQPzj3kTCVGk0VhLWCLkEexZTa/view?usp=sharing"
  },
  about: {
    lead: "From product needs to dependable software.",
    body: "I bring approximately three years of professional experience across software development and production support. I completed my Master of Computer Science at NC State in May 2026 and currently work as a Software Engineer Intern at healthcare company iSimcha in Durham, NC.",
    collaborationTitle: "Understand the problem. Build together. Own the follow-through.",
    collaborationBody: "I connect product needs with implementation details, collaborate on design and code review, and carry changes through testing, release, and ongoing improvement. My recent work emphasizes backend services and full-stack delivery.",
    aiBody: "At Accenture, I built Python and Go services that integrated LLM-assisted extraction and validation into compliance workflows. During development, I also use Claude Code alongside code review and automated checks."
  },
  skillGroups: {
    "Languages": [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "Go",
      "SQL",
      "C++"
    ],
    "Application Development": [
      "React",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "Flask",
      "FastAPI",
      "REST APIs",
      "microservices",
      "HTML",
      "CSS"
    ],
    "Data and Messaging": [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "DynamoDB",
      "Prisma",
      "SQLAlchemy",
      "Kafka",
      "Amazon SQS",
      "Google Cloud Pub/Sub"
    ],
    "Cloud and Delivery": [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Git"
    ],
    "AI and Automation": [
      "LLM-assisted extraction and validation",
      "workflow automation",
      "Claude Code"
    ],
    "Testing and Reliability": [
      "pytest",
      "unit and integration testing",
      "regression testing",
      "production troubleshooting",
      "root-cause analysis",
      "on-call support",
      "CloudWatch",
      "Splunk",
      "SignalFx"
    ]
  },
  certifications: [
    {
      label: "AWS Certified Cloud Practitioner",
      url: "https://drive.google.com/file/d/1_Qbzvyx5YG4P0BUPLQR0iNpxoo5yHZAe/view?usp=sharing"
    },
    {
      label: "Google Associate Cloud Engineer",
      url: "https://drive.google.com/file/d/1gPlDPxLXNtFhu2oXD0jg2ioL9qy_YA8a/view?usp=sharing"
    }
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
        "Coursework : Advanced Distributed Systems, Design and Analysis of Algorithms, Database Systems, Cloud Computing, Object-Oriented Design and Development, Software Engineering, Automated Learning and Data Analysis, Foundations of Data Science, Neural Networks, and HCI.",
        "Built strong depth in distributed systems, software engineering, and large-scale platform design through graduate-level coursework and hands-on problem solving.",
        "Active member of the Women in Computer Science media committee, contributing to community engagement and student-facing initiatives."
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Vidyavardhaka College of Engineering",
      logoSrc: "assets/vvce_logo.jpg",
      logoAlt: "Vidyavardhaka College of Engineering",
      location: "Mysuru, India",
      period: "Aug 2017 – Aug 2021",
      highlights: [
        "Coursework: Data Structures, Web Development, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning",
        "Built a strong systems and software engineering foundation",
        "Developed early project experience across core CS subjects"
      ]
    }
  ],
  work: [
    {
      role: "Software Engineer Intern",
      company: "iSimcha",
      context: "Healthcare company · Collaborative application and report workflows",
      period: "Jul 2026–Present",
      location: "Durham, NC",
      type: "Internship",
      achievements: [
        "Implemented organization-specific branding with React, Next.js, and TypeScript across subdomains, landing pages, six authentication screens, and emails; improved responsive headers to preserve organization names and navigation.",
        "Re-architected Python/Flask report generation into authenticated asynchronous jobs with GCP Cloud Tasks, Cloud Run, and Cloud Storage, separating submission from report rendering.",
        "Restored report generation after PostgreSQL connection exhaustion by bounding the psycopg connection pool and correcting connection configuration.",
        "Collaborated on the multi-investigator workflow, implementing all-or-none report delivery and persisting investigator snapshots in PostgreSQL to eliminate live warehouse lookups from the delivery page.",
        "Automated staging deployments with GitHub Actions, Docker, and Terraform, using keyless GCP authentication and an Alembic migration gate.",
        "Improved source-freshness tracking across 10+ sources, resolved eight review findings, and added 12 pytest regression tests."
      ],
      skills: ["React / Next.js", "TypeScript", "Python / Flask", "PostgreSQL", "GCP", "GitHub Actions / Terraform"]
    },
    {
      role: "Software Engineer / Application Development Analyst",
      company: "Accenture",
      logoSrc: "assets/accenture-logo.svg",
      logoAlt: "Accenture",
      client: "Clients: TELUS WNP, Canada and Functional Engineering Compliance-as-Code Platform",
      period: "Nov 2021–Jun 2024",
      location: "Bengaluru, India",
      type: "Full-time",
      achievements: [
        "Increased transaction capacity by 30% across Java/Spring Boot and Node.js telecom microservices handling 20K+ daily requests.",
        "Developed secure REST APIs for external providers with Spring Security, JWT, RBAC, and JPA/JDBC; reduced API latency by 25% through backend and SQL optimization.",
        "Built Kafka, Amazon SQS, and Pub/Sub pipelines processing 10K+ daily events, with Redis lookups and DynamoDB workflow state.",
        "Built Python and Go services integrating LLM-assisted extraction and validation into compliance workflows, with React workflow features, reducing manual review effort by 50%.",
        "Reduced PostgreSQL query latency by 40% through execution-plan analysis, indexing, and join optimization.",
        "Led on-call support and root-cause analysis, supporting 99.9% uptime through monitoring and Docker/Kubernetes recovery.",
        "Mentored junior developers during onboarding.",
        "Executed 150+ functional and regression test cases supporting a near-zero-downtime migration."
      ],
      skills: ["Java / Spring Boot", "Node.js", "Python / Go", "React", "PostgreSQL", "Kafka / SQS / Pub/Sub", "AWS / GCP"]
    },
    {
      role: "Web Development Intern",
      company: "Adishiva Technologies",
      period: "Mar 2021 - Apr 2021",
      location: "Bengaluru, India",
      type: "Internship",
      achievements: ["Built responsive frontend components and integrated them with backend REST APIs in an Agile delivery environment."],
      skills: ["HTML", "CSS", "JavaScript", "REST APIs", "Agile"]
    },
    {
      role: "Machine Learning Intern",
      company: "Verzeo",
      logoSrc: "assets/verzeo-logo.svg",
      logoAlt: "Verzeo",
      period: "Jul 2019 - Sep 2019",
      location: "Remote",
      type: "Internship",
      achievements: ["Built and tuned classical fraud detection models on 1M+ transactions and experimented with deep learning approaches."],
      skills: ["Python", "Machine Learning", "SVM", "Random Forest", "Gradient Boosting", "Deep Learning"]
    }
  ],
  projects: [
    {
      title: "SnapSpec — Distributed Storage Snapshots",
      description:
        "Built a distributed storage snapshot prototype to capture consistent state with less coordination overhead. Implemented redirect-on-write and durable crash recovery.",
      results: [
        "Prototype tests across 10 configurations on three machines reduced median snapshot latency by 20–37% and control messages by 38% versus pause-based snapshots.",
        "All tested snapshots passed consistency and restore checks."
      ],
      tags: ["C++", "Python", "MySQL", "Distributed Systems"],
      links: [
        {
          label: "View Project Paper",
          url: "https://drive.google.com/file/d/1xHc0BRLiUHhSIGQtz2nuhTNP6vbnkW1M/view?usp=sharing"
        }
      ],
      theme: "blue"
    },
    {
      title: "High Availability WordPress Deployment",
      description:
        "Built a resilient WordPress deployment on AWS with Docker and Kubernetes. Used load balancing, managed databases, autoscaling, monitoring, and access controls to support changing demand.",
      results: ["In a 100-user Locust load test, pods scaled from two to nine with no failed requests. These are test results, not production outcomes."],
      tags: ["AWS", "Docker", "Kubernetes", "Locust"],
      theme: "teal"
    },
    {
      title: "Inventory Management System",
      description:
        "Designed a normalized PostgreSQL schema for BOM-based recipe management, FEFO inventory allocation, and batch-level traceability. Implemented stored procedures, triggers, and indexing strategies to optimize transactional queries and improve inventory accuracy.",
      tags: ["PostgreSQL", "Python", "Database Systems"],
      links: [
        {
          label: "View GitHub Repo",
          url: "https://github.com/niharikaaa26/InventoryManagement.git"
        }
      ],
      theme: "pink"
    },
    {
      title: "Expertiza ReviewMappingController Refactor and Reimplementation",
      description:
        "Refactored and reimplemented ReviewMappingController in Expertiza to improve maintainability, scalability, and RESTful design. Modularized business logic, reduced duplication, applied stronger validation, and aligned the backend with Rails conventions and full test coverage.",
      tags: ["Ruby", "OOP", "Rails", "HTML", "JavaScript"],
      links: [
        {
          label: "View Refactor Repo",
          url: "https://github.com/niharikaaa26/expertiza"
        },
        {
          label: "View Reimplementation Repo",
          url: "https://github.com/niharikaaa26/reimplementation-back-end"
        }
      ],
      theme: "blue"
    },
    {
      title: "Movie Ticketing System",
      description:
        "Built a role-based Ruby on Rails application for multiplex operations, covering show browsing, ticket booking and cancellation, user account management, and admin workflows with validations and real-time seat updates.",
      tags: ["Ruby", "Ruby on Rails", "Docker", "HTML", "JavaScript"],
      links: [
        {
          label: "View GitHub Repo",
          url: "https://github.com/niharikaaa26/movie-ticketing.git"
        }
      ],
      theme: "teal"
    },
    {
      title: "PackFinder 2.0",
      description:
        "Developed a roommate matching web application for NC State students using Python, Django, and Bootstrap. Applied modular design, agile workflows, TDD, and GitHub Actions with Docker automation to deliver a scalable student-focused platform.",
      tags: ["Python", "Django", "Git", "GitHub Actions", "Docker"],
      links: [
        {
          label: "View GitHub Repo",
          url: "https://github.com/niharikaaa26/PackFinder"
        }
      ],
      theme: "pink"
    },
    {
      title: "User Behavior Analysis for Movie Recommendations",
      description:
        "Built a collaborative filtering recommendation system using SVD and evaluated it with RMSE and MAE through cross-validation. Performed tuning and error analysis to understand how latent factors, regularization, and user behavior influence recommendation quality.",
      tags: ["Machine Learning", "Collaborative Filtering", "Matrix Factorization", "Python"],
      links: [
        {
          label: "View GitHub Repo",
          url: "https://github.com/niharikaaa26/movie-recommendation.git"
        }
      ],
      theme: "blue"
    },
    {
      title: "Fog Computing in Healthcare Monitoring using IoT",
      description:
        "Designed a fog-computing-based healthcare monitoring system for real-time patient observation using IoT. Focused on low-latency notification delivery through fog-layer processing over TCP/IP with an open architecture approach.",
      tags: ["IoT", "Healthcare", "Fog Computing", "Mobile App"],
      link: "https://www.ijert.org/survey-on-fog-computing-in-healthcare-monitoring",
      linkLabel: "View Published Paper",
      publicationMeta: "IJERT article downloads/views: 480",
      theme: "teal"
    },
    {
      title: "Hospital Management System",
      description:
        "Built a patient registration and hospital information management interface that captures and stores operational patient data required by doctors and care teams.",
      tags: ["MySQL", "CSS", "JavaScript", "HTML5"],
      links: [
        {
          label: "View GitHub Repo",
          url: "https://github.com/niharikaaa26/hospitalmanagementsystem"
        }
      ],
      theme: "pink"
    },
    {
      title: "Student Information Management System",
      description:
        "Developed a database-backed student information system with a simple user interface for maintaining and managing academic records efficiently.",
      tags: ["MySQL", "Database Systems", "CSS", "JavaScript", "PHP"],
      theme: "blue"
    }
  ],
  contact: {
    text: "Based in Durham, NC, and interested in software engineering opportunities. Reach out to discuss products, services, and the systems that connect them.",
    infoCards: [
      {
        title: "Email",
        value: "niharika.suresh26@gmail.com",
        url: "mailto:niharika.suresh26@gmail.com",
        iconSrc: "assets/icon-email.svg",
        iconAlt: "Email",
        iconOnly: false
      }
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/niharikaaa26",
        iconSrc: "assets/github-icon.svg",
        iconAlt: "GitHub"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/niharika-suresh11/",
        iconSrc: "assets/linkedin-icon.svg",
        iconAlt: "LinkedIn"
      }
    ],
    formTargetEmail: "niharika.suresh26@gmail.com"
  }
};

function byId(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = byId(id);
  if (el) el.innerHTML = value;
}

function renderAbout() {
  setText("aboutLead", portfolioData.about.lead);
  const aboutBody = byId("aboutBody");
  if (aboutBody) {
    if (portfolioData.about.body) {
      aboutBody.textContent = portfolioData.about.body;
      aboutBody.hidden = false;
    } else {
      aboutBody.hidden = true;
    }
  }
  setText("aboutCollabTitle", portfolioData.about.collaborationTitle);
  setText("aboutCollabBody", portfolioData.about.collaborationBody);
  setText("aboutAiBody", portfolioData.about.aiBody);
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

function renderCertifications(items) {
  const host = byId("certificationList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((item) => {
    const chip = document.createElement("a");
    chip.className = "cert-link";
    chip.href = item.url;
    chip.target = "_blank";
    chip.rel = "noreferrer";
    chip.textContent = item.label;
    host.appendChild(chip);
  });
}

function renderEducation(items) {
  const host = byId("educationList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "education-card";
    const highlights = (entry.highlights || [])
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
        <ul>${highlights}</ul>
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
    article.className = `experience-box${entry.company === "iSimcha" || entry.company === "Accenture" ? " experience-featured" : ""}`;
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
          <p class="education-fact">${entry.location}</p>
          ${entry.context ? `<p class="education-fact">${entry.context}</p>` : ""}
          ${entry.client ? `<p class="education-fact experience-client">${entry.client}</p>` : ""}
        </div>
        <div class="education-divider"></div>
        <ul class="experience-achievements">${(entry.achievements || []).map((achievement) => `<li>${achievement}</li>`).join("")}</ul>
        <div class="experience-pills">${skills}</div>
      </div>
    `;
    host.appendChild(article);
  });
}

function renderProjects(projects) {
  const host = byId("projectList");
  if (!host) return;
  host.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card project-box spotlight-card theme-${project.theme || "teal"}`;

    const tags = (project.tags || [])
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
    const actionLinks = [
      ...(project.links || []),
      ...(project.link
        ? [
            {
              label: project.linkLabel || "Open Link",
              url: project.link
            }
          ]
        : [])
    ];
    const links = actionLinks
      .map(
        (item) =>
          `<a class="project-link" aria-label="${item.label}: ${project.title}" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`
      )
      .join("");

    card.innerHTML = `
      <div class="spotlight-visual" aria-hidden="true">
        <div class="spotlight-grid"></div>
        <div class="spotlight-orb"></div>
      </div>
      ${project.publicationMeta ? `<div class="project-top"><p class="project-top-note">${project.publicationMeta}</p></div>` : ""}
      <div class="project-content">
        <h3>${project.title}</h3>
        ${project.period ? `<p class="project-period">${project.period}</p>` : ""}
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

function renderContactInfo(cards) {
  const host = byId("contactInfoList");
  if (!host) return;
  host.innerHTML = "";

  cards.forEach((card) => {
    const article = document.createElement(card.url ? "a" : "article");
    article.className = `info-card${card.iconOnly ? " icon-only" : ""}`;
    if (card.url) {
      article.href = card.url;
      article.setAttribute("aria-label", `Email ${portfolioData.contact.formTargetEmail}`);
      article.target = "_blank";
      article.rel = "noreferrer";
    }

    const value = card.url
      ? card.value
      : card.value;

    const iconHtml = card.iconSrc
      ? `<img class="info-icon-img" src="${card.iconSrc}" alt="${card.iconAlt || card.title}" />`
      : card.icon || "*";

    article.innerHTML = card.iconOnly
      ? `<div class="info-icon">${iconHtml}</div>`
      : `
      <div class="info-icon">${iconHtml}</div>
      <div>
        <p class="info-title">${card.title}</p>
        <p class="info-value">${value}</p>
      </div>
    `;

    host.appendChild(article);
  });
}

function renderContacts(links) {
  const host = byId("contactLinks");
  if (!host) return;
  host.innerHTML = "";

  links.forEach((link) => {
    const a = document.createElement("a");
    a.className = "contact-link";
    a.href = link.url;
    a.setAttribute("aria-label", link.label);
    a.target = "_blank";
    a.rel = "noreferrer";

    if (link.iconSrc) {
      const img = document.createElement("img");
      img.className = "contact-link-icon";
      img.src = link.iconSrc;
      img.alt = link.iconAlt || link.label;
      a.appendChild(img);
    }

    const span = document.createElement("span");
    span.textContent = link.label;
    a.appendChild(span);

    host.appendChild(a);
  });
}

function setupMenu() {
  const btn = byId("menuBtn");
  const nav = byId("nav");
  if (!btn || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  }

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

function hydrate() {
  setText("brandName", portfolioData.navBrand || portfolioData.brandName);
  setText("heroKicker", portfolioData.hero.kicker);
  setText("heroName", portfolioData.hero.name);
  setHtml("heroHeadline", portfolioData.hero.headline);
  setText("heroSummary", portfolioData.hero.summary);
  setText("contactText", portfolioData.contact.text);

  const heroAvatar = byId("heroAvatar");
  if (heroAvatar) {
    if (portfolioData.hero.profileImage) {
      heroAvatar.classList.add("has-photo");
      heroAvatar.setAttribute("role", "img");
      heroAvatar.setAttribute("aria-label", portfolioData.hero.name);
      heroAvatar.innerHTML = `<div class="hero-avatar-photo" style="background-image: url('${portfolioData.hero.profileImage}');"></div><div class="hero-avatar-shield" aria-hidden="true"></div>`;
      ["contextmenu", "dragstart", "selectstart"].forEach((eventName) => {
        heroAvatar.addEventListener(eventName, (event) => event.preventDefault());
      });
    } else {
      heroAvatar.textContent = portfolioData.hero.avatarText || portfolioData.brandName;
    }
  }

  const year = new Date().getFullYear();
  setText("footerLine", `${year} ${portfolioData.brandName}. All rights reserved.`);

  const resumeBannerBtn = byId("resumeBannerBtn");
  if (resumeBannerBtn) resumeBannerBtn.href = portfolioData.hero.resumeUrl;
  const heroResumeBtn = byId("heroResumeBtn");
  if (heroResumeBtn) heroResumeBtn.href = portfolioData.hero.resumeUrl;

  renderAbout();
  renderSkills(portfolioData.skillGroups);
  renderCertifications(portfolioData.certifications);
  renderEducation(portfolioData.education);
  renderWork(portfolioData.work);
  renderProjects(portfolioData.projects);
  renderContactInfo(portfolioData.contact.infoCards);
  renderContacts(portfolioData.contact.links);
}

hydrate();
setupMenu();

