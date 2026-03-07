import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Contact from "@/components/landing/Contact";
import { motion } from "framer-motion";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-8 text-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
            Contact
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6">Get in Touch with Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need queue-free solutions? Let us know by filling out the form, and we'll be in touch!
          </p>
        </motion.div>
      </div>
    </section>

    <Contact />
    <Footer />
  </div>
);

export default ContactPage;
