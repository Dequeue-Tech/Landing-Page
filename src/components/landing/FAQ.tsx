import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is Dequeue?", a: "Dequeue is a retail technology company that builds infrastructure to eliminate checkout queues. We offer four products — Go (mobile checkout), Bite (restaurant ordering), Swift (smart carts), and Hermit (autonomous dark stores) — each fully customizable to your business needs." },
  { q: "Can products be customized for my business?", a: "Absolutely. Every Dequeue product is designed to be tailored to your brand, workflow, and operational requirements. From custom branding and UI themes to specific payment integrations and analytics dashboards — we build around you." },
  { q: "Is the product suite growing?", a: "Yes! We have an ever-growing product suite designed to cater to every individual business need. Our roadmap includes new solutions for logistics, inventory intelligence, and more verticals." },
  { q: "How does Go work?", a: "Go turns any smartphone into a checkout terminal. Customers scan product barcodes with their phone, view items in a virtual cart, pay digitally, and walk out. No hardware, no kiosks, no waiting." },
  { q: "Does Dequeue require new hardware?", a: "Go and Bite are completely software-based. Swift requires our modular smart cart units, and Hermit involves autonomous store infrastructure. We handle deployment for all products." },
  { q: "Which businesses can use Dequeue?", a: "Retail stores, supermarkets, restaurants, cafés, quick-service chains, hotel dining, and any business with checkout or ordering queues." },
  { q: "How long does integration take?", a: "Go and Bite can be integrated in as little as 48 hours. Swift and Hermit deployments depend on store size and requirements." },
  { q: "Is Dequeue available outside India?", a: "We are currently focused on India but actively exploring expansion to Southeast Asia and the Middle East." },
  { q: "How does Dequeue handle payments?", a: "We integrate with all major digital payment systems including UPI, credit/debit cards, and digital wallets through secure, PCI-compliant gateways." },
  { q: "What analytics does Dequeue provide?", a: "Real-time analytics on customer behavior, checkout times, popular products, peak hours, sales conversions, and operational efficiency." },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-primary font-heading font-semibold">
            No queues. Just #Dequeue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-border/50 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="text-left font-heading font-medium hover:text-primary transition-colors py-5 text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
