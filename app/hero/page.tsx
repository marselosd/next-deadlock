import React, { Suspense } from "react";
import SingleHeroContent from "../components/organisms/singeHeroContent/SingleHeroContent";

export default function Hero() {
  return (
    <>
    <Suspense fallback={<div>Carregando...</div>}>
      <SingleHeroContent/>
    </Suspense>
    </>
  );
}
