"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Team, PLACE_POINTS } from "@/lib/tournament-db"

type TeamStats = {
    team: Team
    stats: {
        history: {
            gameNumber: number;
            placement: number;
        }[];
    }
}

interface RankHistoryChartProps {
    data: TeamStats[]
}

export function RankHistoryChart({ data }: RankHistoryChartProps) {
    // Shared Data Prep
    const games = Array.from(new Set(data.flatMap(d => d.stats.history.map(h => h.gameNumber)))).sort((a, b) => a - b);

    // --- Per Game Data ---
    const perGameChartData = games.map(gameNum => {
        const entry: any = { game: `Game ${gameNum}` };
        data.forEach(item => {
            const match = item.stats.history.find(h => h.gameNumber === gameNum);
            if (match) {
                entry[item.team.id] = match.placement;
            }
        });
        return entry;
    });

    const firstGameNum = games[0];
    const initialRankMapPerGame = new Map<number, string>();
    if (firstGameNum !== undefined) {
        data.forEach(item => {
            const match = item.stats.history.find(h => h.gameNumber === firstGameNum);
            if (match) {
                initialRankMapPerGame.set(match.placement, item.team.name);
            }
        });
    }


    // --- Accumulative Data ---
    // Track running points for each team
    const teamRunningPoints = new Map<string, number>();
    data.forEach(t => teamRunningPoints.set(t.team.id, 0));

    const accumulativeChartData = games.map(gameNum => {
        const entry: any = { game: `Game ${gameNum}` };

        // Update points for this game
        data.forEach(item => {
            const match = item.stats.history.find(h => h.gameNumber === gameNum);
            if (match) {
                const points = PLACE_POINTS[match.placement] || 0;
                const current = teamRunningPoints.get(item.team.id) || 0;
                teamRunningPoints.set(item.team.id, current + points);
            }
        });

        // Determine ranks based on current total points
        const sortedTeams = Array.from(teamRunningPoints.entries())
            .sort((a, b) => b[1] - a[1]); // Descending points

        // Map rank (index + 1) to team
        sortedTeams.forEach(([teamId, _points], index) => {
            entry[teamId] = index + 1;
        });

        return entry;
    });

    // Calculate initial ranks for Accumulative (Game 1 should match Per Game roughly, but derived from points)
    // Actually for Game 1, points determines rank directly.
    const initialRankMapAccumulative = new Map<number, string>();
    if (accumulativeChartData.length > 0) {
        const firstEntry = accumulativeChartData[0];
        data.forEach(item => {
            const rank = firstEntry[item.team.id];
            if (rank) {
                initialRankMapAccumulative.set(rank, item.team.name);
            }
        });
    }


    // Generate Chart Config (Shared)
    const chartConfig: ChartConfig = {};
    data.forEach((item, index) => {
        chartConfig[item.team.id] = {
            label: item.team.name,
            color: `var(--chart-${(index % 5) + 1})`,
        };
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Rank Trajectory</CardTitle>
                <CardDescription>Visualizing movements across games (Lower is Better)</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="accumulative" className="w-full">
                    <TabsList className="mb-4">
                        <TabsTrigger value="accumulative">Accumulative</TabsTrigger>
                        <TabsTrigger value="per-game">Per Game</TabsTrigger>
                    </TabsList>

                    <TabsContent value="accumulative">
                        <GenericRankChart
                            data={data}
                            chartData={accumulativeChartData}
                            chartConfig={chartConfig}
                            initialRankMap={initialRankMapAccumulative}
                        />
                    </TabsContent>

                    <TabsContent value="per-game">
                        <GenericRankChart
                            data={data}
                            chartData={perGameChartData}
                            chartConfig={chartConfig}
                            initialRankMap={initialRankMapPerGame}
                        />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

function GenericRankChart({
    data,
    chartData,
    chartConfig,
    initialRankMap
}: {
    data: TeamStats[],
    chartData: any[],
    chartConfig: ChartConfig,
    initialRankMap: Map<number, string>
}) {
    return (
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                    top: 12,
                    bottom: 12
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="game"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                {/* Left Y-Axis: Team Names at their starting rank */}
                <YAxis
                    yAxisId="left"
                    reversed
                    domain={[1, 8]}
                    tickCount={8}
                    tickLine={false}
                    axisLine={false}
                    orientation="left"
                    width={100}
                    tickFormatter={(value) => initialRankMap.get(value) || ""}
                    interval={0}
                />
                {/* Right Y-Axis: Ranks (1-8) */}
                <YAxis
                    yAxisId="right"
                    reversed
                    domain={[1, 8]}
                    tickCount={8}
                    tickLine={false}
                    axisLine={false}
                    orientation="right"
                    width={30}
                />

                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                {/* Render a Line for each team */}
                {data.map((item) => (
                    <Line
                        key={item.team.id}
                        dataKey={item.team.id}
                        type="monotone"
                        stroke={`var(--color-${item.team.id})`}
                        yAxisId="right"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                ))}
            </LineChart>
        </ChartContainer>
    );
}
