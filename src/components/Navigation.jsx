import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, MessageSquare, BookOpen, Briefcase, Moon, ChevronsLeft, ChevronsRight } from 'lucide-react';
import './Navigation.css';

const STORAGE_KEY = 'eudaimonia_sidebar_collapsed';

export function Navigation() {
    const [collapsed, setCollapsed] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) === 'true';
    });

    const navItems = [
        { path: '/', label: 'Gallery', icon: LayoutGrid, desc: 'Deep Work Produced' },
        { path: '/salon', label: 'Salon', icon: MessageSquare, desc: 'Collaboration & Ideas' },
        { path: '/library', label: 'Library', icon: BookOpen, desc: 'Resources & Archives' },
        { path: '/office', label: 'Office', icon: Briefcase, desc: 'Shallow Work' },
        { path: '/chamber', label: 'Chamber', icon: Moon, desc: 'Deep Work Zone' },
    ];

    function handleToggle() {
        setCollapsed(prev => {
            const next = !prev;
            localStorage.setItem(STORAGE_KEY, String(next));
            return next;
        });
    }

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)');

        function handleMediaChange(e) {
            if (e.matches) {
                // Auto-collapse on small screens without overwriting user preference in localStorage
                setCollapsed(true);
            } else {
                // Restore the user's stored preference when returning to a wide viewport
                setCollapsed(localStorage.getItem(STORAGE_KEY) === 'true');
            }
        }

        handleMediaChange(mql);
        mql.addEventListener('change', handleMediaChange);
        return () => mql.removeEventListener('change', handleMediaChange);
    }, []);

    return (
        <nav className={`navigation ${collapsed ? 'collapsed' : ''}`}>
            <div className="nav-header">
                <h1 className="nav-title-full">Eudaimonia</h1>
                <span className="nav-title-monogram">E</span>
            </div>
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            data-tooltip={item.label}
                            title={item.label}
                        >
                            <item.icon className="nav-icon" size={22} />
                            <div className="nav-text">
                                <span className="nav-label">{item.label}</span>
                                <span className="nav-desc">{item.desc}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button className="nav-collapse-toggle" onClick={handleToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
                {collapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
            </button>
        </nav>
    );
}
