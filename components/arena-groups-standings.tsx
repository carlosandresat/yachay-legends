import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
          <TableCaption>Click en cada equipo para ver más detalles</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Equipo 1</TableCell>
              <TableCell className="text-center">10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 2</TableCell>
              <TableCell className="text-center">8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 3</TableCell>
              <TableCell className="text-center">6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 4</TableCell>
              <TableCell className="text-center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 5</TableCell>
                <TableCell className="text-center">2</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Equipo 6</TableCell>
                <TableCell className="text-center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 7</TableCell>
              <TableCell className="text-center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 8</TableCell>
              <TableCell className="text-center">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-b">
        <Table>
          <TableCaption>Click en cada equipo para ver más detalles</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Equipo 1</TableCell>
              <TableCell className="text-center">12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 2</TableCell>
              <TableCell className="text-center">11</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 3</TableCell>
              <TableCell className="text-center">9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 4</TableCell>
              <TableCell className="text-center">8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 5</TableCell>
                <TableCell className="text-center">6</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Equipo 6</TableCell>
                <TableCell className="text-center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 7</TableCell>
              <TableCell className="text-center">3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 8</TableCell>
              <TableCell className="text-center">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-c">
        <Table>
          <TableCaption>Click en cada equipo para ver más detalles</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Equipo 1</TableCell>
              <TableCell className="text-center">11</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 2</TableCell>
              <TableCell className="text-center">9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 3</TableCell>
              <TableCell className="text-center">7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 4</TableCell>
              <TableCell className="text-center">6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 5</TableCell>
                <TableCell className="text-center">5</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Equipo 6</TableCell>
                <TableCell className="text-center">3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 7</TableCell>
              <TableCell className="text-center">2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 8</TableCell>
              <TableCell className="text-center">1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="group-d">
        <Table>
          <TableCaption>Click en cada equipo para ver más detalles</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Equipo</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Equipo 1</TableCell>
              <TableCell className="text-center">10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 2</TableCell>
              <TableCell className="text-center">8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 3</TableCell>
              <TableCell className="text-center">6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 4</TableCell>
              <TableCell className="text-center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 5</TableCell>
                <TableCell className="text-center">2</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Equipo 6</TableCell>
                <TableCell className="text-center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 7</TableCell>
              <TableCell className="text-center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Equipo 8</TableCell>
              <TableCell className="text-center">0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  )
}