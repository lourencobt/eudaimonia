import React from 'react';
import { ChatInterface } from '../components/ChatInterface';
import { ActiveDiscussions } from '../components/ActiveDiscussions';
import './Salon.css';

export function Salon() {
    return (
        <div className="page-container salon-page">
            <header className="page-header">
                <div className="header-content">
                    <span className="page-subtitle">The Watercooler</span>
                    <h2>The Salon</h2>
                    <p>A space for debate, exploration, and collaboration.</p>
                </div>
            </header>

            <div className="salon-layout">
                <div className="salon-main">
                    <ChatInterface />
                </div>
                <div className="salon-sidebar">
                    <ActiveDiscussions />
                </div>
            </div>
        </div>
    );
}
