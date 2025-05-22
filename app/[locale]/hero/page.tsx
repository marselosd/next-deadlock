import SingleHeroContent from "@/app/components/organisms/singeHeroContent/SingleHeroContent";
import React, { Suspense } from "react";

export default function Hero() {
  return (
    <>
    <Suspense fallback={<div>Carregando...</div>}>
      <SingleHeroContent/>
    </Suspense>
    </>
  );
}
