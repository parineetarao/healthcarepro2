"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", appointments: 8, completed: 7 },
  { day: "Tue", appointments: 12, completed: 11 },
  { day: "Wed", appointments: 10, completed: 9 },
  { day: "Thu", appointments: 15, completed: 14 },
  { day: "Fri", appointments: 13, completed: 12 },
  { day: "Sat", appointments: 6, completed: 6 },
  { day: "Sun", appointments: 3, completed: 3 },
]

export function AppointmentChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Weekly Appointments</CardTitle>
        <CardDescription>Scheduled vs completed appointments this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="day" className="text-muted-foreground" fontSize={12} />
            <YAxis className="text-muted-foreground" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="appointments" fill="hsl(var(--primary))" name="Scheduled" radius={[4, 4, 0, 0]} />
            <Bar dataKey="completed" fill="hsl(var(--secondary))" name="Completed" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
