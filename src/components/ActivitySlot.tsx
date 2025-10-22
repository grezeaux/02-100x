import React from 'react';
import { Activity } from '../types';
import Counter from './Counter';
import AddActivityButton from './AddActivityButton';
import './ActivitySlot.css';

interface ActivitySlotProps {
  activity: Activity | null;
  onAddActivity: (name: string) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ActivitySlot: React.FC<ActivitySlotProps> = ({ 
  activity, 
  onAddActivity, 
  onIncrement, 
  onDecrement 
}) => {
  if (!activity) {
    return (
      <div className="activity-slot empty">
        <AddActivityButton onAddActivity={onAddActivity} />
      </div>
    );
  }

  return (
    <div className="activity-slot">
      <div className="activity-content">
        <h3 className="activity-name">{activity.name}</h3>
        <Counter
          count={activity.count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};

export default ActivitySlot;

