import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, DollarSign, Clock, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Today's Appointments",
    value: "12",
    change: "+2 from yesterday",
    trend: "up",
    icon: Calendar,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Active Patients",
    value: "1,247",
    change: "+15 this month",
    trend: "up",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Monthly Revenue",
    value: "$24,580",
    change: "+12% from last month",
    trend: "up",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Pending Bills",
    value: "8",
    change: "-3 from last week",
    trend: "down",
    icon: Clock,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 border-border/50"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              {stat.trend === "up" ? (
                <TrendingUp className="mr-2 h-4 w-4 text-primary" />
              ) : (
                <TrendingDown className="mr-2 h-4 w-4 text-secondary" />
              )}
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
