import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { InvoiceGenerator } from "@/components/billing/invoice-generator"
import { InvoiceList } from "@/components/billing/invoice-list"
import { PaymentTracking } from "@/components/billing/payment-tracking"
import { InsuranceClaims } from "@/components/billing/insurance-claims"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Payments</h1>
          <p className="text-muted-foreground">Manage invoices, payments, and insurance claims</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Payment Overview</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="generate">Generate Invoice</TabsTrigger>
            <TabsTrigger value="insurance">Insurance Claims</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <PaymentTracking />
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <InvoiceList />
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <InvoiceGenerator />
          </TabsContent>

          <TabsContent value="insurance" className="space-y-6">
            <InsuranceClaims />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
