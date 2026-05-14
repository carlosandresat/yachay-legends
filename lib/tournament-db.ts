
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
                { teamId: 't1', placement: 1, champions: ['Ahri', 'Vi'] }, { teamId: 't2', placement: 2, champions: ['Xayah', 'Rakan'] }, { teamId: 't3', placement: 3, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't4', placement: 4, champions: ['MissFortune', 'Amumu'] },
                { teamId: 't5', placement: 5, champions: ['Jax', 'Fiora'] }, { teamId: 't6', placement: 6, champions: ['Kennen', 'Zac'] }, { teamId: 't7', placement: 7, champions: ['Samira', 'Rell'] }, { teamId: 't8', placement: 8, champions: ['Sivir', 'Yuumi'] }
            ]
        },
        {
            id: 'p0-a-m2', gameNumber: 2, placements: [
                { teamId: 't2', placement: 1, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't1', placement: 2, champions: ['Samira', 'Rell'] }, { teamId: 't4', placement: 3, champions: ['Viktor', 'Viego'] }, { teamId: 't3', placement: 4, champions: ['Ezreal', 'Karma'] },
                { teamId: 't6', placement: 5, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't5', placement: 6, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't8', placement: 7, champions: ['Vayne', 'Alistar'] }, { teamId: 't7', placement: 8, champions: ['Kennen', 'Zac'] }
            ]
        },
        {
            id: 'p0-a-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Gangplank', 'Karthus'] }, { teamId: 't3', placement: 2, champions: ['MissFortune', 'Amumu'] }, { teamId: 't2', placement: 3, champions: ['Rumble', 'JarvanIV'] }, { teamId: 't4', placement: 4, champions: ['Xayah', 'Rakan'] },
                { teamId: 't5', placement: 5, champions: ['Gnar', 'Kindred'] }, { teamId: 't7', placement: 6, champions: ['Lulu', 'Jinx'] }, { teamId: 't6', placement: 7, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't8', placement: 8, champions: ['Thresh', 'Draven'] }
            ]
        },
        {
            id: 'p0-a-m4', gameNumber: 4, placements: [
                { teamId: 't3', placement: 1, champions: ['Tristana', 'Leona'] }, { teamId: 't4', placement: 2, champions: ['Thresh', 'Draven'] }, { teamId: 't1', placement: 3, champions: ['Caitlyn', 'Lux'] }, { teamId: 't2', placement: 4, champions: ['Lulu', 'Jinx'] },
                { teamId: 't7', placement: 5, champions: ['MissFortune', 'Amumu'] }, { teamId: 't6', placement: 6, champions: ['Darius', 'Garen'] }, { teamId: 't5', placement: 7, champions: ['Akali', 'XinZhao'] }, { teamId: 't8', placement: 8, champions: ['Azir', 'Sejuani'] }
            ]
        }
    ],
    'p0-b': [
        {
            id: 'p0-b-m1', gameNumber: 1, placements: [
                { teamId: 't9', placement: 1, champions: ['MissFortune', 'Amumu'] }, { teamId: 't10', placement: 2, champions: ['Sett', 'Vi'] }, { teamId: 't11', placement: 3, champions: ['Akali', 'XinZhao'] }, { teamId: 't12', placement: 4, champions: ['Caitlyn', 'Lux'] },
                { teamId: 't13', placement: 5, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't14', placement: 6, champions: ['Azir', 'Sejuani'] }, { teamId: 't15', placement: 7, champions: ['Sivir', 'Yuumi'] }, { teamId: 't16', placement: 8, champions: ['MissFortune', 'Amumu'] }
            ]
        },
        {
            id: 'p0-b-m2', gameNumber: 2, placements: [
                { teamId: 't11', placement: 1, champions: ['Sett', 'Vi'] }, { teamId: 't9', placement: 2, champions: ['Caitlyn', 'Lux'] }, { teamId: 't12', placement: 3, champions: ['Azir', 'Sejuani'] }, { teamId: 't10', placement: 4, champions: ['Sivir', 'Yuumi'] },
                { teamId: 't14', placement: 5, champions: ['Riven', 'Aatrox'] }, { teamId: 't13', placement: 6, champions: ['Twitch', 'Taric'] }, { teamId: 't16', placement: 7, champions: ['Darius', 'Garen'] }, { teamId: 't15', placement: 8, champions: ['Sivir', 'Yuumi'] }
            ]
        },
        {
            id: 'p0-b-m3', gameNumber: 3, placements: [
                { teamId: 't10', placement: 1, champions: ['Aphelios', 'Thresh'] }, { teamId: 't12', placement: 2, champions: ['Yasuo', 'Malphite'] }, { teamId: 't9', placement: 3, champions: ['Renekton', 'Nidalee'] }, { teamId: 't11', placement: 4, champions: ['Orianna', 'JarvanIV'] },
                { teamId: 't13', placement: 5, champions: ['Gnar', 'Kindred'] }, { teamId: 't15', placement: 6, champions: ['Zoe', 'Nidalee'] }, { teamId: 't14', placement: 7, champions: ['Varus', 'Ashe'] }, { teamId: 't16', placement: 8, champions: ['Zed', 'Talon'] }
            ]
        },
        {
            id: 'p0-b-m4', gameNumber: 4, placements: [
                { teamId: 't9', placement: 1, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't11', placement: 2, champions: ['Darius', 'Garen'] }, { teamId: 't10', placement: 3, champions: ['Darius', 'Garen'] }, { teamId: 't12', placement: 4, champions: ['ChoGath', 'Nunu'] },
                { teamId: 't16', placement: 5, champions: ['MissFortune', 'Amumu'] }, { teamId: 't14', placement: 6, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't13', placement: 7, champions: ['Sylas', 'Gragas'] }, { teamId: 't15', placement: 8, champions: ['Varus', 'Ashe'] }
            ]
        }
    ],
    'p0-c': [
        {
            id: 'p0-c-m1', gameNumber: 1, placements: [
                { teamId: 't17', placement: 1, champions: ['Samira', 'Rell'] }, { teamId: 't18', placement: 2, champions: ['Kennen', 'Zac'] }, { teamId: 't19', placement: 3, champions: ['Yasuo', 'Malphite'] }, { teamId: 't20', placement: 4, champions: ['Rumble', 'JarvanIV'] },
                { teamId: 't21', placement: 5, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't22', placement: 6, champions: ['Zeri', 'Yuumi'] }, { teamId: 't23', placement: 7, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't24', placement: 8, champions: ['Zoe', 'Nidalee'] }
            ]
        },
        {
            id: 'p0-c-m2', gameNumber: 2, placements: [
                { teamId: 't18', placement: 1, champions: ['Jhin', 'Xerath'] }, { teamId: 't17', placement: 2, champions: ['LeBlanc', 'Graves'] }, { teamId: 't20', placement: 3, champions: ['MissFortune', 'Amumu'] }, { teamId: 't19', placement: 4, champions: ['Sion', 'Lillia'] },
                { teamId: 't22', placement: 5, champions: ['Lissandra', 'Trundle'] }, { teamId: 't21', placement: 6, champions: ['Malphite', 'Yasuo'] }, { teamId: 't24', placement: 7, champions: ['Lulu', 'Jinx'] }, { teamId: 't23', placement: 8, champions: ['Rumble', 'JarvanIV'] }
            ]
        },
        {
            id: 'p0-c-m3', gameNumber: 3, placements: [
                { teamId: 't17', placement: 1, champions: ['Malphite', 'Yasuo'] }, { teamId: 't19', placement: 2, champions: ['Syndra', 'LeeSin'] }, { teamId: 't18', placement: 3, champions: ['Akali', 'XinZhao'] }, { teamId: 't20', placement: 4, champions: ['Varus', 'Ashe'] },
                { teamId: 't23', placement: 5, champions: ['Zed', 'Talon'] }, { teamId: 't21', placement: 6, champions: ['LeBlanc', 'Graves'] }, { teamId: 't22', placement: 7, champions: ['Gangplank', 'Karthus'] }, { teamId: 't24', placement: 8, champions: ['Viktor', 'Viego'] }
            ]
        },
        {
            id: 'p0-c-m4', gameNumber: 4, placements: [
                { teamId: 't20', placement: 1, champions: ['Mordekaiser', 'Viego'] }, { teamId: 't18', placement: 2, champions: ['Kennen', 'Zac'] }, { teamId: 't17', placement: 3, champions: ['Xayah', 'Rakan'] }, { teamId: 't19', placement: 4, champions: ['Twitch', 'Taric'] },
                { teamId: 't21', placement: 5, champions: ['Senna', 'TahmKench'] }, { teamId: 't24', placement: 6, champions: ['Senna', 'TahmKench'] }, { teamId: 't23', placement: 7, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't22', placement: 8, champions: ['Zoe', 'Nidalee'] }
            ]
        }
    ],
    'p0-d': [
        {
            id: 'p0-d-m1', gameNumber: 1, placements: [
                { teamId: 't25', placement: 1, champions: ['Yasuo', 'Malphite'] }, { teamId: 't26', placement: 2, champions: ['Ahri', 'Vi'] }, { teamId: 't27', placement: 3, champions: ['Tristana', 'Leona'] }, { teamId: 't28', placement: 4, champions: ['Taliyah', 'Pantheon'] },
                { teamId: 't29', placement: 5, champions: ['Jhin', 'Xerath'] }, { teamId: 't30', placement: 6, champions: ['Samira', 'Rell'] }, { teamId: 't31', placement: 7, champions: ['Sion', 'Lillia'] }, { teamId: 't32', placement: 8, champions: ['Sett', 'Vi'] }
            ]
        },
        {
            id: 'p0-d-m2', gameNumber: 2, placements: [
                { teamId: 't26', placement: 1, champions: ['Lucian', 'Braum'] }, { teamId: 't25', placement: 2, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't28', placement: 3, champions: ['Zoe', 'Nidalee'] }, { teamId: 't27', placement: 4, champions: ['Kaisa', 'Nautilus'] },
                { teamId: 't30', placement: 5, champions: ['Kennen', 'Zac'] }, { teamId: 't29', placement: 6, champions: ['Mordekaiser', 'Viego'] }, { teamId: 't32', placement: 7, champions: ['Viktor', 'Viego'] }, { teamId: 't31', placement: 8, champions: ['Xayah', 'Rakan'] }
            ]
        },
        {
            id: 'p0-d-m3', gameNumber: 3, placements: [
                { teamId: 't25', placement: 1, champions: ['Sion', 'Lillia'] }, { teamId: 't27', placement: 2, champions: ['Gangplank', 'Karthus'] }, { teamId: 't26', placement: 3, champions: ['Twitch', 'Taric'] }, { teamId: 't28', placement: 4, champions: ['Sivir', 'Yuumi'] },
                { teamId: 't31', placement: 5, champions: ['Irelia', 'Hecarim'] }, { teamId: 't29', placement: 6, champions: ['Jhin', 'Xerath'] }, { teamId: 't30', placement: 7, champions: ['Jayce', 'Elise'] }, { teamId: 't32', placement: 8, champions: ['Zed', 'Talon'] }
            ]
        },
        {
            id: 'p0-d-m4', gameNumber: 4, placements: [
                { teamId: 't27', placement: 1, champions: ['Gnar', 'Kindred'] }, { teamId: 't25', placement: 2, champions: ['LeBlanc', 'Graves'] }, { teamId: 't26', placement: 3, champions: ['Syndra', 'LeeSin'] }, { teamId: 't28', placement: 4, champions: ['Taliyah', 'Pantheon'] },
                { teamId: 't29', placement: 5, champions: ['Senna', 'TahmKench'] }, { teamId: 't32', placement: 6, champions: ['MissFortune', 'Amumu'] }, { teamId: 't30', placement: 7, champions: ['Zeri', 'Yuumi'] }, { teamId: 't31', placement: 8, champions: ['Darius', 'Garen'] }
            ]
        }
    ],

    // --- PHASE 1: GROUP STAGE ---
    'p1-1': [
        {
            id: 'p1-1-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['Darius', 'Garen'] }, { teamId: 't3', placement: 2, champions: ['Malphite', 'Yasuo'] }, { teamId: 't9', placement: 3, champions: ['Ezreal', 'Karma'] }, { teamId: 't4', placement: 4, champions: ['Varus', 'Ashe'] },
                { teamId: 't2', placement: 5, champions: ['Kalista', 'RenataGlasc'] }, { teamId: 't10', placement: 6, champions: ['Zoe', 'Nidalee'] }, { teamId: 't11', placement: 7, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't12', placement: 8, champions: ['Yone', 'Diana'] }
            ]
        },
        {
            id: 'p1-1-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['LeBlanc', 'Graves'] }, { teamId: 't1', placement: 2, champions: ['Sylas', 'Gragas'] }, { teamId: 't2', placement: 3, champions: ['Twitch', 'Taric'] }, { teamId: 't9', placement: 4, champions: ['Lissandra', 'Trundle'] },
                { teamId: 't4', placement: 5, champions: ['Irelia', 'Hecarim'] }, { teamId: 't11', placement: 6, champions: ['Vayne', 'Alistar'] }, { teamId: 't10', placement: 7, champions: ['Gangplank', 'Karthus'] }, { teamId: 't12', placement: 8, champions: ['Akali', 'XinZhao'] }
            ]
        },
        {
            id: 'p1-1-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Zoe', 'Nidalee'] }, { teamId: 't4', placement: 2, champions: ['Lucian', 'Braum'] }, { teamId: 't3', placement: 3, champions: ['Syndra', 'LeeSin'] }, { teamId: 't9', placement: 4, champions: ['Lulu', 'Jinx'] },
                { teamId: 't2', placement: 5, champions: ['Ornn', 'Trundle'] }, { teamId: 't10', placement: 6, champions: ['Lucian', 'Braum'] }, { teamId: 't12', placement: 7, champions: ['Sion', 'Lillia'] }, { teamId: 't11', placement: 8, champions: ['Orianna', 'JarvanIV'] }
            ]
        },
        {
            id: 'p1-1-m4', gameNumber: 4, placements: [
                { teamId: 't2', placement: 1, champions: ['LeBlanc', 'Graves'] }, { teamId: 't4', placement: 2, champions: ['Jhin', 'Xerath'] }, { teamId: 't11', placement: 3, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't1', placement: 4, champions: ['Viktor', 'Viego'] },
                { teamId: 't3', placement: 5, champions: ['Ezreal', 'Karma'] }, { teamId: 't9', placement: 6, champions: ['Varus', 'Ashe'] }, { teamId: 't12', placement: 7, champions: ['Sion', 'Lillia'] }, { teamId: 't10', placement: 8, champions: ['Orianna', 'JarvanIV'] }
            ]
        }
    ],
    'p1-2': [
        {
            id: 'p1-2-m1', gameNumber: 1, placements: [
                { teamId: 't17', placement: 1, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't18', placement: 2, champions: ['Sion', 'Lillia'] }, { teamId: 't19', placement: 3, champions: ['Senna', 'TahmKench'] }, { teamId: 't25', placement: 4, champions: ['Renekton', 'Nidalee'] },
                { teamId: 't20', placement: 5, champions: ['Xayah', 'Rakan'] }, { teamId: 't26', placement: 6, champions: ['Varus', 'Ashe'] }, { teamId: 't27', placement: 7, champions: ['Zoe', 'Nidalee'] }, { teamId: 't28', placement: 8, champions: ['Jax', 'Fiora'] }
            ]
        },
        {
            id: 'p1-2-m2', gameNumber: 2, placements: [
                { teamId: 't18', placement: 1, champions: ['Xayah', 'Rakan'] }, { teamId: 't20', placement: 2, champions: ['LeBlanc', 'Graves'] }, { teamId: 't17', placement: 3, champions: ['Vayne', 'Alistar'] }, { teamId: 't26', placement: 4, champions: ['Lissandra', 'Trundle'] },
                { teamId: 't19', placement: 5, champions: ['Irelia', 'Hecarim'] }, { teamId: 't25', placement: 6, champions: ['Ornn', 'Trundle'] }, { teamId: 't28', placement: 7, champions: ['Varus', 'Ashe'] }, { teamId: 't27', placement: 8, champions: ['Twitch', 'Taric'] }
            ]
        },
        {
            id: 'p1-2-m3', gameNumber: 3, placements: [
                { teamId: 't17', placement: 1, champions: ['MissFortune', 'Amumu'] }, { teamId: 't25', placement: 2, champions: ['Lucian', 'Braum'] }, { teamId: 't18', placement: 3, champions: ['Malphite', 'Yasuo'] }, { teamId: 't20', placement: 4, champions: ['Malphite', 'Yasuo'] },
                { teamId: 't19', placement: 5, champions: ['Kennen', 'Zac'] }, { teamId: 't27', placement: 6, champions: ['Renekton', 'Nidalee'] }, { teamId: 't28', placement: 7, champions: ['Ornn', 'Trundle'] }, { teamId: 't26', placement: 8, champions: ['Aphelios', 'Thresh'] }
            ]
        },
        {
            id: 'p1-2-m4', gameNumber: 4, placements: [
                { teamId: 't19', placement: 1, champions: ['Aphelios', 'Thresh'] }, { teamId: 't20', placement: 2, champions: ['Senna', 'TahmKench'] }, { teamId: 't26', placement: 3, champions: ['Irelia', 'Hecarim'] }, { teamId: 't17', placement: 4, champions: ['Yasuo', 'Malphite'] },
                { teamId: 't18', placement: 5, champions: ['Jax', 'Fiora'] }, { teamId: 't25', placement: 6, champions: ['Viktor', 'Viego'] }, { teamId: 't27', placement: 7, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't28', placement: 8, champions: ['Lucian', 'Braum'] }
            ]
        }
    ],

    // --- PHASE 2: BRACKETS ---
    'p2-upper': [
        {
            id: 'p2-upper-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['MissFortune', 'Amumu'] }, { teamId: 't3', placement: 2, champions: ['Zeri', 'Yuumi'] }, { teamId: 't17', placement: 3, champions: ['Zed', 'Talon'] }, { teamId: 't18', placement: 4, champions: ['Gnar', 'Kindred'] },
                { teamId: 't4', placement: 5, champions: ['Galio', 'Camille'] }, { teamId: 't19', placement: 6, champions: ['Syndra', 'LeeSin'] }, { teamId: 't20', placement: 7, champions: ['Malphite', 'Yasuo'] }, { teamId: 't2', placement: 8, champions: ['Zed', 'Talon'] }
            ]
        },
        {
            id: 'p2-upper-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['Ezreal', 'Karma'] }, { teamId: 't17', placement: 2, champions: ['Kalista', 'RenataGlasc'] }, { teamId: 't1', placement: 3, champions: ['Kennen', 'Zac'] }, { teamId: 't18', placement: 4, champions: ['MissFortune', 'Amumu'] },
                { teamId: 't2', placement: 5, champions: ['Azir', 'Sejuani'] }, { teamId: 't4', placement: 6, champions: ['Riven', 'Aatrox'] }, { teamId: 't20', placement: 7, champions: ['Kennen', 'Zac'] }, { teamId: 't19', placement: 8, champions: ['ChoGath', 'Nunu'] }
            ]
        },
        {
            id: 'p2-upper-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Gangplank', 'Karthus'] }, { teamId: 't18', placement: 2, champions: ['Malphite', 'Yasuo'] }, { teamId: 't3', placement: 3, champions: ['Twitch', 'Taric'] }, { teamId: 't17', placement: 4, champions: ['ChoGath', 'Nunu'] },
                { teamId: 't4', placement: 5, champions: ['Sylas', 'Gragas'] }, { teamId: 't20', placement: 6, champions: ['Lulu', 'Jinx'] }, { teamId: 't2', placement: 7, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't19', placement: 8, champions: ['Malphite', 'Yasuo'] }
            ]
        },
        {
            id: 'p2-upper-m4', gameNumber: 4, placements: [
                { teamId: 't17', placement: 1, champions: ['Xayah', 'Rakan'] }, { teamId: 't3', placement: 2, champions: ['Ahri', 'Vi'] }, { teamId: 't1', placement: 3, champions: ['Zeri', 'Yuumi'] }, { teamId: 't18', placement: 4, champions: ['Jayce', 'Elise'] },
                { teamId: 't2', placement: 5, champions: ['Vayne', 'Alistar'] }, { teamId: 't4', placement: 6, champions: ['Azir', 'Sejuani'] }, { teamId: 't19', placement: 7, champions: ['Sett', 'Vi'] }, { teamId: 't20', placement: 8, champions: ['Kennen', 'Zac'] }
            ]
        }
    ],
    'p2-lower': [
        {
            id: 'p2-lower-m1', gameNumber: 1, placements: [
                { teamId: 't9', placement: 1, champions: ['Renekton', 'Nidalee'] }, { teamId: 't11', placement: 2, champions: ['Ezreal', 'Karma'] }, { teamId: 't10', placement: 3, champions: ['Aphelios', 'Thresh'] }, { teamId: 't25', placement: 4, champions: ['Jhin', 'Xerath'] },
                { teamId: 't12', placement: 5, champions: ['Sylas', 'Gragas'] }, { teamId: 't26', placement: 6, champions: ['Lissandra', 'Trundle'] }, { teamId: 't27', placement: 7, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't28', placement: 8, champions: ['Irelia', 'Hecarim'] }
            ]
        },
        {
            id: 'p2-lower-m2', gameNumber: 2, placements: [
                { teamId: 't11', placement: 1, champions: ['Akali', 'XinZhao'] }, { teamId: 't9', placement: 2, champions: ['Syndra', 'LeeSin'] }, { teamId: 't25', placement: 3, champions: ['Varus', 'Ashe'] }, { teamId: 't10', placement: 4, champions: ['Azir', 'Sejuani'] },
                { teamId: 't12', placement: 5, champions: ['Samira', 'Rell'] }, { teamId: 't26', placement: 6, champions: ['Jax', 'Fiora'] }, { teamId: 't28', placement: 7, champions: ['Ezreal', 'Karma'] }, { teamId: 't27', placement: 8, champions: ['Galio', 'Camille'] }
            ]
        },
        {
            id: 'p2-lower-m3', gameNumber: 3, placements: [
                { teamId: 't9', placement: 1, champions: ['Darius', 'Garen'] }, { teamId: 't10', placement: 2, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't11', placement: 3, champions: ['Renekton', 'Nidalee'] }, { teamId: 't12', placement: 4, champions: ['Caitlyn', 'Lux'] },
                { teamId: 't25', placement: 5, champions: ['Twitch', 'Taric'] }, { teamId: 't26', placement: 6, champions: ['Zed', 'Talon'] }, { teamId: 't27', placement: 7, champions: ['Lucian', 'Braum'] }, { teamId: 't28', placement: 8, champions: ['Kaisa', 'Nautilus'] }
            ]
        },
        {
            id: 'p2-lower-m4', gameNumber: 4, placements: [
                { teamId: 't12', placement: 1, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't9', placement: 2, champions: ['MissFortune', 'Amumu'] }, { teamId: 't11', placement: 3, champions: ['Sivir', 'Yuumi'] }, { teamId: 't25', placement: 4, champions: ['Sivir', 'Yuumi'] },
                { teamId: 't10', placement: 5, champions: ['Rumble', 'JarvanIV'] }, { teamId: 't26', placement: 6, champions: ['Rumble', 'JarvanIV'] }, { teamId: 't28', placement: 7, champions: ['Malphite', 'Yasuo'] }, { teamId: 't27', placement: 8, champions: ['Sion', 'Lillia'] }
            ]
        }
    ],

    // --- PHASE 3: REDEMPTION ---
    'p3-redemption': [
        {
            id: 'p3-red', gameNumber: 1, placements: [
                { teamId: 't2', placement: 1, champions: ['Zed', 'Talon'] }, { teamId: 't4', placement: 2, champions: ['Thresh', 'Draven'] }, { teamId: 't9', placement: 3, champions: ['Sylas', 'Gragas'] }, { teamId: 't11', placement: 4, champions: ['Twitch', 'Taric'] },
                { teamId: 't19', placement: 5, champions: ['Gangplank', 'Karthus'] }, { teamId: 't20', placement: 6, champions: ['Jax', 'Fiora'] }, { teamId: 't10', placement: 7, champions: ['Zed', 'Talon'] }, { teamId: 't12', placement: 8, champions: ['Renekton', 'Nidalee'] }
            ]
        },
        {
            id: 'p3-red', gameNumber: 2, placements: [
                { teamId: 't9', placement: 1, champions: ['Aphelios', 'Thresh'] }, { teamId: 't2', placement: 2, champions: ['Malphite', 'Yasuo'] }, { teamId: 't4', placement: 3, champions: ['Yasuo', 'Malphite'] }, { teamId: 't11', placement: 4, champions: ['Zeri', 'Yuumi'] },
                { teamId: 't19', placement: 5, champions: ['Caitlyn', 'Lux'] }, { teamId: 't12', placement: 6, champions: ['Aphelios', 'Thresh'] }, { teamId: 't20', placement: 7, champions: ['ChoGath', 'Nunu'] }, { teamId: 't10', placement: 8, champions: ['Mordekaiser', 'Viego'] }
            ]
        },
        {
            id: 'p3-red', gameNumber: 3, placements: [
                { teamId: 't2', placement: 1, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't11', placement: 2, champions: ['Lissandra', 'Trundle'] }, { teamId: 't4', placement: 3, champions: ['Jax', 'Fiora'] }, { teamId: 't9', placement: 4, champions: ['Taliyah', 'Pantheon'] },
                { teamId: 't10', placement: 5, champions: ['Yone', 'Diana'] }, { teamId: 't19', placement: 6, champions: ['Zed', 'Talon'] }, { teamId: 't20', placement: 7, champions: ['Lissandra', 'Trundle'] }, { teamId: 't12', placement: 8, champions: ['Kaisa', 'Nautilus'] }
            ]
        },
        {
            id: 'p3-red', gameNumber: 4, placements: [
                { teamId: 't4', placement: 1, champions: ['Gnar', 'Kindred'] }, { teamId: 't2', placement: 2, champions: ['Ahri', 'Vi'] }, { teamId: 't9', placement: 3, champions: ['Zed', 'Talon'] }, { teamId: 't11', placement: 4, champions: ['Renekton', 'Nidalee'] },
                { teamId: 't19', placement: 5, champions: ['Yasuo', 'Malphite'] }, { teamId: 't12', placement: 6, champions: ['Azir', 'Sejuani'] }, { teamId: 't10', placement: 7, champions: ['ChoGath', 'Nunu'] }, { teamId: 't20', placement: 8, champions: ['Jhin', 'Xerath'] }
            ]
        }
    ],

    // --- PHASE 4: FINALS ---
    'p4-final': [
        {
            id: 'p4-final-m1', gameNumber: 1, placements: [
                { teamId: 't1', placement: 1, champions: ['KogMaw', 'Lulu'] }, { teamId: 't3', placement: 2, champions: ['Akali', 'XinZhao'] }, { teamId: 't17', placement: 3, champions: ['Ezreal', 'Karma'] }, { teamId: 't2', placement: 4, champions: ['Sylas', 'Gragas'] },
                { teamId: 't18', placement: 5, champions: ['Zed', 'Talon'] }, { teamId: 't4', placement: 6, champions: ['Darius', 'Garen'] }, { teamId: 't9', placement: 7, champions: ['Caitlyn', 'Lux'] }, { teamId: 't11', placement: 8, champions: ['Malphite', 'Yasuo'] }
            ]
        },
        {
            id: 'p4-final-m2', gameNumber: 2, placements: [
                { teamId: 't3', placement: 1, champions: ['Darius', 'Garen'] }, { teamId: 't1', placement: 2, champions: ['Thresh', 'Draven'] }, { teamId: 't2', placement: 3, champions: ['Lucian', 'Braum'] }, { teamId: 't17', placement: 4, champions: ['KogMaw', 'Lulu'] },
                { teamId: 't4', placement: 5, champions: ['Renekton', 'Nidalee'] }, { teamId: 't18', placement: 6, champions: ['Vayne', 'Alistar'] }, { teamId: 't11', placement: 7, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't9', placement: 8, champions: ['Samira', 'Rell'] }
            ]
        },
        {
            id: 'p4-final-m3', gameNumber: 3, placements: [
                { teamId: 't1', placement: 1, champions: ['Syndra', 'LeeSin'] }, { teamId: 't2', placement: 2, champions: ['Mordekaiser', 'Viego'] }, { teamId: 't3', placement: 3, champions: ['Sett', 'Vi'] }, { teamId: 't18', placement: 4, champions: ['KogMaw', 'Lulu'] },
                { teamId: 't17', placement: 5, champions: ['Rumble', 'JarvanIV'] }, { teamId: 't9', placement: 6, champions: ['Taliyah', 'Pantheon'] }, { teamId: 't4', placement: 7, champions: ['Akali', 'XinZhao'] }, { teamId: 't11', placement: 8, champions: ['Ezreal', 'Karma'] }
            ]
        },
        {
            id: 'p4-final-m4', gameNumber: 4, placements: [
                { teamId: 't2', placement: 1, champions: ['Zed', 'Talon'] }, { teamId: 't1', placement: 2, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't17', placement: 3, champions: ['Vayne', 'Alistar'] }, { teamId: 't3', placement: 4, champions: ['Azir', 'Sejuani'] },
                { teamId: 't4', placement: 5, champions: ['Zoe', 'Nidalee'] }, { teamId: 't18', placement: 6, champions: ['Rumble', 'JarvanIV'] }, { teamId: 't11', placement: 7, champions: ['Ahri', 'Vi'] }, { teamId: 't9', placement: 8, champions: ['Gnar', 'Kindred'] }
            ]
        },
        {
            id: 'p4-final-m5', gameNumber: 5, placements: [
                { teamId: 't1', placement: 1, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't2', placement: 2, champions: ['Vayne', 'Alistar'] }, { teamId: 't3', placement: 3, champions: ['Renekton', 'Nidalee'] }, { teamId: 't18', placement: 4, champions: ['Yone', 'Diana'] },
                { teamId: 't17', placement: 5, champions: ['Syndra', 'LeeSin'] }, { teamId: 't4', placement: 6, champions: ['Ezreal', 'Karma'] }, { teamId: 't9', placement: 7, champions: ['Gnar', 'Kindred'] }, { teamId: 't11', placement: 8, champions: ['Azir', 'Sejuani'] }
            ]
        },
        {
            id: 'p4-final-m6', gameNumber: 6, placements: [
                { teamId: 't1', placement: 1, champions: ['Renekton', 'Nidalee'] }, { teamId: 't3', placement: 2, champions: ['Kaisa', 'Nautilus'] }, { teamId: 't2', placement: 3, champions: ['Orianna', 'JarvanIV'] }, { teamId: 't17', placement: 4, champions: ['MissFortune', 'Amumu'] },
                { teamId: 't18', placement: 5, champions: ['Sion', 'Lillia'] }, { teamId: 't4', placement: 6, champions: ['Zeri', 'Yuumi'] }, { teamId: 't11', placement: 7, champions: ['ChoGath', 'Nunu'] }, { teamId: 't9', placement: 8, champions: ['Sion', 'Lillia'] }
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
