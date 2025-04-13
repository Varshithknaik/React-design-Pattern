import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./button.module.css";
type ButtonSize = "s" | "m" | "l" | "xl";

// Use generics to create strong types based on the 'As' prop
type ButtonProps<T extends ElementType> = {
  As?: T;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode; // Explicitly include children if needed
} & Omit<ComponentPropsWithoutRef<T>, "className" | "children">; // Omit props we handle explicitly
const Button = <T extends ElementType = "button">({
  As,
  size = "m",
  className = "",
  ...otherProps
}: ButtonProps<T>) => {
  const Component = As || "button";
  return (
    <Component
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
