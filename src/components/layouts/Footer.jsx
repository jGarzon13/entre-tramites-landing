import { colors as C } from "../../styles/tokens";
import logoET from "../../assets/logos/logoet.webp";

export function Footer() {
  const footerColumns = [
    {
      title: "Servicios",
      links: [
        "Visado Emprendedor",
        "Visas y permisos",
        "NIE, TIE, CUE",
        "Nómada digital",
        "Autónomo",
        "Declaración de renta",
      ],
    },
    {
      title: "Recursos",
      links: ["Blog & noticias", "Calculadoras", "Descargables", "ET Research"],
    },
    {
      title: "Empresa",
      links: ["Quienes somos", "Partners", "Contacto", "Política de privacidad"],
    },
  ];

  const legalLinks = ["Mapa del sitio", "Aviso legal", "Política de cookies"];

  return (
    <footer
      style={{
        background: C.navyDark,
        padding: "clamp(48px, 6vw, 60px) 5% 32px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src={logoET}
              alt="Entre Trámites"
              className="footer-logo"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Entre Trámites es un despacho de abogados y consultoría que presta
              una amplia gama de servicios a empresarios y extranjeros en toda
              España.
            </p>

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 6,
              }}
            >
              info@entretramites.com
            </p>

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              930 185 237
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: C.white,
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {column.title}
              </p>

              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 10,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = C.green;
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            2025 Entre Trámites. Todos los derechos reservados. Entre Trámites
            es una página informativa desvinculada de cualquier organismo
            oficial.
          </p>

          <div className="footer-legal-links">
            {legalLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  padding: "0 8px",
                  borderRight:
                    index !== legalLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}