'use client';
import { IconAndButtonProps } from "@/app/types/interfaces/interfaces";
import React from "react";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import ButtonCommon from "../../atoms/buttonCommon/ButtonCommon";
import { useRouter } from "next/navigation";

export default function IconAndButton({ img, btn }: IconAndButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (btn.route && btn.id) {
      router.push(`${btn.route}?id=${btn.id}`);
    }
  }

  return (
    <div>
      <ButtonCommon 
      className={`group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1`}
      onClick={handleClick}
      >
        <ImageCommon src={img.src} alt={img.alt} className={img.className} width={100} height={100}/>
        {btn.children}
        <div className="w-3 h-3 mt-2 rounded-full bg-white transition-colors duration-300 group-hover:bg-[var(--color-hover-green)]" />
      </ButtonCommon>
    </div>
  );
}