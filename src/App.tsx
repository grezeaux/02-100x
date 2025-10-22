import React, { useState, useEffect } from 'react';
import { Activity, CompletedActivity } from './types';
import ActivitySlot from './components/ActivitySlot';
import Archive from './components/Archive';
import Celebration from './components/Celebration';
import './App.css';

function App() {
  const [activities, setActivities] = useState<(Activity | null)[]>([null, null, null]);
  const [completedActivities, setCompletedActivities] = useState<CompletedActivity[]>([]);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [celebration, setCelebration] = useState<{ isOpen: boolean; activityName: string }>({
    isOpen: false,
    activityName: ''
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedActivities = localStorage.getItem('100x-activities');
    const savedCompleted = localStorage.getItem('100x-completed');
    
    if (savedActivities) {
      try {
        const parsed = JSON.parse(savedActivities);
        // Convert completedAt strings back to Date objects
        const activitiesWithDates = parsed.map((activity: any) => 
          activity ? { ...activity, completedAt: activity.completedAt ? new Date(activity.completedAt) : undefined } : null
        );
        setActivities(activitiesWithDates);
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    }
    
    if (savedCompleted) {
      try {
        const parsed = JSON.parse(savedCompleted);
        const completedWithDates = parsed.map((activity: any) => ({
          ...activity,
          completedAt: new Date(activity.completedAt)
        }));
        setCompletedActivities(completedWithDates);
      } catch (error) {
        console.error('Error loading completed activities:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever activities or completed activities change
  useEffect(() => {
    localStorage.setItem('100x-activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('100x-completed', JSON.stringify(completedActivities));
  }, [completedActivities]);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const addActivity = (name: string) => {
    const emptySlotIndex = activities.findIndex(activity => activity === null);
    if (emptySlotIndex !== -1) {
      const newActivity: Activity = {
        id: generateId(),
        name,
        count: 0
      };
      
      const newActivities = [...activities];
      newActivities[emptySlotIndex] = newActivity;
      setActivities(newActivities);
    }
  };

  const updateActivityCount = (index: number, delta: number) => {
    const activity = activities[index];
    if (!activity) return;

    const newCount = Math.max(0, Math.min(100, activity.count + delta));
    
    if (newCount === 100 && activity.count < 100) {
      // Activity completed!
      const completedActivity: CompletedActivity = {
        id: activity.id,
        name: activity.name,
        completedAt: new Date()
      };
      
      setCompletedActivities(prev => [completedActivity, ...prev]);
      setCelebration({ isOpen: true, activityName: activity.name });
      
      // Reset the slot to empty
      const newActivities = [...activities];
      newActivities[index] = null;
      setActivities(newActivities);
    } else {
      // Update count
      const updatedActivity = { ...activity, count: newCount };
      const newActivities = [...activities];
      newActivities[index] = updatedActivity;
      setActivities(newActivities);
    }
  };

  const incrementActivity = (index: number) => {
    updateActivityCount(index, 1);
  };

  const decrementActivity = (index: number) => {
    updateActivityCount(index, -1);
  };

  return (
    <div className="app">
      <header>
        <h1>100x</h1>
      </header>
      
      <main>
        <div className="activities-container">
          {activities.map((activity, index) => (
            <ActivitySlot
              key={activity?.id || `empty-${index}`}
              activity={activity}
              onAddActivity={addActivity}
              onIncrement={() => incrementActivity(index)}
              onDecrement={() => decrementActivity(index)}
            />
          ))}
        </div>
        
        <div className="archive-section">
          <button 
            className="archive-btn" 
            onClick={() => setIsArchiveOpen(true)}
          >
            View Archive ({completedActivities.length})
          </button>
        </div>
      </main>
      
      <Archive
        completedActivities={completedActivities}
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
      
      <Celebration
        isOpen={celebration.isOpen}
        activityName={celebration.activityName}
        onClose={() => setCelebration({ isOpen: false, activityName: '' })}
      />
    </div>
  );
}

export default App;