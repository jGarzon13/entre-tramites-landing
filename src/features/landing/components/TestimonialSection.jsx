import { FaGoogle, FaStar } from "react-icons/fa";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { testimonials } from "../data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      style={{
        padding: "clamp(56px, 6vw, 80px) 5%",
        background: C.white,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <AnimatedSection
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <p
            style={{
              color: C.green,
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            Testimonios
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
              marginBottom: 12,
            }}
          >
            Lo que dicen nuestros clientes
          </h2>

          <p
            style={{
              fontSize: 14,
              color: C.gray500,
              lineHeight: 1.7,
            }}
          >
            La evaluación general en <strong>Google</strong> es{" "}
            <strong>4.5 de 5</strong>, en base a{" "}
            <strong>600 reseñas</strong>.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              className={`delay-${index % 4}`}
            >
              <div
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.gray100}`,
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 4px 20px rgba(26,46,110,0.05)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-3px)";
                  event.currentTarget.style.boxShadow =
                    "0 10px 28px rgba(26,46,110,0.1)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(26,46,110,0.05)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: `hsl(${index * 60 + 200}, 50%, 45%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C.white,
                      fontWeight: 800,
                      fontSize: 16,
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: C.navy,
                      }}
                    >
                      {testimonial.name}
                    </p>

                    <p
                      style={{
                        fontSize: 12,
                        color: C.gray500,
                      }}
                    >
                      {testimonial.date}
                    </p>
                  </div>

                  <div
                    style={{
                      marginLeft: "auto",
                      color: C.navy,
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaGoogle />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 3,
                    marginBottom: 10,
                    color: C.accent,
                    fontSize: 15,
                  }}
                >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: C.gray500,
                    lineHeight: 1.7,
                  }}
                >
                  {testimonial.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}