"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  Users,
  DollarSign,
  Activity,
  Clock,
  Phone,
  CreditCard,
  TrendingUp,
  AlertCircle,
  Brain,
  Bot,
  Globe,
  UserPlus,
  Shield,
  FileText,
  Video,
  Building,
  Pill,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Sample data for demo
const appointmentData = [
  { month: "Jan", appointments: 120 },
  { month: "Feb", appointments: 135 },
  { month: "Mar", appointments: 148 },
  { month: "Apr", appointments: 162 },
  { month: "May", appointments: 178 },
  { month: "Jun", appointments: 195 },
]

const revenueData = [
  { month: "Jan", revenue: 24000 },
  { month: "Feb", revenue: 27000 },
  { month: "Mar", revenue: 29600 },
  { month: "Apr", revenue: 32400 },
  { month: "May", revenue: 35600 },
  { month: "Jun", revenue: 39000 },
]

const samplePatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 34,
    condition: "Hypertension",
    lastVisit: "2024-01-15",
    status: "Active",
    phone: "(555) 123-4567",
    email: "sarah.j@email.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 45,
    condition: "Diabetes Type 2",
    lastVisit: "2024-01-12",
    status: "Active",
    phone: "(555) 234-5678",
    email: "m.chen@email.com",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 28,
    condition: "Asthma",
    lastVisit: "2024-01-10",
    status: "Follow-up",
    phone: "(555) 345-6789",
    email: "emily.r@email.com",
  },
]

const sampleAppointments = [
  {
    id: 1,
    patient: "Sarah Johnson",
    time: "09:00 AM",
    date: "Today",
    type: "Check-up",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Michael Chen",
    time: "10:30 AM",
    date: "Today",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Emily Rodriguez",
    time: "02:00 PM",
    date: "Tomorrow",
    type: "Consultation",
    status: "Pending",
  },
]

const sampleInvoices = [
  {
    id: "INV-001",
    patient: "Sarah Johnson",
    amount: 250,
    service: "Annual Physical",
    date: "2024-01-15",
    status: "Paid",
  },
  {
    id: "INV-002",
    patient: "Michael Chen",
    amount: 180,
    service: "Diabetes Consultation",
    date: "2024-01-12",
    status: "Pending",
  },
  {
    id: "INV-003",
    patient: "Emily Rodriguez",
    amount: 120,
    service: "Asthma Check-up",
    date: "2024-01-10",
    status: "Paid",
  },
]

