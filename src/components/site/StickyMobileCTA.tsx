import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-gradient-primary border-t border-white/10 backdrop-blur-lg shadow-elegant">
        <div className="flex items-center justify-around px-4 py-3">
          <a
            href="tel:+910000000000"
            className="flex flex-col items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Phone className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-semibold">Call</span>
          </a>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>

          <a
            href="#enquiry"
            className="flex flex-col items-center gap-1 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Mail className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-semibold">Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
