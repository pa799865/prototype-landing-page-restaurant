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
        <span className="description-title">&nbsp;About</span>
        <h2>About</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5 align-items-center">
          {/* Left Side */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="about-content">
              <h2>Experience Our Unique Approach</h2>
              <p className="fst-italic">
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Vestibulum id ligula porta felis euismod semper.
              </p>
              <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Curabitur blandit tempus porttitor.
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <i className="bi bi-award"></i>
                    <h4>Exceptional Service</h4>
                    <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-trophy"></i>
                    <h4>Industry Recognition</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                  </div>
                </div>
              </div>

              <div
                className="signature mt-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <p className="chef-name">Jane Smith, Head of Operations</p>
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
                    <span className="text">Years of Dedication</span>
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
