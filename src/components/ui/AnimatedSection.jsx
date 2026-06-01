import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";

export function AnimatedSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}