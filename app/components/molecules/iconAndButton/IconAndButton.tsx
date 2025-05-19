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
      <ButtonCommon className={btn.className} onClick={handleClick}>
        <ImageCommon src={img.src} alt={img.alt} className={img.className} width={80} height={80}/>
        {btn.children}
      </ButtonCommon>
    </div>
  );
}