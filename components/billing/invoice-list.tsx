"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, Eye, Download, Send, DollarSign, Calendar, User } from "lucide-react"

interface Invoice {
  id: string
  invoiceNumber: string
  patientName: string
  date: string
  dueDate: string
  amount: number
  status: "paid" | "pending" | "overdue" | "insurance"
  paymentMethod?: string
}

const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-2024-001",
    patientName: "John Smith",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    amount: 250.0,
    status: "paid",
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-002",
    patientName: "Emily Davis",
    date: "2024-01-12",
    dueDate: "2024-02-12",
    amount: 180.0,
    status: "pending",
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-003",
    patientName: "Michael Johnson",
    date: "2024-01-08",
    dueDate: "2024-02-08",
    amount: 320.0,
    status: "insurance",
  },
  {
    id: "4",
    invoiceNumber: "INV-2024-004",
    patientName: "Sarah Wilson",
    date: "2023-12-20",
    dueDate: "2024-01-20",
    amount: 150.0,
    status: "overdue",
  },
]

const statusColors = {
  paid: "bg-green-100 text-green-800 border-green-200",
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  overdue: "bg-red-100 text-red-800 border-red-200",
  insurance: "bg-blue-100 text-blue-800 border-blue-200",
}

export function InvoiceList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [invoices] = useState(mockInvoices)

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (invoiceId: string, newStatus: "paid" | "pending" | "overdue" | "insurance") => {
    console.log(`Changing invoice ${invoiceId} status to ${newStatus}`)
    // Handle status change logic here
  }

  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const paidAmount = filteredInvoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const pendingAmount = filteredInvoices
    .filter((invoice) => invoice.status === "pending" || invoice.status === "overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Invoice Management</CardTitle>
            <CardDescription>Track and manage all patient invoices</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-foreground">${totalAmount.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid</p>
                <p className="text-2xl font-bold text-green-600">${paidAmount.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Outstanding</p>
                <p className="text-2xl font-bold text-orange-600">${pendingAmount.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{invoice.invoiceNumber}</h3>
                  <Badge variant="outline" className={statusColors[invoice.status]}>
                    {invoice.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {invoice.patientName}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(invoice.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />${invoice.amount.toFixed(2)}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Due: {new Date(invoice.dueDate).toLocaleDateString()}
                  </div>
                </div>

                {invoice.paymentMethod && (
                  <p className="text-sm text-muted-foreground mt-1">Payment: {invoice.paymentMethod}</p>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View Invoice
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Send className="h-4 w-4 mr-2" />
                    Send to Patient
                  </DropdownMenuItem>
                  {invoice.status === "pending" && (
                    <DropdownMenuItem onClick={() => handleStatusChange(invoice.id, "paid")}>
                      <DollarSign className="h-4 w-4 mr-2" />
                      Mark as Paid
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
