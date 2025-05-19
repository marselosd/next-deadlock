'use client';

import React from "react";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import useWindowResize from "@/app/hooks/useWindowSize";
import useGaleria from "@/app/hooks/useGaleria";
import TittleCommon from "../../atoms/tittleCommon/TittleCommon";

const galeriaImagens = [
  { titulo: "Mapa 1", src: "/img/galeria/galeria-1.webp", alt: "Mapa 1" },
  { titulo: "Mapa 2", src: "/img/galeria/galeria-2.jpg", alt: "Mapa 2" },
  { titulo: "Mapa 3", src: "/img/galeria/galeria-3.webp", alt: "Mapa 3" },
  { titulo: "Mapa 4", src: "/img/galeria/galeria-4.jpg", alt: "Mapa 4" }
];

export default function Galeria() {
    const {width, height} = useWindowResize();
    const {imagens: lista} = useGaleria(galeriaImagens);

    return (
        <>
        <div>
            <TittleCommon>GALERIA</TittleCommon>

            <div>
                {lista.map((img, index) => (
                    <div key={index} className={""}>
                        <ImageCommon src={img.src} alt={img.alt} width={width} height={height}></ImageCommon>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}