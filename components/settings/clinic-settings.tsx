"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Building, Upload, Save, Globe, Clock } from "lucide-react"

export function ClinicSettings() {
  const [clinicData, setClinicData] = useState({
    name: "Family Health Clinic",
    address: "123 Medical Center Dr, City, State 12345",
    phone: "(555) 123-4567",
    email: "info@familyhealthclinic.com",
    website: "www.familyhealthclinic.com",
    description: "Comprehensive family healthcare services with experienced physicians.",
    operatingHours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 1:00 PM",
      sunday: "Closed",
    },
    features: {
      multiClinic: false,
      telehealth: true,
      onlineBooking: true,
      patientPortal: true,
      insuranceBilling: true,
    },
  })

  const handleInputChange = (field: string, value: string) => {
    setClinicData((prev) => ({ ...prev, [field]: value }))
  }

  const handleHoursChange = (day: string, value: string) => {
    setClinicData((prev) => ({
      ...prev,
      operatingHours: { ...prev.operatingHours, [day]: value },
    }))
  }

  const handleFeatureToggle = (feature: string, value: boolean) => {
    setClinicData((prev) => ({
      ...prev,
      features: { ...prev.features, [feature]: value },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating clinic settings:", clinicData)
    // Handle clinic settings update logic here
  }

  return (
    <div className="space-y-6">
      {/* Clinic Information */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Clinic Information</span>
          </CardTitle>
          <CardDescription>Manage your clinic's basic information and branding</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Logo Upload */}
            <div className="space-y-2">
              <Label>Clinic Logo</Label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <Button type="button" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clinicName">Clinic Name</Label>
                <Input
                  id="clinicName"
                  value={clinicData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinicPhone">Phone Number</Label>
                <Input
                  id="clinicPhone"
                  value={clinicData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinicEmail">Email</Label>
                <Input
                  id="clinicEmail"
                  type="email"
                  value={clinicData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="website"
                    value={clinicData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={clinicData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={clinicData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
              />
            </div>

            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Save Clinic Information
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Operating Hours */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Operating Hours</span>
          </CardTitle>
          <CardDescription>Set your clinic's operating hours for each day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(clinicData.operatingHours).map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between">
                <Label className="capitalize font-medium w-24">{day}</Label>
                <Input
                  value={hours}
                  onChange={(e) => handleHoursChange(day, e.target.value)}
                  className="w-48"
                  placeholder="9:00 AM - 5:00 PM"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Settings */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Feature Settings</CardTitle>
          <CardDescription>Enable or disable clinic features and integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="multiClinic" className="text-base">
                  Multi-Clinic Support
                </Label>
                <p className="text-sm text-muted-foreground">Manage multiple clinic locations</p>
              </div>
              <Switch
                id="multiClinic"
                checked={clinicData.features.multiClinic}
                onCheckedChange={(checked) => handleFeatureToggle("multiClinic", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="telehealth" className="text-base">
                  Telehealth Services
                </Label>
                <p className="text-sm text-muted-foreground">Enable video consultations</p>
              </div>
              <Switch
                id="telehealth"
                checked={clinicData.features.telehealth}
                onCheckedChange={(checked) => handleFeatureToggle("telehealth", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="onlineBooking" className="text-base">
                  Online Booking
                </Label>
                <p className="text-sm text-muted-foreground">Allow patients to book appointments online</p>
              </div>
              <Switch
                id="onlineBooking"
                checked={clinicData.features.onlineBooking}
                onCheckedChange={(checked) => handleFeatureToggle("onlineBooking", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="patientPortal" className="text-base">
                  Patient Portal
                </Label>
                <p className="text-sm text-muted-foreground">Patient access to records and results</p>
              </div>
              <Switch
                id="patientPortal"
                checked={clinicData.features.patientPortal}
                onCheckedChange={(checked) => handleFeatureToggle("patientPortal", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="insuranceBilling" className="text-base">
                  Insurance Billing
                </Label>
                <p className="text-sm text-muted-foreground">Automated insurance claim processing</p>
              </div>
              <Switch
                id="insuranceBilling"
                checked={clinicData.features.insuranceBilling}
                onCheckedChange={(checked) => handleFeatureToggle("insuranceBilling", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
