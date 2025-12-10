import React from "react";

interface GradientButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "inverted";
}

export function GradientButton({ href, onClick, children, className = "", variant = "default" }: GradientButtonProps) {
    const defaultStyle = {
        backgroundImage: "radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(30, 130, 224) 0px, rgb(28, 56, 234) 100%)",
        boxShadow: `
      rgba(12, 57, 237, 0) 0px 62px 17px 0px, 
      rgba(12, 57, 237, 0.03) 0px 40px 16px 0px, 
      rgba(12, 57, 237, 0.09) 0px 22px 13px 0px, 
      rgba(12, 57, 237, 0.15) 0px 10px 10px 0px, 
      rgba(12, 57, 237, 0.17) 0px 2px 5px 0px, 
      rgba(148, 172, 243, 0.4) 0px 8px 24px 0px, 
      rgba(191, 229, 251, 0.4) -3px -3px 4px 0px inset, 
      rgba(19, 26, 228, 0.1) 4px 4px 4px 0px inset
    `,
        color: "white",
        borderRadius: "12px",
        padding: "12px 32px",
    };

    const invertedStyle = {
        backgroundImage: "radial-gradient(114.65% 114.65% at 9.73% 17.27%, rgb(255, 255, 255) 0px, rgb(147, 197, 253) 100%)",
        boxShadow: `
      rgba(59, 130, 246, 0) 0px 62px 17px 0px, 
      rgba(59, 130, 246, 0.03) 0px 40px 16px 0px, 
      rgba(59, 130, 246, 0.09) 0px 22px 13px 0px, 
      rgba(59, 130, 246, 0.15) 0px 10px 10px 0px, 
      rgba(59, 130, 246, 0.17) 0px 2px 5px 0px, 
      rgba(255, 255, 255, 0.6) -3px -3px 4px 0px inset, 
      rgba(147, 197, 253, 0.2) 4px 4px 4px 0px inset
    `,
        color: "#1e40af",
        borderRadius: "12px",
        padding: "12px 32px",
    };

    const buttonStyle = variant === "inverted" ? invertedStyle : defaultStyle;

    const baseClasses = "inline-flex items-center justify-center font-sans font-semibold text-lg transition-transform hover:scale-105 active:scale-95";

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} ${className}`}
                style={buttonStyle}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${className}`}
            style={buttonStyle}
        >
            {children}
        </button>
    );
}
