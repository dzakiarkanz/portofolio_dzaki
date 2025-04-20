// Import data
import { projects } from './data.js';

const projectsContainer = document.getElementById('projectsContainer');
if (projectsContainer) {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn btn-primary">View Project</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

function renderHero(name, desc) {
    const heroTitle = document.querySelector('.hero-title .name');
    const heroDesc = document.querySelector('.hero-description');

    heroTitle.textContent = name;
    heroDesc.textContent = desc;
}

// Contoh penggunaan
renderHero("Dzaki Arkan Zaidan", "I'm a Web Developer and AI Enthusiast.");
