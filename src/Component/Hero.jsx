import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-background">
        <video autoPlay muted loop playsInline>
          <source src="/assets/img/restaurant/video-4.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <div className="container hero-content text-center">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="hero-text text-center" data-aos="fade-up" data-aos-delay="100">
        <span className="tagline d-block text-center">Rasakan Keunggulan Kuliner</span>

        <h1 className="hero-title text-center">
                   Waroeng Searah
        </h1>

        <p className="hero-description text-center mx-auto">
          Manjakan diri Anda dengan masakan otentik yang dibuat dengan penuh semangat dan bahan-bahan terbaik. Dari resep tradisional yang turun temurun hingga kreasi kuliner inovatif, kami menawarkan pengalaman bersantap yang tak terlupakan.
        </p>

        <div className="hero-actions d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <a href="https://www.instagram.com/waroeng.searah/" className="btn btn-primary me-2">
            Reservasi
          </a>
          <a href="#" className="btn btn-outline">
            Lihat Menu
          </a>
        </div>

        <div className="hero-features d-flex justify-content-center flex-wrap text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-item d-flex align-items-center justify-content-center mx-3">
            <i className="bi bi-clock"></i>
            <div className="feature-text ms-2 text-start">
              <span className="label d-block">Jam Buka</span>
              <span className="value">10:00 AM - 02:00 PM</span>
            </div>
          </div>

          <div className="feature-item d-flex align-items-center justify-content-center mx-3">
            <i className="bi bi-geo-alt"></i>
            <div className="feature-text ms-2 text-start">
              <span className="label d-block">Lokasi</span>
              <span className="value">Jl. Hang Tuah, Tanjungpinang Kota</span>
            </div>
          </div>

          <div className="feature-item d-flex align-items-center justify-content-center mx-3">
            <i className="bi bi-telephone"></i>
            <div className="feature-text ms-2 text-start">
              <span className="label d-block">Reservasi</span>
              <span className="value">+1 (312) 555-0198</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="400">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
