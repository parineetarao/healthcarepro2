"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Phone, Calendar, Clock, Users, Monitor, Mic } from "lucide-react"

const upcomingConsultations = [
  {
    id: "1",
    patientName: "John Smith",
    time: "2:00 PM",
    duration: "30 min",
    type: "Follow-up",
    status: "scheduled",
    avatar: "JS",
  },
  {
    id: "2",
    patientName: "Emily Davis",
    time: "3:00 PM",
    duration: "45 min",
    type: "Consultation",
    status: "waiting",
    avatar: "ED",
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    time: "4:00 PM",
    duration: "30 min",
    type: "Check-up",
    status: "scheduled",
    avatar: "MJ",
  },
]

const statusColors = {
  scheduled: "bg-blue-100 text-blue-800 border-blue-200",
  waiting: "bg-green-100 text-green-800 border-green-200",
  "in-progress": "bg-yellow-100 text-yellow-800 border-yellow-200",
  completed: "bg-gray-100 text-gray-800 border-gray-200",
}

export function TelehealthDashboard() {
  return (
    <div className="space-y-6">
      {/* Telehealth Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Sessions</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <Video className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold text-green-600">2</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Waiting Room</p>
                <p className="text-2xl font-bold text-yellow-600">1</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold text-foreground">45</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Consultations */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="h-5 w-5" />
              <span>Today's Telehealth Sessions</span>
            </CardTitle>
            <CardDescription>Scheduled video consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="flex items-center justify-between p-3 border border-border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/generic-placeholder-icon.png?height=40&width=40" />
                      <AvatarFallback className="bg-primary/10 text-primary">{consultation.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{consultation.patientName}</p>
                      <p className="text-sm text-muted-foreground">
                        {consultation.time} • {consultation.duration} • {consultation.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={statusColors[consultation.status as keyof typeof statusColors]}>
                      {consultation.status}
                    </Badge>
                    {consultation.status === "waiting" ? (
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-2" />
                        Join Call
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Reschedule
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Video Call Interface Placeholder */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="h-5 w-5" />
              <span>Video Consultation</span>
            </CardTitle>
            <CardDescription>Active video call interface</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm opacity-75">Video call will appear here</p>
              </div>
            </div>

            {/* Call Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" size="sm">
                <Mic className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Monitor className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> This is a placeholder for the video consultation interface. In a production
                environment, this would integrate with video calling services like Twilio Video, Agora, or WebRTC.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
