export default function SignupPage() {
  return (
    <div className="min-h-screen healthcare-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl healthcare-shadow-xl p-8 scale-in">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground">Join HealthCare Pro today</p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all float-animation">
            Sign Up as Doctor
          </button>
          <button
            className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg hover:bg-secondary/90 transition-all float-animation"
            style={{ animationDelay: "0.2s" }}
          >
            Sign Up as Patient
          </button>
        </div>
      </div>
    </div>
  )
}
