import { motion } from "motion/react";
import { CheckCircle2, MessageSquare } from "lucide-react";

interface ServiceProps {
  key?: string | number;
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
  onDetailClick?: (id: string) => void;
  onConsultationClick?: () => void;
}

export function ServiceSection({ id, title, description, features, image, reverse, onDetailClick, onConsultationClick }: ServiceProps) {
  return (
    <section id={id} className={`py-24 ${reverse ? "bg-slate-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => onDetailClick?.(id)}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors"
              >
                자세히 알아보기
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={image} 
                alt={title} 
                className="relative rounded-2xl shadow-2xl w-full aspect-video object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
