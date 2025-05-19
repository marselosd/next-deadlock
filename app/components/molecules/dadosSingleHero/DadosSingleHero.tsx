'use client';
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import React from "react";
import TittleCommon from "../../atoms/tittleCommon/TittleCommon";
import TextCommon from "../../atoms/textCommon/TextCommon";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import useWindowResize from "@/app/hooks/useWindowSize";

export default function DadosSingleHero({id, name, description, images} : CharacterFromAPI) {
    const {width, height} = useWindowResize();
    return (
        <>
        <div>
            <TittleCommon>{id.toString()}</TittleCommon>
            <TittleCommon>{name}</TittleCommon>
            <TextCommon>{description.lore}</TextCommon>
            <ImageCommon src={images.selection_image} alt={name} className={""} width={120} height={120}></ImageCommon>
        </div>
        </>
    );
}