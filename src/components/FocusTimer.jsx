import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import './FocusTimer.css';

export function FocusTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="focus-timer">
            <div className="timer-display">{formatTime(timeLeft)}</div>
            <div className="timer-controls">
                <button className="timer-btn" onClick={toggleTimer}>
                    {isActive ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button className="timer-btn secondary" onClick={resetTimer}>
                    <RefreshCw size={20} />
                </button>
            </div>
        </div>
    );
}
