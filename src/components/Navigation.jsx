import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, MessageSquare, BookOpen, Briefcase, Moon } from 'lucide-react';
import './Navigation.css';

export function Navigation() {
    const navItems = [
        { path: '/', label: 'Gallery', icon: LayoutGrid, desc: 'Deep Work Produced' },
        { path: '/salon', label: 'Salon', icon: MessageSquare, desc: 'Collaboration & Ideas' },
        { path: '/library', label: 'Library', icon: BookOpen, desc: 'Resources & Archives' },
        { path: '/office', label: 'Office', icon: Briefcase, desc: 'Shallow Work' },
        { path: '/chamber', label: 'Chamber', icon: Moon, desc: 'Deep Work Zone' },
    ];

    return (
        <nav className="navigation">
            <div className="nav-header">
                <h1>Eudaimonia</h1>
            </div>
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            <item.icon className="nav-icon" size={20} />
                            <div className="nav-text">
                                <span className="nav-label">{item.label}</span>
                                <span className="nav-desc">{item.desc}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
