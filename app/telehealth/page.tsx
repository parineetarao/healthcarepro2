import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TelehealthDashboard } from "@/components/telehealth/telehealth-dashboard"

export default function TelehealthPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Telehealth</h1>
          <p className="text-muted-foreground">Manage video consultations and remote patient care</p>
        </div>

        <TelehealthDashboard />
      </div>
    </DashboardLayout>
  )
}
