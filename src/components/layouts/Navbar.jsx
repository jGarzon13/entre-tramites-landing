import { useEffect, useState } from "react";
import { colors as C } from "../../styles/tokens";
import logoET from "../../assets/logos/logoet.webp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      label: "Nosotros",
      href: "#que-es",
    },
    {
      label: "Servicios",
      href: "#planes",
    },
    {
      label: "Recursos",
      href: "#faq",
    },
    {
      label: "Contacto",
      href: "#consulta",
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? C.white : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(26,46,110,0.1)" : "none",
        transition: "all 0.3s ease",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={logoET}
            alt="Entre Trámites"
            style={{
              height: 42,
              width: "auto",
              display: "block",
              objectFit: "contain",
              filter: scrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s ease",
            }}
          />
        </a>


        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: scrolled ? C.navy : C.white,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = C.green;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = scrolled ? C.navy : C.white;
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#consulta"
            style={{
              background: C.green,
              color: C.white,
              padding: "10px 22px",
              borderRadius: 25,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = C.greenDark;
              event.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = C.green;
              event.currentTarget.style.transform = "scale(1)";
            }}
          >
            Consulta gratis
          </a>

        </div>
      </div>
    </nav>
  );
}