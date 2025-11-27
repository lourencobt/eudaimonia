import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ResourceList } from '../components/ResourceList';
import './Library.css';

const MOCK_RESOURCES = [
    { id: 1, name: 'Q4 Strategy Deck', type: 'file', date: 'Oct 24, 2025', size: '4.2 MB' },
    { id: 2, name: 'Design System Assets', type: 'folder', date: 'Oct 20, 2025', size: '--' },
    { id: 3, name: 'Deep Work Research', type: 'folder', date: 'Sep 15, 2025', size: '--' },
    { id: 4, name: 'Competitor Analysis', type: 'link', date: 'Nov 01, 2025', size: '--' },
    { id: 5, name: 'Project Alpha Specs', type: 'file', date: 'Oct 12, 2025', size: '1.8 MB' },
    { id: 6, name: 'Team Onboarding Guide', type: 'file', date: 'Aug 30, 2025', size: '5.5 MB' },
];

export function Library() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredResources = MOCK_RESOURCES.filter(res =>
        res.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="page-container library-page">
            <header className="page-header">
                <div className="header-content">
                    <span className="page-subtitle">The Archive</span>
                    <h2>The Library</h2>
                    <p>The permanent record of all resources, knowledge, and archives.</p>
                </div>
            </header>

            <div className="library-controls">
                <div className="search-bar">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <ResourceList resources={filteredResources} />
        </div>
    );
}
