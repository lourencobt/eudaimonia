import React from 'react';
import './KanbanBoard.css';

const COLUMNS = [
    {
        id: 'todo',
        title: 'To Do',
        tasks: [
            { id: 1, title: 'Review Q3 Budget', tag: 'Finance' },
            { id: 2, title: 'Email Client X', tag: 'Admin' },
        ]
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        tasks: [
            { id: 3, title: 'Draft Weekly Update', tag: 'Comms' },
        ]
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            { id: 4, title: 'Approve Timesheets', tag: 'HR' },
            { id: 5, title: 'Schedule Team Sync', tag: 'Admin' },
        ]
    }
];

export function KanbanBoard() {
    return (
        <div className="kanban-board">
            {COLUMNS.map(column => (
                <div key={column.id} className="kanban-column">
                    <div className="column-header">
                        <h4>{column.title}</h4>
                        <span className="task-count">{column.tasks.length}</span>
                    </div>
                    <div className="task-list">
                        {column.tasks.map(task => (
                            <div key={task.id} className="kanban-task">
                                <span className="task-tag">{task.tag}</span>
                                <p className="task-title">{task.title}</p>
                            </div>
                        ))}
                        <button className="add-task-btn">+ Add Task</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
