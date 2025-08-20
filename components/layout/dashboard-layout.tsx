"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  Heart,
  Menu,
  Bell,
  Search,
  LogOut,
  Video,
  MessageSquare,
  FileText,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Patients", href: "/patients", icon: Users },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Telehealth", href: "/telehealth", icon: Video },
  { name: "Reviews", href: "/reviews", icon: MessageSquare },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">HealthCare Pro</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Back to Home link */}
      <div className="px-4 py-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Dr. Sarah Johnson</p>
            <p className="text-xs text-muted-foreground truncate">Family Medicine</p>
          </div>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 via-teal-50 to-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:shadow-lg">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-white/90 backdrop-blur-sm px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            </Sheet>

            {/* Back to Home link for mobile */}
            <Link
              href="/"
              className="hidden md:flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search patients, appointments..."
                className="w-64 rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">{children}</main>
      </div>
    </div>
  )
}
