import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
        <div className='pt-10 font-extrabold text-6xl text-center bg-gray-50 text-dark_blue'>
          <p className='pb-10'>Find Us On</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gray-50 gap-10 pb-10">     
          <div className="flex h-full items-center justify-center order-1">
            <a href="https://www.instagram.com/gjsseamlessgutters/" target="_blank" alt ="pintres">
              <motion.img src="/imgs/footer/insta.webp" alt="insured" className="max-w-72 pt-12 sm:pt-2 md:pt-0"
                whileHover={{ scale: [1.1, 1, 1.1],
                  transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                 }}
                whileTap={{ scale: 0.9 }}
              ></motion.img>
            </a>
          </div>
          <div className="flex h-full items-center justify-center">
            <a href="https://www.google.com/maps/place//data=!4m3!3m2!1s0xa1f9c0f892594853:0x65ed0b76864a982!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" target="_blank" alt ="google">
              <motion.img src="/imgs/footer/google.png" alt="insured" className="w-48"
                whileHover={{ scale: [1.1, 1, 1.1],
                  transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                 }}
                whileTap={{ scale: 0.9 }}
              ></motion.img>
            </a>
          </div>
          <div className="flex h-full items-center justify-center order-2 md:order-3">
            <a href="https://www.facebook.com/profile.php?id=61569293428284" target="_blank" alt ="facebook">
              <motion.img src="/imgs/footer/fb.svg" alt="insured" className="max-w-72"
                whileHover={{ scale: [1.1, 1, 1.1],
                  transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                 }}
                whileTap={{ scale: 0.9 }}
              ></motion.img>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 gap-10 pb-10">     
          <div className="flex mx-auto w-full justify-center items-center bg-gray-50 pb-10">
            <img src="/imgs/footer/bbb.png" alt="insured" className="max-w-72"/>
          </div>
          <div className="flex items-center justify-center order-3 md:order-2">
            <img src="/imgs/footer/insured.png" alt="bbb" className="max-w-40"/>
          </div>  
        </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
          <div className="w-36 h-36 mx-auto md:mx-0">
              <a href='/'>
                <img src="/imgs/logo.webp" className="w-full h-full object-cover" alt="Logo"/>
              </a>
            </div>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61569293428284"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/gjsseamlessgutters/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-instagram"
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
                <a href="mailto:gus@gandjgutters.com">
                  gus@gandjgutters.com
                </a>
              </p>
            </div>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-white">Resources</h4>
            <div className="flex flex-col gap-3">
              <a href="/">
                Home
              </a>
              <a href="/about">
                About Us
              </a>
              <a href="/contact">
                Contact
              </a>
            </div>
          </div>

          {/* Gutters */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-white">Gutters</h4>
            <div className="flex flex-col gap-3">
              <a href="/gutters">
                Gutters 101
              </a>
              <a href="/gutters/residential">
                Residential
              </a>
              <a href="/gutters/commercial">
                Commercial
              </a>
              <a href="/gutters/covers">
                Covers
              </a>

            </div>
          </div>

          {/* Roofing */}
          <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-white">Roofing</h4>
          <div className="flex flex-col gap-3">
            <a href="/roofing">
              Roofing 101
            </a>
            <a href="/roofing/metal">
              Metal
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
