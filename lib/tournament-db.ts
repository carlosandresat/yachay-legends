
export type Player = {
    name: string;
    championImage?: string;
};

export type Team = {
    id: string;
    name: string;
    members: [string, string];
};

export type MatchPlacement = {
    teamId: string;
    placement: number; // 1-8
    champions?: [string, string];
};

export type Match = {
    id: string;
    gameNumber: number;
    placements: MatchPlacement[];
};

export type Group = {
    id: string;
    phase: number;
    name: string;
    teamIds: string[];
    matches: Match[];
};

export const PHASE_NAMES: Record<number, string> = {
    0: "Play-ins (32 Teams)",
    1: "Group Stage (16 Teams)",
    2: "Bracket Stage",
    3: "Semifinals / Redemption",
    4: "Grand Finals"
};

export const TEAMS: Record<string, Team> = {
    // Group A (Phase 0)
    't1': { id: 't1', name: 'SKT T1', members: ['Faker', 'Oner'] },
    't2': { id: 't2', name: 'G2 Esports', members: ['Caps', 'Mikyx'] },
    't3': { id: 't3', name: 'Gen.G', members: ['Chovy', 'Canyon'] },
    't4': { id: 't4', name: 'Bilibili', members: ['Knight', 'Elk'] },
    't5': { id: 't5', name: 'Fnatic', members: ['Humanoid', 'Razork'] },
    't6': { id: 't6', name: 'Team Liquid', members: ['APA', 'Yeon'] },
    't7': { id: 't7', name: 'Cloud9', members: ['Jojopyun', 'Blaber'] },
    't8': { id: 't8', name: 'FlyQuest', members: ['Jensen', 'Inspired'] },

    // Group B (Phase 0)
    't9': { id: 't9', name: 'KT Rolster', members: ['Deft', 'Pyosik'] },
    't10': { id: 't10', name: 'Dplus KIA', members: ['ShowMaker', 'Lucid'] },
    't11': { id: 't11', name: 'Hanwha Life', members: ['Viper', 'Peanut'] },
    't12': { id: 't12', name: 'T1 Academy', members: ['Smash', 'Rekks'] },
    't13': { id: 't13', name: 'FearX', members: ['Clozer', 'Raptor'] },
    't14': { id: 't14', name: 'Nongshim', members: ['Jiwoo', 'Sylvie'] },
    't15': { id: 't15', name: 'DRX', members: ['Teddy', 'Sponge'] },
    't16': { id: 't16', name: 'Kwangdong', members: ['Cuzz', 'Bulldog'] },

    // Group C (Phase 0)
    't17': { id: 't17', name: 'JDG', members: ['Ruler', 'Kanavi'] },
    't18': { id: 't18', name: 'TES', members: ['JackeyLove', 'Tian'] },
    't19': { id: 't19', name: 'LNG', members: ['Scout', 'Weiwei'] },
    't20': { id: 't20', name: 'WBG', members: ['Xiaohu', 'Light'] },
    't21': { id: 't21', name: 'OMG', members: ['Angel', 'Ppgod'] },
    't22': { id: 't22', name: 'NIP', members: ['Rookie', 'Aki'] },
    't23': { id: 't23', name: 'IG', members: ['Cryin', 'Wink'] },
    't24': { id: 't24', name: 'RNG', members: ['Tangyuan', 'Wei'] },

    // Group D (Phase 0)
    't25': { id: 't25', name: 'Vitality', members: ['Carzzy', 'Hylissang'] },
    't26': { id: 't26', name: 'BDS', members: ['Adam', 'Sheo'] },
    't27': { id: 't27', name: 'Heretics', members: ['Jankos', 'Perkz'] },
    't28': { id: 't28', name: 'Mad Lions', members: ['Elyoya', 'Fresskowy'] },
    't29': { id: 't29', name: 'Rogue', members: ['Larssen', 'Markoon'] },
    't30': { id: 't30', name: 'GiantX', members: ['Odoamne', 'Peach'] },
    't31': { id: 't31', name: 'Karmine Corp', members: ['Upset', 'Bo'] },
    't32': { id: 't32', name: 'Gamers2', members: ['BrokenBlade', 'Yike'] },
};

