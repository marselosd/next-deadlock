import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function TittleCommon({ children, ...rest }: TxtProps) {
  return (
    <h1 {...rest}>{children}</h1>
  );
}