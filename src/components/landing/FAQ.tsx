import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Dequeue?",
    a: "Dequeue is a retail technology company that builds infrastructure to eliminate checkout queues. We offer four products — Go (mobile checkout), Bite (restaurant ordering), Swift (smart carts), and Hermit (autonomous dark stores) — that together create a frictionless shopping experience.",
  },
  {
    q: "How does Go work?",
    a: "Go turns any smartphone into a checkout terminal. Customers scan product barcodes with their phone, view items in a virtual cart, pay digitally, and walk out. No hardware, no kiosks, no waiting.",
  },
  {
    q: "Does Dequeue require new hardware installation?",
    a: "Go and Bite are completely software-based and require no new hardware. Swift requires our modular smart cart units, and Hermit involves autonomous store infrastructure. We handle deployment for all products.",
  },
  {
    q: "Which types of businesses can use Dequeue?",
    a: "Dequeue serves retail stores, supermarkets, restaurants, cafés, quick-service chains, hotel dining, and any business with checkout or ordering queues. Our solutions scale from single stores to enterprise chains.",
  },
  {
    q: "How long does integration take?",
    a: "Go and Bite can be integrated in as little as 48 hours. Swift and Hermit deployments depend on store size and requirements, but our team ensures minimal disruption to operations.",
  },
  {
    q: "Is Dequeue available outside India?",
    a: "We are currently focused on the Indian market but are actively exploring expansion to Southeast Asia and the Middle East. Contact us for international inquiries.",
  },
  {
    q: "How does Dequeue handle payments?",
    a: "Dequeue integrates with all major digital payment systems including UPI, credit/debit cards, and digital wallets. All transactions are processed through secure, PCI-compliant payment gateways.",
  },
  {
    q: "What analytics does Dequeue provide?",
    a: "Our platform provides real-time analytics on customer behavior, checkout times, popular products, peak hours, sales conversions, and operational efficiency — helping you make data-driven decisions.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium mb-4 font-heading">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
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
                <AccordionTrigger className="text-left font-heading font-medium hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
