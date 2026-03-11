import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface ComingSoonProps {
  productName: string;
  description: string;
}

const ComingSoon = ({ productName, description }: ComingSoonProps) => {
 const ref = useRef(null);
 const inView = useInView(ref, { once: true, margin: "-100px" });

 return (
    <section className="py-24 page-section relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full glow-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon with animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20"
          >
            <Rocket className="w-10 h-10 text-primary" />
          </motion.div>

          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Coming Soon
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold font-heading mb-6">
           {productName} is Loading...
         </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
           {description}
         </p>

          {/* Email signup form */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="max-w-md mx-auto mb-8"
         >
           <div className="liquid-glass-card p-6 rounded-2xl">
             <p className="text-sm font-semibold mb-4 text-center">
              Show your interest – Get early access & exclusive updates
             </p>
             <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
               <Input 
                type="email" 
                 placeholder="Enter your email" 
                 className="bg-background/50 border-border/50"
               />
               <Button variant="hero" size="lg" className="w-full" asChild>
                 <Link to="/contact">
                   Notify Me
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
               </Button>
             </form>
           </div>
         </motion.div>

          {/* Additional info */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="text-center"
         >
           <p className="text-sm text-muted-foreground mb-2">
            Want to learn more about our upcoming features?
           </p>
           <Button variant="link" className="text-primary hover:text-primary/80" asChild>
             <Link to="/contact">Contact our sales team →</Link>
           </Button>
         </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
