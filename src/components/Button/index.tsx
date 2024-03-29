import React from "react";

const shapes = { square: "rounded-none" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-800",
    gray_800: "bg-gray-800 text-white-A700",
  },
  outline: { gray_500: "border-2 border-gray-500 border-solid text-gray-500" },
} as const;
const sizes = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[19px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
