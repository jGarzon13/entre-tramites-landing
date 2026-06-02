import {
  FaRegFileAlt,
  FaRegFolderOpen,
  FaPenNib,
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";

import {
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowPath,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import { colors as C } from "../../../styles/tokens";
import heroBg from "../../../assets/images/hero.jpg";

export function Hero() {
  const trustBadges = [
    {
      icon: <FaStar />,
      value: "4.5/5",
      label: "600 reseñas Google",
    },
    {
      icon: <FaCheckCircle />,
      value: "+18K",
      label: "Consultas realizadas",
    },
    {
      icon: <FaLock />,
      value: "100%",
      label: "Online y seguro",
    },
  ];

  const serviceItems = [
    {
      icon: <FaRegFolderOpen />,
      text: "Revisión completa de tu documentación",
    },
    {
      icon: <FaPenNib />,
      text: "Preparación del plan de negocio",
    },
    {
      icon: <HiOutlineCalendarDays />,
      text: "Gestión de cita y trámites consulares",
    },
    {
      icon: <HiOutlineChatBubbleLeftRight />,
      text: "Asesor dedicado durante todo el proceso",
    },
    {
      icon: <HiOutlineArrowPath />,
      text: "Seguimiento hasta la resolución",
    },
    {
      icon: <FaWhatsapp />,
      text: "Soporte por WhatsApp ilimitado",
    },
  ];

  const decorativeCircles = [
    { size: 600, top: -200, right: -200, opacity: 0.06 },
    { size: 400, bottom: -100, left: -100, opacity: 0.05 },
    { size: 250, top: "30%", right: "20%", opacity: 0.08 },
  ];

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
      linear-gradient(rgba(15, 28, 70, 0.78), rgba(26, 46, 110, 0.72)),
      url(${heroBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {decorativeCircles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            border: `2px solid rgba(255,255,255,${circle.opacity})`,
            top: circle.top,
            bottom: circle.bottom,
            left: circle.left,
            right: circle.right,
            pointerEvents: "none",
          }}
        />
      ))}

      <div className="hero-container">
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,179,93,0.15)",
              border: "1px solid rgba(45,179,93,0.4)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <FaRegFileAlt
              style={{
                color: C.green,
                fontSize: 14,
              }}
            />

            <span
              style={{
                color: C.green,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Visado Emprendedor España
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: C.white,
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Emprende en España con el{" "}
            <span style={{ color: C.green }}>Visado para Emprendedores</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Convierte tu idea de negocio en realidad. Te guiamos paso a paso
            para obtener el visado emprendedor en España, sin estrés y 100%
            online.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#consulta"
              style={{
                background: C.green,
                color: C.white,
                padding: "14px 32px",
                borderRadius: 30,
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 4px 20px rgba(45,179,93,0.4)",
              }}
            >
              <FaRegFileAlt />
              Consulta gratis
            </a>

            <a
              href="#requisitos"
              style={{
                background: "transparent",
                color: C.white,
                padding: "14px 32px",
                borderRadius: 30,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Ver requisitos
              <HiOutlineArrowRight />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: C.green,
                    fontSize: 17,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {badge.icon}
                </span>

                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: C.white,
                  }}
                >
                  {badge.value}
                </span>

                <span
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-service-card">
          <h3
            style={{
              color: C.white,
              fontSize: 18,
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            ¿Qué incluye nuestro servicio?
          </h3>

          {serviceItems.map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  color: C.green,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                }}
              >
                {item.icon}
              </span>

              <span
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}

          <a
            href="#consulta"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 24,
              background: C.green,
              color: C.white,
              textAlign: "center",
              padding: "14px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(45,179,93,0.35)",
            }}
          >
            Empezar ahora
            <HiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: 80,
            display: "block",
          }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}