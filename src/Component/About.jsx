import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">&nbsp;Tentang Kami</span>
        <h2>Tentang Kami</h2>
        <p>
          Perpaduan rasa, suasana, dan pelayanan untuk menciptakan pengalaman bersantap yang berkesan.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-content">
              <h2>Rasakan Pendekatan Unik Kami</h2>
              <p className="fst-italic">
               Kami menghadirkan pengalaman kuliner yang menggabungkan cita rasa autentik dengan sentuhan modern. Setiap hidangan disiapkan dengan bahan pilihan dan perhatian penuh terhadap detail, untuk memastikan kualitas terbaik di setiap sajian.
              </p>
              <p>
                Dengan suasana yang nyaman dan pelayanan yang ramah, kami berkomitmen memberikan pengalaman bersantap yang berkesan. Baik untuk makan santai bersama keluarga maupun pertemuan spesial, tempat kami menjadi pilihan yang tepat.
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <i className="bi bi-award"></i>
                    <h4>Layanan Luar Biasa</h4>
                    <p>Kami mengutamakan kepuasan pelanggan melalui pelayanan yang cepat, ramah, dan profesional di setiap kunjungan.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-trophy"></i>
                    <h4>Pengakuan Industri</h4>
                    <p>Kualitas rasa dan pelayanan kami telah mendapatkan apresiasi dari pelanggan dan terus berkembang mengikuti standar industri kuliner.</p>
                  </div>
                </div>
              </div>

              <div
                className="signature mt-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <p className="chef-name">Jane Smith, Kepala Operasional</p>
                <img
                  src="/assets/img/misc/signature-1.webp"
                  alt="Chef Signature"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="about-gallery">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="/assets/img/restaurant/showcase-3.webp"
                    className="img-fluid rounded"
                    alt="Restaurant Image"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/assets/img/restaurant/showcase-8.webp"
                    className="img-fluid rounded"
                    alt="Restaurant Image"
                  />
                </div>
                <div className="col-12 mt-3 position-relative">
                  <div className="years-badge">
                    <span className="number">18</span>
                    <span className="text">Tahun Berdiri</span>
                  </div>
                  <img
                    src="/assets/img/restaurant/showcase-6.webp"
                    className="img-fluid rounded"
                    alt="Restaurant Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
