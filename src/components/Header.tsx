import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-lg font-bold tracking-wider">
            ONBOARDWORKS<span className="text-accent">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-foreground hover:text-accent transition-colors">
              HOME
            </a>
            <a href="#about-us" className="text-sm text-foreground hover:text-accent transition-colors">
              ABOUT US
            </a>
            <a href="#services" className="text-sm text-foreground hover:text-accent transition-colors">
              SERVICES
            </a>
            <a href="#contact-us" className="text-sm text-foreground hover:text-accent transition-colors">
              CONTACT US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-sm text-foreground hover:text-accent transition-colors">
                HOME
              </a>
              <a href="#about-us" className="text-sm text-foreground hover:text-accent transition-colors">
                ABOUT US
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-accent transition-colors">
                SERVICES
              </a>
              <a href="#contact-us" className="text-sm text-foreground hover:text-accent transition-colors">
                CONTACT US
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;