import ScrollHeader from "../clientside/ScrollHeader";

const Navbar = () => {


  return (
    <header>
      <ScrollHeader>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center text-white text-sm">M</div>
              <span>Modulor</span>
            </a>
            <div className="hidden md:flex! items-center gap-6">
              <a href="#features" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Features</a>
              <a href="#modules" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Modules</a>
              <a href="#pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://dashboard.modulor.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Sign In
            </a>
            <a 
              href="https://dashboard.modulor.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </ScrollHeader>
    </header>
  );
};

export default Navbar;