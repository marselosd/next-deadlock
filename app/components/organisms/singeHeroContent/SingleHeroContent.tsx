'use client';
import React from "react";
import useApi from "@/app/hooks/useApi";
import { useSearchParams } from "next/navigation";
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import TextCommon from "../../atoms/textCommon/TextCommon";
import DadosSingleHero from "../../molecules/dadosSingleHero/DadosSingleHero";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";
import { useFavorites } from "@/app/hooks/useFavorites";

export default function SingleHeroContent() {
    const searchParams = useSearchParams();
    const {toggleFavorite, isFavorite} = useFavorites();

    const idParam = searchParams.get('id');

    const {data, isLoading, error} = useApi<CharacterFromAPI[]>(`https://assets.deadlock-api.com/v2/heroes`);

    if (isLoading) return <TextCommon>Carregando...</TextCommon>;
    if (error) return <TextCommon>{`Erro: ${error.message}`}</TextCommon>;

    if (!data) return null;

    const hero = data.find(h => h.id === Number(idParam));
    if (!hero) return <TextCommon>Erro. Herói não encontrado</TextCommon>;

    return (
        <>
        <section className="pb-20 md:pb-20">
            <DivCardCommon>
                <button
                onClick={() => toggleFavorite((hero.id).toString())}
                className={`px-2 py-1 rounded ${isFavorite((hero.id).toString()) ? `bg-[var(--color-bg-secundary)]` : `bg-[var(--color-bg-primary)]`}`}
                >
                    {isFavorite((hero.id).toString()) ? '★' : '☆'}
                </button>
                <DadosSingleHero id={hero.id} name={hero.name} description={hero.description} images={hero.images}></DadosSingleHero>
            </DivCardCommon>
        </section>
        </>
    );
}