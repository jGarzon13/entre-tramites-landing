import { useState, useEffect, useRef } from "react";

/* ─── DESIGN TOKENS ─── */
const C = {
  navy: "#1a2e6e",
  navyDark: "#0f1c46",
  navyLight: "#2a3f8f",
  green: "#2db35d",
  greenDark: "#229147",
  blue: "#3b82f6",
  blueSoft: "#e8eef8",
  gray50: "#f5f6fa",
  gray100: "#eaecf4",
  gray200: "#d1d5e8",
  gray500: "#6b7280",
  gray700: "#374151",
  white: "#ffffff",
  accent: "#f59e0b",
};

/* ─── STYLES ─── */
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lato:wght@300;400;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Lato', sans-serif; color: #1a2e6e; background: #fff; }
  h1,h2,h3,h4 { font-family: 'Nunito', sans-serif; }
  .fade-up {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-up.delay-1 { transition-delay: 0.1s; }
  .fade-up.delay-2 { transition-delay: 0.2s; }
  .fade-up.delay-3 { transition-delay: 0.3s; }
  .fade-up.delay-4 { transition-delay: 0.4s; }
`;

/* ─── HOOKS ─── */
function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function AnimSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <div ref={ref} className={`fade-up ${visible ? "visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ─── NAV ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? C.white : "transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(26,46,110,0.1)" : "none",
      transition: "all 0.3s ease",
      padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 22, fontWeight: 900, color: C.navy }}>
            entre<span style={{ color: C.green }}>trámites</span>
          </span>
          <span style={{ fontSize: 9, color: C.gray500, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>revolucionando el papeleo</span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Nosotros", "Servicios", "Recursos", "Contacto"].map(l => (
            <a key={l} href="#" style={{ color: scrolled ? C.navy : C.navy, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.green}
              onMouseLeave={e => e.target.style.color = C.navy}>{l}</a>
          ))}
          <a href="#consulta" style={{
            background: C.green, color: C.white, padding: "10px 22px", borderRadius: 25,
            fontSize: 14, fontWeight: 700, textDecoration: "none",
            transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.target.style.background = C.greenDark; e.target.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.target.style.background = C.green; e.target.style.transform = "scale(1)"; }}>
            📞 Consulta gratis
          </a>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>930 185 237</span>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navy} 50%, ${C.navyLight} 100%)`,
      display: "flex", alignItems: "center",
    }}>
      {/* Decorative circles */}
      {[
        { size: 600, top: -200, right: -200, opacity: 0.06 },
        { size: 400, bottom: -100, left: -100, opacity: 0.05 },
        { size: 250, top: "30%", right: "20%", opacity: 0.08 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute", width: c.size, height: c.size,
          borderRadius: "50%", border: `2px solid rgba(255,255,255,${c.opacity})`,
          top: c.top, bottom: c.bottom, left: c.left, right: c.right,
          pointerEvents: "none",
        }} />
      ))}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 5% 80px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(45,179,93,0.15)", border: "1px solid rgba(45,179,93,0.4)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ color: C.green, fontSize: 13, fontWeight: 700 }}>🇪🇸 Visado Emprendedor España</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            Emprende en España con el <span style={{ color: C.green }}>Visado para Emprendedores</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
            Convierte tu idea de negocio en realidad. Te guiamos paso a paso para obtener el visado emprendedor en España, sin estrés y 100% online.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#consulta" style={{
              background: C.green, color: C.white, padding: "14px 32px", borderRadius: 30,
              fontSize: 15, fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 4px 20px rgba(45,179,93,0.4)",
            }}>
              📋 Consulta gratis
            </a>
            <a href="#requisitos" style={{
              background: "transparent", color: C.white, padding: "14px 32px", borderRadius: 30,
              fontSize: 15, fontWeight: 700, textDecoration: "none", border: `2px solid rgba(255,255,255,0.4)`,
            }}>
              Ver requisitos →
            </a>
          </div>
          {/* Trust badges */}
          <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
            {[["⭐ 4.5/5", "600 reseñas Google"], ["✅ +18K", "Consultas realizadas"], ["🔒 100%", "Online y seguro"]].map(([v, l]) => (
              <div key={v} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: C.white }}>{v}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right card */}
        <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "36px 32px" }}>
          <h3 style={{ color: C.white, fontSize: 18, fontWeight: 800, marginBottom: 20 }}>¿Qué incluye nuestro servicio?</h3>
          {[
            ["📁", "Revisión completa de tu documentación"],
            ["✍️", "Preparación del plan de negocio"],
            ["📅", "Gestión de cita y trámites consulares"],
            ["💬", "Asesor dedicado durante todo el proceso"],
            ["🔄", "Seguimiento hasta la resolución"],
            ["📞", "Soporte por WhatsApp ilimitado"],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 600 }}>{text}</span>
            </div>
          ))}
          <a href="#consulta" style={{
            display: "block", marginTop: 24, background: C.green, color: C.white,
            textAlign: "center", padding: "14px", borderRadius: 12, fontSize: 15, fontWeight: 800,
            textDecoration: "none", boxShadow: "0 4px 16px rgba(45,179,93,0.35)",
          }}>
            Empezar ahora →
          </a>
        </div>
      </div>
      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

/* ─── QUE ES ─── */
function QueEs() {
  return (
    <section id="que-es" style={{ padding: "80px 5%", background: C.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>¿Qué es?</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy, marginBottom: 16 }}>
            El Visado para Emprendedores en España
          </h2>
          <p style={{ fontSize: 17, color: C.gray500, maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
            Una autorización especial para ciudadanos no comunitarios que deseen residir en España para desarrollar una actividad emprendedora de interés general.
          </p>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { icon: "🏛️", title: "Regulado por la Ley 14/2013", desc: "La 'Ley de Emprendedores' establece un proceso ágil y directo para atraer talento emprendedor a España.", delay: "" },
            { icon: "⚡", title: "Resolución rápida", desc: "La DGOM resuelve en 20 días hábiles, mucho más rápido que otros permisos de residencia.", delay: "delay-1" },
            { icon: "👨‍👩‍👧", title: "Reagrupación familiar", desc: "Puedes incluir a tu cónyuge e hijos menores de 18 años en la misma solicitud.", delay: "delay-2" },
            { icon: "🌍", title: "Acceso al espacio Schengen", desc: "Reside en España y circula libremente por los 26 países del área Schengen.", delay: "delay-3" },
          ].map(({ icon, title, desc, delay }) => (
            <AnimSection key={title} className={delay}>
              <div style={{
                background: C.white, border: `1.5px solid ${C.gray100}`, borderRadius: 16,
                padding: "28px 24px", height: "100%",
                boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,46,110,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,46,110,0.06)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── REQUISITOS ─── */
function Requisitos() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      label: "Requisitos personales",
      items: [
        "Ser ciudadano extranjero no comunitario mayor de 18 años",
        "No tener antecedentes penales en España ni en países de residencia anteriores (últimos 5 años)",
        "No estar en situación irregular en España",
        "Contar con medios económicos suficientes (mínimo 50% del IPREM anual)",
        "Contar con seguro de enfermedad público o privado en España",
        "No ser solicitante o beneficiario de protección internacional en trámite",
      ]
    },
    {
      label: "Requisitos del proyecto",
      items: [
        "Proyecto empresarial de carácter innovador o de interés general para la economía española",
        "Plan de negocio detallado con viabilidad económica demostrable",
        "Aportación de valor añadido a la actividad económica: empleo, inversión o innovación",
        "Que la actividad se vaya a desarrollar principalmente en España",
        "Informe favorable del órgano competente (ENISA u organismo autonómico)",
        "Demostrar capacidad técnica y/o experiencia en el sector del proyecto",
      ]
    },
    {
      label: "Documentación",
      items: [
        "Pasaporte o documento de viaje válido (vigencia mínima 1 año)",
        "Formulario de solicitud EX–07 debidamente cumplimentado",
        "Plan de negocio desarrollado y firmado",
        "Currículum vitae actualizado y títulos académicos apostillados",
        "Certificado de antecedentes penales del país de origen apostillado",
        "Póliza de seguro de salud privado o documentación de acceso al sistema público",
        "Justificantes de medios económicos (extractos bancarios, etc.)",
        "Informe favorable de organismo evaluador (ENISA, DGC, etc.)",
      ]
    }
  ];
  return (
    <section id="requisitos" style={{ padding: "80px 5%", background: C.gray50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Lo que necesitas</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy, marginBottom: 16 }}>
            Requisitos y documentación
          </h2>
          <p style={{ fontSize: 16, color: C.gray500, maxWidth: 560, margin: "0 auto" }}>
            Conoce exactamente qué necesitas para solicitar tu visado emprendedor. Nuestro equipo se encargará de revisar y preparar cada documento.
          </p>
        </AnimSection>
        <AnimSection>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
            {tabs.map((t, i) => (
              <button key={i} onClick={() => setTab(i)} style={{
                padding: "10px 22px", borderRadius: 25, border: "2px solid",
                borderColor: tab === i ? C.navy : C.gray200,
                background: tab === i ? C.navy : C.white,
                color: tab === i ? C.white : C.navy,
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                transition: "all 0.2s",
              }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.gray100}`, padding: "32px", boxShadow: "0 4px 20px rgba(26,46,110,0.06)" }}>
            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px 32px" }}>
              {tabs[tab].items.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${C.gray50}` }}>
                  <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "rgba(45,179,93,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    <span style={{ color: C.green, fontSize: 13, fontWeight: 800 }}>✓</span>
                  </span>
                  <span style={{ fontSize: 14, color: C.gray700, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimSection>
        {/* CTA Checklist */}
        <AnimSection style={{ marginTop: 32, background: `linear-gradient(135deg, ${C.navy}, ${C.navyLight})`, borderRadius: 20, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ color: C.white, fontWeight: 900, fontSize: 20, marginBottom: 8 }}>¿No sabes si cumples los requisitos?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Agenda una consulta gratuita y nuestros especialistas evaluarán tu caso en detalle.</p>
          </div>
          <a href="#consulta" style={{
            background: C.green, color: C.white, padding: "14px 32px", borderRadius: 30,
            fontSize: 15, fontWeight: 800, textDecoration: "none", whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(45,179,93,0.3)",
          }}>
            Evaluar mi caso gratis →
          </a>
        </AnimSection>
      </div>
    </section>
  );
}

/* ─── PROCESO ─── */
function Proceso() {
  const steps = [
    { num: "01", icon: "📞", title: "Consulta inicial gratuita", desc: "Habla con nuestro equipo. Evaluamos tu situación, tu proyecto y te orientamos sobre el proceso completo." },
    { num: "02", icon: "📋", title: "Revisión y plan de negocio", desc: "Preparamos o revisamos tu plan de negocio para que cumpla con los estándares de los organismos evaluadores." },
    { num: "03", icon: "📁", title: "Recopilación de documentos", desc: "Te indicamos exactamente qué documentos necesitas y verificamos que todo esté correcto antes de enviar." },
    { num: "04", icon: "🏛️", title: "Solicitud del informe ENISA", desc: "Gestionamos la solicitud del informe favorable ante ENISA u el organismo competente de tu comunidad." },
    { num: "05", icon: "📬", title: "Presentación de la solicitud", desc: "Enviamos toda la documentación ante la Unidad de Grandes Empresas (UGE) o el consulado correspondiente." },
    { num: "06", icon: "🎉", title: "Resolución y aterrizaje", desc: "Una vez aprobada, te asesoramos en los pasos de llegada a España: TIE, empadronamiento, apertura de empresa." },
  ];
  return (
    <section id="proceso" style={{ padding: "80px 5%", background: C.white }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Cómo trabajamos</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy }}>
            Tu proceso, paso a paso
          </h2>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {steps.map((s, i) => (
            <AnimSection key={s.num} className={`delay-${i % 4}`}>
              <div style={{
                background: C.white, border: `1.5px solid ${C.gray100}`, borderRadius: 16,
                padding: "28px 24px", position: "relative", overflow: "hidden",
                boxShadow: "0 4px 20px rgba(26,46,110,0.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,46,110,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,46,110,0.05)"; }}
              >
                <div style={{ position: "absolute", top: 16, right: 16, fontFamily: "'Nunito', sans-serif", fontSize: 42, fontWeight: 900, color: "rgba(26,46,110,0.06)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.navy, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BENEFICIOS ─── */
function Beneficios() {
  return (
    <section id="beneficios" style={{ padding: "80px 5%", background: C.gray50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <AnimSection>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Por qué elegirnos</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy, marginBottom: 20, lineHeight: 1.25 }}>
            Expertos en trámites de emprendedores
          </h2>
          <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.7, marginBottom: 32 }}>
            Llevamos años ayudando a emprendedores de todo el mundo a establecerse en España. Nuestro equipo de +90 especialistas conoce cada detalle del proceso.
          </p>
          {[
            ["✅", "Sin estrés", "Todo 100% online, sin necesidad de desplazarte"],
            ["🎯", "Integral", "Desde el plan de negocio hasta tu TIE, lo gestionamos todo"],
            ["👤", "Personalizado", "Un especialista dedicado exclusivamente a tu expediente"],
            ["💰", "Sin costos ocultos", "Paga solo por los servicios que realmente necesitas"],
            ["⚡", "Rápido", "Optimizamos los plazos para que empieces antes"],
            ["🤝", "Garantía de calidad", "+14K trámites completados con éxito"],
          ].map(([icon, title, desc]) => (
            <div key={title} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: "rgba(45,179,93,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                {icon}
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: 15, color: C.navy, marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 13, color: C.gray500 }}>{desc}</p>
              </div>
            </div>
          ))}
        </AnimSection>
        <AnimSection className="delay-2">
          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { val: "+1.5K", label: "Clientes recurrentes", color: C.navy },
              { val: "+14K", label: "Trámites completados", color: C.green },
              { val: "+18K", label: "Consultas realizadas", color: C.navyLight },
              { val: "+300", label: "Partners en toda España", color: "#f59e0b" },
            ].map(({ val, label, color }) => (
              <div key={label} style={{
                background: C.white, border: `1.5px solid ${C.gray100}`, borderRadius: 16,
                padding: "28px 20px", textAlign: "center",
                boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
              }}>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 36, fontWeight: 900, color, marginBottom: 8 }}>{val}</p>
                <p style={{ fontSize: 13, color: C.gray500, fontWeight: 600 }}>{label}</p>
              </div>
            ))}
          </div>
          {/* Google rating */}
          <div style={{ marginTop: 16, background: C.white, border: `1.5px solid ${C.gray100}`, borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 4px 20px rgba(26,46,110,0.06)" }}>
            <div>
              <div style={{ display: "flex", gap: 2, marginBottom: 4 }}>
                {"★★★★½".split("").map((s, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 20 }}>{s}</span>)}
              </div>
              <p style={{ fontSize: 13, color: C.gray500 }}><strong style={{ color: C.navy }}>4.5/5</strong> basado en 600 reseñas de Google</p>
            </div>
            <div style={{ marginLeft: "auto", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 28, letterSpacing: -1 }}>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ─── PLANES ─── */
function Planes() {
  const plans = [
    {
      name: "Esencial",
      price: "490€",
      badge: null,
      desc: "Para emprendedores que ya tienen su plan de negocio listo.",
      features: [
        "Revisión de documentación",
        "Gestión de la solicitud",
        "Seguimiento del expediente",
        "Soporte por email",
        "1 consulta de 30 min",
      ],
      notIncluded: ["Elaboración del plan de negocio", "Gestión informe ENISA"],
      cta: "Contratar",
    },
    {
      name: "Completo",
      price: "890€",
      badge: "Más popular",
      desc: "El paquete todo incluido para emprendedores que quieren tenerlo todo cubierto.",
      features: [
        "Todo lo del plan Esencial",
        "Elaboración del plan de negocio",
        "Gestión del informe ENISA",
        "Acompañamiento completo",
        "Soporte WhatsApp ilimitado",
        "Asesor dedicado",
      ],
      notIncluded: [],
      cta: "Contratar",
    },
    {
      name: "Premium",
      price: "1.490€",
      badge: null,
      desc: "Para equipos fundadores y proyectos de alta inversión que necesitan máxima atención.",
      features: [
        "Todo lo del plan Completo",
        "Registro de empresa en España",
        "Asesoría fiscal del primer año",
        "Empadronamiento y TIE",
        "Reuniones ilimitadas",
        "Acceso a red de partners",
      ],
      notIncluded: [],
      cta: "Contratar",
    },
  ];
  return (
    <section id="planes" style={{ padding: "80px 5%", background: C.white }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Precios transparentes</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy, marginBottom: 16 }}>
            Planes adaptados a tu proyecto
          </h2>
          <p style={{ fontSize: 16, color: C.gray500, maxWidth: 540, margin: "0 auto" }}>Sin costos ocultos. Sin sorpresas. Paga solo por lo que necesitas.</p>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {plans.map((p, i) => (
            <AnimSection key={p.name} className={`delay-${i}`}>
              <div style={{
                background: p.badge ? C.navy : C.white,
                border: p.badge ? `2px solid ${C.navy}` : `1.5px solid ${C.gray100}`,
                borderRadius: 20, padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column",
                boxShadow: p.badge ? "0 16px 48px rgba(26,46,110,0.2)" : "0 4px 20px rgba(26,46,110,0.06)",
                transform: p.badge ? "scale(1.03)" : "scale(1)",
                position: "relative", overflow: "hidden",
              }}>
                {p.badge && (
                  <div style={{ position: "absolute", top: 16, right: 16, background: C.green, color: C.white, fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 20 }}>
                    {p.badge}
                  </div>
                )}
                <p style={{ fontSize: 13, fontWeight: 800, color: p.badge ? "rgba(255,255,255,0.6)" : C.gray500, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{p.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 40, fontWeight: 900, color: p.badge ? C.white : C.navy }}>{p.price}</span>
                  <span style={{ fontSize: 13, color: p.badge ? "rgba(255,255,255,0.5)" : C.gray500 }}>IVA no incl.</span>
                </div>
                <p style={{ fontSize: 13, color: p.badge ? "rgba(255,255,255,0.65)" : C.gray500, marginBottom: 24, lineHeight: 1.6 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", flex: 1, marginBottom: 28 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: `1px solid ${p.badge ? "rgba(255,255,255,0.08)" : C.gray50}` }}>
                      <span style={{ color: C.green, fontWeight: 800, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 13, color: p.badge ? "rgba(255,255,255,0.85)" : C.gray700 }}>{f}</span>
                    </li>
                  ))}
                  {p.notIncluded.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: `1px solid ${C.gray50}`, opacity: 0.45 }}>
                      <span style={{ color: C.gray500, fontWeight: 800, marginTop: 1 }}>✗</span>
                      <span style={{ fontSize: 13, color: C.gray500 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#consulta" style={{
                  display: "block", textAlign: "center", padding: "14px",
                  borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none",
                  background: p.badge ? C.green : "transparent",
                  color: p.badge ? C.white : C.navy,
                  border: p.badge ? "none" : `2px solid ${C.navy}`,
                  boxShadow: p.badge ? "0 4px 16px rgba(45,179,93,0.35)" : "none",
                  transition: "all 0.2s",
                }}>
                  {p.cta} →
                </a>
              </div>
            </AnimSection>
          ))}
        </div>
        <AnimSection style={{ textAlign: "center", marginTop: 24 }}>
          <p style={{ fontSize: 13, color: C.gray500 }}>¿Tienes dudas sobre qué plan elegir? <a href="#consulta" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>Consúltanos gratis y te orientamos</a></p>
        </AnimSection>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "¿Cuánto tiempo tarda la resolución del visado emprendedor?", a: "La Unidad de Grandes Empresas (UGE) tiene un plazo máximo de 20 días hábiles para resolver. Sin embargo, el proceso completo —incluyendo la obtención del informe ENISA y la preparación de documentación— puede llevar entre 2 y 4 meses en total." },
    { q: "¿Necesito crear una empresa en España antes de solicitar el visado?", a: "No necesariamente. El visado se puede solicitar con la intención de crear la empresa una vez en España. Sin embargo, tener el proyecto bien definido con un plan de negocio sólido es fundamental para la aprobación." },
    { q: "¿Cuál es el capital mínimo requerido?", a: "No existe un capital mínimo fijado por ley, pero debes demostrar que tienes medios económicos suficientes para mantenerte durante la estancia (generalmente el equivalente al 50% del IPREM anual) y que tu proyecto tiene viabilidad financiera." },
    { q: "¿Puedo incluir a mi familia en la solicitud?", a: "Sí. Puedes solicitar reagrupación familiar para tu cónyuge o pareja de hecho y tus hijos menores de 18 años (o mayores con discapacidad). Ellos obtendrían una autorización de residencia por circunstancias excepcionales." },
    { q: "¿Qué ocurre si mi proyecto cambia después de obtener el visado?", a: "El proyecto puede evolucionar, pero debe mantener su esencia emprendedora e innovadora. En la renovación (cada 2 años) se evalúa la actividad real desarrollada. Es recomendable comunicar cambios significativos a tu asesor para anticipar posibles impactos." },
    { q: "¿Puedo trabajar por cuenta ajena con este visado?", a: "El visado emprendedor está orientado al trabajo por cuenta propia o como socio activo de una empresa. Si también deseas trabajar por cuenta ajena, necesitarías una autorización adicional o modificar tu situación una vez en España." },
  ];
  return (
    <section id="faq" style={{ padding: "80px 5%", background: C.gray50 }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Preguntas frecuentes</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy }}>
            Resolvemos tus dudas
          </h2>
        </AnimSection>
        {faqs.map((f, i) => (
          <AnimSection key={i} className={`delay-${i % 3}`}>
            <div style={{
              background: C.white, border: `1.5px solid ${open === i ? C.navy : C.gray100}`,
              borderRadius: 14, marginBottom: 12, overflow: "hidden",
              boxShadow: "0 2px 12px rgba(26,46,110,0.04)",
              transition: "border-color 0.2s",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
              }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: C.navy, textAlign: "left" }}>{f.q}</span>
                <span style={{ color: open === i ? C.green : C.gray500, fontSize: 22, flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p style={{ fontSize: 14, color: C.gray500, lineHeight: 1.75 }}>{f.a}</p>
                </div>
              )}
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIOS ─── */
function Testimonios() {
  const reviews = [
    { name: "Maira Lassos", date: "21/05/2026", text: "Me ha gustado mucho la forma de atención y me ha explicado muy bien. En mi caso me lo explicaron todo muy bien. Muy contenta con el servicio." },
    { name: "Joe Soteldo", date: "16/05/2026", text: "Excelente servicio de Gabriela. Muy conocedora y franca para hablar. Me respondió todas mis preguntas con buen criterio y profesionalismo." },
    { name: "Mauricio Torres", date: "15/05/2026", text: "Tuve una experiencia excelente con esta página de trámites. El proceso fue rápido, claro y muy fácil de realizar. Además, la atención al cliente fue impecable." },
    { name: "Diego Jaramillo", date: "15/05/2026", text: "Hola, excelente servicio, claros, puntuales y cumplidos. Muy recomendado para cualquier trámite en España." },
  ];
  return (
    <section id="testimonios" style={{ padding: "80px 5%", background: C.white }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Testimonios</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.navy, marginBottom: 12 }}>
            Lo que dicen nuestros clientes
          </h2>
          <p style={{ fontSize: 14, color: C.gray500 }}>
            La evaluación general en <strong>Google</strong> es <strong>4.5 de 5</strong>, en base a <strong>600 reseñas</strong>
          </p>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {reviews.map((r, i) => (
            <AnimSection key={r.name} className={`delay-${i % 4}`}>
              <div style={{
                background: C.white, border: `1.5px solid ${C.gray100}`, borderRadius: 16,
                padding: "24px", boxShadow: "0 4px 20px rgba(26,46,110,0.05)",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: `hsl(${i * 60 + 200}, 50%, 45%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: C.white, fontWeight: 800, fontSize: 16,
                  }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: C.navy }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: C.gray500 }}>{r.date}</p>
                  </div>
                  <div style={{ marginLeft: "auto", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 14 }}>
                    <span style={{ color: "#4285F4" }}>G</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                  {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 16 }}>{s}</span>)}
                </div>
                <p style={{ fontSize: 13, color: C.gray500, lineHeight: 1.7 }}>{r.text}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONSULTA FORM ─── */
