import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Testimonials</span>
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-14"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                rhoncus...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-m-9.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    Marcus Chen <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@marcuschen</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam
                duis minim tempor...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-f-5.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    Sarah Mitchell <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@sarahmitch</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat
                minim velit...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-f-12.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    James Wilson <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@jwilson</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 4 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-m-12.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    Emma Rodriguez <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@emmarod</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 5 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-m-13.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    David Kumar <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@davidkumar</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 6 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Texit tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                eram malis quorum velit...
              </p>
              <div className="profile">
                <img
                  src="assets/img/person/person-f-13.webp"
                  className="testimonial-img"
                  alt=""
                  loading="lazy"
                />
                <div className="info">
                  <h4>
                    Sophia Lee <i className="bi bi-patch-check-fill"></i>
                  </h4>
                  <span>@sophialee</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
