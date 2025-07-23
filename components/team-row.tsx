"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                  <CardContent className="text-wrap">
                    Aquí van los detalles del equipo, como jugadores,
                    estadísticas, etc.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Match #2</CardTitle>
                  </CardHeader>
                  <CardContent className="text-wrap">
                    Aquí van los detalles del equipo, como jugadores,
                    estadísticas, etc.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Match #3</CardTitle>
                  </CardHeader>
                  <CardContent className="text-wrap">
                    Aquí van los detalles del equipo, como jugadores,
                    estadísticas, etc.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Match #4</CardTitle>
                  </CardHeader>
                  <CardContent className="text-wrap">
                    Aquí van los detalles del equipo, como jugadores,
                    estadísticas, etc.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Match #5</CardTitle>
                  </CardHeader>
                  <CardContent className="text-wrap">
                    Aquí van los detalles del equipo, como jugadores,
                    estadísticas, etc.
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
