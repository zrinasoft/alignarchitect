import type { ReactNode, ElementType } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** narrower max-width for text-heavy content */
  narrow?: boolean;
};

export function Container({ children, className = "", as: Tag = "div", narrow }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${
        narrow ? "max-w-3xl" : "max-w-[1200px]"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