function Consulta() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", tema: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const topics = ["Visado Emprendedor", "Visas y permisos", "Nómada Digital", "NIE/TIE", "Impuestos / Contabilidad", "Autónomo", "Otro"];
  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => { if (form.nombre && form.email) setSent(true); };
  return (
    <section id="consulta" style={{ padding: "80px 5%", background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navy} 100%)` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: C.green, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>Empieza hoy</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.white, marginBottom: 16 }}>
            ¡Obtén asesoría gratis y personalizada!
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: "0 auto" }}>
            Habla con uno de nuestros especialistas en visado emprendedor. Sin compromiso, sin costo.
          </p>
        </AnimSection>
        <AnimSection>
          <div style={{ background: C.white, borderRadius: 24, padding: "48px 40px", boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: C.navy, marginBottom: 12 }}>¡Consulta recibida!</h3>
                <p style={{ color: C.gray500, fontSize: 15 }}>Un especialista te contactará en menos de 24 horas. ¡Estamos aquí para ayudarte!</p>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  {[
                    { label: "Nombre y apellido *", key: "nombre", placeholder: "Juan García" },
                    { label: "Teléfono *", key: "telefono", placeholder: "+57 300 123 4567" },
                  ].map(({ label, key, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{label}</label>
                      <input value={form[key]} onChange={e => handle(key, e.target.value)} placeholder={placeholder} style={{
                        width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${C.gray200}`,
                        fontSize: 14, color: C.navy, outline: "none", fontFamily: "'Lato', sans-serif",
                      }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Email *</label>
                  <input value={form.email} onChange={e => handle("email", e.target.value)} placeholder="juan@empresa.com" type="email" style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${C.gray200}`,
                    fontSize: 14, color: C.navy, outline: "none", fontFamily: "'Lato', sans-serif",
                  }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 10 }}>Tu consulta se centra principalmente en…</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {topics.map(t => (
                      <button key={t} onClick={() => handle("tema", t)} style={{
                        padding: "8px 16px", borderRadius: 20, border: "2px solid",
                        borderColor: form.tema === t ? C.navy : C.gray200,
                        background: form.tema === t ? C.navy : C.white,
                        color: form.tema === t ? C.white : C.navy,
                        fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
                      }}>{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Cuéntanos más sobre tu caso</label>
                  <textarea value={form.mensaje} onChange={e => handle("mensaje", e.target.value)} rows={3}
                    placeholder="Ej. Soy venezolano, tengo una startup de tecnología y quiero establecerme en España..."
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${C.gray200}`,
                      fontSize: 14, color: C.navy, outline: "none", resize: "vertical", fontFamily: "'Lato', sans-serif",
                    }} />
                </div>
                <button onClick={submit} style={{
                  width: "100%", padding: "16px", borderRadius: 12, border: "none",
                  background: C.green, color: C.white, fontSize: 16, fontWeight: 800, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(45,179,93,0.35)", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.target.style.background = C.greenDark; e.target.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.target.style.background = C.green; e.target.style.transform = "translateY(0)"; }}>
                  📋 Solicitar consulta gratuita →
                </button>
                <p style={{ fontSize: 12, color: C.gray500, textAlign: "center", marginTop: 12 }}>
                  Al enviar aceptas nuestra política de privacidad. Tus datos no serán compartidos con terceros.
                </p>
              </>
            )}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{ background: C.navyDark, padding: "60px 5% 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 22, fontWeight: 900, color: C.white, marginBottom: 12 }}>
              entre<span style={{ color: C.green }}>trámites</span>
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 16 }}>
              Entre Trámites es un despacho de abogados y consultoría que presta una amplia gama de servicios a empresarios y extranjeros en toda España.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>✉ info@entretramites.com</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>📞 930 185 237</p>
          </div>
          {[
            { title: "Servicios", links: ["Visado Emprendedor", "Visas y permisos", "NIE, TIE, CUE", "Nómada digital", "Autónomo", "Declaración de renta"] },
            { title: "Recursos", links: ["Blog & noticias", "Calculadoras", "Descargables", "ET Research"] },
            { title: "Empresa", links: ["Quienes somos", "Partners", "Contacto", "Política de privacidad"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontSize: 13, fontWeight: 800, color: C.white, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{title}</p>
              {links.map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 10, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = C.green}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>2025 Entre Trámites. Todos los derechos reservados. Entre Trámites es una página informativa desvinculada de cualquier organismo oficial.</p>
          <div style={{ display: "flex", gap: 8 }}>
            {["Mapa del sitio", "Aviso legal", "Política de cookies"].map(l => (
              <a key={l} href="#" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", padding: "0 8px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── META SEO COMPONENT ─── */
function SEOMeta() {
  useEffect(() => {
    document.title = "Visado para Emprendedores en España | Entre Trámites";
    const meta = [
      { name: "description", content: "Obtén tu visado para emprendedores en España con Entre Trámites. Asesoría 100% online, equipo experto, gestión completa del proceso. Consulta gratuita." },
      { name: "keywords", content: "visado emprendedor España, visa emprendedor España, ley 14/2013 emprendedores, permiso residencia emprendedor, startup visa España, visado startup, NIE emprendedor" },
      { property: "og:title", content: "Visado Emprendedor España | Entre Trámites" },
      { property: "og:description", content: "Obtén tu visado emprendedor en España con expertos. 100% online. Consulta gratis." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ];
    meta.forEach(({ name, property, content }) => {
      const el = document.createElement("meta");
      if (name) el.setAttribute("name", name);
      if (property) el.setAttribute("property", property);
      el.setAttribute("content", content);
      document.head.appendChild(el);
    });
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Entre Trámites",
      "description": "Asesoría legal para emprendedores extranjeros en España",
      "url": "https://entretramites.com",
      "telephone": "+34930185237",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "reviewCount": "600" },
      "areaServed": "España",
    });
    document.head.appendChild(ld);
  }, []);
  return null;
}

/* ─── WHATSAPP BUTTON ─── */
function WhatsApp() {
  return (
    <a href="https://wa.me/34930185237" target="_blank" rel="noopener noreferrer" style={{
      position: "fixed", bottom: 28, right: 28, zIndex: 999,
      width: 56, height: 56, borderRadius: "50%",
      background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
      fontSize: 26, textDecoration: "none",
      transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      title="Chatea por WhatsApp"
    >
      💬
    </a>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <SEOMeta />
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <Requisitos />
        <Proceso />
        <Beneficios />
        <Planes />
        <Testimonios />
        <FAQ />
        <Consulta />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
