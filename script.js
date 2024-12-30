document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
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

    // Skills generation
    const skills = [
        "SQL", "Python", "Java", "C++", "JavaScript",
        "React.js", "Next.js", "Power BI", "Tableau",
        "PySpark", "AWS", "Azure", "Docker", "Kubernetes",
        "Machine Learning", "Data Analysis", "API Development"
    ];

    const skillsContainer = document.querySelector('#skills-container');
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.classList.add('skill-tag');
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });

    // Project hover effects
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const content = item.querySelector('.project-content');
        
        item.addEventListener('mouseenter', () => {
            content.style.display = 'block';
        });
        
        item.addEventListener('mouseleave', () => {
            content.style.display = 'none';
        });
    });
});
