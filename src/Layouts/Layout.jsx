import React, { useEffect, useState } from "react";
import Hero from "../Component/Hero.jsx";
import About from "../Component/About.jsx";
import Menu from "../Component/Menu.jsx";
import Testimonials from "../Component/Testimonials.jsx";
import Chefs from "../Component/Chefs.jsx";
import BookTable from "../Component/BookTable.jsx";
import Location from "../Component/Location.jsx";
import Events from "../Component/Events.jsx";
import Gallery from "../Component/Gallery.jsx";
import Contact from "../Component/Contact.jsx";
import Footer from "../Component/Footer.jsx";
import "../main.css";

export default function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Navbar background saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ACTIVE SECTION (VERSI STABIL)
  useEffect(() => {
    let timeout;

    const handleScrollActive = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const sections = document.querySelectorAll("section");
        const scrollY = window.scrollY;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 150; // offset navbar
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      }, 50);
    };

    window.addEventListener("scroll", handleScrollActive);

    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  // Toggle mobile nav
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  // Klik navbar
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        id="header"
        className={`header fixed-top ${isScrolled ? "scrolled" : ""} ${
          isMobileNavOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">

            {/* LOGO */}
            <a href="#hero" className="logo d-flex align-items-center">
              <h1 className="sitename">Waroeng Searah</h1>
            </a>

            {/* HAMBURGER */}
            <i
              className={`mobile-nav-toggle d-xl-none bi ${
                isMobileNavOpen ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMobileNav}
            ></i>

            {/* NAVBAR */}
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a
                    href="#hero"
                    className={activeSection === "hero" ? "active" : ""}
                    onClick={() => handleNavClick("hero")}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#menu"
                    className={activeSection === "menu" ? "active" : ""}
                    onClick={() => handleNavClick("menu")}
                  >
                    Menu
                  </a>
                </li>

                <li>
                  <a
                    href="#book-a-table"
                    className={
                      activeSection === "book-a-table" ? "active" : ""
                    }
                    onClick={() => handleNavClick("book-a-table")}
                  >
                    Book a Table
                  </a>
                </li>

                <li>
                  <a
                    href="#chefs"
                    className={activeSection === "chefs" ? "active" : ""}
                    onClick={() => handleNavClick("chefs")}
                  >
                    Chefs
                  </a>
                </li>

                <li>
                  <a
                    href="#events"
                    className={activeSection === "events" ? "active" : ""}
                    onClick={() => handleNavClick("events")}
                  >
                    Events
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Chefs />
        <BookTable />
        <Location />
        <Events />
        <Gallery />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  );
}