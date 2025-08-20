import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin } from "lucide-react"

const appointments = [
  {
    id: 1,
    patient: "John Smith",
    time: "9:00 AM",
    type: "Check-up",
    status: "confirmed",
    avatar: "JS",
  },
  {
    id: 2,
    patient: "Emily Davis",
    time: "10:30 AM",
    type: "Follow-up",
    status: "in-progress",
    avatar: "ED",
  },
  {
    id: 3,
    patient: "Michael Johnson",
    time: "2:00 PM",
    type: "Consultation",
    status: "pending",
    avatar: "MJ",
  },
  {
    id: 4,
    patient: "Sarah Wilson",
    time: "3:30 PM",
    type: "Telehealth",
    status: "confirmed",
    avatar: "SW",
  },
]

const statusColors = {
  confirmed: "bg-green-100 text-green-800 border-green-200",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  completed: "bg-gray-100 text-gray-800 border-gray-200",
}

export function RecentAppointments() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
        <CardDescription>Upcoming appointments for today</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={`/generic-placeholder-graphic.png?height=40&width=40`} />
              <AvatarFallback className="bg-primary/10 text-primary">{appointment.avatar}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground truncate">{appointment.patient}</p>
                <Badge variant="outline" className={statusColors[appointment.status as keyof typeof statusColors]}>
                  {appointment.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  {appointment.time}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 mr-1" />
                  {appointment.type}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
