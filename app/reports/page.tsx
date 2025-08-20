import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, BarChart3, Users, DollarSign } from "lucide-react"

const reportTypes = [
  {
    title: "Patient Demographics",
    description: "Age, gender, and location distribution of patients",
    icon: Users,
    lastGenerated: "2024-01-15",
  },
  {
    title: "Appointment Analytics",
    description: "Appointment trends, no-shows, and scheduling patterns",
    icon: Calendar,
    lastGenerated: "2024-01-14",
  },
  {
    title: "Revenue Reports",
    description: "Financial performance, payment methods, and billing analytics",
    icon: DollarSign,
    lastGenerated: "2024-01-13",
  },
  {
    title: "Clinical Outcomes",
    description: "Treatment effectiveness and patient health metrics",
    icon: BarChart3,
    lastGenerated: "2024-01-12",
  },
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate comprehensive reports and export data</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reportTypes.map((report) => (
            <Card key={report.title} className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <report.icon className="h-5 w-5" />
                  <span>{report.title}</span>
                </CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Last generated: {new Date(report.lastGenerated).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>Choose your preferred export format</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export to CSV
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export to PDF
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export to Excel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
