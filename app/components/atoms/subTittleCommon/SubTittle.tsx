import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function SubTittle({ children }: TxtProps) {
  return (
    <h2 className="text-[var(--color-hover-green)] text-2xl font-bold mb-6 text-center">{children}</h2>
  );
}