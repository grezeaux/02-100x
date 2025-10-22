export interface Activity {
  id: string;
  name: string;
  count: number;
  completedAt?: Date;
}

export interface CompletedActivity {
  id: string;
  name: string;
  completedAt: Date;
}

export type ActivitySlot = Activity | null;

