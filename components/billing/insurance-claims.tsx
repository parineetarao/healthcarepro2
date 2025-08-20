"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, MoreHorizontal, FileText, Send, Eye, Shield, Calendar, DollarSign } from "lucide-react"

interface InsuranceClaim {
  id: string
  claimNumber: string
  patientName: string
  insuranceProvider: string
  serviceDate: string
  submittedDate: string
  amount: number
  status: "submitted" | "processing" | "approved" | "denied" | "paid"
  notes?: string
}

const mockClaims: InsuranceClaim[] = [
  {
    id: "1",
    claimNumber: "CLM-2024-001",
    patientName: "John Smith",
    insuranceProvider: "Blue Cross Blue Shield",
    serviceDate: "2024-01-10",
    submittedDate: "2024-01-12",
    amount: 250.0,
    status: "approved",
  },
  {
    id: "2",
    claimNumber: "CLM-2024-002",
    patientName: "Emily Davis",
    insuranceProvider: "Aetna",
    serviceDate: "2024-01-08",
    submittedDate: "2024-01-10",
    amount: 180.0,
    status: "processing",
  },
  {
    id: "3",
    claimNumber: "CLM-2024-003",
    patientName: "Michael Johnson",
    insuranceProvider: "Cigna",
    serviceDate: "2024-01-05",
    submittedDate: "2024-01-07",
    amount: 320.0,
    status: "denied",
    notes: "Prior authorization required",
  },
]

const statusColors = {
  submitted: "bg-blue-100 text-blue-800 border-blue-200",
  processing: "bg-yellow-100 text-yellow-800 border-yellow-200",
  approved: "bg-green-100 text-green-800 border-green-200",
  denied: "bg-red-100 text-red-800 border-red-200",
  paid: "bg-purple-100 text-purple-800 border-purple-200",
}

export function InsuranceClaims() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [claims] = useState(mockClaims)

  const filteredClaims = claims.filter((claim) => {
    const matchesSearch =
      claim.claimNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.insuranceProvider.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || claim.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Insurance Claims</span>
            </CardTitle>
            <CardDescription>Manage and track insurance claim submissions</CardDescription>
          </div>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Submit New Claim
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search claims..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="denied">Denied</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredClaims.map((claim) => (
            <div
              key={claim.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{claim.claimNumber}</h3>
                  <Badge variant="outline" className={statusColors[claim.status]}>
                    {claim.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    {claim.patientName}
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-3 w-3 mr-1" />
                    {claim.insuranceProvider}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Service: {new Date(claim.serviceDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />${claim.amount.toFixed(2)}
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                  Submitted: {new Date(claim.submittedDate).toLocaleDateString()}
                  {claim.notes && ` • ${claim.notes}`}
                </div>
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
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="h-4 w-4 mr-2" />
                    Download Forms
                  </DropdownMenuItem>
                  {claim.status === "denied" && (
                    <DropdownMenuItem>
                      <Send className="h-4 w-4 mr-2" />
                      Resubmit Claim
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
