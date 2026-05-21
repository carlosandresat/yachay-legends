# Yachay Legends - Project Context for Agents

## Project Overview
**Yachay Legends** is a web application designed to track and display esports tournament data (likely inspired by League of Legends or Teamfight Tactics tournaments). It features brackets, group stages, standings, and match histories.

## Tech Stack
- **Framework:** Next.js (App Router), React 19
- **Styling:** Tailwind CSS v4
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) utilizing Radix UI primitives.
- **Icons:** Lucide React
- **Theming:** `next-themes` (Dark/Light mode supported)
- **Language:** TypeScript
- **Charts:** Recharts

## Architecture & Folder Structure
- `app/`: Next.js App Router directory. Contains `layout.tsx`, `page.tsx`, and `globals.css`.
- `components/ui/`: Contains reusable shadcn/ui components.
- `components/tournament/`: Domain-specific UI components used to render tournament views.
  - `tournament-view.tsx`: Main view for a tournament.
  - `group-standings-table.tsx`: Displays standings for a specific group.
  - `team-row.tsx`: Renders individual team information.
  - `tournament-format-info.tsx`: Explains the format of the tournament.
  - `charts/`: Contains chart components for visualizing stats.
- `lib/`: Utility functions and static data.
  - `tournament-db.ts`: The core data layer. Currently uses static mock data to simulate a database. Contains types like `Team`, `Player`, `MatchPlacement`, `Match`, and `Group`. It also includes functions like `getTeamPoints` and `getTeamStats`.
  - `utils.ts`: General utility functions (often used for tailwind class merging `cn`).

## Domain Model
The core domain revolves around a multi-phase tournament:
- **Phases:** 0: Play-ins (24 Teams), 1: Group Stage (12 Teams), 2: Bracket Stage (12 Teams), 3: Semifinals/Redemption (6 Teams), 4: Grand Finals (6 Teams).
- **Teams:** Consist of an ID, Name, and members (3 players per team).
- **Matches:** Contain game numbers and an array of `MatchPlacement` (which track team placement 1-6 and 3 champions used).
- **Groups:** A collection of matches for a specific set of teams in a given phase (6 teams per group).
- **Points:** Teams are awarded points based on their placement in a match (1st = 6pts, 6th = 1pt).

## Guidelines for Agents
1. **Styling:** Always use Tailwind CSS utility classes. When creating new UI components, leverage `shadcn/ui` and Radix primitives if applicable.
2. **Data Layer:** Do not expect a real backend or database at this stage. Data is statically defined in `lib/tournament-db.ts`. If modifying data structures, ensure you update the static mock data to prevent build errors.
3. **Components:** Keep domain-specific components inside `components/tournament/` and generic/reusable UI components in `components/ui/`.
4. **Icons:** Use `lucide-react` for any icon needs.
