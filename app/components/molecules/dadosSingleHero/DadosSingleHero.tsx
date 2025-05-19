'use client';
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import SubTittle from "../../atoms/subTittleCommon/SubTittle";

export default function DadosSingleHero({id, name, description, images} : CharacterFromAPI) {
    return (
        <>
        <div>
            <SubTittle>{id.toString()}</SubTittle>
            <SubTittle>{name}</SubTittle>
            <TextCommon>{description.lore}</TextCommon>
            <hr/>
            <div className={"flex justify-center"}>
                <ImageCommon src={images.selection_image} alt={name} className={""} width={300} height={300}></ImageCommon>
            </div>
        </div>
        </>
    );
}