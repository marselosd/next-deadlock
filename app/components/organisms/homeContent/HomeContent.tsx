import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";
import SubTittle from "../../atoms/subTittleCommon/SubTittle";

export default function HomeContent() {
    return(
        <>
        <DivCardCommon>
            <SubTittle>Sobre</SubTittle>
            <TextCommon>
                Deadlock é um jogo multiplayer de tiro em terceira pessoa com foco em trabalho em equipe e elementos de MOBA, atualmente em desenvolvimento e publicação pela Valve.
            </TextCommon>

            <TextCommon>
                Desde abril de 2024, Deadlock está em fase de testes de desenvolvimento inicial. Jogadores foram incentivados a convidar amigos para participar através do serviço online Steam, mas inicialmente foi solicitado que não compartilhassem detalhes do jogo publicamente.
            </TextCommon>

            <TextCommon>
                Pouco depois do início dos testes, imagens e vídeos de Deadlock começaram a vazar na internet. Em 12 de agosto de 2024, um jornalista foi banido do jogo após publicar uma prévia no site de tecnologia The Verge.
            </TextCommon>

            <TextCommon>
                Mais tarde naquele mês, a Valve suspendeu as restrições sobre conversas públicas para os testadores e lançou a página oficial de Deadlock na loja da Steam.
            </TextCommon>

            <TextCommon>
                Em setembro de 2024, Deadlock alcançou mais de 170.000 jogadores simultâneos.
            </TextCommon>
        </DivCardCommon>

        <DivCardCommon>
            <SubTittle>Gameplay</SubTittle>
            <TextCommon>
                Deadlock é um jogo de tiro em terceira pessoa com equipes de 6 contra 6, que combina elementos de MOBA.
            </TextCommon>

            <TextCommon>
                Em cada partida, os 12 jogadores controlam heróis únicos, que começam divididos em três rotas de um mapa grande. Para vencer, uma equipe precisa avançar com seus tropas pelas rotas e destruir o patrono da equipe adversária uma grande entidade sobrenatural localizada na base inimiga.
            </TextCommon>

            <TextCommon>
                Os jogadores podem obter almas e pontos de habilidade ao eliminar tropas, NPCs neutros chamados habitantes e outros jogadores. Esses recursos podem ser usados para melhorar as habilidades dos heróis e comprar itens em lojas de curiosidades, tornando-os mais fortes.
            </TextCommon>

            <TextCommon>
                O mapa pode ser explorado com o uso de tirolesas em cada rota, além de teletransportadores. O jogo possui mais de 30 heróis jogáveis, cada um com armas, estatísticas e habilidades únicas.
            </TextCommon>

            <TextCommon>
                Deadlock se passa em uma versão alternativa da cidade de Nova York, com referências ao ocultismo.
            </TextCommon>
        </DivCardCommon>
        </>
    );
}