// New sample data for unique features
const aiInsights = [
  {
    patient: "Sarah Johnson",
    risk: "High Blood Pressure Risk",
    recommendation: "Schedule follow-up in 2 weeks",
    severity: "Medium",
    confidence: 87,
  },
  {
    patient: "Michael Chen",
    risk: "Diabetes Complications",
    recommendation: "Adjust medication dosage",
    severity: "High",
    confidence: 94,
  },
  {
    patient: "Emily Rodriguez",
    risk: "Asthma Trigger Alert",
    recommendation: "Review inhaler technique",
    severity: "Low",
    confidence: 76,
  },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen green-purple-gradient">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-secondary">HealthCare Pro - Demo Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <select className="text-sm bg-transparent border-none outline-none text-foreground">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">Demo Mode</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 scale-in">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Welcome to HealthCare Pro Demo</CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Explore our comprehensive healthcare management platform with AI-powered insights, smart scheduling, and
              unique features that set us apart from competitors.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            className={`healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-1`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>

          <Card
            className={`healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-2`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Patients</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <p className="text-xs text-muted-foreground">+18 this month</p>
            </CardContent>
          </Card>

          <Card
            className={`healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-3`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$39,000</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card
            className={`healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-4`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Bills</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-muted-foreground">$2,340 total</p>
            </CardContent>
          </Card>
        </div>

        {/* Unique AI-Powered Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Unique AI-Powered Features
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* AI Health Insights */}
            <Card className="healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Health Insights
                </CardTitle>
                <CardDescription>Predictive analytics for patient risk assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{insight.patient}</p>
                      <Badge
                        variant={
                          insight.severity === "High"
                            ? "destructive"
                            : insight.severity === "Medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {insight.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-red-700 font-medium">{insight.risk}</p>
                    <p className="text-xs text-muted-foreground mt-1">{insight.recommendation}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Target className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">{insight.confidence}% confidence</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Smart Scheduling Assistant */}
            <Card className="healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 scale-in stagger-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5 text-secondary" />
                  Smart Scheduling
                </CardTitle>
                <CardDescription>AI-powered appointment optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-medium text-blue-700">Optimal Time Suggestion</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Based on Dr. Smith's availability and patient history, the best appointment time for Sarah Johnson
                      is Tuesday 10:00 AM
                    </p>
                    <Button size="sm" className="mt-2 h-7 text-xs">
                      Accept Suggestion
                    </Button>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium">Schedule Optimization</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      • 15% reduction in wait times
                      <br />• 92% appointment adherence rate
                      <br />• Automatic buffer time management
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Essential SaaS Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            <Building className="w-6 h-6 text-secondary" />
            Essential SaaS Features
          </h2>

          <Tabs defaultValue="telehealth" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="telehealth">Telehealth</TabsTrigger>
              <TabsTrigger value="forms">Digital Forms</TabsTrigger>
              <TabsTrigger value="multi-clinic">Multi-Clinic</TabsTrigger>
            </TabsList>

            <TabsContent value="telehealth" className="mt-6 fade-in-up">
              <Card className="healthcare-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    Telehealth Platform (WebPT-style)
                  </CardTitle>
                  <CardDescription>Secure video consultations with patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm opacity-75">Video Call Interface</p>
                        </div>
                      </div>
                      <Button className="w-full">Start Video Consultation</Button>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Upcoming Telehealth Sessions</h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <p className="font-medium text-sm">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">Today 2:00 PM - Follow-up consultation</p>
                          <Badge className="mt-1 text-xs">Scheduled</Badge>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <p className="font-medium text-sm">Michael Chen</p>
                          <p className="text-xs text-muted-foreground">Tomorrow 10:30 AM - Diabetes check</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            Pending
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forms" className="mt-6 fade-in-up">
              <Card className="healthcare-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-secondary" />
                    Digital Forms & E-Prescriptions (DrChrono-style)
                  </CardTitle>
                  <CardDescription>Streamlined digital intake and prescription management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Digital Intake Forms</h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                          <span className="text-sm">Patient Registration Form</span>
                          <Badge>Active</Badge>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                          <span className="text-sm">Medical History Questionnaire</span>
                          <Badge>Active</Badge>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                          <span className="text-sm">Insurance Verification</span>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">E-Prescriptions</h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Pill className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Lisinopril 10mg</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Patient: Sarah Johnson • Sent to CVS Pharmacy</p>
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Pill className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Metformin 500mg</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Patient: Michael Chen • Sent to Walgreens</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="multi-clinic" className="mt-6 fade-in-up">
              <Card className="healthcare-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Multi-Clinic Support (CareCloud-style)
                  </CardTitle>
                  <CardDescription>Manage multiple clinic locations from one dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Downtown Clinic</h4>
                        <Badge className="bg-green-100 text-green-700">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">123 Main St, City Center</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>Patients:</span>
                          <span className="font-medium">847</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Today's Appointments:</span>
                          <span className="font-medium">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue (MTD):</span>
                          <span className="font-medium">$28,500</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Suburban Branch</h4>
                        <Badge className="bg-green-100 text-green-700">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">456 Oak Ave, Suburbs</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>Patients:</span>
                          <span className="font-medium">400</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Today's Appointments:</span>
                          <span className="font-medium">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue (MTD):</span>
                          <span className="font-medium">$10,500</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 border-dashed border-2 border-muted-foreground/30">
                      <div className="text-center">
                        <UserPlus className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <h4 className="font-medium text-muted-foreground">Add New Clinic</h4>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          Add Location
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Collaborative Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-primary" />
            Collaborative Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="healthcare-shadow scale-in stagger-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Collaborative Doctor Notes
                </CardTitle>
                <CardDescription>Real-time collaboration on patient files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-white">
                        DS
                      </div>
                      <span className="text-sm font-medium">Dr. Smith</span>
                      <span className="text-xs text-muted-foreground">2 min ago</span>
                    </div>
                    <p className="text-sm">Added blood pressure readings: 140/90. Recommend medication adjustment.</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs text-white">
                        NJ
                      </div>
                      <span className="text-sm font-medium">Nurse Johnson</span>
                      <span className="text-xs text-muted-foreground">5 min ago</span>
                    </div>
                    <p className="text-sm">Patient reports mild dizziness. Vitals stable otherwise.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="healthcare-shadow scale-in stagger-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Secure Family Access
                </CardTitle>
                <CardDescription>HIPAA-compliant family member access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Sarah Johnson (Patient)</span>
                      <Badge>Primary</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Full access to all medical records</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">John Johnson (Spouse)</span>
                      <Badge variant="outline">Limited</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Access to appointments and basic health info</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Mary Johnson (Daughter)</span>
                      <Badge variant="outline">Emergency Only</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Emergency contact with limited access</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="healthcare-shadow scale-in stagger-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Appointment Trends
              </CardTitle>
              <CardDescription>Monthly appointment volume over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={appointmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="appointments"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-shadow scale-in stagger-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Revenue Growth
              </CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="revenue" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Data Tables */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Appointments */}
          <Card className="healthcare-shadow scale-in stagger-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sampleAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{appointment.patient}</p>
                    <p className="text-xs text-muted-foreground">
                      {appointment.date} at {appointment.time}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {appointment.type}
                    </Badge>
                  </div>
                  <Badge variant={appointment.status === "Confirmed" ? "default" : "secondary"} className="text-xs">
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Patient Records */}
          <Card className="healthcare-shadow scale-in stagger-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                Patient Records
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {samplePatients.map((patient) => (
                <div key={patient.id} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{patient.name}</p>
                    <Badge variant={patient.status === "Active" ? "default" : "secondary"} className="text-xs">
                      {patient.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Age: {patient.age}</p>
                  <p className="text-xs text-muted-foreground">Condition: {patient.condition}</p>
                  <p className="text-xs text-muted-foreground">Last Visit: {patient.lastVisit}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{patient.phone}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Billing Invoices */}
          <Card className="healthcare-shadow scale-in stagger-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Recent Invoices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sampleInvoices.map((invoice) => (
                <div key={invoice.id} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{invoice.id}</p>
                    <Badge variant={invoice.status === "Paid" ? "default" : "secondary"} className="text-xs">
                      {invoice.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Patient: {invoice.patient}</p>
                  <p className="text-xs text-muted-foreground">Service: {invoice.service}</p>
                  <p className="text-xs text-muted-foreground">Date: {invoice.date}</p>
                  <p className="font-medium text-sm text-primary">${invoice.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 scale-in">
          <CardContent className="text-center py-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Experience the power of AI-driven healthcare management with unique features that set us apart from the
              competition. Join thousands of healthcare professionals who trust HealthCare Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="px-8 py-3 float-animation bg-primary hover:bg-primary/90">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 bg-transparent float-animation border-secondary/30 hover:bg-secondary/5"
                  style={{ animationDelay: "0.3s" }}
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
