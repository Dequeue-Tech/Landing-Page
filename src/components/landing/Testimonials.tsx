import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The Go checkout flow is incredibly intuitive. Eliminating hardware from the equation completely changes how we think about our future store layouts.",
    author: "Priya S.",
    role: "Operations Director, Regional Grocery Chain",
  },
  {
    quote: "Moving away from clunky PDF menus to an interactive digital experience is exactly the shift the modern hospitality industry has been waiting for.",
    author: "Rahul M.",
    role: "Independent Restaurant Owner",
  },
  {
    quote: "Implementing the Go system was seamless. The fact that it integrates without needing to rip out our existing POS is a massive win for our IT team.",
    author: "Sumit G.",
    role: "Retail Technology Consultant",
  },
  {
    quote: "Bite's table management features solve the exact bottlenecks keeping high-volume restaurant operators awake at night.",
    author: "Vikram P.",
    role: "Hospitality Strategist",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 page-section section-bg-diagonal" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm text-primary font-heading font-semibold">
            Skip the queue. #Dequeue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
