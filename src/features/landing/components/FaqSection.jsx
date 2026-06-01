import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { faqs } from "../data/faqs";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        padding: "clamp(56px, 6vw, 80px) 5%",
        background: C.gray50,
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        <AnimatedSection
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: "rgba(45,179,93,0.12)",
              color: C.green,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              margin: "0 auto 16px",
            }}
          >
            <FaQuestionCircle />
          </div>

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
            Preguntas frecuentes
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
            }}
          >
            Resolvemos tus dudas
          </h2>
        </AnimatedSection>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <AnimatedSection key={faq.question} className={`delay-${index % 3}`}>
              <div
                style={{
                  background: C.white,
                  border: `1.5px solid ${isOpen ? C.navy : C.gray100}`,
                  borderRadius: 14,
                  marginBottom: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(26,46,110,0.04)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: C.navy,
                      textAlign: "left",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>

                  <span
                    style={{
                      color: isOpen ? C.green : C.gray500,
                      fontSize: 24,
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <HiOutlinePlus />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: C.gray500,
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}