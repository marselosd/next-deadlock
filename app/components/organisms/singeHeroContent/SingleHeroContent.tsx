'use client';
import React from "react";
import useApi from "@/app/hooks/useApi";
import { useSearchParams } from "next/navigation";
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import TextCommon from "../../atoms/textCommon/TextCommon";
import DadosSingleHero from "../../molecules/dadosSingleHero/DadosSingleHero";

export default function SingleHeroContent() {
    const searchParams = useSearchParams();
    const idParam = searchParams.get('id');

    const {data, isLoading, error} = useApi<CharacterFromAPI[]>(`https://assets.deadlock-api.com/v2/heroes`);

    if (isLoading) return <TextCommon>Carregando...</TextCommon>;
    if (error) return <TextCommon>{`Erro: ${error.message}`}</TextCommon>;

    if (!data) return null;

    const hero = data.find(h => h.id === Number(idParam));
    if (!hero) return <TextCommon>Erro. Herói não encontrado</TextCommon>;

    return (
        <>
        <DadosSingleHero id={hero.id} name={hero.name} description={hero.description} images={hero.images}></DadosSingleHero>
        </>
    );
}