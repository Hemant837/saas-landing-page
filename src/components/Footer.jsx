import { Zap, Users, Building2, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CloudSync</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Enterprise SaaS platform trusted by industry leaders worldwide.
            Transform your business operations with secure, scalable solutions.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Enterprise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Training
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400">
          &copy; 2025 CloudSync. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Security
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
