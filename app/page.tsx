import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Users,
  Clock,
  Star,
  ArrowRight,
  Stethoscope,
  Activity,
  Cross,
  Pill,
  CreditCard,
  BarChart3,
  Video,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen healthcare-gradient floating-elements subtle-pattern">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#f87171] rounded-lg flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#0f172a]">HealthCare Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#475569] hover:text-[#f87171] transition-colors">
                Features
              </a>
              <a href="#faqs" className="text-[#475569] hover:text-[#f87171] transition-colors">
                FAQs
              </a>
              <a href="#pricing" className="text-[#475569] hover:text-[#f87171] transition-colors">
                Pricing
              </a>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="mr-2 bg-transparent border-[#f87171]/30 hover:bg-[#f87171]/5 text-[#475569]"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="button-gradient-coral text-white hover:shadow-lg float-animation button-coral">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="healthcare-gradient py-20 lg:py-32 wave-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-[#f87171]/20 text-[#0f172a] border-[#f87171]/30 hover:bg-[#f87171]/30">
                  <Stethoscope className="w-3 h-3 mr-1" />
                  Trusted by 10,000+ Healthcare Professionals
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#0f172a]">Modern Healthcare</span>
                  <span className="text-[#475569] block">Management</span>
                  <span className="text-[#0f172a]">Made Simple</span>
                </h1>
                <p className="text-lg text-[#475569] max-w-lg leading-relaxed">
                  Streamline your practice with our comprehensive healthcare SaaS platform. Manage appointments,
                  patients, billing, and more with confidence and ease.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="button-gradient-coral text-white hover:shadow-lg px-8 py-6 text-lg floating-card float-animation button-coral"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="button-gradient-blue text-white hover:shadow-lg px-8 py-6 text-lg float-animation button-blue bg-teal-950"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Watch Demo
                    <Activity className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-[#475569] ml-2">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            <div className="relative scale-in stagger-2">
              <div className="relative z-10">
                <img
                  src="/healthcare-dashboard.png"
                  alt="Healthcare professionals using HealthCare Pro dashboard with patient analytics and appointment management"
                  className="w-full h-auto rounded-2xl floating-card"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f87171]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Heart className="w-12 h-12 text-[#f87171]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#3b82f6]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Pill className="w-10 h-10 text-[#3b82f6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#f87171]/10 text-[#f87171] border-[#f87171]/20">
              <Activity className="w-3 h-3 mr-1" />
              Comprehensive Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a]">Everything You Need to Run Your Practice</h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              From appointment scheduling to billing management, our platform provides all the tools healthcare
              professionals need in one integrated solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Smart Scheduling",
                description: "Advanced appointment management with automated reminders and calendar sync.",
                color: "text-[#f87171]",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Patient Management",
                description: "Complete patient profiles with medical history, prescriptions, and documents.",
                color: "text-[#3b82f6]",
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Billing & Payments",
                description: "Streamlined invoicing, payment processing, and insurance claim management.",
                color: "text-[#f87171]",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "HIPAA Compliant",
                description: "Enterprise-grade security ensuring patient data protection and compliance.",
                color: "text-[#3b82f6]",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics & Reports",
                description: "Comprehensive insights into practice performance and patient trends.",
                color: "text-[#f87171]",
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Telehealth Ready",
                description: "Built-in video consultation capabilities for remote patient care.",
                color: "text-[#3b82f6]",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-white healthcare-shadow hover:healthcare-shadow-lg transition-all duration-300 border-border/50 hover:border-[#f87171]/20 scale-in stagger-${Math.min(index + 1, 4)} card-hover`}
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#f87171]/10 to-[#3b82f6]/10 flex items-center justify-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-[#0f172a]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[#475569]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20">
              <Heart className="w-3 h-3 mr-1" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a]">Common Questions About HealthCare Pro</h2>
            <p className="text-lg text-[#475569]">
              Get answers to the most frequently asked questions about our healthcare management platform.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is HealthCare Pro HIPAA compliant?",
                answer:
                  "Yes, HealthCare Pro is fully HIPAA compliant with enterprise-grade security, encrypted data storage, and comprehensive audit trails to ensure patient data protection.",
              },
              {
                question: "How long does it take to set up my practice?",
                answer:
                  "Most practices are up and running within 24-48 hours. Our onboarding team provides personalized setup assistance and training to ensure a smooth transition.",
              },
              {
                question: "Can I import my existing patient data?",
                answer:
                  "We support data migration from most major healthcare systems and EMRs. Our team will help you securely transfer all your patient records and appointment history.",
              },
              {
                question: "What payment methods do you accept for billing?",
                answer:
                  "We support all major credit cards, ACH transfers, and integrate with popular payment processors. Patients can pay online, and we handle insurance claim processing.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes, we provide 24/7 customer support via phone, email, and live chat. Our healthcare-specialized support team is always ready to help with any questions or technical issues.",
              },
              {
                question: "Can I use HealthCare Pro on mobile devices?",
                answer:
                  "Yes, HealthCare Pro is fully responsive and works seamlessly on all devices. We also offer dedicated mobile apps for iOS and Android for on-the-go practice management.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className={`bg-white floating-card card-hover transition-all duration-300 scale-in stagger-${Math.min(index + 1, 4)}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-left text-[#0f172a]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569] leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 button-gradient-coral text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Practice?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust HealthCare Pro to manage their practice efficiently
              and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg floating-card float-animation bg-white text-[#f87171] hover:bg-white/90"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  className="button-gradient-blue text-white hover:shadow-lg px-8 py-6 text-lg float-animation button-blue"
                  style={{ animationDelay: "0.3s" }}
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#f87171] rounded-lg flex items-center justify-center">
                  <Cross className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-[#0f172a]">HealthCare Pro</span>
              </div>
              <p className="text-[#475569]">
                Modern healthcare management platform trusted by professionals worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#0f172a]">Product</h3>
              <div className="space-y-2">
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Features
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Pricing
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Security
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#0f172a]">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Training
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#0f172a]">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  About
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-[#475569] hover:text-[#f87171] transition-colors">
                  Careers
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-[#475569]">© 2024 HealthCare Pro. All rights reserved. HIPAA Compliant & Secure.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
