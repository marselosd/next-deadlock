'use client';
import React from "react";
import { CharacterFromAPI } from "@/app/types/interfaces/interfaces";
import useApi from "@/app/hooks/useApi";
import TextCommon from "../../atoms/textCommon/TextCommon";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";
import { usePathname} from "next/navigation";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

export const IDSExcluidos = [72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 57, 56, 54, 53, 52, 51, 49, 48, 47, 39, 38, 21]; // Bonecos alpha/beta

export default function HeroesContent() {
    const pathname = usePathname();
    const { data, isLoading, error } = useApi<CharacterFromAPI[]>(`https://assets.deadlock-api.com/v2/heroes`);

    if (isLoading) return <TextCommon>Carregando...</TextCommon>;
    if (error) return <TextCommon>{`Ocorreu um erro. ${error.message}`}</TextCommon>;
    if (!data) return null;

    const dataFiltrada = data.filter(personagem => !IDSExcluidos.includes(personagem.id));

    const langMatch = pathname.match(/^\/(pt|en|es)(\/|$)/);
    const lang = langMatch ? langMatch[1] : 'pt';
    const baseRoute = `/${lang}/hero`;

    return (
        <DivCardCommon>
            <section className="pb-20 md:pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                    {dataFiltrada.map((personagem) => (
                        <Card
                          key={personagem.id}
                          className="bg-[var(--color-bg-secundary)] border border-green-700 shadow-md hover:shadow-lg transition-shadow rounded"
                          sx={{ maxWidth: 345, backgroundColor: 'transparent' }}
                        >
                            <CardMedia
                              sx={{ height: 140 }}
                              image={personagem.images.icon_hero_card}
                              title={personagem.name}
                            />
                            <CardContent>
                              <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="div"
                                className="text-green-900 font-semibold"
                              >
                                {personagem.name}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button 
                                size="small" 
                                className="bg-green-800 text-beige-100 hover:bg-green-600"
                                onClick={() => window.location.href = `${baseRoute}?id=${personagem.id}`}
                              >
                                Ver Mais
                              </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
                <br/>
            </section>
        </DivCardCommon>
    );
}
