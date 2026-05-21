"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TeamRow } from "@/components/tournament/team-row";
import { Group, Team } from "@/lib/tournament-db";

type TeamStats = {
    points: number;
    wins: number;
    matchesPlayed: number;
    history: {
        gameNumber: number;
        placement: number;
        champions?: [string, string, string];
    }[];
};

interface GroupStandingsTableProps {
    group: Group;
    teamStats: { team: Team; stats: TeamStats }[];
}

export function GroupStandingsTable({ group, teamStats }: GroupStandingsTableProps) {
    const formatInfo = getFormatInfo(group);

    return (
        <Table>
            <TableCaption>
                Details for {group.name} - {formatInfo}
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50px] text-center">#</TableHead>
                    <TableHead className="w-full">Team</TableHead>
                    <TableHead className="text-center">Points</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {teamStats.map((item, index) => (
                    <TeamRow
                        key={item.team.id}
                        rank={index + 1}
                        team={item.team}
                        stats={item.stats}
                    />
                ))}
                {teamStats.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground h-24">
                            No teams in this group yet.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

function getFormatInfo(group: Group): string {
    switch (group.phase) {
        case 0: // Play-ins
            return "Top 3 advance to Group Stage";
        case 1: // Group Stage
            return "Top 3 → Upper Bracket, Bot 3 → Lower Bracket";
        case 2: // Bracket Stage
            if (group.name.includes("Upper")) {
                return "Top 3 → Grand Finals, Bot 3 → Redemption";
            }
            return "Top 3 → Redemption, Bot 3 → Eliminated";
        case 3: // Redemption
            return "Top 3 → Grand Finals, Bot 3 → Eliminated";
        case 4: // Grand Finals
            return "Top 1 → Champion";
        default:
            return "Top 3 advance";
    }
}
