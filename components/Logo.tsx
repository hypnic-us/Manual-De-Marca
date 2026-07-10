import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export default function Logo({ className = "", size = 160, color = "var(--color-paper)" }: LogoProps) {
  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: typeof size === 'number' ? `${size}px` : size,
        lineHeight: 1,
        letterSpacing: '-0.06em',
        color: color,
        paddingRight: '0.1em'
      }}
    >
      JM<span className="text-earth">.</span>
    </span>
  );
}
