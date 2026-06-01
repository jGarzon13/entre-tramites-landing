import { useState } from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaPaperPlane,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { contactTopics } from "../data/contactTopics";

const initialFormState = {
  nombre: "",
  email: "",
  telefono: "",
  tema: "",
  mensaje: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialFormState);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.nombre.trim() || !form.email.trim()) {
      return;
    }

    setSent(true);
  };

  return (
    <section
      id="consulta"
      style={{
        padding: "clamp(56px, 6vw, 80px) 5%",
        background: `linear-gradient(135deg, ${C.navyDark} 0%, ${C.navy} 100%)`,
      }}
    >
      <div
        style={{
          maxWidth: 900,
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
            <FaClipboardList />
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
            Empieza hoy
          </p>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: C.white,
              marginBottom: 16,
            }}
          >
            ¡Obtén asesoría gratis y personalizada!
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Habla con uno de nuestros especialistas en visado emprendedor. Sin
            compromiso, sin costo.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            style={{
              background: C.white,
              borderRadius: 24,
              padding: "48px 40px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
            }}
          >
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background: "rgba(45,179,93,0.12)",
                    color: C.green,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    margin: "0 auto 18px",
                  }}
                >
                  <FaCheckCircle />
                </div>

                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: C.navy,
                    marginBottom: 12,
                  }}
                >
                  ¡Consulta recibida!
                </h3>

                <p
                  style={{
                    color: C.gray500,
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 460,
                    margin: "0 auto",
                  }}
                >
                  Un especialista te contactará en menos de 24 horas. Estamos
                  aquí para ayudarte.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <label
                      htmlFor="nombre"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.navy,
                        marginBottom: 6,
                      }}
                    >
                      <FaUser />
                      Nombre y apellido *
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={(event) =>
                        handleChange("nombre", event.target.value)
                      }
                      placeholder="Juan García"
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${C.gray200}`,
                        fontSize: 14,
                        color: C.navy,
                        outline: "none",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.navy,
                        marginBottom: 6,
                      }}
                    >
                      <FaPhoneAlt />
                      Teléfono *
                    </label>

                    <input
                      id="telefono"
                      name="telefono"
                      value={form.telefono}
                      onChange={(event) =>
                        handleChange("telefono", event.target.value)
                      }
                      placeholder="+57 300 123 4567"
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${C.gray200}`,
                        fontSize: 14,
                        color: C.navy,
                        outline: "none",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 20,
                  }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 6,
                    }}
                  >
                    <FaEnvelope />
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(event) =>
                      handleChange("email", event.target.value)
                    }
                    placeholder="juan@empresa.com"
                    type="email"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: `1.5px solid ${C.gray200}`,
                      fontSize: 14,
                      color: C.navy,
                      outline: "none",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginBottom: 20,
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 10,
                    }}
                  >
                    <FaClipboardList />
                    Tu consulta se centra principalmente en…
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {contactTopics.map((topic) => {
                      const isSelected = form.tema === topic;

                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => handleChange("tema", topic)}
                          style={{
                            padding: "8px 16px",
                            borderRadius: 20,
                            border: "2px solid",
                            borderColor: isSelected ? C.navy : C.gray200,
                            background: isSelected ? C.navy : C.white,
                            color: isSelected ? C.white : C.navy,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.15s",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          {isSelected && <FaCheckCircle />}
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 28,
                  }}
                >
                  <label
                    htmlFor="mensaje"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.navy,
                      marginBottom: 6,
                    }}
                  >
                    <FaCommentDots />
                    Cuéntanos más sobre tu caso
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={(event) =>
                      handleChange("mensaje", event.target.value)
                    }
                    rows={3}
                    placeholder="Ej. Soy venezolano, tengo una startup de tecnología y quiero establecerme en España..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: `1.5px solid ${C.gray200}`,
                      fontSize: 14,
                      color: C.navy,
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: 16,
                    borderRadius: 12,
                    border: "none",
                    background: C.green,
                    color: C.white,
                    fontSize: 16,
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(45,179,93,0.35)",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.background = C.greenDark;
                    event.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.background = C.green;
                    event.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FaPaperPlane />
                  Solicitar consulta gratuita
                </button>

                <p
                  style={{
                    fontSize: 12,
                    color: C.gray500,
                    textAlign: "center",
                    marginTop: 12,
                    lineHeight: 1.6,
                  }}
                >
                  Al enviar aceptas nuestra política de privacidad. Tus datos no
                  serán compartidos con terceros.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}