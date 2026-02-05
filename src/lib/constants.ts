// Personal Information
export const PERSONAL_INFO = {
    name: "Naman Sharma",
    title: "System Engineer | Software Developer | AI/ML Engineer",
    bio: "System Engineer at IRDETO with expertise in full-stack development, AI/ML, and building scalable microservices. Specialized in optimizing ETL pipelines, developing intelligent systems, and creating impactful solutions that solve real-world problems.",
    email: "namannsharma4@gmail.com",
    phone: "9983001339",
    location: "Noida",
    university: "Thapar Institute of Engineering & Technology, Patiala",
    degree: "B.E. Electrical & Electronics Engineering",
    graduation: "2024",
    github: "https://github.com/namansharma230",
    linkedin: "https://www.linkedin.com/in/naman-sharma-85a485220/",
};

// Stats
export const STATS = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "25+" },
    { label: "Research Papers", value: "2" },
];

// Skills organized by category
export const SKILLS = {
    "Programming & Libraries": [
        { name: "Python", icon: "SiPython", proficiency: 95 },
        { name: "C", icon: "SiC", proficiency: 80 },
        { name: "JavaScript", icon: "SiJavascript", proficiency: 90 },
        { name: "React", icon: "SiReact", proficiency: 90 },
        { name: "HTML5", icon: "SiHtml5", proficiency: 95 },
        { name: "CSS3", icon: "SiCss3", proficiency: 90 },
    ],
    "Backend & Databases": [
        { name: "FastAPI", icon: "SiFastapi", proficiency: 95 },
        { name: "PostgreSQL", icon: "SiPostgresql", proficiency: 90 },
        { name: "SQLite", icon: "SiSqlite", proficiency: 85 },
        { name: "InfluxDB", icon: "SiInfluxdb", proficiency: 80 },
        { name: "MongoDB", icon: "SiMongodb", proficiency: 85 },
    ],
    "AI/ML": [
        { name: "TensorFlow", icon: "SiTensorflow", proficiency: 90 },
        { name: "PyTorch", icon: "SiPytorch", proficiency: 90 },
        { name: "OpenCV", icon: "SiOpencv", proficiency: 85 },
        { name: "NumPy", icon: "SiNumpy", proficiency: 95 },
        { name: "Pandas", icon: "SiPandas", proficiency: 95 },
    ],
    "DevOps & Tools": [
        { name: "Git", icon: "SiGit", proficiency: 95 },
        { name: "Jenkins", icon: "SiJenkins", proficiency: 85 },
        { name: "AWS Lambda", icon: "SiAwslambda", proficiency: 80 },
        { name: "Grafana", icon: "SiGrafana", proficiency: 75 },
        { name: "Postman", icon: "SiPostman", proficiency: 90 },
        { name: "Selenium", icon: "SiSelenium", proficiency: 85 },
        { name: "Linux", icon: "SiLinux", proficiency: 90 },
    ],
};

// Projects
export const PROJECTS = [
    {
        id: 1,
        title: "OTT Churn Prediction Dashboard",
        description: "End-to-end ML solution to predict subscriber churn for OTT platforms achieving 0.85 AUC. Built interactive Streamlit dashboard with data upload, Plotly visualizations, and actionable recommendations, reducing potential revenue loss by ~$975/month.",
        category: "Machine Learning",
        tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"],
        image: "/images/projects/ott-churn.png",
        github: "https://github.com/namansharma230",
        demo: "https://lnkd.in/gmVduVsi",
        featured: true,
    },
    {
        id: 2,
        title: "Unfair Means Incident Management System",
        description: "Full-stack system for BITS Pilani to automate exam misconduct reporting across college centers. Implemented sentiment analysis (DistilBERT) for priority detection & OCR (Tesseract + OpenCV) for handwritten extraction, improving reporting efficiency by 40%.",
        category: "Full-Stack",
        tech: ["FastAPI", "PostgreSQL", "React", "DistilBERT", "Tesseract", "OpenCV"],
        image: "/images/projects/umis.png",
        github: "https://github.com/namansharma230",
        demo: "#",
        featured: true,
    },
    {
        id: 3,
        title: "ASL Hand Sign Recognition",
        description: "ASL recognition system using CNN, LSTM & YOLOv8, integrated with Raspberry Pi-4. System currently under research paper review at Thapar University.",
        category: "Machine Learning",
        tech: ["Python", "CNN", "LSTM", "YOLOv8", "Raspberry Pi", "OpenCV"],
        image: "/images/projects/asl-recognition.png",
        github: "https://github.com/namansharma230",
        demo: "#",
        featured: true,
    },
    {
        id: 4,
        title: "Deep CNN Biometric Recognition",
        description: "Designed & implemented Deep CNN for biometric recognition at CEERI Pilani achieving 80% accuracy in real-world testing. Conducted pattern recognition experiments improving prediction accuracy by 15% over baseline models.",
        category: "Machine Learning",
        tech: ["TensorFlow", "PyTorch", "Python", "OpenCV"],
        image: "/images/projects/biometric.png",
        github: "https://github.com/namansharma230",
        demo: "#",
        featured: false,
    },
    {
        id: 5,
        title: "ETL Pipeline Optimization",
        description: "Optimized ETL pipelines at IRDETO reducing data delivery latency by 30%. Built observability stack using AWS Lambda, Selenium, and Postman, improving incident detection & response time by 20%.",
        category: "Backend",
        tech: ["Python", "AWS Lambda", "Selenium", "Postman", "ETL"],
        image: "/images/projects/etl-pipeline.png",
        github: "https://github.com/namansharma230",
        demo: "#",
        featured: false,
    },
    {
        id: 6,
        title: "Product Lifecycle Management System",
        description: "Developed PLM and Energy Monitoring apps using FastAPI & SQL at Integrated Active Monitoring, reducing query times by 30%. Automated S3 data pipelines, improving test/verification speed by 25%.",
        category: "Full-Stack",
        tech: ["FastAPI", "SQL", "AWS S3", "Python"],
        image: "/images/projects/plm.png",
        github: "https://github.com/namansharma230",
        demo: "#",
        featured: false,
    },
];

