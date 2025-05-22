'use client';

import React from "react";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import useWindowResize from "@/app/hooks/useWindowSize";
import useGaleria from "@/app/hooks/useGaleria";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";
import SubTittle from "../../atoms/subTittleCommon/SubTittle";
import { useFavorites } from "@/app/hooks/useFavorites";
import { useTranslations } from "next-intl";

const galeriaImagens = [
  { titulo: "Mapa 1", src: "/img/galeria/galeria-1.webp", alt: "Mapa 1" },
  { titulo: "Mapa 2", src: "/img/galeria/galeria-2.jpg", alt: "Mapa 2" },
  { titulo: "Mapa 3", src: "/img/galeria/galeria-3.webp", alt: "Mapa 3" },
  { titulo: "Mapa 4", src: "/img/galeria/galeria-4.jpg", alt: "Mapa 4" }
];

const shareImage = async (src: string) => {
  const url: string = window.location.origin + src;

  if (typeof navigator.share !== 'function') {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copiado!");
    } catch (err) {
      alert(`Erro ao copiar link. ${err}`);
    }
  } else {
    try {
      await navigator.share({
        title: "Se liga nesse jogo!",
        url,
      });
    } catch (err) {
      alert(`Erro ao compartilhar imagem. ${err}`);
    }
  }
};

export default function GaleriaContent() {
  const t = useTranslations();
  const { width, height } = useWindowResize();
  const { imagens: lista } = useGaleria(galeriaImagens);
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <DivCardCommon>
      <div>
        <SubTittle>{t("navBarContent.buttonGaleriaContent")}</SubTittle>
        <div>
          {lista.map((img, index) => (
            <div key={index} className={""}>
              <button
                onClick={() => toggleFavorite(img.src)}
                className={`px-2 py-1 w-fit m-2 rounded ${
                  isFavorite(img.src)
                    ? `bg-[var(--color-bg-secundary)]`
                    : `bg-[var(--color-bg-primary)]`
                } `}
              >
                {isFavorite(img.src)
                  ? t("galeriaContent.favoritoButton")
                  : t("galeriaContent.favoritarButton")}
              </button>
              <button
                onClick={() => shareImage(img.src)}
                className="px-2 py-1 w-fit m-2 rounded bg-[var(--color-bg-primary)] text-white"
              >
                {t("galeriaContent.compartilharButton")}
              </button>
              <ImageCommon
                src={img.src}
                alt={img.alt}
                width={width}
                height={height}
              />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </DivCardCommon>
  );
}
