# Hai-Ling Rao — Personal Website Content
> Full text content for each section of the website, listed in order of appearance.
---
## SECTION 1: Hero
**Headline:**
Hi, I'm Hai-Ling — an ML Engineer who builds intelligent agents for production systems.
**Subtitle:**
ML Engineer at Bell Canada · Published Researcher · MS Computer Science, Georgia Tech
**CTA links:**
- View my work ↓
- Read my research →
---
## SECTION 2: About
I'm a machine learning engineer with four years of experience building agent systems — first with reinforcement learning, and more recently with large language models. Most of my work has focused on taking ML from prototype to production: designing systems that serve real users at scale, not just running experiments in notebooks.
My background spans both research and industry. At Defence Research and Development Canada, I co-authored two published papers on the CyGIL framework, which automatically generates network simulators for training autonomous cyber agents. At Bell Canada, I've spent the last two and a half years working on Virtual Repair — an automated diagnostic tool that serves 4.5 million customers annually. I started on the RL-based version of the system and am now leading the transition to an LLM-based agent, working with RAG pipelines, prompt engineering, and LLM-as-a-judge evaluation through Google's Agent Development Kit.
I completed my Master of Science in Computer Science with a Machine Learning specialization at Georgia Institute of Technology (3.9 GPA), and hold a Bachelor of Applied Science in Computer Engineering from Queen's University. I'm also a Google Cloud Certified Professional Machine Learning Engineer.
---
## SECTION 3: Experience
### 3A. Senior ML Engineer → ML Engineer | Bell Canada | 2023 – Present
**One-liner:**
Technical lead on Virtual Repair, Canada's largest telecom troubleshooting tool, supporting 4.5 million customers annually.
**Overview:**
Virtual Repair is Bell's automated diagnostic tool for residential internet issues. The system diagnoses problems, runs remote repairs, and resolves issues without requiring a technician visit.
The core of the system is an agent that selects diagnostic and repair actions based on customer and device state. The original implementation uses a reinforcement learning model operating over 70 engineered features and 50 possible actions, including chained repair sequences. My work on this system has covered model integration, state engineering, API design, deployment infrastructure, and cloud migration.
**What I've built and led:**
- Designed and implemented a canary release pipeline alongside the existing blue/green deployment strategy, reducing deployment failures that had been affecting over 1 million customers
- Led the end-to-end migration of the ML pipeline from on-premise infrastructure (Hadoop/PostgreSQL) to Google Cloud Platform, refactoring ETL pipelines to BigQuery and replacing legacy Apache NiFi workflows with FastAPI services
- Expanded system capabilities by integrating multiple hardware diagnostic services through new FastAPI microservices with Redis session management
- Led a cross-team initiative that reduced user-facing response latency by 75% (300ms) through a Kafka event-streaming architecture
- Developed a regression model for technician job duration prediction, performing data transformation, feature engineering, and addressing training-serving skew — achieving a 15% MAE reduction for provisioning models
**Current work (Senior ML Engineer, 2025–Present):**
I'm now leading the next phase of Virtual Repair: transitioning the system from an RL-based agent to an LLM-based agent. This involves developing proof-of-concept RAG pipelines, prompt engineering workflows, and LLM-as-a-judge evaluation using Google's Agent Development Kit. I'm also architecting the deployment pipeline for live testing and coordinating with subject matter experts to build a human-in-the-loop feedback process.
---
### 3B. ML Research Intern | Defence Research and Development Canada | 2021 – 2022
**One-liner:**
Co-authored two published papers on autonomous cyber agents during a 16-month research internship.
**Overview:**
I was the primary developer of CyGIL-S, the simulator component of the Cyber Gym for Intelligent Learning (CyGIL) framework. CyGIL addresses a core challenge in cybersecurity RL: training agents on real or emulated networks is high-fidelity but slow (7–20 days per policy), while manual simulators are faster but difficult to build and maintain.
The CyGIL approach automatically generates a simulator (CyGIL-S) from data collected in an emulated environment (CyGIL-E). I designed and implemented the state transition engine — a system that learns transition probabilities from observation-action tuples and encodes them as a finite state machine. Agents trained in CyGIL-S in 5–26 minutes and transferred directly back to CyGIL-E with full decision proficiency.
**What I built:**
- Designed the state transition engine for cross-training between emulated and simulated environments
- Built RESTful API integration between MITRE Caldera and OpenAI Gym for automated cyber attack script deployment
- Implemented parallel processing in the Python-based state transition engine, accelerating simulation by 10x
- Developed a Flask-based visualization system for real-time debugging of agent-environment interactions
---
### 3C. Software Developer Intern | Canadian Nuclear Laboratories | 2019
Automated fire hazard analysis for 700+ buildings, including critical reactor facilities. Developed a pipeline using Python and VBA that reduced per-building analysis time from over one week to under five minutes.
---
## SECTION 4: Research & Publications
During my time at Defence Research and Development Canada, I co-authored two papers on the CyGIL framework. Both focus on training reinforcement learning agents for autonomous cyber operations — specifically, bridging the gap between high-fidelity emulated environments and fast simulators.
### Paper 1:
**Unified Emulation-Simulation Training Environment for Autonomous Cyber Agents**
Li Li, Jean-Pierre S. El Rami, Adrian Taylor, **James Hailing Rao**, Thomas Kunz
arXiv:2304.01244 · 2023
Presents the full CyGIL unified training system. An emulated environment (CyGIL-E) automatically generates a simulated environment (CyGIL-S) through representation learning. Agents trained in CyGIL-S in minutes and transferred directly to CyGIL-E with full decision proficiency.
### Paper 2:
**Enabling A Network AI Gym for Autonomous Cyber Agents**
Li Li, Jean-Pierre S. El Rami, Adrian Taylor, **James Hailing Rao**, Thomas Kunz
Published at CSCI 2022 · arXiv:2304.01366
Conference publication presenting the CyGIL framework and preliminary experimental results demonstrating sim-to-real transfer for RL agents in cyber network operations.
**In simpler terms:** We built a system that observes how a real network behaves during cyber operations, automatically constructs a fast simulator from that data, and trains AI agents in the simulator. Training took minutes instead of weeks, and agents performed equally well when moved back to the real network.
---
## SECTION 5: Technical Profile
### Agent Systems & LLMs
LLM-based agents (Google Agent Development Kit, RAG pipelines, prompt engineering, LLM-as-a-judge), reinforcement learning agents (PyTorch, custom environments, reward engineering, action masking, POMDP), multi-agent systems
### Production ML & MLOps
Model serving (FastAPI), deployment strategies (canary, blue/green), cloud migration (on-prem to GCP), model monitoring, latency optimization, training-serving skew resolution
### Data & Infrastructure
Google Cloud Platform, BigQuery, PostgreSQL, Redis, Kafka, Apache NiFi, Docker, ETL pipeline design, event-driven architecture
### Languages & Frameworks
Python, Java, SQL, PyTorch, scikit-learn, HuggingFace, FastAPI, Flask, LightGBM
### Credentials
- MS Computer Science (ML Specialization) — Georgia Institute of Technology, 3.9 GPA
- BASc Computer Engineering — Queen's University
- Google Cloud Certified Professional Machine Learning Engineer
---
## SECTION 6: Selected Projects
### Chat-Berta — Dialogue Summarization
Python · HuggingFace · PyTorch · Flask
Fine-tuned RoBERTa on the SAMSum dataset for extractive dialogue summarization. Built an end-to-end pipeline with SpaCy sentence segmentation and custom loss functions, generating chat summaries within a 10-second latency requirement. Capstone project at Queen's University.
### Multi-Agent RL — Overcooked-AI
Python · PyTorch · PPO
Implemented Proximal Policy Optimization to solve a cooperative multi-agent game requiring coordination and role specialization between agents. Achieved target performance (7+ soups per episode) across all five environment layouts, addressing challenges with reward hacking through shaped reward annealing and sparse-reward exploration.
---
## SECTION 7: Contact / Footer
**Tagline:**
Based in Toronto. Open to ML Engineering, LLM/AI Engineering, and Applied Research roles — feel free to reach out.
**Links:**
- Email: hailing.rao@queensu.ca
- LinkedIn: linkedin.com/in/hai-ling-rao
- GitHub: [link]