// Experience
export const EXPERIENCE = [
    {
        id: 1,
        company: "IRDETO",
        role: "System Engineer",
        duration: "Mar 2024 - Present",
        location: "Noida",
        description: [
            "Optimised ETL pipelines as a Software Developer reducing data delivery latency by 30%, improving FullStack performance",
            "Designed and deployed microservices (FastAPI, REST), reducing service coupling by 40% and enhancing reliability",
            "Built observability stack (AWS Lambda, Selenium, Postman), improving incident detection & response time by 20%",
            "Integrated CI/CD (Jenkins + Git), accelerating deployments with zero rollback issues",
            "Collaborated with international clients during an overseas business trip, refining requirements and adapting software solutions",
        ],
        tech: ["FastAPI", "REST API", "AWS Lambda", "Jenkins", "Git", "Selenium", "Postman"],
        logo: "/images/companies/irdeto.png",
    },
    {
        id: 2,
        company: "Integrated Active Monitoring – SmartIAM",
        role: "Software Development Engineer",
        duration: "Jan 2024 - Mar 2024",
        location: "Pune",
        description: [
            "Developed Product Lifecycle Management (PLM) and Energy Monitoring apps using FastAPI & SQL, reducing query times by 30%",
            "Automated S3 data pipelines, improving test/verification speed by 25%",
            "Enhanced backend performance by implementing query optimizations and API redesign",
        ],
        tech: ["FastAPI", "SQL", "AWS S3", "Python"],
        logo: "/images/companies/smartiam.png",
    },
    {
        id: 3,
        company: "Fuundser (Startup)",
        role: "Lead Software and AI Development Engineer",
        duration: "Jul 2023 - Dec 2023",
        location: "Delhi",
        description: [
            "Designed AI/ML modules, increasing operational efficiency by 70% and boosting user engagement",
            "Built a backend analytics dashboard for real-time data visualization, reducing data retrieval time by 60%",
            "Led code reviews & pre-deployment testing, cutting release cycles by 50%",
        ],
        tech: ["Python", "AI/ML", "FastAPI", "Analytics Dashboard"],
        logo: "/images/companies/fuundser.png",
    },
    {
        id: 4,
        company: "CEERI",
        role: "ML Intern",
        duration: "Jun 2022 - Sep 2022",
        location: "Pilani",
        description: [
            "Designed & implemented a Deep CNN for biometric recognition (TensorFlow, PyTorch), achieving 80% accuracy in real-world testing",
            "Conducted pattern recognition experiments improving prediction accuracy by 15% over baseline models",
        ],
        tech: ["TensorFlow", "PyTorch", "Python", "Deep Learning", "CNN"],
        logo: "/images/companies/ceeri.png",
    },
];

// Achievements
export const ACHIEVEMENTS = [
    {
        id: 1,
        title: "Research Publications",
        description: "Published 2 research papers on Cyberloafing in Higher Education",
        icon: "FaBook",
        year: "2023",
    },
    {
        id: 2,
        title: "CNN for Image Classification",
        description: "Convolutional Neural Networks for Image Classification (Udemy)",
        icon: "FaCertificate",
        year: "2023",
    },
    {
        id: 3,
        title: "Modern Computer Vision",
        description: "PyTorch, TensorFlow2, Keras & OpenCV4 (Udemy)",
        icon: "FaCertificate",
        year: "2023",
    },
    {
        id: 4,
        title: "International Collaboration",
        description: "Overseas business trip with international clients at IRDETO",
        icon: "FaGlobe",
        year: "2024",
    },
];

// Navigation Links
export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

// Social Links
export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/namansharma230", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/naman-sharma-85a485220/", icon: "FaLinkedin" },
    { name: "Email", url: "mailto:namannsharma4@gmail.com", icon: "FaEnvelope" },
];
