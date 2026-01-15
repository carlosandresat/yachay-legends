
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

// Helper to generate a full match with random placements and champions
const CHAMPIONS = [
    'Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol',
    'Azir', 'Bard', 'Belveth', 'Blitzcrank', 'Brand', 'Braum', 'Briar', 'Caitlyn', 'Camille', 'Cassiopeia',
    'Chogath', 'Corki', 'Darius', 'Diana', 'Draven', 'DrMundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal',
    'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen',
    'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce',
    'Jhin', 'Jinx', 'Kaisa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn',
    'Kennen', 'Khazix', 'Kindred', 'Kled', 'KogMaw', 'Leblanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra',
    'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'Milio', 'MissFortune',
    'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah',
    'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn',
    'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renata', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze',
    'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion',
    'Sivir', 'Skarner', 'Smolder', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah',
    'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch',
    'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Velkoz', 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir',
    'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi',
    'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'
];

function getRandomChampions(): [string, string] {
    const c1 = CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)];
    const c2 = CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)];
    return [c1, c2];
}

function generateMatchesForGroup(groupId: string, teamIds: string[], count: number = 4): Match[] {
    const matches: Match[] = [];
    for (let i = 1; i <= count; i++) {
        // Shuffle team IDs for random placement
        const shuffled = [...teamIds].sort(() => 0.5 - Math.random());
        const placements: MatchPlacement[] = shuffled.map((tid, index) => ({
            teamId: tid,
            placement: index + 1,
            champions: getRandomChampions()
        }));
        matches.push({
            id: `${groupId}-m${i}`,
            gameNumber: i,
            placements
        });
    }
    return matches;
}

export const GROUPS: Record<string, Group> = {
    // --- PHASE 0: PLAY-INS (32 Teams) ---
    'p0-a': {
        id: 'p0-a',
        phase: 0,
        name: 'Group A',
        teamIds: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'],
        matches: generateMatchesForGroup('p0-a', ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'])
    },
    'p0-b': {
        id: 'p0-b',
        phase: 0,
        name: 'Group B',
        teamIds: ['t9', 't10', 't11', 't12', 't13', 't14', 't15', 't16'],
        matches: generateMatchesForGroup('p0-b', ['t9', 't10', 't11', 't12', 't13', 't14', 't15', 't16'])
    },
    'p0-c': {
        id: 'p0-c',
        phase: 0,
        name: 'Group C',
        teamIds: ['t17', 't18', 't19', 't20', 't21', 't22', 't23', 't24'],
        matches: generateMatchesForGroup('p0-c', ['t17', 't18', 't19', 't20', 't21', 't22', 't23', 't24'])
    },
    'p0-d': {
        id: 'p0-d',
        phase: 0,
        name: 'Group D',
        teamIds: ['t25', 't26', 't27', 't28', 't29', 't30', 't31', 't32'],
        matches: generateMatchesForGroup('p0-d', ['t25', 't26', 't27', 't28', 't29', 't30', 't31', 't32'])
    },

    // --- PHASE 1: GROUP STAGE (16 Teams - Top 4 from each P0 group) ---
    // Advancing: 4 from A, 4 from B -> p1-1 (Alpha)
    // Advancing: 4 from C, 4 from D -> p1-2 (Beta)
    'p1-1': {
        id: 'p1-1',
        phase: 1,
        name: 'Main Group A',
        teamIds: ['t1', 't2', 't3', 't4', 't9', 't10', 't11', 't12'],
        matches: generateMatchesForGroup('p1-1', ['t1', 't2', 't3', 't4', 't9', 't10', 't11', 't12'])
    },
    'p1-2': {
        id: 'p1-2',
        phase: 1,
        name: 'Main Group B',
        teamIds: ['t17', 't18', 't19', 't20', 't25', 't26', 't27', 't28'],
        matches: generateMatchesForGroup('p1-2', ['t17', 't18', 't19', 't20', 't25', 't26', 't27', 't28'])
    },

    // --- PHASE 2: BRACKET STAGE ---
    // Upper: Top 4 from Alpha + Top 4 from Beta
    'p2-upper': {
        id: 'p2-upper',
        phase: 2,
        name: 'Upper Bracket',
        teamIds: ['t1', 't2', 't3', 't4', 't17', 't18', 't19', 't20'],
        matches: generateMatchesForGroup('p2-upper', ['t1', 't2', 't3', 't4', 't17', 't18', 't19', 't20'])
    },
    // Lower: Bottom 4 from Alpha + Bottom 4 from Beta
    'p2-lower': {
        id: 'p2-lower',
        phase: 2,
        name: 'Lower Bracket',
        teamIds: ['t9', 't10', 't11', 't12', 't25', 't26', 't27', 't28'],
        matches: generateMatchesForGroup('p2-lower', ['t9', 't10', 't11', 't12', 't25', 't26', 't27', 't28'])
    },

    // --- PHASE 3: REDEMPTION ---
    // Redemption: Bottom 4 from Upper + Top 4 from Lower
    'p3-redemption': {
        id: 'p3-redemption',
        phase: 3,
        name: 'Redemption Group',
        teamIds: ['t17', 't18', 't19', 't20', 't9', 't10', 't11', 't12'],
        matches: generateMatchesForGroup('p3-redemption', ['t17', 't18', 't19', 't20', 't9', 't10', 't11', 't12'])
    },

    // --- PHASE 4: FINALS ---
    // Finals: Top 4 from Upper + Top 4 from Redemption
    'p4-final': {
        id: 'p4-final',
        phase: 4,
        name: 'Grand Finals',
        teamIds: ['t1', 't2', 't3', 't4', 't17', 't18', 't19', 't20'],
        matches: generateMatchesForGroup('p4-final', ['t1', 't2', 't3', 't4', 't17', 't18', 't19', 't20'], 6) // Finals usually 6 games
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
