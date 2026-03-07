import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, ShoppingBag, CreditCard, LogOut } from "lucide-react";

const steps = [
  { icon: Scan, step: "01", title: "Scan", desc: "Scan product barcodes with your smartphone camera" },
  { icon: ShoppingBag, step: "02", title: "Cart", desc: "View items in a real-time virtual cart" },
  { icon: CreditCard, step: "03", title: "Pay", desc: "Complete payment digitally — UPI, cards, or wallets" },
  { icon: LogOut, step: "04", title: "Go", desc: "Walk out of the store. No lines. No waiting." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium mb-4 font-heading">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Four Steps to <span className="gradient-text">Freedom</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 relative z-10">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-primary/50 uppercase tracking-widest">{s.step}</span>
              <h3 className="font-heading font-bold text-xl mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
