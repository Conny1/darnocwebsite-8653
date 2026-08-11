const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-6 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <div className="w-6 h-6 bg-white text-zinc-900 rounded flex items-center justify-center text-xs">M</div>
          <span>Modulor</span>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Modulor Workspace. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#modules" className="hover:text-white transition-colors">Modules</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;