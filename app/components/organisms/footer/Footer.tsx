import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";

export default function Footer() {
    return(
        <>
        <footer className="bg-[var(--color-bg-third)] fixed bottom-0 flex justify-between left-0 w-full p-4 z-50 ">
            <TextCommon>©2025 Marcelo Dalcin - NextDeadlock</TextCommon>
            <TextCommon>Todos direitos de imagem a Valve</TextCommon>
            <TextCommon>Obrigado Especial a DeadlockAPI</TextCommon>
        </footer>
        </>
    );
}