export type Player = {
    name: string;
    championImage?: string;
};

export type Team = {
    id: string;
    name: string;
    members: [string, string, string];
};

export type MatchPlacement = {
    teamId: string;
    placement: number; // 1-6
    champions?: [string, string, string];
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
    0: "Play-ins (24 Teams)",
    1: "Group Stage (12 Teams)",
    2: "Bracket Stage",
    3: "Semifinals / Redemption",
    4: "Grand Finals"
};

export const TEAMS: Record<string, Team> = {
    // Group A (Phase 0)
    't1': { id: 't1', name: 'SKT T1', members: ['Faker', 'Oner', 'Zeus'] },
    't2': { id: 't2', name: 'G2 Esports', members: ['Caps', 'Mikyx', 'BrokenBlade'] },
    't3': { id: 't3', name: 'Gen.G', members: ['Chovy', 'Canyon', 'Kiin'] },
    't4': { id: 't4', name: 'Bilibili Gaming', members: ['Knight', 'Elk', 'Bin'] },
    't5': { id: 't5', name: 'Fnatic', members: ['Humanoid', 'Razork', 'Oscarinin'] },
    't6': { id: 't6', name: 'Team Liquid', members: ['APA', 'Yeon', 'Impact'] },

    // Group B (Phase 0)
    't7': { id: 't7', name: 'Cloud9', members: ['Jojopyun', 'Blaber', 'Thanatos'] },
    't8': { id: 't8', name: 'FlyQuest', members: ['Jensen', 'Inspired', 'Bwipo'] },
    't9': { id: 't9', name: 'KT Rolster', members: ['Deft', 'Pyosik', 'PerfecT'] },
    't10': { id: 't10', name: 'Dplus KIA', members: ['ShowMaker', 'Lucid', 'Kingen'] },
    't11': { id: 't11', name: 'Hanwha Life Esports', members: ['Viper', 'Peanut', 'Doran'] },
    't12': { id: 't12', name: 'T1 Academy', members: ['Smash', 'Rekkles', 'Dal'] },

    // Group C (Phase 0)
    't13': { id: 't13', name: 'JDG Intel Esports', members: ['Ruler', 'Kanavi', 'Flandre'] },
    't14': { id: 't14', name: 'Top Esports', members: ['JackeyLove', 'Tian', '369'] },
    't15': { id: 't15', name: 'LNG Esports', members: ['Scout', 'Weiwei', 'Zika'] },
    't16': { id: 't16', name: 'Weibo Gaming', members: ['Xiaohu', 'Light', 'Breathe'] },
    't17': { id: 't17', name: 'Ninjas in Pyjamas', members: ['Rookie', 'Aki', 'Shanji'] },
    't18': { id: 't18', name: 'FunPlus Phoenix', members: ['Care', 'Milkyway', 'Xiaolaohu'] },

    // Group D (Phase 0)
    't19': { id: 't19', name: 'Team Vitality', members: ['Carzzy', 'Hylissang', 'Photon'] },
    't20': { id: 't20', name: 'Team BDS', members: ['Adam', 'Sheo', 'Nuc'] },
    't21': { id: 't21', name: 'Team Heretics', members: ['Jankos', 'Perkz', 'Wunder'] },
    't22': { id: 't22', name: 'Karmine Corp', members: ['Upset', 'Bo', 'Cabochard'] },
    't23': { id: 't23', name: 'Rogue', members: ['Larssen', 'Markoon', 'Szygenda'] },
    't24': { id: 't24', name: 'GIANTX', members: ['Odoamne', 'Peach', 'Jackies'] },
};

// --- STATIC DATA ---

