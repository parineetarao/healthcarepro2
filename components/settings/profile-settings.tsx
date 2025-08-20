"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Upload, Save } from "lucide-react"

export function ProfileSettings() {
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "dr.sarah.johnson@clinic.com",
    phone: "(555) 123-4567",
    specialization: "Family Medicine",
    licenseNumber: "MD123456",
    bio: "Experienced family medicine physician with over 10 years of practice.",
    address: "123 Medical Center Dr, City, State 12345",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating profile:", profileData)
    // Handle profile update logic here
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating password")
    // Handle password update logic here
  }

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Profile Information</span>
          </CardTitle>
          <CardDescription>Update your personal and professional information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/generic-placeholder-icon.png?height=80&width=80" />
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <Button type="button" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
                <p className="text-sm text-muted-foreground mt-1">JPG, PNG up to 2MB</p>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => handleProfileChange("firstName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => handleProfileChange("lastName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleProfileChange("phone", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  value={profileData.specialization}
                  onChange={(e) => handleProfileChange("specialization", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={profileData.licenseNumber}
                  onChange={(e) => handleProfileChange("licenseNumber", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => handleProfileChange("bio", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="address"
                  value={profileData.address}
                  onChange={(e) => handleProfileChange("address", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Save Profile
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Password Change */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
              />
            </div>
            <Button type="submit">Update Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
