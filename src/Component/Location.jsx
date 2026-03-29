import React from "react";

const Location = () => {
  return (
    <section id="location" className="location section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8534.788935462248!2d104.4353882467118!3d0.9292649407980332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9736172a35a1d%3A0xecf786d383f6cb31!2sWaroeng%20Searah!5e0!3m2!1sid!2sid!4v1774708772106!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="info-container">
              <div className="section-header">
                <h2>Temukan Kami</h2>
                <p>Kunjungi Kami Hari Ini!</p>
              </div>

              {/* Info Cards */}
              <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                <div className="info-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Lokasi Kami</h3>
                  <p>WCHQ+8H5, Jl. Hang Tuah, Tanjungpinang Kota, Kec. Tj. Pinang Kota, Kota Tanjung Pinang, Kepulauan Riau</p>
                </div>
              </div>

              <div className="info-card" data-aos="fade-up" data-aos-delay="400">
                <div className="info-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="info-content">
                  <h3>Kontak</h3>
                  <p>+1 (212) 555-7890</p>
                  <p className="small-text">
                    Respon Lambat Ketika Sibuk.
                  </p>
                </div>
              </div>

              <div className="info-card" data-aos="fade-up" data-aos-delay="500">
                <div className="info-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Jam Buka</h3>
                  <div className="hours-grid">
                    <div className="day">Setiap Hari</div>
                    <div className="time">11:00 AM - 02:00 PM</div>
                  </div>
                </div>

                <div className="additional-info" data-aos="fade-up" data-aos-delay="600">
                      <div className="info-highlight">
                        <i className="bi bi-star-fill"></i>
                        <span>
                          Recommended to book 2-3 days in advance for weekend dining
                        </span>
                      </div>
                    </div>
              </div>

              <div className="cta-wrapper" data-aos="fade-up" data-aos-delay="600">
                <a href="https://www.instagram.com/waroeng.searah/" className="btn-book">
                  Make a Reservation
                </a>
                <a href="https://www.instagram.com/waroeng.searah/" className="btn-contact">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
