import React, { useEffect, useState } from "react";
import Hero from "../Component/hero.jsx";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <header
        id="header"
        className={`header fixed-top ${isScrolled ? "scrolled" : ""}`}
      >
        

        {/* Branding */}
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="#" className="logo d-flex align-items-center">
              <h1 className="sitename">Restoran MBG</h1>
            </a>

            {/* Navigation */}
            <nav
              id="navmenu"
              className={`navmenu ${isMobileNavOpen ? "active" : ""}`}
            >
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#book-a-table">Book a Table</a>
                </li>
                <li>
                  <a href="#chefs">Chefs</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <i
                className="mobile-nav-toggle d-xl-none bi bi-list"
                onClick={toggleMobileNav}
              ></i>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}
