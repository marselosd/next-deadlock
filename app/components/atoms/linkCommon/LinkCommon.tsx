import React from "react";
import { LinkCommonProps } from "@/app/types/interfaces/interfaces";
import Link from "next/link";

export default function LinkPropCtx({href, content, ...rest}: LinkCommonProps) {
  return (
    <Link href={href} {...rest}> <span>{content}</span> </Link>
  );
}