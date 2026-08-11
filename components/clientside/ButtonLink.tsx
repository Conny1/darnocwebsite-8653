import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "accent" | "inverse" | "plain";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  external?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<ButtonLinkVariant, string> = {
  primary:
    "px-8 py-4 rounded bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-200 font-semibold",
  secondary:
    "px-8 py-4 rounded bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 font-semibold",
  accent:
    "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white shadow-sm text-sm font-semibold",
  inverse:
    "px-8 py-4 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 shadow-xl font-bold",
  plain: "text-sm font-medium text-zinc-700 hover:text-zinc-900",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = true,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center gap-2 transition-all ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}