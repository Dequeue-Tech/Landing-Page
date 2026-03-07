import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-1">
          <span className="font-heading text-2xl font-bold gradient-text">Dequeue</span>
          <p className="text-sm text-muted-foreground mt-3">
            Building the infrastructure that eliminates checkout lines forever.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</a></li>
            <li><a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
          <ul className="space-y-2">
            <li><a href="#go" className="text-sm text-muted-foreground hover:text-primary transition-colors">Go</a></li>
            <li><a href="#bite" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bite</a></li>
            <li><a href="#swift" className="text-sm text-muted-foreground hover:text-primary transition-colors">Swift</a></li>
            <li><a href="#hermit" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hermit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/company/dequeue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        © 2026 Dequeue Retail Technologies Pvt Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
