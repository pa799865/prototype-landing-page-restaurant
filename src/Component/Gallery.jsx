// src/Component/Gallery.jsx
import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  const containerRef = useRef(null);
  const isoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    const galleryEl = containerRef.current;
    if (!galleryEl) return;

    // Tunggu gambar selesai load baru init isotope
    imagesLoaded(galleryEl, function () {
      isoRef.current = new Isotope(galleryEl.querySelector(".isotope-container"), {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
      });
    });

    // Init GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });

    // Filter click
    const filters = galleryEl.querySelectorAll(".restaurant-gallery-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        filters.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        isoRef.current.arrange({ filter: filterValue });
      });
    });

    return () => {
      lightbox.destroy();
      isoRef.current?.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery section" ref={containerRef}>
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Gallery</span>
        <h2>Gallery</h2>
        <p>Abadikan momen indah dan suasana hangat yang menjadi bagian dari pengalaman bersantap di tempat kami.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="restaurant-gallery-filters isotope-filters mb-4 justify-content-center d-flex gap-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              Semua
            </li>
            <li data-filter=".filter-food">Makanan</li>
            <li data-filter=".filter-drinks">Minuman</li>
            <li data-filter=".filter-interior">Interior</li>
            <li data-filter=".filter-staff">Staff</li>
          </ul>

          <div
            className="row g-3 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 isotope-item filter-food">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/main-3.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/main-3.webp"
                    alt="Grilled Salmon"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Grilled Salmon</span>
                  <span>Fresh salmon with lemon butter sauce.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-interior">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/showcase-2.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/showcase-2.webp"
                    alt="Dining Hall"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Dining Hall</span>
                  <span>Spacious, warm and welcoming ambiance.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-staff">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/chef-5.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/chef-5.webp"
                    alt="Chef Maria"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Chef Maria</span>
                  <span>Our creative chef behind every dish.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-drinks">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/drink-2.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/drink-2.webp"
                    alt="Signature Mocktail"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Signature Mocktail</span>
                  <span>Vibrant blend of fresh citrus and herbs.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-food">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/dessert-4.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/dessert-4.webp"
                    alt="Raspberry Tart"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Raspberry Tart</span>
                  <span>Sweet pastry filled with creamy vanilla custard.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-interior">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/showcase-5.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/showcase-5.webp"
                    alt="Bar Area"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Bar Area</span>
                  <span>Cozy spot for cocktails and good conversation.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-staff">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/chef-2.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/chef-2.webp"
                    alt="Sous Chef Daniel"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Sous Chef Daniel</span>
                  <span>Expert in modern fusion cuisine.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-drinks">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/drink-8.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/drink-8.webp"
                    alt="Classic Espresso"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Classic Espresso</span>
                  <span>Rich and aromatic, served to perfection.</span>
                </figcaption>
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 isotope-item filter-food">
              <figure className="gallery-card">
                <a
                  href="assets/img/restaurant/main-7.webp"
                  className="glightbox"
                  data-gallery="restaurant-gallery"
                >
                  <img
                    src="assets/img/restaurant/main-7.webp"
                    alt="Beef Fillet"
                    className="img-fluid rounded"
                    loading="lazy"
                  />
                </a>
                <figcaption className="caption">
                  <span className="caption-title">Beef Fillet</span>
                  <span>Tender beef with herb roasted vegetables.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
