import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, FileText, Calendar, Video, MessageSquare, Stethoscope } from "lucide-react"

const actions = [
  {
    title: "New Appointment",
    description: "Schedule a patient visit",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary hover:bg-primary/90",
  },
  {
    title: "Add Patient",
    description: "Register new patient",
    icon: UserPlus,
    color: "text-secondary",
    bgColor: "bg-secondary hover:bg-secondary/90",
  },
  {
    title: "Generate Invoice",
    description: "Create billing invoice",
    icon: FileText,
    color: "text-primary",
    bgColor: "bg-primary hover:bg-primary/90",
  },
  {
    title: "Start Telehealth",
    description: "Begin video consultation",
    icon: Video,
    color: "text-secondary",
    bgColor: "bg-secondary hover:bg-secondary/90",
  },
  {
    title: "Patient Messages",
    description: "View patient communications",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary hover:bg-primary/90",
  },
]

export function QuickActions() {
  return (
    <Card className="healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Stethoscope className="h-4 w-4 text-primary" />
          </div>
          <span>Quick Actions</span>
        </CardTitle>
        <CardDescription>Common tasks and shortcuts for your daily workflow</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant="outline"
            className="justify-start h-auto p-4 border-border/50 hover:bg-accent/50 bg-transparent healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${action.bgColor} flex items-center justify-center mr-4`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">{action.title}</div>
              <div className="text-sm text-muted-foreground">{action.description}</div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
