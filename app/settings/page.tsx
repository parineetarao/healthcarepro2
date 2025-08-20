import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { ClinicSettings } from "@/components/settings/clinic-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your profile, clinic information, and system preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile Settings</TabsTrigger>
            <TabsTrigger value="clinic">Clinic Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="clinic" className="space-y-6">
            <ClinicSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
