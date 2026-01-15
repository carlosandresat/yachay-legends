"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GROUPS, TEAMS, getTeamStats, PHASE_NAMES } from "@/lib/tournament-db";
import { GroupStandingsTable } from "@/components/tournament/group-standings-table";
import { TournamentFormatInfo } from "@/components/tournament/tournament-format-info";

export function TournamentView() {
    const groupKeys = Object.keys(GROUPS);
    const phases = Array.from(new Set(groupKeys.map(key => GROUPS[key].phase))).sort((a, b) => a - b);

    return (
        <Tabs defaultValue={phases[0].toString()} className="w-full">
            <div className="flex items-center justify-between mb-6 gap-4">
                <TabsList className="w-full h-auto flex-wrap justify-start">
                    {phases.map((phase) => (
                        <TabsTrigger key={phase} value={phase.toString()} className="py-2">
                            {PHASE_NAMES[phase] || `Phase ${phase}`}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TournamentFormatInfo />
            </div>

            {phases.map((phase) => {
                const phaseGroups = groupKeys.filter(key => GROUPS[key].phase === phase);

                return (
                    <TabsContent key={phase} value={phase.toString()} className="space-y-4">
                        <Tabs defaultValue={phaseGroups[0]} className="w-full">
                            <TabsList className="w-full h-auto flex-wrap justify-start bg-muted/50 p-1">
                                {phaseGroups.map((key) => (
                                    <TabsTrigger key={key} value={key} className="flex-1">
                                        {GROUPS[key].name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {phaseGroups.map((key) => {
                                const group = GROUPS[key];
                                // Calculate stats for all teams in the group
                                const teamStats = group.teamIds.map(teamId => {
                                    const team = TEAMS[teamId];
                                    const stats = getTeamStats(group.id, teamId);
                                    return { team, stats };
                                });

                                // Sort by points descending
                                teamStats.sort((a, b) => b.stats.points - a.stats.points);

                                return (
                                    <TabsContent key={key} value={key} className="mt-4 border rounded-md">
                                        <GroupStandingsTable group={group} teamStats={teamStats} />
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
                    </TabsContent>
                );
            })}
        </Tabs>
    );
}
