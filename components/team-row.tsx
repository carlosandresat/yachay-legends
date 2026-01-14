"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Team } from "@/lib/tournament-db";

type TeamStats = {
  points: number;
  wins: number;
  matchesPlayed: number;
  history: {
    gameNumber: number;
    placement: number;
    champions?: [string, string];
  }[];
};

interface TeamRowProps {
  rank: number;
  team: Team;
  stats: TeamStats;
}

export function TeamRow({ rank, team, stats }: TeamRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-muted/50 transition-colors">
        <TableCell className="text-center font-bold">{rank}</TableCell>
        <TableCell>
          <div className="flex flex-col">
            <span className="font-semibold">{team.name}</span>
            <span className="text-xs text-muted-foreground">{team.members.join(" & ")}</span>
          </div>
        </TableCell>
        <TableCell className="text-center text-lg font-bold">{stats.points}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} className="p-0 border-none">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent>
              <div className="p-4 bg-muted/20">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {stats.history.map((match) => (
                    <Card key={match.gameNumber} className="bg-card">
                      <CardHeader className="p-3 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm">Game #{match.gameNumber}</CardTitle>
                          <Badge variant={match.placement === 1 ? "default" : "secondary"}>
                            #{match.placement} Place
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        {match.champions ? (
                          <div className="flex items-center justify-evenly mt-2">
                            <div className="flex flex-col items-center">
                              <Avatar className="size-8">
                                <AvatarImage src={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${match.champions[0]}.png`} />
                                <AvatarFallback>?</AvatarFallback>
                              </Avatar>
                              <span className="text-[10px] truncate max-w-[50px]">{match.champions[0]}</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <Avatar className="size-8">
                                <AvatarImage src={`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${match.champions[1]}.png`} />
                                <AvatarFallback>?</AvatarFallback>
                              </Avatar>
                              <span className="text-[10px] truncate max-w-[50px]">{match.champions[1]}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-muted-foreground text-center mt-2">
                            No champion data
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                  {stats.history.length === 0 && (
                    <div className="col-span-full text-center text-muted-foreground text-sm py-4">
                      No matches played yet.
                    </div>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </TableCell>
      </TableRow>
    </>
  );
}
