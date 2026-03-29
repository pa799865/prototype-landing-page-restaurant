import React from "react";

const Events = () => {
  return (
    <section id="events" className="events section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Events</span>
        <h2>Events</h2>
        <p>
          Rayakan momen spesial Anda bersama kami dengan suasana eksklusif dan sajian istimewa.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Hero */}
        <div className="row">
          <div
            className="col-lg-8 mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="seasonal-hero">
              <span className="seasonal-badge">Waktu Terbatas</span>
              <h2>Autumn Harvest Festival</h2>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
              </p>
              <div className="festival-dates">
                <i className="bi bi-calendar-event"></i>
                <span>October 15 - November 30, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-6" data-aos="slide-right" data-aos-delay="250">
            <div className="feature-card primary">
              <div className="feature-visual">
                <img
                  src="/assets/img/restaurant/misc-3.webp"
                  alt="Special Menu"
                  className="img-fluid"
                />
                <div className="feature-badge">
                  <i className="bi bi-star-fill"></i>
                  <span>Chef&apos;s Special</span>
                </div>
              </div>
              <div className="feature-content">
                <h3>Seasonal Harvest Menu</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Farm-to-Table Ingredients</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Locally Sourced Produce</span>
                  </div>
                </div>
                <a href="https://www.instagram.com/waroeng.searah/" className="feature-link">
                  Info Lebih Lanjut <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="slide-left" data-aos-delay="300">
            <div className="feature-card secondary">
              <div className="feature-visual">
                <img
                  src="/assets/img/restaurant/misc-7.webp"
                  alt="Wine Pairing"
                  className="img-fluid"
                />
                <div className="feature-badge">
                  <i className="bi bi-award-fill"></i>
                  <span>Award Winning</span>
                </div>
              </div>
              <div className="feature-content">
                <h3>Wine Pairing Experience</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Sommelier Curated</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Premium Selection</span>
                  </div>
                </div>
                <a href="https://www.instagram.com/waroeng.searah/" className="feature-link">
                  Info Lebih Lanjut <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-section" data-aos="fade-up" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="250">
              <div className="awards-content">
                <h3>Rekor &amp; Penghargaan</h3>
                <p>
                 Pengakuan dan penghargaan yang mencerminkan dedikasi kami dalam menghadirkan kualitas terbaik di setiap sajian.
                </p>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
              <div className="awards-grid">
                {[
                  { icon: "bi-trophy-fill", title: "Best Restaurant 2024", subtitle: "City Dining Awards" },
                  { icon: "bi-star-fill", title: "5-Star Rating", subtitle: "Local Food Guide" },
                  { icon: "bi-gem", title: "Excellence Award", subtitle: "Culinary Institute" },
                  { icon: "bi-heart-fill", title: "Customer Choice", subtitle: "Community Favorite" },
                ].map((award, i) => (
                  <div className="award-item" key={i}>
                    <div className="award-icon">
                      <i className={`bi ${award.icon}`}></i>
                    </div>
                    <div className="award-details">
                      <h4>{award.title}</h4>
                      <span>{award.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="community-section" data-aos="fade-up" data-aos-delay="200">
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="250">
              <div className="community-card">
                <div className="community-header">
                  <div className="community-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h3>Community Involvement</h3>
                    <p>Supporting local farmers and charities since 2015</p>
                  </div>
                </div>

                <div className="community-stats">
                  <div className="stat-row">
                    <div className="stat-item">
                      <span className="stat-number">$50K+</span>
                      <span className="stat-label">Donated to Local Charities</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">25+</span>
                      <span className="stat-label">Local Farm Partners</span>
                    </div>
                  </div>
                  <div className="stat-row">
                    <div className="stat-item">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">Community Events Hosted</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Volunteer Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="sustainability-card">
                <div className="sustainability-header">
                  <div className="sustainability-icon">
                    <i className="bi bi-recycle"></i>
                  </div>
                  <div>
                    <h3>Eco-Friendly Practices</h3>
                    <p>Committed to sustainable dining and zero waste</p>
                  </div>
                </div>

                <div className="sustainability-features">
                  {[
                    { icon: "bi-leaf-fill", text: "100% Compostable Packaging" },
                    { icon: "bi-water", text: "Water Conservation Program" },
                    { icon: "bi-lightning-fill", text: "Renewable Energy Powered" },
                    { icon: "bi-truck", text: "Local Sourcing Priority" },
                  ].map((feature, i) => (
                    <div className="feature-item" key={i}>
                      <i className={`bi ${feature.icon}`}></i>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
