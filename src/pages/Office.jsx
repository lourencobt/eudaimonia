import React from 'react';
import { Mail, Calendar, Video } from 'lucide-react';
import { KanbanBoard } from '../components/KanbanBoard';
import './Office.css';

export function Office() {
    return (
        <div className="page-container office-page">
            <header className="page-header">
                <div className="header-content">
                    <span className="page-subtitle">The Admin Block</span>
                    <h2>The Office</h2>
                    <p>For shallow work, administration, and coordination.</p>
                </div>
            </header>

            <div className="office-layout">
                <div className="office-sidebar">
                    <div className="office-widget inbox-widget">
                        <h3><Mail size={16} /> Inbox (3)</h3>
                        <ul className="inbox-list">
                            <li>
                                <span className="email-subject">Q3 Report Review</span>
                                <span className="email-from">Sarah J.</span>
                            </li>
                            <li>
                                <span className="email-subject">Team Lunch?</span>
                                <span className="email-from">Mike T.</span>
                            </li>
                            <li>
                                <span className="email-subject">Server Maintenance</span>
                                <span className="email-from">DevOps</span>
                            </li>
                        </ul>
                    </div>

                    <div className="office-widget calendar-widget">
                        <h3><Calendar size={16} /> Schedule</h3>
                        <ul className="schedule-list">
                            <li>
                                <span className="event-time">11:00 AM</span>
                                <span className="event-title">Design Sync</span>
                            </li>
                            <li>
                                <span className="event-time">2:00 PM</span>
                                <span className="event-title">Client Call</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="office-main">
                    <KanbanBoard />
                </div>
            </div>
        </div>
    );
}
