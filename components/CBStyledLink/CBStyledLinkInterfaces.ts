import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface CBStyledLinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
}
