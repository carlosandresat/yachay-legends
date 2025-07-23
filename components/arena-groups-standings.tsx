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

export function ArenaGroupsStandings() {
  return (
    <Tabs defaultValue="group-a" className="w-full">
      <TabsList>
        <TabsTrigger value="group-a">Grupo A</TabsTrigger>
        <TabsTrigger value="group-b">Grupo B</TabsTrigger>
        <TabsTrigger value="group-c">Grupo C</TabsTrigger>
        <TabsTrigger value="group-d">Grupo D</TabsTrigger>
      </TabsList>
      <TabsContent value="group-a">
        <Table>
          <TableCaption>
            Click en cada equipo para ver más detalles
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-b">
        <Table>
          <TableCaption>
            Click en cada equipo para ver más detalles
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-c">
        <Table>
          <TableCaption>
            Click en cada equipo para ver más detalles
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-d">
        <Table>
          <TableCaption>
            Click en cada equipo para ver más detalles
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
            <TeamRow />
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
