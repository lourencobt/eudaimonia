import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { FocusTimer } from '../components/FocusTimer';
import './Chamber.css';

export function Chamber() {
    return (
        <div className="page-container chamber-page">
            <Link to="/office" className="back-link">
                <ArrowLeft size={20} />
                <span>Leave Chamber</span>
            </Link>

            <div className="chamber-content">
                <div className="chamber-header">
                    <h2>Deep Work Chamber</h2>
                    <p>Total focus. No distractions.</p>
                </div>

                <FocusTimer />

                <div className="coworking-status">
                    <div className="status-label">
                        <Users size={16} />
                        <span>Silent Co-working (4)</span>
                    </div>
                    <div className="avatars">
                        <div className="avatar" title="Alice">A</div>
                        <div className="avatar" title="Bob">B</div>
                        <div className="avatar" title="Charlie">C</div>
                        <div className="avatar" title="You">Y</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
