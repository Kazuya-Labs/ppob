import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const convertToIdr = (number: number) => number.toLocaleString("id-ID");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
