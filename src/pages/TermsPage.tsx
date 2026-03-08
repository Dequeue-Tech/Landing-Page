import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const TermsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-24">
      <div className="section-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-4">Last updated: March 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services provided by Dequeue Retail Technologies Pvt Ltd ("Dequeue", "we", "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dequeue provides retail technology solutions including but not limited to mobile checkout (Go), interactive restaurant ordering (Bite), smart cart systems (Swift), and autonomous dark store platforms (Hermit). These services are provided on a subscription basis subject to the terms outlined herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Subscription & Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription fees are billed in advance on a monthly or annual basis depending on your chosen plan. All fees are non-refundable except as required by applicable law. We reserve the right to modify pricing with 30 days prior notice. Continued use of the service after a price change constitutes acceptance of the new pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, software, technology, designs, and other intellectual property associated with Dequeue's services are owned by Dequeue Retail Technologies Pvt Ltd. You are granted a limited, non-exclusive, non-transferable license to use our services for your internal business purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Data Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our services, you consent to the collection and processing of transaction data, customer analytics, and operational metrics as described in our Privacy Policy. Dequeue processes data in compliance with applicable data protection laws in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Dequeue shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the subscription with 30 days written notice. Dequeue reserves the right to suspend or terminate access immediately if you violate these terms. Upon termination, your access to the services will cease, and we will retain your data for 90 days before permanent deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, please contact us at{" "}
                <a href="mailto:founders@dequeue.co.in" className="text-primary hover:underline">founders@dequeue.co.in</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default TermsPage;
