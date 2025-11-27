import React from 'react';
import { Video, Mic, Hash } from 'lucide-react';
import './ActiveDiscussions.css';

export function ActiveDiscussions() {
    return (
        <div className="active-discussions">
            <div className="section">
                <h4><Video size={16} /> Live Breakouts</h4>
                <ul className="discussion-list">
                    <li className="discussion-item live">
                        <span className="status-dot"></span>
                        <div className="discussion-info">
                            <span className="discussion-title">Design Review</span>
                            <span className="discussion-participants">Alice, Bob, +2</span>
                        </div>
                        <button className="join-btn">Join</button>
                    </li>
                    <li className="discussion-item">
                        <div className="discussion-info">
                            <span className="discussion-title">Coffee Break</span>
                            <span className="discussion-participants">Empty</span>
                        </div>
                        <button className="join-btn outline">Start</button>
                    </li>
                </ul>
            </div>

            <div className="section">
                <h4><Hash size={16} /> Trending Topics</h4>
                <ul className="topic-list">
                    <li>#deep-work-strategies</li>
                    <li>#office-logistics</li>
                    <li>#random</li>
                </ul>
            </div>
        </div>
    );
}
