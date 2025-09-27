const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg font-bold tracking-wider mb-2">
              ONBOARDWORKS<span className="text-accent">.</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Build Skills Today, Get Hired Tomorrow
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <span>Made in</span>
            <div className="w-3 h-3 bg-gradient-to-r from-neon-green to-emerald rounded-sm"></div>
            <span>Webflow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;