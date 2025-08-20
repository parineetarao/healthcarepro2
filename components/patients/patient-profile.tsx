"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Phone, Mail, MapPin, Heart, Calendar, FileText, Pill, Upload, Edit } from "lucide-react"

interface PatientProfileProps {
  patientId: string
}

const mockPatient = {
  id: "1",
  name: "John Smith",
  email: "john.smith@email.com",
  phone: "(555) 123-4567",
  dateOfBirth: "1985-03-15",
  gender: "Male",
  bloodType: "O+",
  status: "active",
  avatar: "JS",
  address: "123 Main St, City, State 12345",
  emergencyContact: "Jane Smith - (555) 987-6543",
  insurance: "Blue Cross Blue Shield",
  allergies: ["Penicillin", "Shellfish"],
  chronicConditions: ["Hypertension", "Type 2 Diabetes"],
  lastVisit: "2024-01-10",
}

const mockMedicalHistory = [
  {
    id: "1",
    date: "2024-01-10",
    type: "Check-up",
    doctor: "Dr. Johnson",
    diagnosis: "Routine physical examination",
    notes: "Patient in good health, blood pressure slightly elevated",
    prescriptions: ["Lisinopril 10mg"],
  },
  {
    id: "2",
    date: "2023-12-15",
    type: "Follow-up",
    doctor: "Dr. Johnson",
    diagnosis: "Diabetes management",
    notes: "HbA1c levels improved, continue current medication",
    prescriptions: ["Metformin 500mg"],
  },
]

const mockPrescriptions = [
  {
    id: "1",
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedDate: "2024-01-10",
    prescribedBy: "Dr. Johnson",
    status: "active",
  },
  {
    id: "2",
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedDate: "2023-12-15",
    prescribedBy: "Dr. Johnson",
    status: "active",
  },
]

const mockLabReports = [
  {
    id: "1",
    name: "Complete Blood Count",
    date: "2024-01-10",
    type: "Lab Report",
    status: "completed",
  },
  {
    id: "2",
    name: "HbA1c Test",
    date: "2023-12-15",
    type: "Lab Report",
    status: "completed",
  },
]

export function PatientProfile({ patientId }: PatientProfileProps) {
  const calculateAge = (dateOfBirth: string) => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="space-y-6">
      {/* Patient Header */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`/generic-placeholder-icon.png?height=64&width=64`} />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">{mockPatient.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{mockPatient.name}</h1>
                <p className="text-muted-foreground">
                  {calculateAge(mockPatient.dateOfBirth)} years old • {mockPatient.gender} • {mockPatient.bloodType}
                </p>
                <Badge variant="outline" className="mt-1 bg-green-100 text-green-800 border-green-200">
                  {mockPatient.status}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Patient Details Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Medical History</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="files">Files & Reports</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockPatient.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockPatient.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{mockPatient.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Born: {new Date(mockPatient.dateOfBirth).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Medical Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Allergies</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockPatient.allergies.map((allergy) => (
                      <Badge key={allergy} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Chronic Conditions</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockPatient.chronicConditions.map((condition) => (
                      <Badge
                        key={condition}
                        variant="outline"
                        className="bg-orange-50 text-orange-700 border-orange-200"
                      >
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Emergency Contact</h4>
                  <p className="text-sm text-muted-foreground">{mockPatient.emergencyContact}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Medical History</CardTitle>
              <CardDescription>Complete medical visit history and diagnoses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMedicalHistory.map((visit) => (
                  <div key={visit.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{visit.type}</h4>
                      <span className="text-sm text-muted-foreground">{new Date(visit.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Doctor: {visit.doctor}</p>
                    <p className="text-sm font-medium text-foreground mb-2">Diagnosis: {visit.diagnosis}</p>
                    <p className="text-sm text-muted-foreground mb-3">{visit.notes}</p>
                    {visit.prescriptions.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-1">Prescriptions:</h5>
                        <div className="flex flex-wrap gap-2">
                          {visit.prescriptions.map((prescription, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {prescription}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prescriptions" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="h-5 w-5" />
                    <span>Current Prescriptions</span>
                  </CardTitle>
                  <CardDescription>Active medications and dosages</CardDescription>
                </div>
                <Button>
                  <Pill className="h-4 w-4 mr-2" />
                  Add Prescription
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPrescriptions.map((prescription) => (
                  <div key={prescription.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{prescription.medication}</h4>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        {prescription.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div>Dosage: {prescription.dosage}</div>
                      <div>Frequency: {prescription.frequency}</div>
                      <div>Prescribed: {new Date(prescription.prescribedDate).toLocaleDateString()}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Prescribed by: {prescription.prescribedBy}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Files & Lab Reports</span>
                  </CardTitle>
                  <CardDescription>Medical documents, lab results, and imaging</CardDescription>
                </div>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockLabReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-medium text-foreground">{report.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.type} • {new Date(report.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        {report.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insurance" className="space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Insurance Information</CardTitle>
              <CardDescription>Patient insurance details and coverage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Primary Insurance</h4>
                  <p className="text-sm text-muted-foreground">{mockPatient.insurance}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Insurance details and coverage information would be displayed here.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
