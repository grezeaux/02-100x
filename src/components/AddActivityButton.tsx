import React, { useState } from 'react';
import './AddActivityButton.css';

interface AddActivityButtonProps {
  onAddActivity: (name: string) => void;
}

const AddActivityButton: React.FC<AddActivityButtonProps> = ({ onAddActivity }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [activityName, setActivityName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activityName.trim()) {
      onAddActivity(activityName.trim());
      setActivityName('');
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setActivityName('');
    setIsAdding(false);
  };

  if (isAdding) {
    return (
      <div className="add-activity-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Enter activity name..."
            autoFocus
            maxLength={50}
            className="activity-input"
          />
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Add
            </button>
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <button 
      className="add-activity-btn" 
      onClick={() => setIsAdding(true)}
    >
      + Add Activity
    </button>
  );
};

export default AddActivityButton;