// --- STATIC DATA ---

const STATIC_MATCHES: Record<string, Match[]> = {
    // --- PHASE 0: PLAY-INS ---
    'p0-a': [
        {
            id: 'p0-a-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['Ahri', 'LeeSin'] }, { teamId: 't2', placement: 2 }, { teamId: 't3', placement: 3 }, { teamId: 't4', placement: 4 },
                { teamId: 't5', placement: 5 }, { teamId: 't6', placement: 6 }, { teamId: 't7', placement: 7 }, { teamId: 't8', placement: 8 }
            ]
        },
        {
            id: 'p0-a-m2', gameNumber: 2, placements: [
                { teamId: 't2', placement: 1, champions: ['Yasuo', 'Yone'] }, { teamId: 't1', placement: 2 }, { teamId: 't4', placement: 3 }, { teamId: 't3', placement: 4 },
                { teamId: 't6', placement: 5 }, { teamId: 't5', placement: 6 }, { teamId: 't8', placement: 7 }, { teamId: 't7', placement: 8 }
            ]
        },
        {
            id: 'p0-a-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't2', placement: 3 }, { teamId: 't4', placement: 4 },
                { teamId: 't5', placement: 5 }, { teamId: 't7', placement: 6 }, { teamId: 't6', placement: 7 }, { teamId: 't8', placement: 8 }
            ]
        },
        {
            id: 'p0-a-m4', gameNumber: 4, placements: [
                { teamId: 't3', placement: 1 }, { teamId: 't4', placement: 2 }, { teamId: 't1', placement: 3 }, { teamId: 't2', placement: 4 },
                { teamId: 't7', placement: 5 }, { teamId: 't6', placement: 6 }, { teamId: 't5', placement: 7 }, { teamId: 't8', placement: 8 }
            ]
        }
    ],
    'p0-b': [
        {
            id: 'p0-b-m1', gameNumber: 1, placements: [
                { teamId: 't9', placement: 1 }, { teamId: 't10', placement: 2 }, { teamId: 't11', placement: 3 }, { teamId: 't12', placement: 4 },
                { teamId: 't13', placement: 5 }, { teamId: 't14', placement: 6 }, { teamId: 't15', placement: 7 }, { teamId: 't16', placement: 8 }
            ]
        },
        {
            id: 'p0-b-m2', gameNumber: 2, placements: [
                { teamId: 't11', placement: 1 }, { teamId: 't9', placement: 2 }, { teamId: 't12', placement: 3 }, { teamId: 't10', placement: 4 },
                { teamId: 't14', placement: 5 }, { teamId: 't13', placement: 6 }, { teamId: 't16', placement: 7 }, { teamId: 't15', placement: 8 }
            ]
        },
        {
            id: 'p0-b-m3', gameNumber: 3, placements: [
                { teamId: 't10', placement: 1 }, { teamId: 't12', placement: 2 }, { teamId: 't9', placement: 3 }, { teamId: 't11', placement: 4 },
                { teamId: 't13', placement: 5 }, { teamId: 't15', placement: 6 }, { teamId: 't14', placement: 7 }, { teamId: 't16', placement: 8 }
            ]
        },
        {
            id: 'p0-b-m4', gameNumber: 4, placements: [
                { teamId: 't9', placement: 1 }, { teamId: 't11', placement: 2 }, { teamId: 't10', placement: 3 }, { teamId: 't12', placement: 4 },
                { teamId: 't16', placement: 5 }, { teamId: 't14', placement: 6 }, { teamId: 't13', placement: 7 }, { teamId: 't15', placement: 8 }
            ]
        }
    ],
    'p0-c': [
        {
            id: 'p0-c-m1', gameNumber: 1, placements: [
                { teamId: 't17', placement: 1 }, { teamId: 't18', placement: 2 }, { teamId: 't19', placement: 3 }, { teamId: 't20', placement: 4 },
                { teamId: 't21', placement: 5 }, { teamId: 't22', placement: 6 }, { teamId: 't23', placement: 7 }, { teamId: 't24', placement: 8 }
            ]
        },
        {
            id: 'p0-c-m2', gameNumber: 2, placements: [
                { teamId: 't18', placement: 1 }, { teamId: 't17', placement: 2 }, { teamId: 't20', placement: 3 }, { teamId: 't19', placement: 4 },
                { teamId: 't22', placement: 5 }, { teamId: 't21', placement: 6 }, { teamId: 't24', placement: 7 }, { teamId: 't23', placement: 8 }
            ]
        },
        {
            id: 'p0-c-m3', gameNumber: 3, placements: [
                { teamId: 't17', placement: 1 }, { teamId: 't19', placement: 2 }, { teamId: 't18', placement: 3 }, { teamId: 't20', placement: 4 },
                { teamId: 't23', placement: 5 }, { teamId: 't21', placement: 6 }, { teamId: 't22', placement: 7 }, { teamId: 't24', placement: 8 }
            ]
        },
        {
            id: 'p0-c-m4', gameNumber: 4, placements: [
                { teamId: 't20', placement: 1 }, { teamId: 't18', placement: 2 }, { teamId: 't17', placement: 3 }, { teamId: 't19', placement: 4 },
                { teamId: 't21', placement: 5 }, { teamId: 't24', placement: 6 }, { teamId: 't23', placement: 7 }, { teamId: 't22', placement: 8 }
            ]
        }
    ],
    'p0-d': [
        {
            id: 'p0-d-m1', gameNumber: 1, placements: [
                { teamId: 't25', placement: 1 }, { teamId: 't26', placement: 2 }, { teamId: 't27', placement: 3 }, { teamId: 't28', placement: 4 },
                { teamId: 't29', placement: 5 }, { teamId: 't30', placement: 6 }, { teamId: 't31', placement: 7 }, { teamId: 't32', placement: 8 }
            ]
        },
        {
            id: 'p0-d-m2', gameNumber: 2, placements: [
                { teamId: 't26', placement: 1 }, { teamId: 't25', placement: 2 }, { teamId: 't28', placement: 3 }, { teamId: 't27', placement: 4 },
                { teamId: 't30', placement: 5 }, { teamId: 't29', placement: 6 }, { teamId: 't32', placement: 7 }, { teamId: 't31', placement: 8 }
            ]
        },
        {
            id: 'p0-d-m3', gameNumber: 3, placements: [
                { teamId: 't25', placement: 1 }, { teamId: 't27', placement: 2 }, { teamId: 't26', placement: 3 }, { teamId: 't28', placement: 4 },
                { teamId: 't31', placement: 5 }, { teamId: 't29', placement: 6 }, { teamId: 't30', placement: 7 }, { teamId: 't32', placement: 8 }
            ]
        },
        {
            id: 'p0-d-m4', gameNumber: 4, placements: [
                { teamId: 't27', placement: 1 }, { teamId: 't25', placement: 2 }, { teamId: 't26', placement: 3 }, { teamId: 't28', placement: 4 },
                { teamId: 't29', placement: 5 }, { teamId: 't32', placement: 6 }, { teamId: 't30', placement: 7 }, { teamId: 't31', placement: 8 }
            ]
        }
    ],

    // --- PHASE 1: GROUP STAGE ---
    'p1-1': [
        {
            id: 'p1-1-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't9', placement: 3 }, { teamId: 't4', placement: 4 },
                { teamId: 't2', placement: 5 }, { teamId: 't10', placement: 6 }, { teamId: 't11', placement: 7 }, { teamId: 't12', placement: 8 }
            ]
        },
        {
            id: 'p1-1-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1 }, { teamId: 't1', placement: 2 }, { teamId: 't2', placement: 3 }, { teamId: 't9', placement: 4 },
                { teamId: 't4', placement: 5 }, { teamId: 't11', placement: 6 }, { teamId: 't10', placement: 7 }, { teamId: 't12', placement: 8 }
            ]
        },
        {
            id: 'p1-1-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't4', placement: 2 }, { teamId: 't3', placement: 3 }, { teamId: 't9', placement: 4 },
                { teamId: 't2', placement: 5 }, { teamId: 't10', placement: 6 }, { teamId: 't12', placement: 7 }, { teamId: 't11', placement: 8 }
            ]
        },
        {
            id: 'p1-1-m4', gameNumber: 4, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't4', placement: 2 }, { teamId: 't11', placement: 3 }, { teamId: 't1', placement: 4 },
                { teamId: 't3', placement: 5 }, { teamId: 't9', placement: 6 }, { teamId: 't12', placement: 7 }, { teamId: 't10', placement: 8 }
            ]
        }
    ],
    'p1-2': [
        {
            id: 'p1-2-m1', gameNumber: 1, placements: [
                { teamId: 't17', placement: 1 }, { teamId: 't18', placement: 2 }, { teamId: 't19', placement: 3 }, { teamId: 't25', placement: 4 },
                { teamId: 't20', placement: 5 }, { teamId: 't26', placement: 6 }, { teamId: 't27', placement: 7 }, { teamId: 't28', placement: 8 }
            ]
        },
        {
            id: 'p1-2-m2', gameNumber: 2, placements: [
                { teamId: 't18', placement: 1 }, { teamId: 't20', placement: 2 }, { teamId: 't17', placement: 3 }, { teamId: 't26', placement: 4 },
                { teamId: 't19', placement: 5 }, { teamId: 't25', placement: 6 }, { teamId: 't28', placement: 7 }, { teamId: 't27', placement: 8 }
            ]
        },
        {
            id: 'p1-2-m3', gameNumber: 3, placements: [
                { teamId: 't17', placement: 1 }, { teamId: 't25', placement: 2 }, { teamId: 't18', placement: 3 }, { teamId: 't20', placement: 4 },
                { teamId: 't19', placement: 5 }, { teamId: 't27', placement: 6 }, { teamId: 't28', placement: 7 }, { teamId: 't26', placement: 8 }
            ]
        },
        {
            id: 'p1-2-m4', gameNumber: 4, placements: [
                { teamId: 't19', placement: 1 }, { teamId: 't20', placement: 2 }, { teamId: 't26', placement: 3 }, { teamId: 't17', placement: 4 },
                { teamId: 't18', placement: 5 }, { teamId: 't25', placement: 6 }, { teamId: 't27', placement: 7 }, { teamId: 't28', placement: 8 }
            ]
        }
    ],

    // --- PHASE 2: BRACKETS ---
    'p2-upper': [
        {
            id: 'p2-upper-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't17', placement: 3 }, { teamId: 't18', placement: 4 },
                { teamId: 't4', placement: 5 }, { teamId: 't19', placement: 6 }, { teamId: 't20', placement: 7 }, { teamId: 't9', placement: 8 }
            ]
        },
        {
            id: 'p2-upper-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1 }, { teamId: 't17', placement: 2 }, { teamId: 't1', placement: 3 }, { teamId: 't18', placement: 4 },
                { teamId: 't9', placement: 5 }, { teamId: 't4', placement: 6 }, { teamId: 't20', placement: 7 }, { teamId: 't19', placement: 8 }
            ]
        },
        {
            id: 'p2-upper-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't18', placement: 2 }, { teamId: 't3', placement: 3 }, { teamId: 't17', placement: 4 },
                { teamId: 't4', placement: 5 }, { teamId: 't20', placement: 6 }, { teamId: 't9', placement: 7 }, { teamId: 't19', placement: 8 }
            ]
        },
        {
            id: 'p2-upper-m4', gameNumber: 4, placements: [
                { teamId: 't17', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't1', placement: 3 }, { teamId: 't18', placement: 4 },
                { teamId: 't9', placement: 5 }, { teamId: 't4', placement: 6 }, { teamId: 't19', placement: 7 }, { teamId: 't20', placement: 8 }
            ]
        }
    ],
    'p2-lower': [
        {
            id: 'p2-lower-m1', gameNumber: 1, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't11', placement: 2 }, { teamId: 't10', placement: 3 }, { teamId: 't25', placement: 4 },
                { teamId: 't12', placement: 5 }, { teamId: 't26', placement: 6 }, { teamId: 't27', placement: 7 }, { teamId: 't28', placement: 8 }
            ]
        },
        {
            id: 'p2-lower-m2', gameNumber: 2, placements: [
                { teamId: 't11', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't25', placement: 3 }, { teamId: 't10', placement: 4 },
                { teamId: 't12', placement: 5 }, { teamId: 't26', placement: 6 }, { teamId: 't28', placement: 7 }, { teamId: 't27', placement: 8 }
            ]
        },
        {
            id: 'p2-lower-m3', gameNumber: 3, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't10', placement: 2 }, { teamId: 't11', placement: 3 }, { teamId: 't12', placement: 4 },
                { teamId: 't25', placement: 5 }, { teamId: 't26', placement: 6 }, { teamId: 't27', placement: 7 }, { teamId: 't28', placement: 8 }
            ]
        },
        {
            id: 'p2-lower-m4', gameNumber: 4, placements: [
                { teamId: 't12', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't11', placement: 3 }, { teamId: 't25', placement: 4 },
                { teamId: 't10', placement: 5 }, { teamId: 't26', placement: 6 }, { teamId: 't28', placement: 7 }, { teamId: 't27', placement: 8 }
            ]
        }
    ],

    // --- PHASE 3: REDEMPTION ---
    'p3-redemption': [
        {
            id: 'p3-red', gameNumber: 1, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't4', placement: 2 }, { teamId: 't9', placement: 3 }, { teamId: 't11', placement: 4 },
                { teamId: 't19', placement: 5 }, { teamId: 't20', placement: 6 }, { teamId: 't10', placement: 7 }, { teamId: 't12', placement: 8 }
            ]
        },
        {
            id: 'p3-red', gameNumber: 2, placements: [
                { teamId: 't9', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't4', placement: 3 }, { teamId: 't11', placement: 4 },
                { teamId: 't19', placement: 5 }, { teamId: 't12', placement: 6 }, { teamId: 't20', placement: 7 }, { teamId: 't10', placement: 8 }
            ]
        },
        {
            id: 'p3-red', gameNumber: 3, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't11', placement: 2 }, { teamId: 't4', placement: 3 }, { teamId: 't9', placement: 4 },
                { teamId: 't10', placement: 5 }, { teamId: 't19', placement: 6 }, { teamId: 't20', placement: 7 }, { teamId: 't12', placement: 8 }
            ]
        },
        {
            id: 'p3-red', gameNumber: 4, placements: [
                { teamId: 't4', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't9', placement: 3 }, { teamId: 't11', placement: 4 },
                { teamId: 't19', placement: 5 }, { teamId: 't12', placement: 6 }, { teamId: 't10', placement: 7 }, { teamId: 't20', placement: 8 }
            ]
        }
    ],

    // --- PHASE 4: FINALS ---
    'p4-final': [
        {
            id: 'p4-final-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't17', placement: 3 }, { teamId: 't2', placement: 4 },
                { teamId: 't18', placement: 5 }, { teamId: 't4', placement: 6 }, { teamId: 't9', placement: 7 }, { teamId: 't11', placement: 8 }
            ]
        },
        {
            id: 'p4-final-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1 }, { teamId: 't1', placement: 2 }, { teamId: 't2', placement: 3 }, { teamId: 't17', placement: 4 },
                { teamId: 't4', placement: 5 }, { teamId: 't18', placement: 6 }, { teamId: 't11', placement: 7 }, { teamId: 't9', placement: 8 }
            ]
        },
        {
            id: 'p4-final-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't3', placement: 3 }, { teamId: 't18', placement: 4 },
                { teamId: 't17', placement: 5 }, { teamId: 't9', placement: 6 }, { teamId: 't4', placement: 7 }, { teamId: 't11', placement: 8 }
            ]
        },
        {
            id: 'p4-final-m4', gameNumber: 4, placements: [
                { teamId: 't2', placement: 1 }, { teamId: 't1', placement: 2 }, { teamId: 't17', placement: 3 }, { teamId: 't3', placement: 4 },
                { teamId: 't4', placement: 5 }, { teamId: 't18', placement: 6 }, { teamId: 't11', placement: 7 }, { teamId: 't9', placement: 8 }
            ]
        },
        {
            id: 'p4-final-m5', gameNumber: 5, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't2', placement: 2 }, { teamId: 't3', placement: 3 }, { teamId: 't18', placement: 4 },
                { teamId: 't17', placement: 5 }, { teamId: 't4', placement: 6 }, { teamId: 't9', placement: 7 }, { teamId: 't11', placement: 8 }
            ]
        },
        {
            id: 'p4-final-m6', gameNumber: 6, placements: [
                { teamId: 't1', placement: 1 }, { teamId: 't3', placement: 2 }, { teamId: 't2', placement: 3 }, { teamId: 't17', placement: 4 },
                { teamId: 't18', placement: 5 }, { teamId: 't4', placement: 6 }, { teamId: 't11', placement: 7 }, { teamId: 't9', placement: 8 }
            ]
        }
    ]
};

