import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap 
              className={`h-8 w-8 ${isScrolled ? 'text-primary-800' : 'text-white'}`} 
            />
            <span 
              className={`ml-2 text-xl font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}
            >
              AI School
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#login"
                  className="btn btn-primary py-2 px-4 text-sm"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2 pb-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#login"
                  className="block w-full btn btn-primary py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;