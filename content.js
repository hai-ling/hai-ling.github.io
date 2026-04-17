/* ============================================================
 * Site content — single source of truth.
 *
 * Edit this file to update copy, add an experience, swap a
 * project, or change links. app.js reads this object and
 * renders the page from it; index.html is just a shell.
 *
 * Schema notes:
 *   experience[]  — `variant: "small"` renders a compact card
 *                   without a toggle. Default cards have an
 *                   overview + expandable details block.
 *   research.papers[].authors[] — set `highlighted: true` on
 *                   any author to bold their name.
 *   research.papers[].venue[]   — list of inline parts; each
 *                   is { type: "text" | "link" | "separator" }.
 *   contact.links[].icon        — must match a key in ICONS
 *                   (defined in app.js).
 * ============================================================ */
window.SITE_CONTENT = {
  meta: {
    title: "Hai-Ling Rao — ML Engineer",
    description:
      "Hai-Ling Rao — ML Engineer building intelligent agents for production systems. Published researcher. MS Computer Science, Georgia Tech.",
    name: "Hai-Ling Rao",
    initials: "HR",
    photo: "photo.jpg",
    footerYear: 2025,
  },

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    headline:
      "Hi, I'm Hai-Ling — an ML Engineer who builds intelligent agents for production systems.",
    subtitle:
      "ML Engineer at Bell Canada · Published Researcher · MS Computer Science, Georgia Tech",
    ctas: [
      { label: "View my work", href: "#experience", style: "primary" },
      { label: "Read my research", href: "#research", style: "secondary" },
    ],
  },

  about: {
    paragraphs: [
      "I'm a machine learning engineer with four years of experience building agent systems — first with reinforcement learning, and more recently with large language models. Most of my work has focused on taking ML from prototype to production: designing systems that serve real users at scale, not just running experiments in notebooks.",
      "My background spans both research and industry. At Defence Research and Development Canada, I co-authored two published papers on the CyGIL framework, which automatically generates network simulators for training autonomous cyber agents. At Bell Canada, I've spent the last two and a half years working on Virtual Repair — an automated diagnostic tool that serves 4.5 million customers annually. I started on the RL-based version of the system and am now leading the transition to an LLM-based agent, working with RAG pipelines, prompt engineering, and LLM-as-a-judge evaluation through Google's Agent Development Kit.",
      "I completed my Master of Science in Computer Science with a Machine Learning specialization at Georgia Institute of Technology (3.9 GPA), and hold a Bachelor of Applied Science in Computer Engineering from Queen's University. I'm also a Google Cloud Certified Professional Machine Learning Engineer.",
    ],
  },

  experience: [
    {
      id: "bell",
      role: "Senior ML Engineer → ML Engineer",
      company: "Bell Canada",
      dates: "2023 – Present",
      oneliner:
        "Technical lead on Virtual Repair, Canada's largest telecom troubleshooting tool, supporting 4.5 million customers annually.",
      overview: [
        "Virtual Repair is Bell's automated diagnostic tool for residential internet issues. The system diagnoses problems, runs remote repairs, and resolves issues without requiring a technician visit.",
        "The core of the system is an agent that selects diagnostic and repair actions based on customer and device state. The original implementation uses a reinforcement learning model operating over 70 engineered features and 50 possible actions, including chained repair sequences. My work on this system has covered model integration, state engineering, API design, deployment infrastructure, and cloud migration.",
      ],
      details: {
        heading: "What I've built and led",
        bullets: [
          "Designed and implemented a canary release pipeline alongside the existing blue/green deployment strategy, reducing deployment failures that had been affecting over 1 million customers",
          "Led the end-to-end migration of the ML pipeline from on-premise infrastructure (Hadoop/PostgreSQL) to Google Cloud Platform, refactoring ETL pipelines to BigQuery and replacing legacy Apache NiFi workflows with FastAPI services",
          "Expanded system capabilities by integrating multiple hardware diagnostic services through new FastAPI microservices with Redis session management",
          "Led a cross-team initiative that reduced user-facing response latency by 75% (300ms) through a Kafka event-streaming architecture",
          "Developed a regression model for technician job duration prediction, performing data transformation, feature engineering, and addressing training-serving skew — achieving a 15% MAE reduction for provisioning models",
        ],
        currentWork: {
          heading: "Current work (Senior ML Engineer, 2025–Present)",
          body: "I'm now leading the next phase of Virtual Repair: transitioning the system from an RL-based agent to an LLM-based agent. This involves developing proof-of-concept RAG pipelines, prompt engineering workflows, and LLM-as-a-judge evaluation using Google's Agent Development Kit. I'm also architecting the deployment pipeline for live testing and coordinating with subject matter experts to build a human-in-the-loop feedback process.",
        },
      },
    },
    {
      id: "drdc",
      role: "ML Research Intern",
      company: "Defence Research and Development Canada",
      dates: "2021 – 2022",
      oneliner:
        "Co-authored two published papers on autonomous cyber agents during a 16-month research internship.",
      overview: [
        "I was the primary developer of CyGIL-S, the simulator component of the Cyber Gym for Intelligent Learning (CyGIL) framework. CyGIL addresses a core challenge in cybersecurity RL: training agents on real or emulated networks is high-fidelity but slow (7–20 days per policy), while manual simulators are faster but difficult to build and maintain.",
        "The CyGIL approach automatically generates a simulator (CyGIL-S) from data collected in an emulated environment (CyGIL-E). I designed and implemented the state transition engine — a system that learns transition probabilities from observation-action tuples and encodes them as a finite state machine. Agents trained in CyGIL-S in 5–26 minutes and transferred directly back to CyGIL-E with full decision proficiency.",
      ],
      details: {
        heading: "What I built",
        bullets: [
          "Designed the state transition engine for cross-training between emulated and simulated environments",
          "Built RESTful API integration between MITRE Caldera and OpenAI Gym for automated cyber attack script deployment",
          "Implemented parallel processing in the Python-based state transition engine, accelerating simulation by 10x",
          "Developed a Flask-based visualization system for real-time debugging of agent-environment interactions",
        ],
      },
    },
    {
      id: "cnl",
      variant: "small",
      role: "Software Developer Intern",
      company: "Canadian Nuclear Laboratories",
      dates: "2019",
      body: "Automated fire hazard analysis for 700+ buildings, including critical reactor facilities. Developed a pipeline using Python and VBA that reduced per-building analysis time from over one week to under five minutes.",
    },
  ],

  research: {
    intro:
      "During my time at Defence Research and Development Canada, I co-authored two papers on the CyGIL framework. Both focus on training reinforcement learning agents for autonomous cyber operations — specifically, bridging the gap between high-fidelity emulated environments and fast simulators.",
    papers: [
      {
        title:
          "Unified Emulation-Simulation Training Environment for Autonomous Cyber Agents",
        authors: [
          { name: "Li Li" },
          { name: "Jean-Pierre S. El Rami" },
          { name: "Adrian Taylor" },
          { name: "James Hailing Rao", highlighted: true },
          { name: "Thomas Kunz" },
        ],
        venue: [
          {
            type: "link",
            label: "arXiv:2304.01244",
            href: "https://arxiv.org/abs/2304.01244",
          },
          { type: "separator" },
          { type: "text", value: "2023" },
        ],
        abstract:
          "Presents the full CyGIL unified training system. An emulated environment (CyGIL-E) automatically generates a simulated environment (CyGIL-S) through representation learning. Agents trained in CyGIL-S in minutes and transferred directly to CyGIL-E with full decision proficiency.",
      },
      {
        title: "Enabling A Network AI Gym for Autonomous Cyber Agents",
        authors: [
          { name: "Li Li" },
          { name: "Jean-Pierre S. El Rami" },
          { name: "Adrian Taylor" },
          { name: "James Hailing Rao", highlighted: true },
          { name: "Thomas Kunz" },
        ],
        venue: [
          { type: "text", value: "Published at CSCI 2022" },
          { type: "separator" },
          {
            type: "link",
            label: "arXiv:2304.01366",
            href: "https://arxiv.org/abs/2304.01366",
          },
        ],
        abstract:
          "Conference publication presenting the CyGIL framework and preliminary experimental results demonstrating sim-to-real transfer for RL agents in cyber network operations.",
      },
    ],
    callout: {
      label: "In simpler terms:",
      body: "We built a system that observes how a real network behaves during cyber operations, automatically constructs a fast simulator from that data, and trains AI agents in the simulator. Training took minutes instead of weeks, and agents performed equally well when moved back to the real network.",
    },
  },

  skills: {
    categories: [
      {
        name: "Agent Systems & LLMs",
        tags: [
          "Google ADK",
          "RAG Pipelines",
          "Prompt Engineering",
          "LLM-as-a-Judge",
          "PyTorch",
          "Reward Engineering",
          "Action Masking",
          "POMDP",
          "Multi-Agent Systems",
        ],
      },
      {
        name: "Production ML & MLOps",
        tags: [
          "FastAPI",
          "Canary Deploys",
          "Blue/Green",
          "GCP Migration",
          "Model Monitoring",
          "Latency Optimization",
          "Training-Serving Skew",
        ],
      },
      {
        name: "Data & Infrastructure",
        tags: [
          "GCP",
          "BigQuery",
          "PostgreSQL",
          "Redis",
          "Kafka",
          "Apache NiFi",
          "Docker",
          "ETL Pipelines",
        ],
      },
      {
        name: "Languages & Frameworks",
        tags: [
          "Python",
          "Java",
          "SQL",
          "PyTorch",
          "scikit-learn",
          "HuggingFace",
          "FastAPI",
          "Flask",
          "LightGBM",
        ],
      },
    ],
    credentials: [
      "MS Computer Science (ML Specialization) — Georgia Institute of Technology, 3.9 GPA",
      "BASc Computer Engineering — Queen's University",
      "Google Cloud Certified Professional Machine Learning Engineer",
    ],
  },

  projects: [
    {
      title: "Chat-Berta — Dialogue Summarization",
      tags: ["Python", "HuggingFace", "PyTorch", "Flask"],
      description:
        "Fine-tuned RoBERTa on the SAMSum dataset for extractive dialogue summarization. Built an end-to-end pipeline with SpaCy sentence segmentation and custom loss functions, generating chat summaries within a 10-second latency requirement. Capstone project at Queen's University.",
    },
    {
      title: "Multi-Agent RL — Overcooked-AI",
      tags: ["Python", "PyTorch", "PPO"],
      description:
        "Implemented Proximal Policy Optimization to solve a cooperative multi-agent game requiring coordination and role specialization between agents. Achieved target performance (7+ soups per episode) across all five environment layouts, addressing challenges with reward hacking through shaped reward annealing and sparse-reward exploration.",
    },
  ],

  contact: {
    tagline:
      "Based in Toronto. Open to ML Engineering, LLM/AI Engineering, and Applied Research roles — feel free to reach out.",
    links: [
      {
        label: "hailing.rao@queensu.ca",
        href: "mailto:hailing.rao@queensu.ca",
        icon: "email",
        external: false,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/hai-ling-rao",
        icon: "linkedin",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/hai-ling",
        icon: "github",
        external: true,
      },
    ],
  },
};
