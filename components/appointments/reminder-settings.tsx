import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Mail, MessageSquare, Clock } from "lucide-react"

export function ReminderSettings() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Automated Reminders</span>
        </CardTitle>
        <CardDescription>Configure automatic appointment reminders for patients</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="email-reminders" className="text-base">
                  Email Reminders
                </Label>
                <p className="text-sm text-muted-foreground">Send email reminders to patients</p>
              </div>
            </div>
            <Switch id="email-reminders" defaultChecked />
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm">Send reminder</Label>
              <Select defaultValue="24">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1h</SelectItem>
                  <SelectItem value="2">2h</SelectItem>
                  <SelectItem value="24">24h</SelectItem>
                  <SelectItem value="48">48h</SelectItem>
                </SelectContent>
              </Select>
              <Label className="text-sm">before appointment</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="sms-reminders" className="text-base">
                  SMS Reminders
                </Label>
                <p className="text-sm text-muted-foreground">Send text message reminders</p>
              </div>
            </div>
            <Switch id="sms-reminders" defaultChecked />
          </div>

          <div className="ml-8 space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm">Send reminder</Label>
              <Select defaultValue="2">
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1h</SelectItem>
                  <SelectItem value="2">2h</SelectItem>
                  <SelectItem value="24">24h</SelectItem>
                </SelectContent>
              </Select>
              <Label className="text-sm">before appointment</Label>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Reminder settings will apply to all new appointments. Existing appointments can be
            updated individually.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
