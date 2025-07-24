"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TeamRow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <TableCell>Equipo 2</TableCell>
        <TableCell className="text-center">8</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Match #1</CardTitle>
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
                    <CardTitle className="text-sm">Match #2</CardTitle>
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
                    <CardTitle className="text-sm">Match #3</CardTitle>
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
                    <CardTitle className="text-sm">Match #4</CardTitle>
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
                    <CardTitle className="text-sm">Match #5</CardTitle>
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
