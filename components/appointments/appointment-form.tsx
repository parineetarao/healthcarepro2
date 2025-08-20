"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays } from "lucide-react"

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: "",
    date: "",
    time: "",
    duration: "30",
    type: "",
    purpose: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking appointment:", formData)
    // Handle appointment booking logic here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const timeSlots = Array.from({ length: 18 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8
    const minute = i % 2 === 0 ? "00" : "30"
    return `${hour.toString().padStart(2, "0")}:${minute}`
  })

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5" />
          <span>Book New Appointment</span>
        </CardTitle>
        <CardDescription>Schedule a new patient appointment</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patient">Patient</Label>
              <Select onValueChange={(value) => handleInputChange("patientId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">John Smith</SelectItem>
                  <SelectItem value="2">Emily Davis</SelectItem>
                  <SelectItem value="3">Michael Johnson</SelectItem>
                  <SelectItem value="4">Sarah Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor</Label>
              <Select onValueChange={(value) => handleInputChange("doctorId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Dr. Sarah Johnson</SelectItem>
                  <SelectItem value="2">Dr. Michael Chen</SelectItem>
                  <SelectItem value="3">Dr. Emily Rodriguez</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select onValueChange={(value) => handleInputChange("time", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Select onValueChange={(value) => handleInputChange("duration", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Appointment Type</Label>
              <Select onValueChange={(value) => handleInputChange("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checkup">Regular Check-up</SelectItem>
                  <SelectItem value="followup">Follow-up</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="telehealth">Telehealth</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose of Visit</Label>
            <Input
              id="purpose"
              placeholder="Brief description of the visit purpose"
              value={formData.purpose}
              onChange={(e) => handleInputChange("purpose", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any additional notes or special requirements"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex space-x-2">
            <Button type="submit" className="flex-1">
              <CalendarDays className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
