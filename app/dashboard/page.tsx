import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AppointmentChart } from "@/components/dashboard/appointment-chart"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { RecentAppointments } from "@/components/dashboard/recent-appointments"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Johnson. Here's what's happening at your clinic today.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <AppointmentChart />
            <RevenueChart />
          </div>

          {/* Right Column - Quick Actions & Appointments */}
          <div className="space-y-6">
            <QuickActions />
            <RecentAppointments />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
