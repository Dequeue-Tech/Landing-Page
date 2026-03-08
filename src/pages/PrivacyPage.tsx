import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-24">
      <div className="section-container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: March 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dequeue Retail Technologies Pvt Ltd ("Dequeue", "we", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, company name when you register or contact us.</li>
                <li><strong className="text-foreground">Transaction Data:</strong> Purchase history, payment amounts, product details processed through our checkout systems.</li>
                <li><strong className="text-foreground">Usage Analytics:</strong> How you interact with our platform, feature usage, session duration, and navigation patterns.</li>
                <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                <li><strong className="text-foreground">Location Data:</strong> Store location data for multi-location deployments (not individual customer GPS tracking).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To improve product functionality and user experience</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To generate analytics, insights, and performance reports</li>
                <li>To send service updates, security alerts, and administrative messages</li>
                <li>To detect, prevent, and address fraud or technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Dequeue does <strong className="text-foreground">not</strong> sell your personal data to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Service Providers:</strong> Payment processors, cloud hosting, and analytics providers that help us operate our services.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong className="text-foreground">Business Partners:</strong> With your explicit consent for integration purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including encryption in transit and at rest, access controls, regular security audits, and PCI DSS compliance for payment data. However, no method of electronic transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. Transaction data is retained for the duration of your subscription plus 90 days. Aggregated analytics data may be retained indefinitely in anonymized form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability — receive your data in a structured format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services use cookies and similar technologies for authentication, analytics, and improving user experience. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through a prominent notice on our platform. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, please contact us at{" "}
                <a href="mailto:founders@dequeue.co.in" className="text-primary hover:underline">founders@dequeue.co.in</a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Dequeue Retail Technologies Pvt Ltd<br />
                India
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPage;
