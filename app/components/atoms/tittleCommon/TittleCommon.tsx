import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function TittleCommon({ children}: TxtProps) {
  return (
    <h1 className={"text-[var(--color-bg-secundary)] text-4xl font-bold mb-6 text-center"}>{children}</h1>
  );
}