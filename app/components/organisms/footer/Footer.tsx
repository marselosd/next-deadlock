import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";

export default function Footer() {
    return(
        <>
        <footer className="bg-[var(--color-bg-third)] fixed bottom-0 left-0 w-full p-4 z-50">
            <TextCommon>©2025 Marcelo Dalcin - NextDeadlock</TextCommon>
            <TextCommon>Obrigado Especial a DeadlockAPI</TextCommon>
        </footer>
        </>
    );
}