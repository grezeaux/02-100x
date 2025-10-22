# Hundred Habits

A simple, beautiful habit tracking app that helps you build routines by completing activities 100 times.

## Features

- **Track up to 3 activities** at a time
- **Simple counter interface** with increment/decrement buttons
- **Progress visualization** with animated progress bars
- **Celebration animation** when reaching 100 completions
- **Automatic reset** - slots become available again after completion
- **Archive view** to see all completed activities
- **Local storage** - your data persists between sessions
- **Mobile responsive** design optimized for touch interactions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

1. **Add Activities**: Click "Add Activity" in any empty slot and enter a name
2. **Track Progress**: Use the + and - buttons to increment/decrement your count
3. **Complete Habits**: When you reach 100, enjoy the celebration animation!
4. **View Archive**: Click "View Archive" to see all your completed activities
5. **Start New Habits**: Empty slots become available again after completion

## Technical Details

- Built with **React 18** and **TypeScript**
- **CSS Grid** and **Flexbox** for responsive layouts
- **CSS Animations** for smooth interactions and celebrations
- **Local Storage** for data persistence
- **Mobile-first** responsive design

## Project Structure

```
src/
├── components/
│   ├── ActivitySlot.tsx      # Main activity display component
│   ├── Counter.tsx           # Counter controls and progress bar
│   ├── AddActivityButton.tsx # Activity creation interface
│   ├── Archive.tsx           # Completed activities modal
│   └── Celebration.tsx       # Completion celebration animation
├── types.ts                  # TypeScript interfaces
├── App.tsx                   # Main application component
└── App.css                   # Global styles
```

## Design Principles

- **Simplicity**: Clean, minimal interface focused on core functionality
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized animations and efficient state management
- **Mobile-first**: Touch-friendly buttons and responsive layouts

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use this project for personal or commercial purposes.