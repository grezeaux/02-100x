import React from 'react';
import { CompletedActivity } from '../types';

interface ArchiveProps {
  completedActivities: CompletedActivity[];
  isOpen: boolean;
  onClose: () => void;
}

const Archive: React.FC<ArchiveProps> = ({ completedActivities, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="archive-overlay" onClick={onClose}>
      <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="archive-header">
          <h2>Completed Activities</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="archive-content">
          {completedActivities.length === 0 ? (
            <p className="empty-archive">No completed activities yet!</p>
          ) : (
            <div className="completed-list">
              {completedActivities.map((activity) => (
                <div key={activity.id} className="completed-item">
                  <h3>{activity.name}</h3>
                  <p>Completed on {activity.completedAt.toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
