
export type Player = {
    name: string;
    championImage?: string; // Optional: URL to champion image if we want to track it per game
};

export type Team = {
    id: string;
    name: string;
    members: [string, string];
};

export type MatchPlacement = {
    teamId: string;
    placement: number; // 1-8
    // We could add champions played here if we want to track them per match
    champions?: [string, string];
};

export type Match = {
    id: string;
    gameNumber: number; // 1 to 4 usually
    placements: MatchPlacement[];
};

export type Group = {
    id: string; // 'A', 'B', 'C', 'D', 'E', 'F'
    name: string; // "Grupo A", "Upper Bracket", etc.
    teamIds: string[];
    matches: Match[];
};

export const TEAMS: Record<string, Team> = {
    't1': { id: 't1', name: 'SKT T1', members: ['Faker', 'Oner'] },
    't2': { id: 't2', name: 'G2 Esports', members: ['Caps', 'Mikyx'] },
    't3': { id: 't3', name: 'Gen.G', members: ['Chovy', 'Canyon'] },
    't4': { id: 't4', name: 'Bilibili', members: ['Knight', 'Elk'] },
    't5': { id: 't5', name: 'Fnatic', members: ['Humanoid', 'Razork'] },
    't6': { id: 't6', name: 'Team Liquid', members: ['APA', 'Yeon'] },
    't7': { id: 't7', name: 'Cloud9', members: ['Jojopyun', 'Blaber'] },
    't8': { id: 't8', name: 'FlyQuest', members: ['Jensen', 'Inspired'] },
    // ... add more teams as needed
    't9': { id: 't9', name: 'Team 9', members: ['P1', 'P2'] },
    't10': { id: 't10', name: 'Team 10', members: ['P3', 'P4'] },
    't11': { id: 't11', name: 'Team 11', members: ['P5', 'P6'] },
    't12': { id: 't12', name: 'Team 12', members: ['P7', 'P8'] },
    't13': { id: 't13', name: 'Team 13', members: ['P9', 'P10'] },
    't14': { id: 't14', name: 'Team 14', members: ['P11', 'P12'] },
    't15': { id: 't15', name: 'Team 15', members: ['P13', 'P14'] },
    't16': { id: 't16', name: 'Team 16', members: ['P15', 'P16'] },
};

export const GROUPS: Record<string, Group> = {
    'group-a': {
        id: 'group-a',
        name: 'Grupo A',
        teamIds: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'],
        matches: [
            {
                id: 'm1',
                gameNumber: 1,
                placements: [
                    { teamId: 't1', placement: 1, champions: ['Ahri', 'Viego'] },
                    { teamId: 't2', placement: 2, champions: ['Yasuo', 'Yone'] },
                    { teamId: 't3', placement: 3 },
                    { teamId: 't4', placement: 4 },
                    { teamId: 't5', placement: 5 },
                    { teamId: 't6', placement: 6 },
                    { teamId: 't7', placement: 7 },
                    { teamId: 't8', placement: 8 },
                ]
            },
            {
                id: 'm2',
                gameNumber: 2,
                placements: [
                    { teamId: 't1', placement: 2, champions: ['Leblanc', 'Lee Sin'] },
                    { teamId: 't2', placement: 1, champions: ['Draven', 'Nautilus'] },
                    { teamId: 't3', placement: 4 },
                    { teamId: 't4', placement: 3 },
                    { teamId: 't5', placement: 6 },
                    { teamId: 't6', placement: 5 },
                    { teamId: 't7', placement: 8 },
                    { teamId: 't8', placement: 7 },
                ]
            }
        ]
    },
    'group-b': {
        id: 'group-b',
        name: 'Grupo B',
        teamIds: ['t9', 't10', 't11', 't12', 't13', 't14', 't15', 't16'],
        matches: []
    }
};

// Points logic: 1st=8, 2nd=7, ..., 8th=1
export const PLACE_POINTS: Record<number, number> = {
    1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 6: 3, 7: 2, 8: 1
};

export function getTeamPoints(groupId: string, teamId: string): number {
    const group = GROUPS[groupId];
    if (!group) return 0;

    let points = 0;
    group.matches.forEach(match => {
        const placement = match.placements.find(p => p.teamId === teamId);
        if (placement) {
            points += PLACE_POINTS[placement.placement] || 0;
        }
    });
    return points;
}

export function getTeamStats(groupId: string, teamId: string) {
    const group = GROUPS[groupId];
    if (!group) return { points: 0, wins: 0, matchesPlayed: 0, history: [] };

    let points = 0;
    let wins = 0;
    let matchesPlayed = 0;
    const history: { gameNumber: number, placement: number, champions?: [string, string] }[] = [];

    group.matches.forEach(match => {
        const p = match.placements.find(p => p.teamId === teamId);
        if (p) {
            matchesPlayed++;
            points += PLACE_POINTS[p.placement] || 0;
            if (p.placement === 1) wins++;
            history.push({
                gameNumber: match.gameNumber,
                placement: p.placement,
                champions: p.champions
            });
        }
    });

    return { points, wins, matchesPlayed, history };
}
