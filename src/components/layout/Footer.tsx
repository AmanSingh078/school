import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Parent Portal', href: '#parent-portal' },
    { name: 'Student Login', href: '#login' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-bold">AI School</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering the next generation with innovative AI-integrated education for a brighter future.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary-800 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-gray-400">
                  123 Education Street, Knowledge City, 12345
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-gray-400">info@aischool.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} AI School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;