import React from 'react';

interface CelebrationProps {
  isOpen: boolean;
  activityName: string;
  onClose: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ isOpen, activityName, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="celebration-overlay" onClick={onClose}>
      <div className="celebration-modal" onClick={(e) => e.stopPropagation()}>
        <div className="celebration-content">
          <h2>🎉 Congratulations! 🎉</h2>
          <p>You've completed "{activityName}" 100 times!</p>
          <p>Amazing work building this habit!</p>
          <button className="celebration-btn" onClick={onClose}>
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
