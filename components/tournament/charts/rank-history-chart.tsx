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
import { Team } from "@/lib/tournament-db"

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
    // Transform data: [{ game: "Game 1", t1: 1, t2: 4 }, ...]
    const games = Array.from(new Set(data.flatMap(d => d.stats.history.map(h => h.gameNumber)))).sort((a, b) => a - b);

    const chartData = games.map(gameNum => {
        const entry: any = { game: `Game ${gameNum}` };
        data.forEach(item => {
            const match = item.stats.history.find(h => h.gameNumber === gameNum);
            if (match) {
                entry[item.team.id] = match.placement;
            }
        });
        return entry;
    });

    // Generate Chart Config
    const chartConfig: ChartConfig = {};
    data.forEach((item, index) => {
        chartConfig[item.team.id] = {
            label: item.team.name,
            color: `var(--chart-${(index % 5) + 1})`,
        };
    });

    // Calculate initial ranks for Left Y-Axis labels
    const firstGameNum = games[0];
    const initialRankMap = new Map<number, string>();
    if (firstGameNum !== undefined) {
        data.forEach(item => {
            const match = item.stats.history.find(h => h.gameNumber === firstGameNum);
            if (match) {
                initialRankMap.set(match.placement, item.team.name);
            }
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Rank Trajectory</CardTitle>
                <CardDescription>Visualizing movements across games (Lower is Better)</CardDescription>
            </CardHeader>
            <CardContent>
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
                            interval={0} // Force show all ticks
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
            </CardContent>
        </Card>
    )
}