const STATIC_MATCHES: Record<string, Match[]> = {
    // --- PHASE 0: PLAY-INS ---
    'p0-a': [
        {
            id: 'p0-a-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['Ahri', 'Vi', 'Jax'] },
                { teamId: 't2', placement: 2, champions: ['Xayah', 'Rakan', 'Kennen'] },
                { teamId: 't3', placement: 3, champions: ['Taliyah', 'Pantheon', 'Zac'] },
                { teamId: 't4', placement: 4, champions: ['MissFortune', 'Amumu', 'Samira'] },
                { teamId: 't5', placement: 5, champions: ['Jax', 'Fiora', 'Rell'] },
                { teamId: 't6', placement: 6, champions: ['Kennen', 'Zac', 'Sivir'] }
            ]
        },
        {
            id: 'p0-a-m2', gameNumber: 2, placements: [
                { teamId: 't2', placement: 1, champions: ['Taliyah', 'Pantheon', 'Alistar'] },
                { teamId: 't3', placement: 2, champions: ['Samira', 'Rell', 'Ezreal'] },
                { teamId: 't1', placement: 3, champions: ['Viktor', 'Viego', 'Karma'] },
                { teamId: 't4', placement: 4, champions: ['Ezreal', 'Karma', 'Vayne'] },
                { teamId: 't6', placement: 5, champions: ['Kennen', 'Zac', 'Sivir'] },
                { teamId: 't5', placement: 6, champions: ['Jax', 'Fiora', 'Rell'] }
            ]
        },
        {
            id: 'p0-a-m3', gameNumber: 3, placements: [
                { teamId: 't3', placement: 1, champions: ['Gangplank', 'Karthus', 'Lulu'] },
                { teamId: 't1', placement: 2, champions: ['MissFortune', 'Amumu', 'Jinx'] },
                { teamId: 't2', placement: 3, champions: ['Rumble', 'JarvanIV', 'Thresh'] },
                { teamId: 't5', placement: 4, champions: ['Xayah', 'Rakan', 'Draven'] },
                { teamId: 't4', placement: 5, champions: ['Gnar', 'Kindred', 'Azir'] },
                { teamId: 't6', placement: 6, champions: ['Orianna', 'JarvanIV', 'Sejuani'] }
            ]
        },
        {
            id: 'p0-a-m4', gameNumber: 4, placements: [
                { teamId: 't1', placement: 1, champions: ['Tristana', 'Leona', 'Sett'] },
                { teamId: 't3', placement: 2, champions: ['Thresh', 'Draven', 'Akali'] },
                { teamId: 't2', placement: 3, champions: ['Caitlyn', 'Lux', 'XinZhao'] },
                { teamId: 't6', placement: 4, champions: ['Lulu', 'Jinx', 'Sivir'] },
                { teamId: 't4', placement: 5, champions: ['MissFortune', 'Amumu', 'Yuumi'] },
                { teamId: 't5', placement: 6, champions: ['Akali', 'XinZhao', 'Aphelios'] }
            ]
        }
    ],
    'p0-b': [
        {
            id: 'p0-b-m1', gameNumber: 1, placements: [
                { teamId: 't7', placement: 1, champions: ['MissFortune', 'Amumu', 'Yasuo'] },
                { teamId: 't8', placement: 2, champions: ['Sett', 'Vi', 'Malphite'] },
                { teamId: 't9', placement: 3, champions: ['Akali', 'XinZhao', 'Renekton'] },
                { teamId: 't10', placement: 4, champions: ['Caitlyn', 'Lux', 'Nidalee'] },
                { teamId: 't11', placement: 5, champions: ['Orianna', 'JarvanIV', 'Varus'] },
                { teamId: 't12', placement: 6, champions: ['Azir', 'Sejuani', 'Ashe'] }
            ]
        },
        {
            id: 'p0-b-m2', gameNumber: 2, placements: [
                { teamId: 't8', placement: 1, champions: ['Sett', 'Vi', 'Zed'] },
                { teamId: 't9', placement: 2, champions: ['Caitlyn', 'Lux', 'Talon'] },
                { teamId: 't7', placement: 3, champions: ['Azir', 'Sejuani', 'Zeri'] },
                { teamId: 't11', placement: 4, champions: ['Sivir', 'Yuumi', 'Jhin'] },
                { teamId: 't10', placement: 5, champions: ['Riven', 'Aatrox', 'Xerath'] },
                { teamId: 't12', placement: 6, champions: ['Twitch', 'Taric', 'Sion'] }
            ]
        },
        {
            id: 'p0-b-m3', gameNumber: 3, placements: [
                { teamId: 't9', placement: 1, champions: ['Aphelios', 'Thresh', 'Lillia'] },
                { teamId: 't7', placement: 2, champions: ['Yasuo', 'Malphite', 'Kaisa'] },
                { teamId: 't8', placement: 3, champions: ['Renekton', 'Nidalee', 'Nautilus'] },
                { teamId: 't12', placement: 4, champions: ['Orianna', 'JarvanIV', 'Darius'] },
                { teamId: 't10', placement: 5, champions: ['Gnar', 'Kindred', 'Garen'] },
                { teamId: 't11', placement: 6, champions: ['Zoe', 'Nidalee', 'Gnar'] }
            ]
        },
        {
            id: 'p0-b-m4', gameNumber: 4, placements: [
                { teamId: 't7', placement: 1, champions: ['Kaisa', 'Nautilus', 'Kindred'] },
                { teamId: 't9', placement: 2, champions: ['Darius', 'Garen', 'Yone'] },
                { teamId: 't8', placement: 3, champions: ['Darius', 'Garen', 'Diana'] },
                { teamId: 't10', placement: 4, champions: ['ChoGath', 'Nunu', 'Ornn'] },
                { teamId: 't11', placement: 5, champions: ['MissFortune', 'Amumu', 'Kalista'] },
                { teamId: 't12', placement: 6, champions: ['Taliyah', 'Pantheon', 'RenataGlasc'] }
            ]
        }
    ],
    'p0-c': [
        {
            id: 'p0-c-m1', gameNumber: 1, placements: [
                { teamId: 't13', placement: 1, champions: ['Samira', 'Rell', 'Camille'] },
                { teamId: 't14', placement: 2, champions: ['Kennen', 'Zac', 'Galio'] },
                { teamId: 't15', placement: 3, champions: ['Yasuo', 'Malphite', 'KogMaw'] },
                { teamId: 't16', placement: 4, champions: ['Rumble', 'JarvanIV', 'LeeSin'] },
                { teamId: 't17', placement: 5, champions: ['Taliyah', 'Pantheon', 'Syndra'] },
                { teamId: 't18', placement: 6, champions: ['Zeri', 'Yuumi', 'LeBlanc'] }
            ]
        },
        {
            id: 'p0-c-m2', gameNumber: 2, placements: [
                { teamId: 't14', placement: 1, champions: ['Jhin', 'Xerath', 'Graves'] },
                { teamId: 't15', placement: 2, champions: ['LeBlanc', 'Graves', 'Irelia'] },
                { teamId: 't13', placement: 3, champions: ['MissFortune', 'Amumu', 'Hecarim'] },
                { teamId: 't17', placement: 4, champions: ['Sion', 'Lillia', 'Lucian'] },
                { teamId: 't16', placement: 5, champions: ['Lissandra', 'Trundle', 'Braum'] },
                { teamId: 't18', placement: 6, champions: ['Malphite', 'Yasuo', 'Tristana'] }
            ]
        },
        {
            id: 'p0-c-m3', gameNumber: 3, placements: [
                { teamId: 't15', placement: 1, champions: ['Malphite', 'Yasuo', 'Leona'] },
                { teamId: 't13', placement: 2, champions: ['Syndra', 'LeeSin', 'Taliyah'] },
                { teamId: 't14', placement: 3, champions: ['Akali', 'XinZhao', 'Pantheon'] },
                { teamId: 't18', placement: 4, champions: ['Varus', 'Ashe', 'Ahri'] },
                { teamId: 't16', placement: 5, champions: ['Zed', 'Talon', 'Vi'] },
                { teamId: 't17', placement: 6, champions: ['LeBlanc', 'Graves', 'Jax'] }
            ]
        },
        {
            id: 'p0-c-m4', gameNumber: 4, placements: [
                { teamId: 't13', placement: 1, champions: ['Mordekaiser', 'Viego', 'Fiora'] },
                { teamId: 't15', placement: 2, champions: ['Kennen', 'Zac', 'Kennen'] },
                { teamId: 't14', placement: 3, champions: ['Xayah', 'Rakan', 'Zac'] },
                { teamId: 't16', placement: 4, champions: ['Twitch', 'Taric', 'Samira'] },
                { teamId: 't17', placement: 5, champions: ['Senna', 'TahmKench', 'Rell'] },
                { teamId: 't18', placement: 6, champions: ['Senna', 'TahmKench', 'Ezreal'] }
            ]
        }
    ],
    'p0-d': [
        {
            id: 'p0-d-m1', gameNumber: 1, placements: [
                { teamId: 't19', placement: 1, champions: ['Yasuo', 'Malphite', 'Karma'] },
                { teamId: 't20', placement: 2, champions: ['Ahri', 'Vi', 'Viktor'] },
                { teamId: 't21', placement: 3, champions: ['Tristana', 'Leona', 'Viego'] },
                { teamId: 't22', placement: 4, champions: ['Taliyah', 'Pantheon', 'Vayne'] },
                { teamId: 't23', placement: 5, champions: ['Jhin', 'Xerath', 'Alistar'] },
                { teamId: 't24', placement: 6, champions: ['Samira', 'Rell', 'Rumble'] }
            ]
        },
        {
            id: 'p0-d-m2', gameNumber: 2, placements: [
                { teamId: 't20', placement: 1, champions: ['Lucian', 'Braum', 'JarvanIV'] },
                { teamId: 't21', placement: 2, champions: ['Kaisa', 'Nautilus', 'Thresh'] },
                { teamId: 't19', placement: 3, champions: ['Zoe', 'Nidalee', 'Draven'] },
                { teamId: 't23', placement: 4, champions: ['Kaisa', 'Nautilus', 'Lulu'] },
                { teamId: 't22', placement: 5, champions: ['Kennen', 'Zac', 'Jinx'] },
                { teamId: 't24', placement: 6, champions: ['Mordekaiser', 'Viego', 'Azir'] }
            ]
        },
        {
            id: 'p0-d-m3', gameNumber: 3, placements: [
                { teamId: 't21', placement: 1, champions: ['Sion', 'Lillia', 'Sejuani'] },
                { teamId: 't19', placement: 2, champions: ['Gangplank', 'Karthus', 'Sett'] },
                { teamId: 't20', placement: 3, champions: ['Twitch', 'Taric', 'Akali'] },
                { teamId: 't24', placement: 4, champions: ['Sivir', 'Yuumi', 'XinZhao'] },
                { teamId: 't22', placement: 5, champions: ['Irelia', 'Hecarim', 'Caitlyn'] },
                { teamId: 't23', placement: 6, champions: ['Jhin', 'Xerath', 'Lux'] }
            ]
        },
        {
            id: 'p0-d-m4', gameNumber: 4, placements: [
                { teamId: 't19', placement: 1, champions: ['Gnar', 'Kindred', 'Sivir'] },
                { teamId: 't21', placement: 2, champions: ['LeBlanc', 'Graves', 'Yuumi'] },
                { teamId: 't20', placement: 3, champions: ['Syndra', 'LeeSin', 'Aphelios'] },
                { teamId: 't22', placement: 4, champions: ['Taliyah', 'Pantheon', 'Yasuo'] },
                { teamId: 't23', placement: 5, champions: ['Senna', 'TahmKench', 'Malphite'] },
                { teamId: 't24', placement: 6, champions: ['MissFortune', 'Amumu', 'Renekton'] }
            ]
        }
    ],

    // --- PHASE 1: GROUP STAGE ---
    'p1-1': [
        {
            id: 'p1-1-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['Darius', 'Garen', 'Nidalee'] },
                { teamId: 't3', placement: 2, champions: ['Malphite', 'Yasuo', 'Varus'] },
                { teamId: 't2', placement: 3, champions: ['Ezreal', 'Karma', 'Ashe'] },
                { teamId: 't7', placement: 4, champions: ['Varus', 'Ashe', 'Zed'] },
                { teamId: 't9', placement: 5, champions: ['Kalista', 'RenataGlasc', 'Talon'] },
                { teamId: 't8', placement: 6, champions: ['Zoe', 'Nidalee', 'Zeri'] }
            ]
        },
        {
            id: 'p1-1-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['LeBlanc', 'Graves', 'Jhin'] },
                { teamId: 't2', placement: 2, champions: ['Sylas', 'Gragas', 'Xerath'] },
                { teamId: 't1', placement: 3, champions: ['Twitch', 'Taric', 'Sion'] },
                { teamId: 't8', placement: 4, champions: ['Lissandra', 'Trundle', 'Lillia'] },
                { teamId: 't7', placement: 5, champions: ['Irelia', 'Hecarim', 'Kaisa'] },
                { teamId: 't9', placement: 6, champions: ['Vayne', 'Alistar', 'Nautilus'] }
            ]
        },
        {
            id: 'p1-1-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Zoe', 'Nidalee', 'Darius'] },
                { teamId: 't2', placement: 2, champions: ['Lucian', 'Braum', 'Garen'] },
                { teamId: 't3', placement: 3, champions: ['Syndra', 'LeeSin', 'Gnar'] },
                { teamId: 't9', placement: 4, champions: ['Lulu', 'Jinx', 'Kindred'] },
                { teamId: 't8', placement: 5, champions: ['Ornn', 'Trundle', 'Azir'] },
                { teamId: 't7', placement: 6, champions: ['Lucian', 'Braum', 'Sejuani'] }
            ]
        },
        {
            id: 'p1-1-m4', gameNumber: 4, placements: [
                { teamId: 't3', placement: 1, champions: ['LeBlanc', 'Graves', 'Sett'] },
                { teamId: 't1', placement: 2, champions: ['Jhin', 'Xerath', 'Akali'] },
                { teamId: 't2', placement: 3, champions: ['Taliyah', 'Pantheon', 'XinZhao'] },
                { teamId: 't7', placement: 4, champions: ['Viktor', 'Viego', 'Caitlyn'] },
                { teamId: 't8', placement: 5, champions: ['Ezreal', 'Karma', 'Lux'] },
                { teamId: 't9', placement: 6, champions: ['Varus', 'Ashe', 'Sivir'] }
            ]
        }
    ],
    'p1-2': [
        {
            id: 'p1-2-m1', gameNumber: 1, placements: [
                { teamId: 't13', placement: 1, champions: ['Kaisa', 'Nautilus', 'Yuumi'] },
                { teamId: 't15', placement: 2, champions: ['Sion', 'Lillia', 'Aphelios'] },
                { teamId: 't14', placement: 3, champions: ['Senna', 'TahmKench', 'Yasuo'] },
                { teamId: 't19', placement: 4, champions: ['Renekton', 'Nidalee', 'Malphite'] },
                { teamId: 't21', placement: 5, champions: ['Xayah', 'Rakan', 'Renekton'] },
                { teamId: 't20', placement: 6, champions: ['Varus', 'Ashe', 'Nidalee'] }
            ]
        },
        {
            id: 'p1-2-m2', gameNumber: 2, placements: [
                { teamId: 't15', placement: 1, champions: ['Xayah', 'Rakan', 'Varus'] },
                { teamId: 't14', placement: 2, champions: ['LeBlanc', 'Graves', 'Ashe'] },
                { teamId: 't13', placement: 3, champions: ['Vayne', 'Alistar', 'Zed'] },
                { teamId: 't20', placement: 4, champions: ['Lissandra', 'Trundle', 'Talon'] },
                { teamId: 't19', placement: 5, champions: ['Irelia', 'Hecarim', 'Zeri'] },
                { teamId: 't21', placement: 6, champions: ['Ornn', 'Trundle', 'Jhin'] }
            ]
        },
        {
            id: 'p1-2-m3', gameNumber: 3, placements: [
                { teamId: 't13', placement: 1, champions: ['MissFortune', 'Amumu', 'Xerath'] },
                { teamId: 't14', placement: 2, champions: ['Lucian', 'Braum', 'Sion'] },
                { teamId: 't15', placement: 3, champions: ['Malphite', 'Yasuo', 'Lillia'] },
                { teamId: 't21', placement: 4, champions: ['Malphite', 'Yasuo', 'Kaisa'] },
                { teamId: 't20', placement: 5, champions: ['Kennen', 'Zac', 'Nautilus'] },
                { teamId: 't19', placement: 6, champions: ['Renekton', 'Nidalee', 'Darius'] }
            ]
        },
        {
            id: 'p1-2-m4', gameNumber: 4, placements: [
                { teamId: 't15', placement: 1, champions: ['Aphelios', 'Thresh', 'Garen'] },
                { teamId: 't13', placement: 2, champions: ['Senna', 'TahmKench', 'Gnar'] },
                { teamId: 't14', placement: 3, champions: ['Irelia', 'Hecarim', 'Kindred'] },
                { teamId: 't19', placement: 4, champions: ['Yasuo', 'Malphite', 'Azir'] },
                { teamId: 't20', placement: 5, champions: ['Jax', 'Fiora', 'Sejuani'] },
                { teamId: 't21', placement: 6, champions: ['Viktor', 'Viego', 'Sett'] }
            ]
        }
    ],

    // --- PHASE 2: BRACKETS ---
    'p2-upper': [
        {
            id: 'p2-upper-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['MissFortune', 'Amumu', 'Akali'] },
                { teamId: 't3', placement: 2, champions: ['Zeri', 'Yuumi', 'XinZhao'] },
                { teamId: 't13', placement: 3, champions: ['Zed', 'Talon', 'Caitlyn'] },
                { teamId: 't2', placement: 4, champions: ['Gnar', 'Kindred', 'Lux'] },
                { teamId: 't14', placement: 5, champions: ['Galio', 'Camille', 'Sivir'] },
                { teamId: 't15', placement: 6, champions: ['Syndra', 'LeeSin', 'Yuumi'] }
            ]
        },
        {
            id: 'p2-upper-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['Ezreal', 'Karma', 'Aphelios'] },
                { teamId: 't13', placement: 2, champions: ['Kalista', 'RenataGlasc', 'Yasuo'] },
                { teamId: 't1', placement: 3, champions: ['Kennen', 'Zac', 'Malphite'] },
                { teamId: 't15', placement: 4, champions: ['MissFortune', 'Amumu', 'Renekton'] },
                { teamId: 't2', placement: 5, champions: ['Azir', 'Sejuani', 'Nidalee'] },
                { teamId: 't14', placement: 6, champions: ['Riven', 'Aatrox', 'Varus'] }
            ]
        },
        {
            id: 'p2-upper-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Gangplank', 'Karthus', 'Ashe'] },
                { teamId: 't13', placement: 2, champions: ['Malphite', 'Yasuo', 'Zed'] },
                { teamId: 't3', placement: 3, champions: ['Twitch', 'Taric', 'Talon'] },
                { teamId: 't14', placement: 4, champions: ['ChoGath', 'Nunu', 'Zeri'] },
                { teamId: 't15', placement: 5, champions: ['Sylas', 'Gragas', 'Jhin'] },
                { teamId: 't2', placement: 6, champions: ['Lulu', 'Jinx', 'Xerath'] }
            ]
        },
        {
            id: 'p2-upper-m4', gameNumber: 4, placements: [
                { teamId: 't3', placement: 1, champions: ['Xayah', 'Rakan', 'Sion'] },
                { teamId: 't1', placement: 2, champions: ['Ahri', 'Vi', 'Lillia'] },
                { teamId: 't13', placement: 3, champions: ['Zeri', 'Yuumi', 'Kaisa'] },
                { teamId: 't2', placement: 4, champions: ['Jayce', 'Elise', 'Nautilus'] },
                { teamId: 't14', placement: 5, champions: ['Vayne', 'Alistar', 'Darius'] },
                { teamId: 't15', placement: 6, champions: ['Azir', 'Sejuani', 'Garen'] }
            ]
        }
    ],
    'p2-lower': [
        {
            id: 'p2-lower-m1', gameNumber: 1, placements: [
                { teamId: 't7', placement: 1, champions: ['Renekton', 'Nidalee', 'Gnar'] },
                { teamId: 't9', placement: 2, champions: ['Ezreal', 'Karma', 'Kindred'] },
                { teamId: 't8', placement: 3, champions: ['Aphelios', 'Thresh', 'Azir'] },
                { teamId: 't19', placement: 4, champions: ['Jhin', 'Xerath', 'Sejuani'] },
                { teamId: 't20', placement: 5, champions: ['Sylas', 'Gragas', 'Sett'] },
                { teamId: 't21', placement: 6, champions: ['Lissandra', 'Trundle', 'Akali'] }
            ]
        },
        {
            id: 'p2-lower-m2', gameNumber: 2, placements: [
                { teamId: 't9', placement: 1, champions: ['Akali', 'XinZhao', 'XinZhao'] },
                { teamId: 't8', placement: 2, champions: ['Syndra', 'LeeSin', 'Caitlyn'] },
                { teamId: 't7', placement: 3, champions: ['Varus', 'Ashe', 'Lux'] },
                { teamId: 't21', placement: 4, champions: ['Azir', 'Sejuani', 'Sivir'] },
                { teamId: 't19', placement: 5, champions: ['Samira', 'Rell', 'Yuumi'] },
                { teamId: 't20', placement: 6, champions: ['Jax', 'Fiora', 'Aphelios'] }
            ]
        },
        {
            id: 'p2-lower-m3', gameNumber: 3, placements: [
                { teamId: 't7', placement: 1, champions: ['Darius', 'Garen', 'Yasuo'] },
                { teamId: 't8', placement: 2, champions: ['Orianna', 'JarvanIV', 'Malphite'] },
                { teamId: 't9', placement: 3, champions: ['Renekton', 'Nidalee', 'Renekton'] },
                { teamId: 't20', placement: 4, champions: ['Caitlyn', 'Lux', 'Nidalee'] },
                { teamId: 't21', placement: 5, champions: ['Twitch', 'Taric', 'Darius'] },
                { teamId: 't19', placement: 6, champions: ['Zed', 'Talon', 'Garen'] }
            ]
        },
        {
            id: 'p2-lower-m4', gameNumber: 4, placements: [
                { teamId: 't9', placement: 1, champions: ['Taliyah', 'Pantheon', 'Gnar'] },
                { teamId: 't7', placement: 2, champions: ['MissFortune', 'Amumu', 'Kindred'] },
                { teamId: 't8', placement: 3, champions: ['Sivir', 'Yuumi', 'Azir'] },
                { teamId: 't19', placement: 4, champions: ['Sivir', 'Yuumi', 'Sejuani'] },
                { teamId: 't20', placement: 5, champions: ['Rumble', 'JarvanIV', 'Sett'] },
                { teamId: 't21', placement: 6, champions: ['Rumble', 'JarvanIV', 'Akali'] }
            ]
        }
    ],

    // --- PHASE 3: REDEMPTION ---
    'p3-redemption': [
        {
            id: 'p3-red-m1', gameNumber: 1, placements: [
                { teamId: 't2', placement: 1, champions: ['Zed', 'Talon', 'XinZhao'] },
                { teamId: 't7', placement: 2, champions: ['Thresh', 'Draven', 'Caitlyn'] },
                { teamId: 't14', placement: 3, champions: ['Sylas', 'Gragas', 'Lux'] },
                { teamId: 't8', placement: 4, champions: ['Twitch', 'Taric', 'Sivir'] },
                { teamId: 't9', placement: 5, champions: ['Gangplank', 'Karthus', 'Yuumi'] },
                { teamId: 't15', placement: 6, champions: ['Jax', 'Fiora', 'Aphelios'] }
            ]
        },
        {
            id: 'p3-red-m2', gameNumber: 2, placements: [
                { teamId: 't7', placement: 1, champions: ['Aphelios', 'Thresh', 'Yasuo'] },
                { teamId: 't14', placement: 2, champions: ['Malphite', 'Yasuo', 'Malphite'] },
                { teamId: 't2', placement: 3, champions: ['Yasuo', 'Malphite', 'Renekton'] },
                { teamId: 't15', placement: 4, champions: ['Zeri', 'Yuumi', 'Nidalee'] },
                { teamId: 't8', placement: 5, champions: ['Caitlyn', 'Lux', 'Varus'] },
                { teamId: 't9', placement: 6, champions: ['Aphelios', 'Thresh', 'Ashe'] }
            ]
        },
        {
            id: 'p3-red-m3', gameNumber: 3, placements: [
                { teamId: 't2', placement: 1, champions: ['Kaisa', 'Nautilus', 'Zed'] },
                { teamId: 't14', placement: 2, champions: ['Lissandra', 'Trundle', 'Talon'] },
                { teamId: 't7', placement: 3, champions: ['Jax', 'Fiora', 'Zeri'] },
                { teamId: 't9', placement: 4, champions: ['Taliyah', 'Pantheon', 'Jhin'] },
                { teamId: 't15', placement: 5, champions: ['Yone', 'Diana', 'Xerath'] },
                { teamId: 't8', placement: 6, champions: ['Zed', 'Talon', 'Sion'] }
            ]
        },
        {
            id: 'p3-red-m4', gameNumber: 4, placements: [
                { teamId: 't7', placement: 1, champions: ['Gnar', 'Kindred', 'Lillia'] },
                { teamId: 't2', placement: 2, champions: ['Ahri', 'Vi', 'Kaisa'] },
                { teamId: 't14', placement: 3, champions: ['Zed', 'Talon', 'Nautilus'] },
                { teamId: 't8', placement: 4, champions: ['Renekton', 'Nidalee', 'Darius'] },
                { teamId: 't9', placement: 5, champions: ['Yasuo', 'Malphite', 'Garen'] },
                { teamId: 't15', placement: 6, champions: ['Azir', 'Sejuani', 'Gnar'] }
            ]
        }
    ],

    // --- PHASE 4: FINALS ---
    'p4-final': [
        {
            id: 'p4-final-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['KogMaw', 'Lulu', 'Kindred'] },
                { teamId: 't3', placement: 2, champions: ['Akali', 'XinZhao', 'Azir'] },
                { teamId: 't13', placement: 3, champions: ['Ezreal', 'Karma', 'Sejuani'] },
                { teamId: 't2', placement: 4, champions: ['Sylas', 'Gragas', 'Sett'] },
                { teamId: 't7', placement: 5, champions: ['Zed', 'Talon', 'Darius'] },
                { teamId: 't14', placement: 6, champions: ['Darius', 'Garen', 'Garen'] }
            ]
        },
        {
            id: 'p4-final-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['Darius', 'Garen', 'Yasuo'] },
                { teamId: 't13', placement: 2, champions: ['Thresh', 'Draven', 'Malphite'] },
                { teamId: 't1', placement: 3, champions: ['Lucian', 'Braum', 'Renekton'] },
                { teamId: 't14', placement: 4, champions: ['KogMaw', 'Lulu', 'Nidalee'] },
                { teamId: 't2', placement: 5, champions: ['Renekton', 'Nidalee', 'Varus'] },
                { teamId: 't7', placement: 6, champions: ['Vayne', 'Alistar', 'Ashe'] }
            ]
        },
        {
            id: 'p4-final-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Syndra', 'LeeSin', 'Zed'] },
                { teamId: 't13', placement: 2, champions: ['Mordekaiser', 'Viego', 'Talon'] },
                { teamId: 't3', placement: 3, champions: ['Sett', 'Vi', 'Zeri'] },
                { teamId: 't7', placement: 4, champions: ['KogMaw', 'Lulu', 'Jhin'] },
                { teamId: 't14', placement: 5, champions: ['Rumble', 'JarvanIV', 'Xerath'] },
                { teamId: 't2', placement: 6, champions: ['Taliyah', 'Pantheon', 'Sion'] }
            ]
        },
        {
            id: 'p4-final-m4', gameNumber: 4, placements: [
                { teamId: 't3', placement: 1, champions: ['Zed', 'Talon', 'Lillia'] },
                { teamId: 't1', placement: 2, champions: ['Kaisa', 'Nautilus', 'Kaisa'] },
                { teamId: 't13', placement: 3, champions: ['Vayne', 'Alistar', 'Nautilus'] },
                { teamId: 't2', placement: 4, champions: ['Azir', 'Sejuani', 'Darius'] },
                { teamId: 't7', placement: 5, champions: ['Zoe', 'Nidalee', 'Garen'] },
                { teamId: 't14', placement: 6, champions: ['Rumble', 'JarvanIV', 'Gnar'] }
            ]
        },
        {
            id: 'p4-final-m5', gameNumber: 5, placements: [
                { teamId: 't1', placement: 1, champions: ['Kaisa', 'Nautilus', 'Kindred'] },
                { teamId: 't2', placement: 2, champions: ['Vayne', 'Alistar', 'Azir'] },
                { teamId: 't3', placement: 3, champions: ['Renekton', 'Nidalee', 'Sejuani'] },
                { teamId: 't14', placement: 4, champions: ['Yone', 'Diana', 'Sett'] },
                { teamId: 't13', placement: 5, champions: ['Syndra', 'LeeSin', 'Akali'] },
                { teamId: 't7', placement: 6, champions: ['Ezreal', 'Karma', 'XinZhao'] }
            ]
        },
        {
            id: 'p4-final-m6', gameNumber: 6, placements: [
                { teamId: 't1', placement: 1, champions: ['Renekton', 'Nidalee', 'Caitlyn'] },
                { teamId: 't3', placement: 2, champions: ['Kaisa', 'Nautilus', 'Lux'] },
                { teamId: 't2', placement: 3, champions: ['Orianna', 'JarvanIV', 'Sivir'] },
                { teamId: 't13', placement: 4, champions: ['MissFortune', 'Amumu', 'Yuumi'] },
                { teamId: 't14', placement: 5, champions: ['Sion', 'Lillia', 'Aphelios'] },
                { teamId: 't7', placement: 6, champions: ['Zeri', 'Yuumi', 'Yasuo'] }
            ]
        }
    ]
};

