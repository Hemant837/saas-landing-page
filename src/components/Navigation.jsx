import { Zap, Menu, X, ChevronDown } from "lucide-react";

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CloudSync</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                Product <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a
                  href="#features"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#integrations"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Integrations
                </a>
                <a
                  href="#security"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Security
                </a>
                <a href="#api" className="block px-4 py-2 hover:bg-gray-50">
                  API
                </a>
              </div>
            </div>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#customers"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Customers
            </a>
            <a
              href="#resources"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Resources
            </a>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Start Free Trial
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#customers"
              className="block text-gray-600 hover:text-gray-900"
            >
              Customers
            </a>
            <a
              href="#resources"
              className="block text-gray-600 hover:text-gray-900"
            >
              Resources
            </a>
            <button className="block w-full text-left text-gray-600 hover:text-gray-900">
              Sign In
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
