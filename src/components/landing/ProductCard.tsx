import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ProductCardProps {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  benefits: string[];
  reversed?: boolean;
  children?: ReactNode;
}

const ProductCard = ({
  id,
  badge,
  title,
  tagline,
  description,
  image,
  imageAlt,
  features,
  benefits,
  reversed = false,
}: ProductCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} id={id} className="py-16 lg:py-24">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:direction-rtl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={reversed ? "lg:order-2" : ""}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            {badge}
          </span>
          <h3 className="text-3xl lg:text-4xl font-bold font-heading mb-2">{title}</h3>
          <p className="text-lg text-primary font-medium mb-4">{tagline}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Features</h4>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Benefits</h4>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative ${reversed ? "lg:order-1" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img src={image} alt={imageAlt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
