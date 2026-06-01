import { FaCheck, FaTimes, FaTag } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { plans } from "../data/plans";

export function PlansSection() {
  return (
    <section
      id="planes"
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
            Precios transparentes
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
              marginBottom: 16,
            }}
          >
            Planes adaptados a tu proyecto
          </h2>

          <p
            style={{
              fontSize: 16,
              color: C.gray500,
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Sin costos ocultos. Sin sorpresas. Paga solo por lo que necesitas.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {plans.map((plan, index) => {
            const isFeatured = Boolean(plan.badge);

            return (
              <AnimatedSection key={plan.name} className={`delay-${index}`}>
                <div
                  style={{
                    background: isFeatured ? C.navy : C.white,
                    border: isFeatured
                      ? `2px solid ${C.navy}`
                      : `1.5px solid ${C.gray100}`,
                    borderRadius: 20,
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: isFeatured
                      ? "0 16px 48px rgba(26,46,110,0.2)"
                      : "0 4px 20px rgba(26,46,110,0.06)",
                    transform: isFeatured ? "scale(1.03)" : "scale(1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {plan.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: C.green,
                        color: C.white,
                        fontSize: 11,
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: 20,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <FaTag />
                      {plan.badge}
                    </div>
                  )}

                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: isFeatured
                        ? "rgba(255,255,255,0.6)"
                        : C.gray500,
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {plan.name}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 4,
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: 40,
                        fontWeight: 900,
                        color: isFeatured ? C.white : C.navy,
                      }}
                    >
                      {plan.price}
                    </span>

                    <span
                      style={{
                        fontSize: 13,
                        color: isFeatured
                          ? "rgba(255,255,255,0.5)"
                          : C.gray500,
                      }}
                    >
                      IVA no incl.
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: 13,
                      color: isFeatured
                        ? "rgba(255,255,255,0.65)"
                        : C.gray500,
                      marginBottom: 24,
                      lineHeight: 1.6,
                    }}
                  >
                    {plan.desc}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      flex: 1,
                      marginBottom: 28,
                    }}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "7px 0",
                          borderBottom: `1px solid ${
                            isFeatured
                              ? "rgba(255,255,255,0.08)"
                              : C.gray50
                          }`,
                        }}
                      >
                        <span
                          style={{
                            color: C.green,
                            fontWeight: 800,
                            marginTop: 2,
                            fontSize: 12,
                            display: "inline-flex",
                          }}
                        >
                          <FaCheck />
                        </span>

                        <span
                          style={{
                            fontSize: 13,
                            color: isFeatured
                              ? "rgba(255,255,255,0.85)"
                              : C.gray700,
                            lineHeight: 1.5,
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}

                    {plan.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "7px 0",
                          borderBottom: `1px solid ${
                            isFeatured
                              ? "rgba(255,255,255,0.08)"
                              : C.gray50
                          }`,
                          opacity: 0.45,
                        }}
                      >
                        <span
                          style={{
                            color: isFeatured
                              ? "rgba(255,255,255,0.6)"
                              : C.gray500,
                            fontWeight: 800,
                            marginTop: 2,
                            fontSize: 12,
                            display: "inline-flex",
                          }}
                        >
                          <FaTimes />
                        </span>

                        <span
                          style={{
                            fontSize: 13,
                            color: isFeatured
                              ? "rgba(255,255,255,0.7)"
                              : C.gray500,
                            lineHeight: 1.5,
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#consulta"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      textAlign: "center",
                      padding: 14,
                      borderRadius: 12,
                      fontSize: 15,
                      fontWeight: 800,
                      textDecoration: "none",
                      background: isFeatured ? C.green : "transparent",
                      color: isFeatured ? C.white : C.navy,
                      border: isFeatured ? "none" : `2px solid ${C.navy}`,
                      boxShadow: isFeatured
                        ? "0 4px 16px rgba(45,179,93,0.35)"
                        : "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(event) => {
                      if (isFeatured) {
                        event.currentTarget.style.background = C.greenDark;
                      } else {
                        event.currentTarget.style.background = C.navy;
                        event.currentTarget.style.color = C.white;
                      }
                    }}
                    onMouseLeave={(event) => {
                      if (isFeatured) {
                        event.currentTarget.style.background = C.green;
                      } else {
                        event.currentTarget.style.background = "transparent";
                        event.currentTarget.style.color = C.navy;
                      }
                    }}
                  >
                    {plan.cta}
                    <HiOutlineArrowRight />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection
          style={{
            textAlign: "center",
            marginTop: 24,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: C.gray500,
            }}
          >
            ¿Tienes dudas sobre qué plan elegir?{" "}
            <a
              href="#consulta"
              style={{
                color: C.green,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Consúltanos gratis y te orientamos
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}