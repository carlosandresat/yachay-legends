"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";

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
              <p className="text-sm text-muted-foreground text-wrap">
                Detalles del equipo: Aquí puedes agregar más información sobre
                el equipo, como sus jugadores, estadísticas, etc.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </TableCell>
      </TableRow>
    </>
  );
}
