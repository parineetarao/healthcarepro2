import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PatientList } from "@/components/patients/patient-list"
import { PatientForm } from "@/components/patients/patient-form"
import { PatientProfile } from "@/components/patients/patient-profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground">Manage patient records, medical history, and profiles</p>
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list">Patient Directory</TabsTrigger>
            <TabsTrigger value="profile">Patient Profile</TabsTrigger>
            <TabsTrigger value="register">Register New</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-6">
            <PatientList />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <PatientProfile patientId="1" />
          </TabsContent>

          <TabsContent value="register" className="space-y-6">
            <PatientForm />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
