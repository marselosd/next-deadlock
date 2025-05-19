'use client';
import { ButtonCommonProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function ButtonCommon({ children, onClick, ...rest }: ButtonCommonProps) {
  return (
    <button onClick={onClick} {...rest}>{children}</button>
  );
}