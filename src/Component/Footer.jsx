import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">

      <div className="container">
        <div className="row gy-5">

          <div className="col-lg-4">
            <div className="footer-content">
              <a href="index.html" className="logo d-flex align-items-center mb-4">
                <span className="sitename">Waroeng Searah</span>
              </a>
              <p className="mb-4">
                Menghadirkan pengalaman kuliner dengan cita rasa autentik, suasana nyaman, dan pelayanan terbaik untuk setiap momen Anda.
              </p>

              {/* <div className="newsletter-form">
                <h5>Stay Updated</h5>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="btn-subscribe">
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Thank you for subscribing!</div>
                </form>
              </div> */}
            </div>
          </div>

          <div className="col-lg-2 col-6">
            {/* <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#"><i className="bi bi-chevron-right"></i> About</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Careers</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Press</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Blog</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Contact</a></li>
              </ul>
            </div> */}
          </div>

          <div className="col-lg-3 col-6">
            {/* <div className="footer-links">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Digital Strategy</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Cloud Computing</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Data Analytics</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> AI Solutions</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i> Cybersecurity</a></li>
              </ul>
            </div> */}
          </div>

          <div className="col-lg-3">
            <div className="footer-contact">
              <h4>Get in Touch</h4>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-info">
                  <p>
                    Tanjung Pinang<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-info">
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-instagram"></i>
                </div>
                <div className="contact-info">
                  <p>@waroengsearah</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  © <span>Copyright</span> <strong className="px-1 sitename">Waroeng Searah</strong> <span>All Rights Reserved</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="credits">
                Designed by <a href="#">Putra Arya Setiawan</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
