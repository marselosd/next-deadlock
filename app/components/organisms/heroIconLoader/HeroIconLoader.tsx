'use client';
import React from "react";
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import useApi from "@/app/hooks/useApi";
import TextCommon from "../../atoms/textCommon/TextCommon";
import IconAndButton from "../../molecules/iconAndButton/IconAndButton";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";

const IDSExcluidos = [72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 57, 56, 54, 53, 52, 51, 49, 48, 47, 39, 38, 21]; // ID de Boneco em Alpha/Beta (não aparecerão no site).

export default function HeroesContent() {
    const { data, isLoading, error } = useApi<CharacterFromAPI[]>(`https://assets.deadlock-api.com/v2/heroes`);

    if (isLoading) return <TextCommon>Carregando...</TextCommon>;
    if (error) return <TextCommon>{`Ocorreu um erro. ${error.message}`}</TextCommon>;

    if (!data) return null;

    const dataFiltrada = data.filter(personagem => !IDSExcluidos.includes(personagem.id));

    return (
        <DivCardCommon>
            <section>
                <div className={"flex flex-row flex-wrap justify-center gap-4"}>
                    <>
                    {dataFiltrada.map((personagem) => (
                        <IconAndButton
                        key={personagem.id}
                        img={{
                            src: personagem.images.icon_hero_card,
                            alt: personagem.name,
                            className: "w-12 h-12 sm:w-16 sm:h-16",
                        }}
                        btn={{
                            children: "",
                            className: "text-sm px-3 py-1",
                            route: '/hero',
                            id: personagem.id.toString(),
                        }}
                        />
                    ))}
                    </>
                </div>
            </section>
        </DivCardCommon>
    );
}