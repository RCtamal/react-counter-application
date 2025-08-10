# Assignment-1 Counter Application

A React counter application that demonstrates both class and functional component implementations with a beautiful UI.

## Assignment Task

This project was built based on the following requirements:

- Create an attractive UI
- The counter cannot be less than 0
- Provide proper headings for Class and Function Components
- Show both components in a row
- Display main heading "Assignment-2 Counter Application"

## Features

- **Beautiful UI**: Modern gradients with smooth animations
- **Range Control**: Counter stays between 0-100
- **Quick Actions**: ±1, ±10, and Reset buttons
- **Class Component**: Traditional React class syntax implementation
- **Function Component**: Modern React hooks approach
- **Smart Buttons**: Auto-disable at limits

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- Bootstrap

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation Details

The project contains two counter implementations:

1. **Class Component Counter**: Uses traditional React class syntax with state management
2. **Function Component Counter**: Uses modern React hooks (useState) for state management

Both counters feature the same functionality:
- Increment/decrement by 1 or 10
- Reset button to set counter back to 0
- Buttons disable automatically when reaching limits (0-100)

## Project Structure

- `src/pages/component/ClassCounter.tsx`: Class-based counter implementation
- `src/pages/component/FunctionCounter.tsx`: Function-based counter implementation
- `src/pages/index.tsx`: Main page that displays both counters

## Author

Tamal Roy Chowdhury
