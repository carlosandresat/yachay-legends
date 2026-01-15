import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TeamRow } from "@/components/team-row";
import { GROUPS, TEAMS, getTeamStats, PHASE_NAMES } from "@/lib/tournament-db";

export function ArenaGroupsStandings() {
  const groupKeys = Object.keys(GROUPS);
  const phases = Array.from(new Set(groupKeys.map(key => GROUPS[key].phase))).sort((a, b) => a - b);

  return (
    <Tabs defaultValue={phases[0].toString()} className="w-full">
      <div className="flex items-center justify-between">
        <TabsList className="w-full h-auto flex-wrap justify-start">
          {phases.map((phase) => (
            <TabsTrigger key={phase} value={phase.toString()} className="py-2">
              {PHASE_NAMES[phase] || `Phase ${phase}`}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {phases.map((phase) => {
        const phaseGroups = groupKeys.filter(key => GROUPS[key].phase === phase);

        return (
          <TabsContent key={phase} value={phase.toString()} className="space-y-4">
            <Tabs defaultValue={phaseGroups[0]} className="w-full">
              <TabsList className="w-full">
                {phaseGroups.map((key) => (
                  <TabsTrigger key={key} value={key}>{GROUPS[key].name}</TabsTrigger>
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
                  <TabsContent key={key} value={key}>
                    <Table>
                      <TableCaption>
                        Details for {group.name} - Top 4 advance
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
