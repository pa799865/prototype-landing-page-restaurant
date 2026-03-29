import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Menu() {
  const isotope = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // init AOS
    AOS.init({ duration: 800, once: true });

    // tunggu render selesai, lalu jalankan Isotope
    const grid = menuRef.current.querySelector(".menu-grid");
    isotope.current = new Isotope(grid, {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    // handle filter click
    const filters = menuRef.current.querySelectorAll(".menu-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((f) => f.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        isotope.current.arrange({ filter: filterValue });
      });
    });

    return () => isotope.current?.destroy();
  }, []);

  return (
    <section id="menu" className="menu section" ref={menuRef}>
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Menu</span>
        <h2>Menu</h2>
        <p>Nikmati beragam hidangan istimewa yang diracik dengan cita rasa khas dan sentuhan terbaik dari dapur kami.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="menu-filters isotope-filters mb-5" data-aos="fade-up" data-aos-delay="200">
          <ul>
            <li data-filter="*" className="filter-active">Semua Hidangan</li>
            <li data-filter=".filter-starters">Makanan</li>
            <li data-filter=".filter-main">Minuman</li>
            <li data-filter=".filter-dessert">Snack</li>
            <li data-filter=".filter-drinks">Beverages</li>
          </ul>
        </div>

        <div className="menu-grid isotope-container row gy-5" data-aos="fade-up" data-aos-delay="300">
          {/* Appetizers */}
          <div className="col-xl-4 col-lg-6 isotope-item filter-starters">
            <div className="menu-card">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/starter-1.webp" alt="Appetizer" className="img-fluid" />
                <div className="price-overlay">Rp. 12.500</div>
              </div>
              <div className="menu-card-content">
                <h4>Prosciutto-Wrapped Asparagus</h4>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 isotope-item filter-starters">
            <div className="menu-card">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/starter-3.webp" alt="Appetizer" className="img-fluid" />
                <div className="price-overlay">Rp. 14.000</div>
              </div>
              <div className="menu-card-content">
                <h4>Seared Scallops with Cauliflower</h4>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="col-xl-4 col-lg-6 isotope-item filter-main">
            <div className="menu-card featured">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/main-2.webp" alt="Main Course" className="img-fluid" />
                <div className="price-overlay">Rp. 28.000</div>
              </div>
              <div className="menu-card-content">
                <h4>Herb-Crusted Rack of Lamb</h4>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 isotope-item filter-main">
            <div className="menu-card">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/main-6.webp" alt="Main Course" className="img-fluid" />
                <div className="price-overlay">Rp. 22.700</div>
              </div>
              <div className="menu-card-content">
                <h4>Quinoa Stuffed Bell Peppers</h4>
              </div>
            </div>
          </div>

          {/* Dessert */}
          <div className="col-xl-4 col-lg-6 isotope-item filter-dessert">
            <div className="menu-card">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/dessert-4.webp" alt="Dessert" className="img-fluid" />
                <div className="price-overlay">Rp. 11.000</div>
              </div>
              <div className="menu-card-content">
                <h4>Salted Caramel Cheesecake</h4>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div className="col-xl-4 col-lg-6 isotope-item filter-drinks">
            <div className="menu-card">
              <div className="menu-card-image">
                <img src="assets/img/restaurant/drink-2.webp" alt="Beverage" className="img-fluid" />
                <div className="price-overlay">Rp. 15.000</div>
              </div>
              <div className="menu-card-content">
                <h4>Elderflower Gin Fizz</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
