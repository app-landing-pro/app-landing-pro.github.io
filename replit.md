# Mobile App Landing Page

## Overview
A modern, responsive landing page for a mobile app built with Vite, React, TypeScript, and Shadcn UI. This is a frontend-only static site showcasing a mobile app with features section, hero area with CTA buttons, and footer.

## Project Structure
- **Frontend Framework**: Vite + React 18 + TypeScript
- **UI Library**: Shadcn UI (Radix UI components)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query v5)

## Key Technologies
- Vite 5.4.19 for fast build and dev server
- React 18.3.1 with TypeScript
- Shadcn UI components with Radix UI primitives
- Tailwind CSS with animations
- React Hook Form for form handling
- Lucide React for icons

## Development Setup
- **Dev Server**: Runs on port 5000 at `0.0.0.0`
- **Hot Module Replacement**: Enabled via Vite HMR
- **Package Manager**: npm

## Project Layout
```
/src
  /assets - Static assets (images)
  /components - Reusable UI components
    /ui - Shadcn UI components
    - Hero.tsx
    - Features.tsx
    - CTA.tsx
    - Footer.tsx
  /pages - Page components
    - Index.tsx
    - NotFound.tsx
  /hooks - Custom React hooks
  /lib - Utility functions
  - App.tsx - Main app component with routing
  - main.tsx - Entry point
```

## Recent Changes (Sept 30, 2025)
- Configured Vite dev server for Replit environment:
  - Changed host to 0.0.0.0
  - Changed port to 5000
  - Added HMR client port configuration
- Installed all npm dependencies
- Set up workflow to run `npm run dev`
- Configured deployment for autoscale with build and preview commands

## Running the Project
The workflow "Start application" runs `npm run dev` which starts the Vite development server on port 5000.

## Deployment
- **Target**: Autoscale (stateless frontend)
- **Build**: `npm run build`
- **Run**: `npm run preview`
