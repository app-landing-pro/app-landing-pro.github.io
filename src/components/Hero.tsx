import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium">
              🚀 Now Available on iOS & Android
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Perfect
              <span className="gradient-text"> Mobile App</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Experience the future of mobile productivity. Seamlessly manage your tasks, 
              connect with your team, and achieve more on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all group">
                Download Now
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex gap-8 justify-center lg:justify-start text-center lg:text-left pt-8">
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">4.9</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">120+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <img 
              src={heroPhone} 
              alt="Mobile app interface showcase" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
    </section>
  );
};
