import React, { useState, useEffect, createContext, useMemo } from "react";
import { Variant } from "framer-motion";

interface CursorVariants extends Record<string, Variant> {
  default: Variant;
  text: Variant;
  none: Variant;
}

interface CursorContextValue {
  cursorVariants?: CursorVariants;
  cursorBG?: string;
  mouseEnterHandler?: () => void;
  mouseLeaveHandler?: () => void;
  mouseToggleTheme?: () => void;
}

export const CursorContext = createContext<CursorContextValue>({});

const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      // Throttle updates using requestAnimationFrame
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  const cursorVariants: CursorVariants = useMemo(
    () => ({
      default: {
        x: cursorPos.x - 16,
        y: cursorPos.y - 16,
        backgroundColor: "#4b5563",
        transition: { ease: "linear", type: "spring", stiffness: 50 },
      },
      text: {
        width: "150px",
        height: "150px",
        x: cursorPos.x - 72,
        y: cursorPos.y - 72,
        backgroundColor: "#FFFFFF",
        mixBlendMode: "difference",
        transition: { ease: "linear", type: "spring", stiffness: 50 },
      } as Variant, // Type assertion here
      none: {
        display: "none",
        x: cursorPos.x - 16,
        y: cursorPos.y - 16,
        backgroundColor: "#FFFFFF",
      },
    }),
    [cursorPos],
  );

  const mouseEnterHandler = () => setCursorBG("text");
  const mouseLeaveHandler = () => setCursorBG("default");
  const mouseToggleTheme = () => setCursorBG("none");

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaveHandler,
        mouseToggleTheme,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
