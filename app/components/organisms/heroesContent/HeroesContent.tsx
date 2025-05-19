'use client';
import React from "react";
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import useApi from "@/app/hooks/useApi";
import TextCommon from "../../atoms/textCommon/TextCommon";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";

export default function HeroesContent({id}: CharacterFromAPI) {
    const {data,isLoading,error} = useApi<CharacterFromAPI>(`https://assets.deadlock-api.com/v2/heroes/${id}`);

    if (isLoading) return <TextCommon>Carregando...</TextCommon> 
    if (error) return <TextCommon>{['Ocorreu um erro. ', error.message].join('')}</TextCommon>

    if (data != null) {
    }

}