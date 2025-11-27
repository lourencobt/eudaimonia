import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import './Gallery.css';

const MOCK_PROJECTS = [
    {
        id: 1,
        title: "Eudaimonia Machine",
        description: "A digital workspace designed to facilitate deep work through a linear progression of 5 virtual rooms.",
        date: "Nov 2025",
        author: "Team Alpha",
        tags: ["Productivity", "React", "Design"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2,
        title: "Neural Interface",
        description: "Direct brain-computer interface for seamless data transfer and thought capture.",
        date: "Oct 2025",
        author: "Research Lab",
        tags: ["AI", "Hardware", "Experimental"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3,
        title: "Quantum Archive",
        description: "Distributed storage system utilizing quantum entanglement for instant retrieval.",
        date: "Sep 2025",
        author: "Infrastructure",
        tags: ["Backend", "Quantum", "Storage"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4,
        title: "Symbiotic City",
        description: "Urban planning initiative integrating biological systems with architectural structures.",
        date: "Aug 2025",
        author: "Design Team",
        tags: ["Architecture", "Sustainability"],
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000"
    }
];

export function Gallery() {
    return (
        <div className="page-container gallery-page">
            <header className="page-header">
                <div className="header-content">
                    <span className="page-subtitle">The Hall of Fame</span>
                    <h2>The Gallery</h2>
                    <p>A curated collection of our team's deepest work and shipped projects.</p>
                </div>
            </header>

            <div className="gallery-grid">
                {MOCK_PROJECTS.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
