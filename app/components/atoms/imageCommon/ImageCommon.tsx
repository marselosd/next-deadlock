'use client';
import React from "react";
import Image from 'next/image';
import { ImageCommonProps } from "@/app/types/interfaces/interfaces";

export default function ImageCommon({ src, alt, width, height, className }: ImageCommonProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}