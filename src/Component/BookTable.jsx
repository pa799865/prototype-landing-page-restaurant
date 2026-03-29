import React from "react";

const BookTable = () => {
  return (
    <section id="book-a-table" className="book-a-table section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div className="reservation-container">
              <div className="row g-0">
                {/* Form Section */}
                {/* <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
                  <div className="reservation-form-section">
                    <div className="form-header text-center">
                      <h3>Make a Reservation</h3>
                      <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                        nostrud exercitation.
                      </p>
                    </div>

                    <form
                      action="forms/book-a-table.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="row gy-3">
                        <div className="col-12">
                          <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="col-12">
                          <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="col-12">
                          <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="col-6">
                          <input type="date" name="date" className="form-control" required />
                        </div>
                        <div className="col-6">
                          <input type="time" name="time" className="form-control" required />
                        </div>
                        <div className="col-6">
                          <select name="people" className="form-select" required>
                            <option value="">Guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <select name="occasion" className="form-select">
                            <option value="">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="business">Business Dinner</option>
                            <option value="date">Date Night</option>
                            <option value="celebration">Celebration</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="3"
                            placeholder="Special requests or dietary requirements"
                          ></textarea>
                        </div>
                      </div>

                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your reservation request has been submitted successfully. We'll contact you shortly to confirm.
                        </div>
                      </div>

                      <button type="submit" className="btn-reserve w-100">
                        <i className="bi bi-calendar-check me-2"></i>
                        Reserve Table
                      </button>
                    </form>
                  </div>
                </div> */}

                {/* Info Section */}
                <div className="col-lg-12" data-aos="fade-left" data-aos-delay="300">
                  <div className="reservation-info-section">
                    <div className="hero-image">
                      <img
                        src="assets/img/restaurant/showcase-2.webp"
                        alt="Restaurant dining area"
                        className="img-fluid"
                      />
                      <div className="overlay-content">
                        <h4>Rasakan Hidangan Mewah</h4>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Info Section */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
