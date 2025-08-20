"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserPlus, MoreHorizontal, Mail, Shield, Edit, Trash2 } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  role: "admin" | "doctor" | "nurse" | "assistant"
  status: "active" | "inactive" | "pending"
  joinDate: string
  avatar: string
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@clinic.com",
    role: "admin",
    status: "active",
    joinDate: "2023-01-15",
    avatar: "SJ",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    email: "michael.chen@clinic.com",
    role: "doctor",
    status: "active",
    joinDate: "2023-03-20",
    avatar: "MC",
  },
  {
    id: "3",
    name: "Nurse Emily Rodriguez",
    email: "emily.rodriguez@clinic.com",
    role: "nurse",
    status: "active",
    joinDate: "2023-06-10",
    avatar: "ER",
  },
  {
    id: "4",
    name: "Lisa Thompson",
    email: "lisa.thompson@clinic.com",
    role: "assistant",
    status: "pending",
    joinDate: "2024-01-10",
    avatar: "LT",
  },
]

const roleColors = {
  admin: "bg-purple-100 text-purple-800 border-purple-200",
  doctor: "bg-blue-100 text-blue-800 border-blue-200",
  nurse: "bg-green-100 text-green-800 border-green-200",
  assistant: "bg-orange-100 text-orange-800 border-orange-200",
}

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  inactive: "bg-gray-100 text-gray-800 border-gray-200",
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
}

export function RoleManagement() {
  const [teamMembers] = useState(mockTeamMembers)
  const [showInviteForm, setShowInviteForm] = useState(false)
  const [inviteData, setInviteData] = useState({
    name: "",
    email: "",
    role: "",
  })

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inviting team member:", inviteData)
    setShowInviteForm(false)
    setInviteData({ name: "", email: "", role: "" })
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Team & Role Management</span>
            </CardTitle>
            <CardDescription>Manage team members and their access permissions</CardDescription>
          </div>
          <Button onClick={() => setShowInviteForm(!showInviteForm)}>
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Team Member
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Invite Form */}
        {showInviteForm && (
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Invite New Team Member</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInviteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="inviteName">Full Name</Label>
                    <Input
                      id="inviteName"
                      value={inviteData.name}
                      onChange={(e) => setInviteData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inviteEmail">Email</Label>
                    <Input
                      id="inviteEmail"
                      type="email"
                      value={inviteData.email}
                      onChange={(e) => setInviteData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inviteRole">Role</Label>
                  <Select onValueChange={(value) => setInviteData((prev) => ({ ...prev, role: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Invitation
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowInviteForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Team Members List */}
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/generic-placeholder-icon.png?height=48&width=48" />
                  <AvatarFallback className="bg-primary/10 text-primary">{member.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Joined: {new Date(member.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge variant="outline" className={roleColors[member.role]}>
                  {member.role}
                </Badge>
                <Badge variant="outline" className={statusColors[member.status]}>
                  {member.status}
                </Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Role
                    </DropdownMenuItem>
                    {member.status === "pending" && (
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Resend Invitation
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Access
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
