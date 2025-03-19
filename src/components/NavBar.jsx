/* eslint-disable react/prop-types */
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const FlipNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation(); // Get the current route

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 850 ? true : false);
  });

  const [isOpen, setIsOpen] = useState(false);

  const scrollNavbar = ["/", "/about", "/projects"]
  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 
      transition-all duration-300 ease-out lg:px-12 flex
      ${
        !scrollNavbar.includes(location.pathname) || scrolled
          ? "bg-gray-900 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <Logo />
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return (    
    <div className="flex w-20 h-20 items-center">
      <a href='/'>
        <img src="/imgs/logo.webp" className="w-full h-full object-cover" alt="Logo" />
      </a>
    </div>
  );
};

// Toogle mobile menu button
const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex felx-end items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl bg-blue-500"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <NavLink to='/about' text="About Us" />
      <NavLink to ='/services' text="Services" />
      <NavLink to ='/projects' text="Projects" />
      <NavLink to='/contact' text="Contact" />  
    </div>
  );
};

// Navbar Links
const NavLink = ({ to, text }) => {
  return (
    <a
      href={`${to}`}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30, text }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-blue-500 text-xl">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

// Free Quote Button
const NavRight = () => {
  return (
    <div className="flex ml-auto items-center">
      <a href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md whitespace-nowrap flex items-center gap-2"
        >
          Free Quote
          <FaArrowRight />
        </motion.button>
      </a>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-neutral-950 bg-opacity-50  shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 lg:hidden"
    >
      <MenuLink to='/about' text="About Us" />
      <MenuLink to='/services' text="Services" />
      <MenuLink to ='/projects' text="Projects" />
      <MenuLink to='/contact' text="Contact" />
    </motion.div>
  );
};

// Mobile Drop Down Links
const MenuLink = ({ to, text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={`${to}`}
      className="h-[30px] overflow-hidden font-medium text-xl flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-white" />
      </motion.span>
      <motion.div 
        whileHover={{ y: -30 }}
      >
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-blue-500">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNav;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
