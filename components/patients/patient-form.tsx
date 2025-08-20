"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, Save } from "lucide-react"

export function PatientForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    insurance: "",
    policyNumber: "",
    allergies: "",
    chronicConditions: "",
    currentMedications: "",
    notes: "",
    consentToTreatment: false,
    consentToShare: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating patient:", formData)
    // Handle patient creation logic here
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <UserPlus className="h-5 w-5" />
          <span>New Patient Registration</span>
        </CardTitle>
        <CardDescription>Register a new patient in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Address Information</h3>
            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContactName">Contact Name *</Label>
                <Input
                  id="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyContactPhone">Contact Phone *</Label>
                <Input
                  id="emergencyContactPhone"
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                <Select onValueChange={(value) => handleInputChange("emergencyContactRelation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="child">Child</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Select onValueChange={(value) => handleInputChange("bloodType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="insurance">Insurance Provider</Label>
                <Input
                  id="insurance"
                  value={formData.insurance}
                  onChange={(e) => handleInputChange("insurance", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="allergies">Known Allergies</Label>
              <Textarea
                id="allergies"
                placeholder="List any known allergies (medications, foods, environmental)"
                value={formData.allergies}
                onChange={(e) => handleInputChange("allergies", e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chronicConditions">Chronic Conditions</Label>
              <Textarea
                id="chronicConditions"
                placeholder="List any chronic medical conditions"
                value={formData.chronicConditions}
                onChange={(e) => handleInputChange("chronicConditions", e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentMedications">Current Medications</Label>
              <Textarea
                id="currentMedications"
                placeholder="List current medications and dosages"
                value={formData.currentMedications}
                onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional information or special considerations"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
              />
            </div>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Consent & Authorization</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentToTreatment"
                  checked={formData.consentToTreatment}
                  onCheckedChange={(checked) => handleInputChange("consentToTreatment", checked as boolean)}
                />
                <Label htmlFor="consentToTreatment" className="text-sm">
                  I consent to medical treatment and understand the clinic's policies *
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentToShare"
                  checked={formData.consentToShare}
                  onCheckedChange={(checked) => handleInputChange("consentToShare", checked as boolean)}
                />
                <Label htmlFor="consentToShare" className="text-sm">
                  I consent to sharing my information with insurance providers and authorized healthcare professionals
                </Label>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button type="submit" className="flex-1" disabled={!formData.consentToTreatment}>
              <Save className="w-4 h-4 mr-2" />
              Register Patient
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
