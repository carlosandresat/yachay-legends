"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, ArrowDown, ArrowRight } from "lucide-react";

export function TournamentFormatInfo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Info className="size-4" />
                    Format Info
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Tournament Format & Advancement</DialogTitle>
                    <DialogDescription>
                        Visual guide to how teams progress from the 32-team Play-ins to the Grand Finals.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-6 py-4 items-center">

                    {/* Phase 0 */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgePhase phase={0} />
                            <span className="font-bold">Play-ins (32 Teams)</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <GroupBox name="Group A" detail="8 Teams" advance="Top 4" color="bg-muted" />
                            <GroupBox name="Group B" detail="8 Teams" advance="Top 4" color="bg-muted" />
                            <GroupBox name="Group C" detail="8 Teams" advance="Top 4" color="bg-muted" />
                            <GroupBox name="Group D" detail="8 Teams" advance="Top 4" color="bg-muted" />
                        </div>
                    </div>

                    <ArrowDown className="text-muted-foreground" />

                    {/* Phase 1 */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgePhase phase={1} />
                            <span className="font-bold">Group Stage (16 Teams)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center text-xs">
                            <div className="border rounded p-2 bg-blue-50/10 border-blue-200/20">
                                <div className="font-bold mb-1">Main Group A</div>
                                <div className="flex justify-between px-2 text-[10px] text-muted-foreground">
                                    <span>Top 4 from A</span>
                                    <span>Top 4 from B</span>
                                </div>
                            </div>
                            <div className="border rounded p-2 bg-blue-50/10 border-blue-200/20">
                                <div className="font-bold mb-1">Main Group B</div>
                                <div className="flex justify-between px-2 text-[10px] text-muted-foreground">
                                    <span>Top 4 from C</span>
                                    <span>Top 4 from D</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 w-full gap-4 text-center">
                        <div className="flex justify-center"><ArrowDown className="text-muted-foreground" /></div>
                        <div className="flex justify-center"><ArrowDown className="text-muted-foreground" /></div>
                    </div>

                    {/* Phase 2 */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgePhase phase={2} />
                            <span className="font-bold">Bracket Stage (16 Teams)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center text-xs">
                            {/* Upper */}
                            <div className="border rounded p-3 bg-green-50/10 border-green-200/20 space-y-2 relative">
                                <div className="font-bold text-green-500">Upper Bracket (8)</div>
                                <div className="text-[10px] text-muted-foreground">Top 4 from A & B</div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <div className="p-1 bg-green-500/20 rounded">Top 4 → Final</div>
                                    <div className="p-1 bg-orange-500/20 rounded">Bot 4 → Redemption</div>
                                </div>
                            </div>
                            {/* Lower */}
                            <div className="border rounded p-3 bg-red-50/10 border-red-200/20 space-y-2 relative">
                                <div className="font-bold text-red-500">Lower Bracket (8)</div>
                                <div className="text-[10px] text-muted-foreground">Bot 4 from A & B</div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <div className="p-1 bg-orange-500/20 rounded">Top 4 → Redemption</div>
                                    <div className="p-1 bg-muted rounded text-muted-foreground">Bot 4 → Eliminated</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ArrowDown className="text-muted-foreground" />

                    {/* Phase 3 */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgePhase phase={3} />
                            <span className="font-bold">Redemption (8 Teams)</span>
                        </div>
                        <div className="border rounded p-3 text-center text-xs bg-orange-50/10 border-orange-200/20 w-1/2 mx-auto">
                            <div className="font-bold text-orange-400">Redemption Group</div>
                            <div className="text-[10px] text-muted-foreground mb-2">Bot 4 (Upper) + Top 4 (Lower)</div>
                            <div className="p-1 bg-purple-500/20 rounded mx-auto w-3/4">Top 4 → Final</div>
                        </div>
                    </div>

                    <ArrowDown className="text-muted-foreground" />

                    {/* Phase 4 */}
                    <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <BadgePhase phase={4} />
                            <span className="font-bold">Grand Finals (8 Teams)</span>
                        </div>
                        <div className="border rounded p-4 text-center text-xs bg-purple-50/10 border-purple-200/20 w-1/2 mx-auto ring-1 ring-purple-500">
                            <div className="font-bold text-purple-400 text-sm mb-1">Finals Group</div>
                            <div className="text-[10px] text-muted-foreground">Top 4 (Upper) + Top 4 (Redemption)</div>
                            <div className="mt-2 font-bold text-lg">👑 1 Winner</div>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
}

function BadgePhase({ phase }: { phase: number }) {
    return <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded">P{phase}</span>
}

function GroupBox({ name, detail, advance, color }: { name: string, detail: string, advance: string, color: string }) {
    return (
        <div className={`border rounded p-2 flex flex-col items-center justify-center h-full ${color}`}>
            <div className="font-bold">{name}</div>
            <div className="text-[10px] text-muted-foreground">{detail}</div>
            <div className="text-[10px] font-medium text-primary mt-1">Addv: {advance}</div>
        </div>
    )
}
