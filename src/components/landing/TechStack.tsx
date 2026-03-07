import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Smartphone, Cloud, Cpu, BarChart } from "lucide-react";

const techItems = [
  { icon: Brain, title: "AI-Powered", desc: "Machine learning for demand forecasting, inventory optimization, and customer insights" },
  { icon: Shield, title: "Enterprise Security", desc: "PCI-DSS compliant payment processing with end-to-end encryption" },
  { icon: Smartphone, title: "Mobile-First", desc: "Progressive web apps that work on any device without downloads" },
  { icon: Cloud, title: "Cloud-Native", desc: "Scalable infrastructure that grows with your business automatically" },
  { icon: Cpu, title: "Edge Computing", desc: "Real-time processing at the edge for instant checkout experiences" },
  { icon: BarChart, title: "Real-Time Analytics", desc: "Live dashboards with actionable insights on every transaction" },
];

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium mb-4 font-heading">Technology</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
            Powered by <span className="gradient-text">Cutting-Edge Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform leverages the latest in AI, cloud computing, and mobile technology to deliver unmatched retail experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
