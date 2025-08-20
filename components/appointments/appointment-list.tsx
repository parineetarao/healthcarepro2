"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, Calendar, Clock, User, Video, CheckCircle, XCircle, Edit } from "lucide-react"

interface Appointment {
  id: string
  patientName: string
  patientAvatar: string
  date: string
  time: string
  duration: number
  type: string
  status: "upcoming" | "completed" | "canceled"
  doctor: string
  purpose: string
  isTelemedicine: boolean
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Smith",
    patientAvatar: "JS",
    date: "2024-01-15",
    time: "09:00",
    duration: 30,
    type: "Check-up",
    status: "upcoming",
    doctor: "Dr. Johnson",
    purpose: "Annual physical examination",
    isTelemedicine: false,
  },
  {
    id: "2",
    patientName: "Emily Davis",
    patientAvatar: "ED",
    date: "2024-01-15",
    time: "10:30",
    duration: 45,
    type: "Follow-up",
    status: "upcoming",
    doctor: "Dr. Johnson",
    purpose: "Blood pressure monitoring",
    isTelemedicine: true,
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    patientAvatar: "MJ",
    date: "2024-01-14",
    time: "14:00",
    duration: 30,
    type: "Consultation",
    status: "completed",
    doctor: "Dr. Johnson",
    purpose: "Skin condition consultation",
    isTelemedicine: false,
  },
  {
    id: "4",
    patientName: "Sarah Wilson",
    patientAvatar: "SW",
    date: "2024-01-13",
    time: "11:00",
    duration: 30,
    type: "Check-up",
    status: "canceled",
    doctor: "Dr. Johnson",
    purpose: "Routine check-up",
    isTelemedicine: false,
  },
]

const statusColors = {
  upcoming: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  canceled: "bg-red-100 text-red-800 border-red-200",
}

const statusIcons = {
  upcoming: Clock,
  completed: CheckCircle,
  canceled: XCircle,
}

export function AppointmentList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [appointments] = useState(mockAppointments)

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (appointmentId: string, newStatus: "completed" | "canceled") => {
    console.log(`Changing appointment ${appointmentId} status to ${newStatus}`)
    // Handle status change logic here
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Appointment List</CardTitle>
            <CardDescription>Manage and track all appointments</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => {
            const StatusIcon = statusIcons[appointment.status]
            return (
              <div
                key={appointment.id}
                className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} />
                  <AvatarFallback className="bg-primary/10 text-primary">{appointment.patientAvatar}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground">{appointment.patientName}</h3>
                    <div className="flex items-center space-x-2">
                      {appointment.isTelemedicine && <Video className="h-4 w-4 text-primary" />}
                      <Badge variant="outline" className={statusColors[appointment.status]}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {appointment.time} ({appointment.duration} min)
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {appointment.doctor}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-1">
                    {appointment.type}: {appointment.purpose}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Appointment
                    </DropdownMenuItem>
                    {appointment.status === "upcoming" && (
                      <>
                        <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, "completed")}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Completed
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, "canceled")}>
                          <XCircle className="h-4 w-4 mr-2" />
                          Cancel Appointment
                        </DropdownMenuItem>
                      </>
                    )}
                    {appointment.isTelemedicine && appointment.status === "upcoming" && (
                      <DropdownMenuItem>
                        <Video className="h-4 w-4 mr-2" />
                        Start Video Call
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
