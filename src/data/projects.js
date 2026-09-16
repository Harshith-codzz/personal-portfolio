export const projects = [
  {
    title: "OmniShield AI — Extended Detection & Response Platform",
    description: "A 4-tier XDR pipeline processing 1000+ security logs per second. Python chaos generator feeds a C++17 hiredis ingestion layer into Redis Streams; a FastAPI + uvloop backend scores threats with River ML online anomaly detection and MITRE ATT&CK rule mapping, generates response playbooks with Gemini, and streams to a React SOC dashboard over SSE. Detects brute force, C2 beaconing, data exfiltration and lateral movement. Dashboard holds 60fps under load via buffered SSE drains and react-window virtualization.",
    tech: ["Python", "C++17", "FastAPI", "Redis Streams", "River ML", "React", "Zustand", "React Flow", "Gemini API"],
    repoUrl: "https://github.com/Harshith-codzz/OminShield",
    liveUrl: null,
    featured: true
  },
  {
    title: "BridgeForge — AI Structural Engineering & Bridge Design System",
    description: "A 3-layer hybrid engine that recommends bridge frameworks, materials and support structures. A deterministic rule layer enforces AASHTO LRFD constraints; an ensemble of Random Forest, XGBoost and a PyTorch network predicts the optimal configuration; a Gemini 2.5 Flash layer explains the engineering trade-offs. Computes bending moment, shear, deflection, and more locally. Async FastAPI API over PostgreSQL with Docker.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "PyTorch", "XGBoost", "scikit-learn", "Gemini API", "React", "TypeScript", "Docker"],
    repoUrl: "https://github.com/Harshith-codzz/Bridge-Simulator",
    liveUrl: null,
    featured: true
  },
  {
    title: "AI Medical Image Enhancement & Pathology Detection",
    description: "Dual-modality Brain and Spine MRI platform. A PyTorch CNN classifies anatomy, then routes to separate enhancement engines — a BraTS-pretrained U-Net for brain, a tuned classical pipeline for spine. Attention U-Net segments focal defect regions and reports evaluation matrices.",
    tech: ["PyTorch", "U-Net", "FastAPI", "OpenCV", "React", "Firebase"],
    repoUrl: "https://github.com/Harshith-codzz/AI-Medical-Image-Enhancement",
    liveUrl: null,
    featured: false
  },
  {
    title: "AI Placement Predictor",
    description: "Institutional career-readiness platform for students and Training & Placement Officers. Provides a placement probability with SHAP explanations, skill-gap analysis, and a personalized upskilling roadmap. TPO side aggregates cohort readiness.",
    tech: ["JavaScript", "Firebase", "ML", "SHAP"],
    repoUrl: "https://github.com/Harshith-codzz/Placement-Predictor",
    liveUrl: null,
    featured: false
  },
  {
    title: "Digital Personal Assistant",
    description: "React + TypeScript assistant app built on Vite, deployed to Firebase Hosting.",
    tech: ["React", "TypeScript", "Vite", "Firebase"],
    repoUrl: "https://github.com/Harshith-codzz/Digital-Personal-Assistant",
    liveUrl: null,
    featured: false
  },
  {
    title: "Developer Portfolio",
    description: "Responsive React portfolio built as Task 1 of the Future Interns Full Stack Web Development internship.",
    tech: ["React", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/Harshith-codzz/portfolio",
    liveUrl: null,
    featured: false
  }
];
