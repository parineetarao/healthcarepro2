"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Plus, Trash2, Download, Send } from "lucide-react"

interface InvoiceItem {
  id: string
  service: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState({
    patientId: "",
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    notes: "",
  })

  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      service: "",
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ])

  const handleInputChange = (field: string, value: string) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }))
  }

  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === "quantity" || field === "rate") {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate
          }
          return updatedItem
        }
        return item
      }),
    )
  }

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      service: "",
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    }
    setItems((prev) => [...prev, newItem])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.08 // 8% tax rate
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Generating invoice:", { invoiceData, items })
    // Handle invoice generation logic here
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <span>Generate Invoice</span>
        </CardTitle>
        <CardDescription>Create a new invoice for patient services</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Invoice Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patient">Patient *</Label>
              <Select onValueChange={(value) => handleInputChange("patientId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">John Smith</SelectItem>
                  <SelectItem value="2">Emily Davis</SelectItem>
                  <SelectItem value="3">Michael Johnson</SelectItem>
                  <SelectItem value="4">Sarah Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={invoiceData.invoiceNumber}
                onChange={(e) => handleInputChange("invoiceNumber", e.target.value)}
                readOnly
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Invoice Date *</Label>
              <Input
                id="date"
                type="date"
                value={invoiceData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date *</Label>
              <Input
                id="dueDate"
                type="date"
                value={invoiceData.dueDate}
                onChange={(e) => handleInputChange("dueDate", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Invoice Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Services & Items</h3>
              <Button type="button" variant="outline" onClick={addItem}>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>

            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-20">Qty</TableHead>
                    <TableHead className="w-24">Rate</TableHead>
                    <TableHead className="w-24">Amount</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Select onValueChange={(value) => handleItemChange(item.id, "service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="checkup">Check-up</SelectItem>
                            <SelectItem value="followup">Follow-up</SelectItem>
                            <SelectItem value="procedure">Medical Procedure</SelectItem>
                            <SelectItem value="lab">Lab Work</SelectItem>
                            <SelectItem value="imaging">Imaging</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          placeholder="Service description"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, "quantity", Number.parseInt(e.target.value) || 1)}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          value={item.rate}
                          onChange={(e) => handleItemChange(item.id, "rate", Number.parseFloat(e.target.value) || 0)}
                        />
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">${item.amount.toFixed(2)}</span>
                      </TableCell>
                      <TableCell>
                        {items.length > 1 && (
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Invoice Totals */}
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%):</span>
                  <span className="font-medium">${calculateTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold text-lg">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Additional notes or payment terms"
              value={invoiceData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button type="submit" className="flex-1">
              <FileText className="w-4 h-4 mr-2" />
              Generate Invoice
            </Button>
            <Button type="button" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button type="button" variant="outline">
              <Send className="w-4 h-4 mr-2" />
              Send to Patient
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
