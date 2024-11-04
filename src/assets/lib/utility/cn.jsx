import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...classes) {
  return twMerge(clsx(...classes));
}

export default cn;
