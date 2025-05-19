import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function SubTittle({ children, ...rest }: TxtProps) {
  return (
    <h2 {...rest}>{children}</h2>
  );
}