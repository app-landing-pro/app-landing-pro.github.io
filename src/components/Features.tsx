import { Zap, Shield, Smartphone, Clock, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth experience on any device.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security keeps your data safe and encrypted.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Seamless experience across iOS, Android, and web platforms.",
  },
  {
    icon: Clock,
    title: "Real-time Sync",
    description: "Your data syncs instantly across all your devices.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team in real-time effortlessly.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Get insights with powerful analytics and reporting tools.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text"> Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay productive and connected, all in one beautiful app.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
