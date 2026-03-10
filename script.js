const portfolioData = {
  navBrand: "N",
  brandName: "Niharika Maruvanahalli Suresh",
  hero: {
    kicker: "Backend engineering and full-stack product execution",
    name: "Niharika Maruvanahalli Suresh",
    avatarText: "NS",
    profileImage: "assets/profile.jpeg",
    headline:
      "Engineering reliable platforms that <span class=\"accent\">simplify complex workflows</span>",
    summary:
      "I build backend services and full-stack products that turn ambiguous requirements into scalable, production-ready software.",
    resumeUrl: "https://drive.google.com/file/d/1OCyG72Tsq8snDrwoAtCrNQbpGA_6E1uE/view?usp=sharing"
  },
  about: {
    lead: "I build dependable software systems that simplify complex operations and scale with business needs.",
    collaborationTitle: "I thrive in collaborative environments where communication, ownership, and execution matter."
  },
  featuredSkills: ["Java", "Spring Boot", "Python", "Go", "SQL", "React", "JavaScript"],
  certifications: [
    {
      label: "AWS Certified Cloud Practitioner",
      url: "https://drive.google.com/file/d/1_Qbzvyx5YG4P0BUPLQR0iNpxoo5yHZAe/view?usp=sharing"
    },
    {
      label: "Google Associate Cloud Engineer",
      url: "https://drive.google.com/file/d/1IJ42FC_p7qQ0buH7E6GYKsFoTmYVe3Yh/view?usp=sharing"
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "North Carolina State University",
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
      location: "Mysuru, India",
      period: "Aug 2017 - May 2021",
      highlights: [
        "Coursework: Data Structures, Web Development, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning",
        "Built a strong systems and software engineering foundation",
        "Developed early project experience across core CS subjects"
      ]
    }
  ],
  work: [
    {
      role: "Application Development Analyst",
      company: "Accenture",
      client: "Clients: TELUS WNP, Canada and Functional Engineering Compliance-as-Code Platform",
      period: "Nov 2021 - Jun 2024",
      location: "Bengaluru, India",
      type: "Full-time",
      detail:
        "Delivered backend, distributed systems, and full-stack platform engineering across telecom and compliance domains using Java, Spring Boot, Kafka, Python, Go, React, SQL, and AWS. Built scalable microservices, workflow APIs, event-driven pipelines, and internal platform features while improving latency, database performance, reliability, and cloud-native delivery through CI/CD and containerized deployments.",
      skills: ["Java", "Spring Boot", "Apache Kafka", "Python", "Go", "React", "AWS", "Docker", "Kubernetes", "PostgreSQL", "SQL"]
    },
    {
      role: "Web Development Intern",
      company: "Adishiva Technologies",
      period: "Mar 2021 - Apr 2021",
      location: "Bengaluru, India",
      type: "Internship",
      detail:
        "Built responsive frontend components and integrated them with backend REST APIs in an Agile delivery environment, strengthening my full-stack collaboration skills.",
      skills: ["HTML", "CSS", "JavaScript", "REST APIs", "Agile"]
    },
    {
      role: "Machine Learning Intern",
      company: "Verzeo",
      period: "Jul 2019 - Sep 2019",
      location: "Remote",
      type: "Internship",
      detail:
        "Applied machine learning and statistics to fraud detection workflows by building and tuning classical models on 1M+ transactions and experimenting with deep learning approaches.",
      skills: ["Python", "Machine Learning", "SVM", "Random Forest", "Gradient Boosting", "Deep Learning"]
    }
  ],
  projects: [
    {
      title: "Efficient Redirect-on-Write Snapshots for Multi-Node Storage Systems",
      description:
        "Designed a distributed snapshot framework for multi-node storage systems using Redirect-on-Write (ROW) to enable near-instant snapshot creation. Implemented coordination protocols including Pause-and-Snap, Two-Phase, and Speculative Snapshot to capture consistent system states, and evaluated simulated workloads for snapshot latency, throughput, and distributed state consistency.",
      tags: ["Distributed Systems", "Storage Systems", "Snapshots", "ROW", "Performance Evaluation"],
      theme: "blue"
    },
    {
      title: "High Availability WordPress Deployment",
      description:
        "Deployed a containerized WordPress application on AWS using Docker and Kubernetes with a fault-tolerant architecture built on EC2, Application Load Balancer, RDS MySQL, and S3. Implemented auto-scaling, load balancing, and CloudWatch-based monitoring for resilient cloud-native deployment.",
      tags: ["Docker", "Kubernetes", "AWS", "EC2", "RDS", "S3", "CloudWatch"],
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
    text: "Interested in backend systems, full-stack roles, or building something meaningful together? Reach out directly and let us start the conversation.",
    infoCards: [
      {
        title: "Email",
        value: "Email",
        url: "mailto:niharika.suresh26@gmail.com",
        iconSrc: "assets/icon-email.svg",
        iconAlt: "Email",
        iconOnly: true
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
}

function renderFeaturedSkills(items) {
  const host = byId("aboutStackCloud");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "about-stack-chip is-accent";
    chip.textContent = item;
    host.appendChild(chip);
  });
}

function renderCertifications(items) {
  const host = byId("certificationList");
  if (!host) return;
  host.innerHTML = "";

  items.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "cert-link";
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
          <img class="education-badge-icon" src="assets/icon-education.svg" alt="Education" />
        </div>
        <p class="education-period">${entry.period}</p>
      </div>
      <h3>${entry.degree}</h3>
      <div class="education-facts">
        <p class="education-fact">${entry.institution}${entry.location ? `, ${entry.location}` : ""}</p>
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
    article.className = "experience-box";
    const skills = (entry.skills || [])
      .map((skill) => `<span class="experience-pill">${skill}</span>`)
      .join("");

    article.innerHTML = `
      <div class="experience-top">
        <div class="education-badge">
          <img class="education-badge-icon" src="assets/icon-briefcase.svg" alt="Experience" />
        </div>
        <p class="education-period">${entry.period}</p>
      </div>
      <div class="experience-card">
        <h3>${entry.role}</h3>
        <div class="education-facts">
          <p class="education-fact"><strong>${entry.company}</strong>${entry.client ? `, ${entry.client}` : ""}</p>
          <p class="education-fact">${entry.location}</p>
          <p class="education-fact experience-type-line">${entry.type}</p>
        </div>
        <div class="education-divider"></div>
        <p class="experience-detail">${entry.detail}</p>
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
          `<a class="project-link" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`
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
        <p class="project-description">${project.description}</p>
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

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
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

  renderAbout();
  renderFeaturedSkills(portfolioData.featuredSkills);
  renderCertifications(portfolioData.certifications);
  renderEducation(portfolioData.education);
  renderWork(portfolioData.work);
  renderProjects(portfolioData.projects);
  renderContactInfo(portfolioData.contact.infoCards);
  renderContacts(portfolioData.contact.links);
}

hydrate();
setupMenu();

