import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

export function ProjectCard({ title, description, date, author, tags, image }) {
    return (
        <div className="project-card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-overlay">
                    <button className="view-btn">
                        View Project <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
            <div className="card-content">
                <div className="card-meta">
                    <span className="card-date">{date}</span>
                    <span className="card-author">by {author}</span>
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                <div className="card-tags">
                    {tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
