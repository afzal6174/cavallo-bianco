import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classnames) {
  return twMerge(clsx(classnames));
}
