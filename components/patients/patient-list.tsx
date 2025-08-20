"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, User, Phone, Mail, Calendar, Eye, Edit, FileText } from "lucide-react"

interface Patient {
  id: string
  name: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  bloodType: string
  lastVisit: string
  status: "active" | "inactive" | "new"
  avatar: string
  address: string
  emergencyContact: string
}

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    dateOfBirth: "1985-03-15",
    gender: "Male",
    bloodType: "O+",
    lastVisit: "2024-01-10",
    status: "active",
    avatar: "JS",
    address: "123 Main St, City, State 12345",
    emergencyContact: "Jane Smith - (555) 987-6543",
  },
  {
    id: "2",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "(555) 234-5678",
    dateOfBirth: "1992-07-22",
    gender: "Female",
    bloodType: "A-",
    lastVisit: "2024-01-12",
    status: "active",
    avatar: "ED",
    address: "456 Oak Ave, City, State 12345",
    emergencyContact: "Robert Davis - (555) 876-5432",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.j@email.com",
    phone: "(555) 345-6789",
    dateOfBirth: "1978-11-08",
    gender: "Male",
    bloodType: "B+",
    lastVisit: "2023-12-20",
    status: "inactive",
    avatar: "MJ",
    address: "789 Pine St, City, State 12345",
    emergencyContact: "Lisa Johnson - (555) 765-4321",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phone: "(555) 456-7890",
    dateOfBirth: "1995-05-30",
    gender: "Female",
    bloodType: "AB+",
    lastVisit: "Never",
    status: "new",
    avatar: "SW",
    address: "321 Elm Dr, City, State 12345",
    emergencyContact: "Mark Wilson - (555) 654-3210",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800 border-green-200",
  inactive: "bg-gray-100 text-gray-800 border-gray-200",
  new: "bg-blue-100 text-blue-800 border-blue-200",
}

export function PatientList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [genderFilter, setGenderFilter] = useState("all")
  const [patients] = useState(mockPatients)

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter
    const matchesGender = genderFilter === "all" || patient.gender.toLowerCase() === genderFilter
    return matchesSearch && matchesStatus && matchesGender
  })

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
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Patient Directory</CardTitle>
            <CardDescription>Manage and search patient records</CardDescription>
          </div>
          <Button>
            <User className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Gender</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} />
                <AvatarFallback className="bg-primary/10 text-primary">{patient.avatar}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground">{patient.name}</h3>
                  <Badge variant="outline" className={statusColors[patient.status]}>
                    {patient.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-3 w-3 mr-1" />
                    {patient.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-1" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Age: {calculateAge(patient.dateOfBirth)} • {patient.gender} • {patient.bloodType}
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  Last visit:{" "}
                  {patient.lastVisit === "Never" ? "Never" : new Date(patient.lastVisit).toLocaleDateString()}
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Patient
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="h-4 w-4 mr-2" />
                    Medical Records
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
