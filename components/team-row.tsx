"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function TeamRow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <TableCell className="text-center">1</TableCell>
        <TableCell>Equipo 2</TableCell>
        <TableCell className="text-center">8</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3}>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Match #1</CardTitle>
                      <Badge className="font-bold">1er lugar</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-evenly">
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Teemo.png"
                            alt="Player1 Champion"
                          />
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Ashe.png"
                            alt="Player2 Champion"
                          />
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Match #2</CardTitle>
                      <Badge className="font-bold">1er lugar</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-evenly">
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Teemo.png"
                            alt="Player1 Champion"
                          />
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Ashe.png"
                            alt="Player2 Champion"
                          />
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Match #3</CardTitle>
                      <Badge className="font-bold">1er lugar</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-evenly">
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Teemo.png"
                            alt="Player1 Champion"
                          />
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Ashe.png"
                            alt="Player2 Champion"
                          />
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Match #4</CardTitle>
                      <Badge className="font-bold">1er lugar</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-evenly">
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Teemo.png"
                            alt="Player1 Champion"
                          />
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Ashe.png"
                            alt="Player2 Champion"
                          />
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Match #5</CardTitle>
                      <Badge className="font-bold">1er lugar</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-evenly">
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Teemo.png"
                            alt="Player1 Champion"
                          />
                          <AvatarFallback>P1</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Avatar className="size-10">
                          <AvatarImage
                            src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Ashe.png"
                            alt="Player2 Champion"
                          />
                          <AvatarFallback>P2</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Jugador 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </TableCell>
      </TableRow>
    </>
  );
}