export const GROUPS: Record<string, Group> = {
    // --- PHASE 0: PLAY-INS (32 Teams) ---
    'p0-a': {
        id: 'p0-a',
        phase: 0,
        name: 'Group A',
        teamIds: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'],
        matches: STATIC_MATCHES['p0-a']
    },
    'p0-b': {
        id: 'p0-b',
        phase: 0,
        name: 'Group B',
        teamIds: ['t9', 't10', 't11', 't12', 't13', 't14', 't15', 't16'],
        matches: STATIC_MATCHES['p0-b']
    },
    'p0-c': {
        id: 'p0-c',
        phase: 0,
        name: 'Group C',
        teamIds: ['t17', 't18', 't19', 't20', 't21', 't22', 't23', 't24'],
        matches: STATIC_MATCHES['p0-c']
    },
    'p0-d': {
        id: 'p0-d',
        phase: 0,
        name: 'Group D',
        teamIds: ['t25', 't26', 't27', 't28', 't29', 't30', 't31', 't32'],
        matches: STATIC_MATCHES['p0-d']
    },

    // --- PHASE 1: GROUP STAGE (16 Teams - Top 4 from each P0 group) ---
    'p1-1': {
        id: 'p1-1',
        phase: 1,
        name: 'Main Group A',
        teamIds: ['t1', 't2', 't3', 't4', 't9', 't10', 't11', 't12'],
        matches: STATIC_MATCHES['p1-1']
    },
    'p1-2': {
        id: 'p1-2',
        phase: 1,
        name: 'Main Group B',
        teamIds: ['t17', 't18', 't19', 't20', 't25', 't26', 't27', 't28'],
        matches: STATIC_MATCHES['p1-2']
    },

    // --- PHASE 2: BRACKET STAGE ---
    'p2-upper': {
        id: 'p2-upper',
        phase: 2,
        name: 'Upper Bracket',
        teamIds: ['t1', 't2', 't3', 't4', 't17', 't18', 't19', 't20'], // Top 4 from P1-1 and P1-2 (Matches above result logic)
        matches: STATIC_MATCHES['p2-upper']
    },
    'p2-lower': {
        id: 'p2-lower',
        phase: 2,
        name: 'Lower Bracket',
        teamIds: ['t9', 't10', 't11', 't12', 't25', 't26', 't27', 't28'],
        matches: STATIC_MATCHES['p2-lower']
    },

    // --- PHASE 3: REDEMPTION ---
    'p3-redemption': {
        id: 'p3-redemption',
        phase: 3,
        name: 'Redemption Group',
        teamIds: ['t2', 't4', 't9', 't11', 't10', 't12', 't19', 't20'], // Mix of P2 losers/winners (adjusted to match logic)
        matches: STATIC_MATCHES['p3-redemption']
    },

    // --- PHASE 4: FINALS ---
    'p4-final': {
        id: 'p4-final',
        phase: 4,
        name: 'Grand Finals',
        teamIds: ['t1', 't3', 't17', 't18', 't2', 't4', 't9', 't11'], // Top 8 Finalists
        matches: STATIC_MATCHES['p4-final']
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
