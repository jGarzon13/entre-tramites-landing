import {
  FaCheckCircle,
  FaBullseye,
  FaUserTie,
  FaCoins,
  FaBolt,
  FaHandshake,
  FaStar,
  FaGoogle,
} from "react-icons/fa";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { benefits, stats } from "../data/benefits";

export function BenefitsSection() {
  const benefitIcons = [
    <FaCheckCircle />,
    <FaBullseye />,
    <FaUserTie />,
    <FaCoins />,
    <FaBolt />,
    <FaHandshake />,
  ];

  return (
    <section
      id="beneficios"
      className="landing-section landing-section-centered"
      style={{
        background: C.gray50,
      }}
    >
      <div
        className="landing-container benefits-grid"
      >
        <AnimatedSection>
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
            Por qué elegirnos
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
              marginBottom: 20,
              lineHeight: 1.25,
            }}
          >
            Expertos en trámites de emprendedores
          </h2>

          <p
            style={{
              fontSize: 16,
              color: C.gray500,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Llevamos años ayudando a emprendedores de todo el mundo a
            establecerse en España. Nuestro equipo de +90 especialistas conoce
            cada detalle del proceso.
          </p>

          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              style={{
                display: "flex",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(45,179,93,0.12)",
                  color: C.green,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                {benefitIcons[index]}
              </div>

              <div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    color: C.navy,
                    marginBottom: 2,
                  }}
                >
                  {benefit.title}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: C.gray500,
                    lineHeight: 1.5,
                  }}
                >
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="delay-2">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.gray100}`,
                  borderRadius: 16,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 36,
                    fontWeight: 900,
                    color: C[stat.colorKey],
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: C.gray500,
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 16,
              background: C.white,
              border: `1.5px solid ${C.gray100}`,
              borderRadius: 16,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 4,
                  color: C.accent,
                  fontSize: 18,
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
                }}
              >
                <strong style={{ color: C.navy }}>4.5/5</strong> basado en 600
                reseñas de Google
              </p>
            </div>

            <div
              style={{
                marginLeft: "auto",
                color: C.navy,
                fontSize: 28,
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaGoogle />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}