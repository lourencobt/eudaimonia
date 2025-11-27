import React, { useState } from 'react';
import { Send, User } from 'lucide-react';
import './ChatInterface.css';

const INITIAL_MESSAGES = [
    { id: 1, user: 'Alice', text: 'Has anyone seen the latest designs for the neural interface?', time: '10:23 AM', avatar: 'A' },
    { id: 2, user: 'Bob', text: 'Yes, I dropped them in the Library under "Q3 Projects".', time: '10:25 AM', avatar: 'B' },
    { id: 3, user: 'Charlie', text: 'They look incredible. The haptic feedback loops are genius.', time: '10:28 AM', avatar: 'C' },
];

export function ChatInterface() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage = {
            id: Date.now(),
            user: 'You',
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            avatar: 'Y'
        };

        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div className="chat-interface">
            <div className="chat-header">
                <h3>#general-discussion</h3>
                <span className="online-count">12 online</span>
            </div>

            <div className="chat-messages">
                {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.user === 'You' ? 'message-own' : ''}`}>
                        <div className="message-avatar">{msg.avatar}</div>
                        <div className="message-content">
                            <div className="message-meta">
                                <span className="message-user">{msg.user}</span>
                                <span className="message-time">{msg.time}</span>
                            </div>
                            <p className="message-text">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form className="chat-input-area" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}
