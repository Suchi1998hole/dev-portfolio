// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Dynamic skill tag generation
const skills = [
    "SQL", "Python", "Java", "C++", "JavaScript", "React.js", "Next.js",
    "Power BI", "Tableau", "PySpark", "AWS", "Azure", "Docker", "Kubernetes",
    "Machine Learning", "Data Analysis", "API Development"
];

const skillsContainer = document.querySelector('#skills');
skills.forEach(skill => {
    const skillTag = document.createElement('span');
    skillTag.classList.add('skill-tag');
    skillTag.textContent = skill;
    skillsContainer.appendChild(skillTag);
});

// Project showcase
const projects = [
    {
        title: "F1 Race Prediction and Analysis",
        description: "Developed a fine-tuned predictive model to identify top three Formula 1 race finishers using Python, Pandas, and Scikit-learn.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQLAlchemy"]
    },
    {
        title: "Stock Market Prediction Using Deep Learning Models",
        description: "Designed a cutting-edge stock prediction algorithm leveraging LSTM networks and tailored preprocessing techniques.",
        technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "LSTM", "GRU"]
    }
];

const projectsContainer = document.querySelector('#projects');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
    `;
    projectsContainer.appendChild(projectCard);
});
