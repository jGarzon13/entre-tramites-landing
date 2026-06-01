import {
  FaBalanceScale,
  FaBolt,
  FaUsers,
  FaGlobeEurope,
} from "react-icons/fa";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";

export function WhatIsSection() {
  const cards = [
    {
      icon: <FaBalanceScale />,
      title: "Regulado por la Ley 14/2013",
      desc: "La 'Ley de Emprendedores' establece un proceso ágil y directo para atraer talento emprendedor a España.",
      delay: "",
    },
    {
      icon: <FaBolt />,
      title: "Resolución rápida",
      desc: "La DGOM resuelve en 20 días hábiles, mucho más rápido que otros permisos de residencia.",
      delay: "delay-1",
    },
    {
      icon: <FaUsers />,
      title: "Reagrupación familiar",
      desc: "Puedes incluir a tu cónyuge e hijos menores de 18 años en la misma solicitud.",
      delay: "delay-2",
    },
    {
      icon: <FaGlobeEurope />,
      title: "Acceso al espacio Schengen",
      desc: "Reside en España y circula libremente por los 26 países del área Schengen.",
      delay: "delay-3",
    },
  ];

  return (
    <section
      id="que-es"
      style={{
        padding: "clamp(56px, 6vw, 80px) 5%",
        background: C.white,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <AnimatedSection
          style={{
            textAlign: "center",
            marginBottom: 56,
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
            ¿Qué es?
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
              marginBottom: 16,
            }}
          >
            El Visado para Emprendedores en España
          </h2>

          <p
            style={{
              fontSize: 17,
              color: C.gray500,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Una autorización especial para ciudadanos no comunitarios que deseen
            residir en España para desarrollar una actividad emprendedora de
            interés general.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {cards.map((card) => (
            <AnimatedSection key={card.title} className={card.delay}>
              <div
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.gray100}`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-4px)";
                  event.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(26,46,110,0.12)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(26,46,110,0.06)";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(45,179,93,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: C.green,
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {card.icon}
                </div>

                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 10,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: C.gray500,
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}