import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  variant?: "filled" | "secondary";
  color?: string;
  className?: string;
  props?: React.HTMLProps<HTMLButtonElement>;
};

export default function Button({
  children,
  text,
  color,
  variant = "filled",
  className,
  ...props
}: ButtonProps) {
  if (text && children) {
    throw new Error(
      `You cannot pass both text and children to the Button component.`
    );
  }
  if (!text && !children) {
    throw new Error(
      `You must pass either text or children to the Button component.`
    );
  }

  const buttonClass = `inline-flex justify-center items-center ${
    variant === "filled" ? `bg-${color}-500 text-white` : "text-slate-600"
  }`;

  return (
    <button
      className={`px-4 py-2 ${buttonClass} ${className} rounded-full`}
      {...props}
    >
      {text && (
        <span className="font-normal text-xs leading-normal md:text-lg md:leading-7">
          {text}
        </span>
      )}
      {children}
    </button>
  );
}
