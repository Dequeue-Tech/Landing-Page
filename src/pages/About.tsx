import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhyDequeue from "@/components/landing/WhyDequeue";
import TechStack from "@/components/landing/TechStack";
import Vision from "@/components/landing/Vision";
import FAQ from "@/components/landing/FAQ";
import { motion } from "framer-motion";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 text-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            About Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">Helping Retailers Grow</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dequeue helps businesses streamline operations and grow faster with AI-powered retail infrastructure.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20 page-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Who We Are
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dequeue is a team of innovators dedicated to making retail technology simple and effective.
            We help businesses eliminate queues, boost efficiency, and scale with smart, AI-driven solutions.
            Our mission is bold but simple: eliminate queues everywhere.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Our Mission */}
    <section className="py-20 page-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { num: "01", title: "Our Mission", desc: "Eliminate queues everywhere. Build infrastructure where transactions are instant and customers never wait." },
            { num: "02", title: "Our Approach", desc: "Software-first solutions that require minimal hardware changes. We integrate seamlessly with existing retail systems." },
            { num: "03", title: "Our Impact", desc: "Faster stores, happier customers, and better business performance across retail and hospitality." },
          ].map((item) => (
            <div key={item.num} className="glass-card p-8">
              <span className="text-xs font-heading font-bold text-primary/50 uppercase tracking-widest">{item.num}</span>
              <h3 className="font-heading font-bold text-xl mt-3 mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <WhyDequeue />
    <TechStack />
    <Vision />
    <FAQ />
    <Footer />
  </div>
);

export default About;
