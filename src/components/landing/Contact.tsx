import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to FormSubmit
      await fetch("https://formsubmit.co/ajax/info@dequeue.co.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          _template: "table",
        }),
      });
      
      toast({ 
        title: "Message sent successfully!", 
        description: "We'll get back to you within 24 hours." 
      });
      
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({ 
        title: "Something went wrong", 
        description: "Please try again or email us directly at info@dequeue.co.in" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24" ref={ref}>
      <div className="section-container max-w-3xl mx-auto">
        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm mb-1">E-mail</p>
              <a href="mailto:info@dequeue.co.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@dequeue.co.in
              </a>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-sm mb-1">Website</p>
              <a href="https://dequeue.co.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                dequeue.co.in
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">First Name</label>
              <Input
                placeholder="Jane"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                maxLength={100}
                className="bg-background border-border"
              />
            </div>
            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">Last Name</label>
              <Input
                placeholder="Smith"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                maxLength={100}
                className="bg-background border-border"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">Email</label>
              <Input
                type="email"
                placeholder="jane@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                maxLength={255}
                className="bg-background border-border"
              />
            </div>
            <div>
              <label className="text-sm text-foreground mb-2 block font-medium">Phone</label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                maxLength={20}
                className="bg-background border-border"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-foreground mb-2 block font-medium">Message</label>
            <Textarea
              placeholder="Hi, I am interested in..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              maxLength={1000}
              rows={5}
              className="bg-background border-border"
            />
          </div>
          <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Form"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
