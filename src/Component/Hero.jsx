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

      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
              <span className="tagline">Experience Culinary Excellence</span>
              <h1 className="hero-title">Savor Every Moment at Restoran MBG</h1>
              <p className="hero-description">
                Indulge in authentic Italian cuisine crafted with passion and the finest ingredients. From traditional recipes passed down through generations to innovative culinary creations, we offer an unforgettable dining experience.
              </p>

              <div className="hero-actions" data-aos="fade-up" data-aos-delay="200">
                <a href="#" className="btn btn-primary">
                  Book a Table
                </a>
                <a href="#" className="btn btn-outline">
                  View Menu
                </a>
              </div>

              <div className="hero-features" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-item">
                  <i className="bi bi-clock"></i>
                  <div className="feature-text">
                    <span className="label">Open Daily</span>
                    <span className="value">11:00 AM - 11:00 PM</span>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="bi bi-geo-alt"></i>
                  <div className="feature-text">
                    <span className="label">Location</span>
                    <span className="value">Downtown Chicago</span>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="bi bi-telephone"></i>
                  <div className="feature-text">
                    <span className="label">Reservations</span>
                    <span className="value">+1 (312) 555-0198</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="booking-card" data-aos="fade-left" data-aos-delay="200">
              <h3>Make a Reservation</h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="php-email-form"
              >
                <div className="row gy-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select name="people" className="form-control" required>
                      <option value="">Guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Special requests or dietary restrictions"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your reservation request has been sent. We'll contact you shortly!
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </form>
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
