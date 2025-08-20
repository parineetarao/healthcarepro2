import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground">Detailed insights and performance metrics</p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Comprehensive reporting and analytics system coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This section will include detailed charts for appointment trends, patient growth, revenue patterns, and
              exportable reports in CSV and PDF formats.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
