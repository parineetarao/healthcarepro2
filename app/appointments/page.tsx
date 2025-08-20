import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CalendarView } from "@/components/appointments/calendar-view"
import { AppointmentForm } from "@/components/appointments/appointment-form"
import { AppointmentList } from "@/components/appointments/appointment-list"
import { ReminderSettings } from "@/components/appointments/reminder-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppointmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage your clinic's appointment schedule and bookings</p>
        </div>

        <Tabs defaultValue="calendar" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">Appointment List</TabsTrigger>
            <TabsTrigger value="book">Book New</TabsTrigger>
            <TabsTrigger value="settings">Reminders</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-6">
            <CalendarView />
          </TabsContent>

          <TabsContent value="list" className="space-y-6">
            <AppointmentList />
          </TabsContent>

          <TabsContent value="book" className="space-y-6">
            <AppointmentForm />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <ReminderSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
