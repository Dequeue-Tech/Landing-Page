import { Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/dequeue-logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
            <img src={logo} alt="Dequeue" className="w-8 h-8 object-contain" />
            Dequeue
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            Building infrastructure that eliminates checkout lines forever.
          </p>
          <p className="text-sm text-primary font-heading font-semibold mt-3">#Dequeue</p>

          <div className="flex items-center gap-3 mt-5">
            <a href="https://www.linkedin.com/company/dequeue" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/DequeueRetail" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/dequeue_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            {/* <a href="https://youtube.com/@dequeue" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Youtube className="w-4 h-4" />
            </a> */}
            <a href="mailto:info@dequeue.co.in" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
            <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Products</h4>
          <ul className="space-y-2">
            <li><Link to="/products/go" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Go</Link></li>
            <li><Link to="/products/bite" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Bite</Link></li>
            <li><Link to="/products/swift" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Swift</Link></li>
            <li><Link to="/products/hermit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hermit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>

          <h4 className="font-heading font-semibold mb-3 mt-6 text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
          <ul className="space-y-2">
            <li><a href="mailto:info@dequeue.co.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@dequeue.co.in</a></li>
            {/* <li><a href="https://dequeue.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">dequeue.co.in</a></li> */}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Dequeue Retail Technologies Pvt Ltd. All rights reserved.
        </p>
        <p className="text-sm font-heading font-semibold text-primary">#Dequeue — The End of Queues</p>
      </div>
    </div>
  </footer>
);

export default Footer;
