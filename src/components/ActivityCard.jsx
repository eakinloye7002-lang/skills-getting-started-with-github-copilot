import React from 'react';
import './ActivityCard.css'; // Assuming you have some CSS for styling

export function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {/* ...existing code... */}
      
      {activity.participants && activity.participants.length > 0 && (
        <div className="participants-section">
          <h3 className="participants-title">Participants ({activity.participants.length})</h3>
          <ul className="participants-list">
            {activity.participants.map((participant, index) => (
              <li key={index} className="participant-item">
                {participant}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* ...existing code... */}
    </div>
  );
}