import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
          <div className="w-36 h-36 mx-auto md:mx-0">
              <a href='/'>
                <img src="/imgs/logo.webp" className="w-full h-full object-cover" alt="Logo"/>
              </a>
            </div>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="flex items-center justify-center md:justify-start hover:text-blue-500">
                  <FaPhone className="mr-2" />
                  <a href="tel:512-574-8860">
                    512-574-8860
                  </a>
                </p>
                <p className="mt-2 flex items-center justify-center md:justify-start hover:text-blue-500">
                  <FaPhone className="mr-2" />
                  <a href="tel:512-787-5850">
                    512-787-5850
                  </a>
                </p>
              <p className="mt-2 flex items-center justify-center md:justify-start hover:text-blue-500">
                <FaEnvelope className="mr-2" />
                <a href="mailto:email">
                  Email
                </a>
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Resources</h4>
            <div className="flex flex-col gap-3">
              <a href="/about">
                Home
              </a>
              <a href="/about">
                About Us
              </a>
              <a href="/services">
                Services
              </a>
              <a href="/contact">
                Contact
              </a>
            </div>
          </div>

          {/* Signs */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <div className="flex flex-col gap-3">
              <a href="/services/installation">
                Gutter Installation
              </a>
              <a href="/services/cover">
                Gutter Cover
              </a>
              <a href="/services/cleaning">
                Gutter Cleaning
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} G&J Seamless Rain Gutters. All Rights Reserved. Powered by 
            <a href="https://www.kingdom-code.com" target="_blank" rel="noopener noreferrer" className="ml-1">
              Kingdom Code
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
