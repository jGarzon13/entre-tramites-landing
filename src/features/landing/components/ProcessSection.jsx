import {
  FaPhoneAlt,
  FaClipboardList,
  FaFolderOpen,
  FaUniversity,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { processSteps } from "../data/processSteps";

export function ProcessSection() {
  const stepIcons = [
    <FaPhoneAlt />,
    <FaClipboardList />,
    <FaFolderOpen />,
    <FaUniversity />,
    <FaPaperPlane />,
    <FaCheckCircle />,
  ];

  return (
    <section
      id="proceso"
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
            Cómo trabajamos
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.navy,
            }}
          >
            Tu proceso, paso a paso
          </h2>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.num} className={`delay-${index % 4}`}>
              <div
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.gray100}`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(26,46,110,0.05)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-4px)";
                  event.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(26,46,110,0.12)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(26,46,110,0.05)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: 42,
                    fontWeight: 900,
                    color: "rgba(26,46,110,0.06)",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>

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
                    fontSize: 22,
                    marginBottom: 16,
                  }}
                >
                  {stepIcons[index]}
                </div>

                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.navy,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: C.gray500,
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}