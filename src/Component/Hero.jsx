import React from "react";

const Hero = () => {
  return (
    <>
      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          color: #fff;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-background video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 20%, #000 150%);
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1100px;
          padding: 0 20px;
        }

        /* Desktop Layout */
        .hero-top-grid {
          display: flex;
          align-items: center; 
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 50px;
        }

        .hero-brand {
          flex: 1.4;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -3px;
          line-height: 0.85;
          margin: 0;
          background: linear-gradient(to bottom, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc-side {
          flex: 1;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin: 0;
          border-left: 2px solid #ffc107;
          padding-left: 30px;
          max-width: 450px;
        }

        .hero-sub-small {
          font-size: 0.85rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #ffc107;
          display: block;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .cta-bar {
          display: flex;
          width: 100%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(5px);
        }

        .btn-full {
          flex: 1;
          padding: 25px;
          text-align: center;
          text-decoration: none;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          letter-spacing: 2px;
        }

        .btn-main-fill {
          background: #fff;
          color: #000;
        }

        .btn-secondary-outline {
          color: #fff;
          background: transparent;
        }

        /* --- MOBILE RESPONSIVE FIX --- */
        @media (max-width: 991px) {
          .hero {
            height: auto;
            min-height: 100vh;
            padding: 100px 0 50px; /* Kasih space atas bawah biar ga nempel layar */
          }

          .hero-top-grid {
            flex-direction: column;
            align-items: center; /* Ubah ke Center */
            text-align: center; /* Teks jadi Tengah */
            gap: 30px;
            margin-bottom: 40px;
          }

          .hero-brand {
            font-size: 3.5rem; /* Perkecil biar ga makan layar */
            letter-spacing: -1px;
          }

          .hero-desc-side {
            border-left: none; /* Ilangin garis samping */
            border-top: 1px solid #ffc107; /* Pindah ke atas */
            padding-left: 0;
            padding-top: 20px;
            max-width: 100%;
            font-size: 0.95rem;
          }

          .cta-bar {
            flex-direction: column; /* Tombol jadi tumpuk vertikal */
            border: none;
            gap: 10px;
          }

          .btn-full {
            flex: none;
            width: 100%;
            padding: 20px;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .btn-main-fill {
            background: #ffc107; /* Di mobile warna gold lebih eye-catching */
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-background">
          <video autoPlay muted loop playsInline>
            <source src="/assets/img/restaurant/video-4.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div data-aos="fade-up">
            <div className="hero-top-grid">
              {/* BRAND AREA */}
              <div className="title-area">
                <span className="hero-sub-small">Heritage of Tanjungpinang</span>
                <h1 className="hero-brand">WAROENG<br/>SEARAH</h1>
              </div>

              {/* DESCRIPTION AREA */}
              <div className="desc-area">
                <p className="hero-desc-side">
                  Otentik. Berkarakter. Berkesan. Perpaduan rasa, suasana, dan pelayanan untuk menciptakan pengalaman bersantap yang tak terlupakan di jantung kota.
                </p>
              </div>
            </div>

            {/* ACTION BAR */}
            <div className="cta-bar">
              <a href="https://www.instagram.com/waroeng.searah/" className="btn-full btn-main-fill">
                Book a Table
              </a>
              <a href="#menu" className="btn-full btn-secondary-outline">
                View Gallery Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;