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
          Kepuasan pelanggan adalah prioritas kami — berikut pengalaman mereka bersama kami.
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
                Tempatnya keren & klasik, banyak spot foto menarik. Pelayanan ramah, makanannya juga lumayan. Cocok untuk nongkrong anak-anak muda.
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
                    Iwan To 
                    {/* <i className="bi bi-patch-check-fill"></i> */}
                  </h4>
                  {/* <span>@marcuschen</span> */}
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
                Good vibes, good atmosphere, homie, vintage but awesome.
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
                    Affandy HR 
                  </h4>
                  
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
                aesthetic, retro side,
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
                    Sya Vii 
                  </h4>
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
               JUJUR. CHUROS
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
                   Bintang Tribean
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
