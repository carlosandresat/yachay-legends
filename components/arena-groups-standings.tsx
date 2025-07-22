import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
        <p>Aquí los resultados del grupo A</p>
      </TabsContent>
      <TabsContent value="group-b">
        <p>Aquí los resultados del grupo B</p>
      </TabsContent>
      <TabsContent value="group-c">
        <p>Aquí los resultados del grupo C</p>
      </TabsContent>
      <TabsContent value="group-d">
        <p>Aquí los resultados del grupo D</p>
      </TabsContent>
    </Tabs>
  )
}