import React from 'react';
import { FileText, Link as LinkIcon, Folder, Download } from 'lucide-react';
import './ResourceList.css';

export function ResourceList({ resources }) {
    const getIcon = (type) => {
        switch (type) {
            case 'folder': return <Folder size={20} className="resource-icon folder" />;
            case 'link': return <LinkIcon size={20} className="resource-icon link" />;
            default: return <FileText size={20} className="resource-icon file" />;
        }
    };

    return (
        <div className="resource-list">
            <div className="resource-header">
                <span>Name</span>
                <span>Date Modified</span>
                <span>Size</span>
                <span></span>
            </div>
            {resources.map(resource => (
                <div key={resource.id} className="resource-item">
                    <div className="resource-name">
                        {getIcon(resource.type)}
                        <span>{resource.name}</span>
                    </div>
                    <span className="resource-date">{resource.date}</span>
                    <span className="resource-size">{resource.size}</span>
                    <button className="resource-action">
                        <Download size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
}
