"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [activeNestedIndex, setActiveNestedIndex] = useState(-1);
  const [mobileNestedOpen, setMobileNestedOpen] = useState(-1);
  
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
      setMobileNestedOpen(-1);
    } else {
      setOpenIndex(index);
      setMobileNestedOpen(-1);
    }
  };

  const handleMobileNested = (index) => {
    if (mobileNestedOpen === index) {
      setMobileNestedOpen(-1);
    } else {
      setMobileNestedOpen(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="px-4">
              <Link
                href="/"
                className={`header-logo block ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Orion App Tech"
                  width={50}
                  height={25}
                  className="h-auto w-auto"
                />
              </Link>
            </div>
            
            {/* Center Navigation */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="flex items-center">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block ${
                                menuItem.megaMenu ? "lg:w-[900px] lg:left-1/2 lg:-translate-x-1/2" : "lg:w-[250px] lg:left-0"
                              } lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              } max-h-[calc(100vh-200px)] overflow-y-auto lg:max-h-none lg:overflow-visible`}
                            >
                              {menuItem.megaMenu ? (
                                <div className="lg:flex lg:gap-0">
                                  {/* Left vertical list */}
                                  <div className="lg:w-[280px] lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:pr-4">
                                    {menuItem.submenu.map((submenuItem, subIndex) => (
                                      <div key={subIndex}>
                                        {submenuItem.submenu ? (
                                          <div
                                            className="group/nested relative"
                                            onMouseEnter={() => setActiveNestedIndex(subIndex)}
                                          >
                                            <Link
                                              href={submenuItem.path}
                                              onClick={() => handleMobileNested(subIndex)}
                                              className="text-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary flex items-center justify-between rounded-sm py-3 px-3 text-base font-medium cursor-pointer dark:text-white/70 dark:hover:text-white"
                                            >
                                              <span>{submenuItem.title}</span>
                                              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                                            </Link>
                                            {/* Mobile nested submenu */}
                                            <div className={`ml-4 lg:hidden max-h-[300px] overflow-y-auto ${mobileNestedOpen === subIndex ? "block" : "hidden"}`}>
                                              {submenuItem.submenu.map((nestedItem, nestedIndex) => (
                                                <Link
                                                  href={nestedItem.path}
                                                  key={nestedIndex}
                                                  className="text-dark hover:text-primary block rounded-sm py-2 px-3 text-sm dark:text-white/70 dark:hover:text-white"
                                                >
                                                  {nestedItem.title}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        ) : (
                                          <Link
                                            href={submenuItem.path}
                                            className="text-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary block rounded-sm py-3 px-3 text-base font-medium dark:text-white/70 dark:hover:text-white"
                                            onMouseEnter={() => setActiveNestedIndex(-1)}
                                          >
                                            {submenuItem.title}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Right panel for nested items */}
                                  <div className="hidden lg:block lg:flex-1 lg:pl-6">
                                    {menuItem.submenu.map((submenuItem, subIndex) => (
                                      <div
                                        key={subIndex}
                                        className={`${
                                          activeNestedIndex === subIndex ? "block" : "hidden"
                                        }`}
                                      >
                                        {submenuItem.submenu && (
                                          <div className="grid grid-cols-3 gap-3">
                                            {submenuItem.submenu.map((nestedItem, nestedIndex) => (
                                              <Link
                                                href={nestedItem.path}
                                                key={nestedIndex}
                                                className="text-dark hover:text-primary block rounded-sm py-2 px-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white/70 dark:hover:text-white"
                                              >
                                                {nestedItem.title}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  {menuItem.submenu.map((submenuItem, subIndex) => (
                                    <Link
                                      href={submenuItem.path}
                                      key={subIndex}
                                      className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Right Side Contact Us */}
            <div className="flex items-center justify-end gap-4 pr-16 lg:pr-0">
              <Link
                href="/contact"
                className="hidden whitespace-nowrap rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition hover:bg-primary/90 lg:block"
              >
                Contact Us
              </Link>
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
