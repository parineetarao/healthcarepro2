"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react"

const paymentStats = {
  totalRevenue: 45680,
  monthlyTarget: 50000,
  paidInvoices: 156,
  pendingInvoices: 23,
  overdueInvoices: 8,
  insuranceClaims: 12,
}

const recentPayments = [
  {
    id: "1",
    patientName: "John Smith",
    amount: 250.0,
    method: "Credit Card",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "2",
    patientName: "Emily Davis",
    amount: 180.0,
    method: "Insurance",
    date: "2024-01-14",
    status: "processing",
  },
  {
    id: "3",
    patientName: "Michael Johnson",
    amount: 320.0,
    method: "Cash",
    date: "2024-01-13",
    status: "completed",
  },
]

const paymentMethods = [
  { method: "Credit Card", count: 89, percentage: 57 },
  { method: "Insurance", count: 45, percentage: 29 },
  { method: "Cash", count: 15, percentage: 10 },
  { method: "Check", count: 7, percentage: 4 },
]

export function PaymentTracking() {
  const revenueProgress = (paymentStats.totalRevenue / paymentStats.monthlyTarget) * 100

  return (
    <div className="space-y-6">
      {/* Revenue Overview */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Revenue Overview</span>
          </CardTitle>
          <CardDescription>Monthly revenue tracking and targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">${paymentStats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">
                  of ${paymentStats.monthlyTarget.toLocaleString()} monthly target
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-primary">{revenueProgress.toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">Target achieved</p>
              </div>
            </div>
            <Progress value={revenueProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Payment Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid Invoices</p>
                <p className="text-2xl font-bold text-green-600">{paymentStats.paidInvoices}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{paymentStats.pendingInvoices}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold text-red-600">{paymentStats.overdueInvoices}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Insurance Claims</p>
                <p className="text-2xl font-bold text-blue-600">{paymentStats.insuranceClaims}</p>
              </div>
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Latest payment transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{payment.patientName}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.method} • {new Date(payment.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${payment.amount.toFixed(2)}</p>
                    <Badge
                      variant="outline"
                      className={
                        payment.status === "completed"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-yellow-100 text-yellow-800 border-yellow-200"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment methods used</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.method} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{method.method}</span>
                    <span className="text-sm text-muted-foreground">
                      {method.count} ({method.percentage}%)
                    </span>
                  </div>
                  <Progress value={method.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
