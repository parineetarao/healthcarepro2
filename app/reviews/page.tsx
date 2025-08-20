import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PatientReviews } from "@/components/reviews/patient-reviews"

export default function ReviewsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patient Reviews</h1>
          <p className="text-muted-foreground">Monitor patient feedback and manage your online reputation</p>
        </div>

        <PatientReviews />
      </div>
    </DashboardLayout>
  )
}
