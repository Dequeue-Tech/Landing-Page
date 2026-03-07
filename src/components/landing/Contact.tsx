import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Demo request sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 font-heading">Get in Touch</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
              Ready for <span className="gradient-text">Queue-Free</span> Commerce?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Interested in bringing queue-free commerce to your business? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="https://dequeue.co.in" className="text-foreground hover:text-primary transition-colors">dequeue.co.in</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:founders@dequeue.co.in" className="text-foreground hover:text-primary transition-colors">founders@dequeue.co.in</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/company/dequeue" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Dequeue</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                    className="bg-background/50 border-border/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Company</label>
                <Input
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  maxLength={100}
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your retail or restaurant business..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={4}
                  className="bg-background/50 border-border/50"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
