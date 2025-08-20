"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", revenue: 18500, target: 20000 },
  { month: "Feb", revenue: 22000, target: 20000 },
  { month: "Mar", revenue: 19800, target: 20000 },
  { month: "Apr", revenue: 24500, target: 22000 },
  { month: "May", revenue: 26200, target: 22000 },
  { month: "Jun", revenue: 24800, target: 22000 },
]

export function RevenueChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Revenue Trends</CardTitle>
        <CardDescription>Monthly revenue vs targets for the past 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
            <YAxis className="text-muted-foreground" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "hsl(var(--muted-foreground))", strokeWidth: 2, r: 3 }}
              name="Target"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
