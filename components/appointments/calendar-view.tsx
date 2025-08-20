"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

type ViewType = "day" | "week" | "month"

interface Appointment {
  id: string
  patientName: string
  time: string
  duration: number
  type: string
  status: "upcoming" | "completed" | "canceled"
  doctor: string
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Smith",
    time: "09:00",
    duration: 30,
    type: "Check-up",
    status: "upcoming",
    doctor: "Dr. Johnson",
  },
  {
    id: "2",
    patientName: "Emily Davis",
    time: "10:30",
    duration: 45,
    type: "Follow-up",
    status: "upcoming",
    doctor: "Dr. Johnson",
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    time: "14:00",
    duration: 30,
    type: "Consultation",
    status: "completed",
    doctor: "Dr. Johnson",
  },
]

const statusColors = {
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  canceled: "bg-red-100 text-red-800 border-red-200",
}

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewType, setViewType] = useState<ViewType>("day")

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (viewType === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1))
    } else if (viewType === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7))
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1))
    }
    setCurrentDate(newDate)
  }

  const timeSlots = Array.from({ length: 18 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8
    const minute = i % 2 === 0 ? "00" : "30"
    return `${hour.toString().padStart(2, "0")}:${minute}`
  })

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Appointment Calendar</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="flex rounded-lg border border-border">
              {(["day", "week", "month"] as ViewType[]).map((view) => (
                <Button
                  key={view}
                  variant={viewType === view ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewType(view)}
                  className="capitalize"
                >
                  {view}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => navigateDate("prev")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-semibold">{formatDate(currentDate)}</h3>
            <Button variant="outline" size="sm" onClick={() => navigateDate("next")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {viewType === "day" && (
          <div className="space-y-2">
            {timeSlots.map((time) => {
              const appointment = mockAppointments.find((apt) => apt.time === time)
              return (
                <div
                  key={time}
                  className="flex items-center space-x-4 p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="w-16 text-sm text-muted-foreground font-mono">{time}</div>
                  {appointment ? (
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-medium text-foreground">{appointment.patientName}</p>
                          <p className="text-sm text-muted-foreground">
                            {appointment.type} • {appointment.duration} min
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className={statusColors[appointment.status]}>
                        {appointment.status}
                      </Badge>
                    </div>
                  ) : (
                    <div className="flex-1 text-sm text-muted-foreground">Available</div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {viewType === "week" && (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Week view coming soon</p>
          </div>
        )}

        {viewType === "month" && (
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Month view coming soon</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
