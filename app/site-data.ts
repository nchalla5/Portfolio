export const profile = {
  name: "Nithin Reddy Challa",
  title: "Software Engineer",
  location: "Seattle, Washington",
  relocation: "Open to relocation",
  phone: "602-552-3024",
  email: "challa.nithin.email@gmail.com",
  github: "https://github.com/nchalla5",
  linkedin: "https://www.linkedin.com/in/nithin-challa",
  hero:
    "I build reliable backend systems, scalable cloud infrastructure, and polished product experiences.",
  summary:
    "Go, Java, APIs, and distributed systems with a track record of reducing latency, improving reliability, and shipping production-ready platforms.",
  bio: "Software Engineer building reliable backend systems, cloud infrastructure, and polished products.",
};

export const impactStats = [
  { value: "97%", label: "lower task configuration latency" },
  { value: "99.5%", label: "database footprint reduction" },
  { value: "40%", label: "faster CI/CD pipeline runtime" },
  { value: "10k+", label: "events processed per minute" },
];

export const skills = [
  {
    title: "Languages",
    items: ["Go", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["gRPC", "Protobuf", "REST", "GraphQL", "Spring Boot", "Kafka"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind", "Redux", "Jest"],
  },
  {
    title: "Cloud & Data",
    items: [
      "AWS",
      "Terraform",
      "Helm",
      "Kubernetes",
      "PostgreSQL",
      "DynamoDB",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Sigma",
    location: "New York City, NY",
    period: "October 2025 - January 2026",
    points: [
      "Reduced task configuration propagation latency by 97% by redesigning a backend execution path from legacy Helm-based configuration management to a centralized MySQL-backed architecture with typed gRPC and Protobuf APIs.",
      "Cut database footprint by 99.5% by building a standalone Go garbage-collection service for high-volume task data, owning design, implementation, observability, containerization, and rollout.",
      "Turned a best-effort fire-and-forget call into an observable asynchronous workflow with Redis for temporary payload storage and Statsig for phased rollout, improving execution visibility and reducing undetected failures.",
      "Modernized core scheduling infrastructure by migrating backend workloads from Node.js and TypeScript to Go for cleaner service boundaries and safer schema evolution.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Auto BIM Route AI",
    location: "Tempe, AZ",
    period: "January 2025 - May 2025",
    points: [
      "Built backend services in Go and PostgreSQL to ingest and process social content with OpenAI-powered workflows for faster publishing.",
      "Designed APIs and backend logic for context-aware content suggestions that improved internal marketing automation.",
      "Reduced review time by 60% by supporting a pipeline with confidence scoring, structured content processing, GitHub Actions, and Docker.",
    ],
  },
  {
    role: "Platform Engineer Intern",
    company: "ResMed",
    location: "San Diego, CA",
    period: "May 2024 - December 2024",
    points: [
      "Reduced median CI/CD pipeline runtime by 40% by optimizing and consolidating GitHub Actions workflows, cutting pipeline invocations by 47%.",
      "Built reusable Terraform and Helm modules that provisioned AWS EKS clusters for development environments with consistent configurations.",
      "Standardized infrastructure deployment patterns to improve platform reliability, reduce manual setup, and speed up team onboarding.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Oracle",
    location: "Hyderabad, India",
    period: "July 2021 - July 2023",
    points: [
      "Revamped a Java-based utilities integration adapter to support multi-tenancy across enterprise applications through Oracle Integration Cloud.",
      "Strengthened backend security by implementing OAuth 2.0 in a Java integration service, replacing legacy auth and earning the FY23 Oracle SPOT Award.",
      "Reduced bug backlog by 60% by troubleshooting production issues, fixing defects, and improving test coverage and release stability.",
      "Built a real-time event ingestion pipeline processing 10,000+ events per minute using Kafka, GoldenGate, Redis, and Java-based backend components.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Oracle",
    location: "Hyderabad, India",
    period: "January 2021 - June 2023",
    points: [
      "Built a real-time smart meter data workflow with Oracle Integration Cloud, Oracle Visual Builder, and Apache Kafka for low-latency streaming analytics.",
      "Improved backend data processing for high-volume smart meter readings, enabling faster downstream delivery.",
    ],
  },
];

export const projects = [
  {
    name: "Book Mart",
    link: "https://github.com/nchalla5/BookMart",
    tag: "Full-stack commerce",
    description:
      "Full-stack commerce platform built with Go and React, featuring authentication, product listings, seller workflows, and an end-to-end checkout experience.",
    stack: ["Go", "React", "JWT", "DynamoDB", "S3", "REST APIs"],
  },
  {
    name: "Scrum Simulator",
    link: "https://github.com/nchalla5/Scrum-Simulator",
    tag: "Desktop product simulation",
    description:
      "Java desktop application that models agile workflows such as role-based access, user story management, sprint configuration, reporting, and feedback tracking.",
    stack: ["Java", "Swing", "MySQL", "JUnit 5", "Mockito", "Maven"],
  },
  {
    name: "Flight Status Predictor",
    link: "https://github.com/nchalla5/Flight-Status-Predictor",
    tag: "Machine learning",
    description:
      "Predictive modeling project for flight arrival status using historical airline data, feature engineering, and comparative model evaluation.",
    stack: ["Python", "Jupyter", "pandas", "scikit-learn", "XGBoost"],
  },
  {
    name: "TicTacToe",
    link: "https://github.com/nchalla5/TicTacToe",
    tag: "Frontend craftsmanship",
    description:
      "Interactive React and Vite game with move history, winner detection, reset flows, and a clean UX built to show frontend fundamentals.",
    stack: ["React", "Vite", "JavaScript", "CSS3"],
  },
];

export const education = [
  {
    degree: "Masters in Software Engineering",
    school: "Arizona State University",
    location: "Tempe, AZ",
  },
  {
    degree: "Bachelors in Computer Science and Engineering",
    school: "Osmania University, Vasavi College of Engineering",
    location: "Hyderabad, India",
  },
];

export const githubFacts = {
  repos: "24 public repos",
  recent: ["BookMart", "Scrum-Simulator", "Flight-Status-Predictor", "TicTacToe"],
  languages: ["Java", "JavaScript", "Python", "Go"],
};
