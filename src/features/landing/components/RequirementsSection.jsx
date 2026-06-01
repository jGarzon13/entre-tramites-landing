import { useState } from "react";
import {
    FaCheck,
    FaClipboardCheck,
    FaUserCheck,
    FaBriefcase,
    FaFileAlt,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

import { AnimatedSection } from "../../../components/ui/AnimatedSection";
import { colors as C } from "../../../styles/tokens";
import { requirementsTabs } from "../data/requirements";

export function RequirementsSection() {
    const [activeTab, setActiveTab] = useState(0);

    const tabIcons = [<FaUserCheck />, <FaBriefcase />, <FaFileAlt />];

    return (
        <section
            id="requisitos"
            style={{
                padding: "clamp(56px, 6vw, 80px) 5%",
                background: C.gray50,
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
                        marginBottom: 48,
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
                        Lo que necesitas
                    </p>

                    <h2
                        style={{
                            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                            fontWeight: 900,
                            color: C.navy,
                            marginBottom: 16,
                        }}
                    >
                        Requisitos y documentación
                    </h2>

                    <p
                        style={{
                            fontSize: 16,
                            color: C.gray500,
                            maxWidth: 560,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Conoce exactamente qué necesitas para solicitar tu visado
                        emprendedor. Nuestro equipo se encargará de revisar y preparar cada
                        documento.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 32,
                            flexWrap: "wrap",
                        }}
                    >
                        {requirementsTabs.map((tab, index) => {
                            const isActive = activeTab === index;

                            return (
                                <button
                                    key={tab.label}
                                    type="button"
                                    onClick={() => setActiveTab(index)}
                                    style={{
                                        padding: "10px 22px",
                                        borderRadius: 25,
                                        border: "2px solid",
                                        borderColor: isActive ? C.navy : C.gray200,
                                        background: isActive ? C.navy : C.white,
                                        color: isActive ? C.white : C.navy,
                                        fontSize: 14,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            fontSize: 14,
                                        }}
                                    >
                                        {tabIcons[index]}
                                    </span>
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <div
                        style={{
                            background: C.white,
                            borderRadius: 16,
                            border: `1px solid ${C.gray100}`,
                            padding: 32,
                            boxShadow: "0 4px 20px rgba(26,46,110,0.06)",
                        }}
                    >
                        <ul
                            style={{
                                listStyle: "none",
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "12px 32px",
                            }}
                        >
                            {requirementsTabs[activeTab].items.map((item) => (
                                <li
                                    key={item}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 10,
                                        padding: "10px 0",
                                        borderBottom: `1px solid ${C.gray50}`,
                                    }}
                                >
                                    <span
                                        style={{
                                            flexShrink: 0,
                                            width: 22,
                                            height: 22,
                                            borderRadius: "50%",
                                            background: "rgba(45,179,93,0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginTop: 1,
                                            color: C.green,
                                            fontSize: 11,
                                        }}
                                    >
                                        <FaCheck />
                                    </span>

                                    <span
                                        style={{
                                            fontSize: 14,
                                            color: C.gray700,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection
                    style={{
                        marginTop: 32,
                        background: `linear-gradient(135deg, ${C.navy}, ${C.navyLight})`,
                        borderRadius: 20,
                        padding: "32px 40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 24,
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <div
                            style={{
                                width: 46,
                                height: 46,
                                borderRadius: 14,
                                background: "rgba(255,255,255,0.1)",
                                color: C.green,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 22,
                                marginBottom: 14,
                            }}
                        >
                            <FaClipboardCheck />
                        </div>

                        <h3
                            style={{
                                color: C.white,
                                fontWeight: 900,
                                fontSize: 20,
                                marginBottom: 8,
                            }}
                        >
                            ¿No sabes si cumples los requisitos?
                        </h3>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 14,
                                lineHeight: 1.6,
                            }}
                        >
                            Agenda una consulta gratuita y nuestros especialistas evaluarán tu
                            caso en detalle.
                        </p>
                    </div>

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
                            whiteSpace: "nowrap",
                            boxShadow: "0 4px 16px rgba(45,179,93,0.3)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        Evaluar mi caso gratis
                        <HiOutlineArrowRight />
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}