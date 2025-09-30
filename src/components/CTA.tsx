import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-[var(--shadow-medium)] animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already transforming the way they work. 
            Download now and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all group">
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
            <Button size="lg" className="gradient-primary text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all group">
              <Play className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            Free for 14 days. No credit card required.
          </div>
        </div>
      </div>
    </section>
  );
};