export const GROUPS: Record<string, Group> = {
    // --- PHASE 0: PLAY-INS (24 Teams) ---
    'p0-a': {
        id: 'p0-a',
        phase: 0,
        name: 'Group A',
        teamIds: ['t1', 't2', 't3', 't4', 't5', 't6'],
        matches: STATIC_MATCHES['p0-a']
    },
    'p0-b': {
        id: 'p0-b',
        phase: 0,
        name: 'Group B',
        teamIds: ['t7', 't8', 't9', 't10', 't11', 't12'],
        matches: STATIC_MATCHES['p0-b']
    },
    'p0-c': {
        id: 'p0-c',
        phase: 0,
        name: 'Group C',
        teamIds: ['t13', 't14', 't15', 't16', 't17', 't18'],
        matches: STATIC_MATCHES['p0-c']
    },
    'p0-d': {
        id: 'p0-d',
        phase: 0,
        name: 'Group D',
        teamIds: ['t19', 't20', 't21', 't22', 't23', 't24'],
        matches: STATIC_MATCHES['p0-d']
    },

    // --- PHASE 1: GROUP STAGE (12 Teams - Top 3 from each P0 group) ---
    'p1-1': {
        id: 'p1-1',
        phase: 1,
        name: 'Main Group A',
        teamIds: ['t1', 't2', 't3', 't7', 't8', 't9'],
        matches: STATIC_MATCHES['p1-1']
    },
    'p1-2': {
        id: 'p1-2',
        phase: 1,
        name: 'Main Group B',
        teamIds: ['t13', 't14', 't15', 't19', 't20', 't21'],
        matches: STATIC_MATCHES['p1-2']
    },

    // --- PHASE 2: BRACKET STAGE (12 Teams) ---
    'p2-upper': {
        id: 'p2-upper',
        phase: 2,
        name: 'Upper Bracket',
        teamIds: ['t1', 't2', 't3', 't13', 't14', 't15'],
        matches: STATIC_MATCHES['p2-upper']
    },
    'p2-lower': {
        id: 'p2-lower',
        phase: 2,
        name: 'Lower Bracket',
        teamIds: ['t7', 't8', 't9', 't19', 't20', 't21'],
        matches: STATIC_MATCHES['p2-lower']
    },

    // --- PHASE 3: REDEMPTION (6 Teams) ---
    'p3-redemption': {
        id: 'p3-redemption',
        phase: 3,
        name: 'Redemption Group',
        teamIds: ['t2', 't14', 't15', 't7', 't8', 't9'],
        matches: STATIC_MATCHES['p3-redemption']
    },

    // --- PHASE 4: FINALS (6 Teams) ---
    'p4-final': {
        id: 'p4-final',
        phase: 4,
        name: 'Grand Finals',
        teamIds: ['t1', 't3', 't13', 't2', 't7', 't14'],
        matches: STATIC_MATCHES['p4-final']
    }
};

// Points logic: 1st=6, 2nd=5, ..., 6th=1
export const PLACE_POINTS: Record<number, number> = {
    1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1
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
    const history: { gameNumber: number, placement: number, champions?: [string, string, string] }[] = [];

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
