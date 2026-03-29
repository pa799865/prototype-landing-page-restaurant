import React from "react";

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Chefs</span>
        <h2>Chefs</h2>
        <p>Di balik setiap hidangan lezat, ada tangan-tangan ahli yang menciptakan pengalaman rasa yang tak terlupakan.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="featured-chef row align-items-center g-4" data-aos="fade-up" data-aos-delay="150">
          <div className="col-lg-5">
            <figure className="chef-photo m-0">
              <img
                src="/assets/img/restaurant/chef-4.webp"
                alt="Executive chef portrait"
                className="img-fluid"
              />
              <div className="badge-overlay">
                <span className="pill">
                  <i className="bi bi-star-fill me-1"></i> Michelin Mention
                </span>
              </div>
            </figure>
          </div>

          <div className="col-lg-7">
            <div className="chef-content">
              <div className="topline d-inline-flex align-items-center mb-2">
                <i className="bi bi-patch-check-fill me-2"></i>
                <span>Featured Chef</span>
              </div>
              <h3 className="name">Avery Montrose</h3>
              <p className="role mb-3">Executive Chef</p>
              <p className="bio mb-4">
                Curabitur convallis lectus a sapien dictum, sed posuere urna fermentum. Maecenas sodales, neque non
                pretium ultrices, lacus nibh finibus mi, non vulputate arcu quam at nisl.
              </p>

              <ul className="awards list-unstyled d-flex flex-wrap gap-2 mb-4">
                <li className="award-badge">
                  <i className="bi bi-award me-1"></i> Gourmand Trophy 2022
                </li>
                <li className="award-badge">
                  <i className="bi bi-bookmark-star me-1"></i> Le Cordon Bleu Honors
                </li>
                <li className="award-badge">
                  <i className="bi bi-trophy me-1"></i> City Best Tasting Menu
                </li>
              </ul>

              <div className="signature">
                <img
                  src="/assets/img/misc/signature-1.webp"
                  alt="Chef signature"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chef Cards */}
        <div className="row g-4 team-grid mt-2">
          {[
            {
              name: "Jordan Lee",
              role: "Sous Chef",
              img: "/assets/img/restaurant/chef-1.webp",
              excerpt:
                "Donec feugiat, arcu non pulvinar posuere, risus libero cursus nibh, sed dictum nibh arcu non augue.",
              badges: [{ icon: "bi bi-award", text: "Street Food Fest" }],
              social: ["instagram", "twitter-x", "linkedin"],
              delay: 200,
            },
            {
              name: "Mila Santos",
              role: "Pastry Chef",
              img: "/assets/img/restaurant/chef-6.webp",
              excerpt:
                "Integer aliquet, urna et commodo gravida, libero lacus aliquam velit, vitae iaculis sem velit in purus.",
              badges: [{ icon: "bi bi-egg-fried", text: "Cocoa Summit" }],
              social: ["instagram", "facebook", "pinterest"],
              delay: 250,
            },
            {
              name: "Kai Thompson",
              role: "Grill Master",
              img: "/assets/img/restaurant/chef-8.webp",
              excerpt:
                "Pellentesque dapibus, nibh id pharetra interdum, risus est vehicula lectus, non iaculis velit elit ut felis.",
              badges: [{ icon: "bi bi-fire", text: "Smoke-Off Winner" }],
              social: ["instagram", "tiktok", "youtube"],
              delay: 300,
            },
            {
              name: "Renee Collins",
              role: "Line Cook",
              img: "/assets/img/restaurant/chef-3.webp",
              excerpt:
                "Vestibulum congue, justo eget ultricies posuere, erat nunc viverra arcu, vitae cursus arcu nunc at erat.",
              badges: [{ icon: "bi bi-emoji-smile", text: "Guest Favorite" }],
              social: ["instagram", "twitter-x", "linkedin"],
              delay: 350,
            },
          ].map((chef, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={chef.delay}
            >
              <article className="chef-card h-100">
                <div className="image-wrapper">
                  <img
                    src={chef.img}
                    alt={`${chef.role} portrait`}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <ul className="social list-unstyled m-0">
                    {chef.social.map((s, i) => (
                      <li key={i}>
                        <a href="#" aria-label={s}>
                          <i className={`bi bi-${s}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="content p-3">
                  <h4 className="name mb-1">{chef.name}</h4>
                  <p className="role mb-2">{chef.role}</p>
                  <p className="excerpt mb-3">{chef.excerpt}</p>
                  <div className="badges d-flex flex-wrap gap-2">
                    {chef.badges.map((b, i) => (
                      <span key={i} className="mini-badge">
                        <i className={`${b.icon} me-1`}></i> {b.text}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
