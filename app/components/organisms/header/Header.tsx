import React from "react";
import TitleHeader from "../../atoms/tittleCommon/TittleCommon";
import TextCommon from "../../atoms/textCommon/TextCommon";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import NavBar from "../navBar/NavBar";

export default function Header() {
    return(
        <>
        <header className="bg-[var(--color-bg-primary)] text-white p-4 flex justify-between items-center gap-2 shadow-md">
            <TitleHeader>NextDeadlock</TitleHeader>
            <TextCommon>Um Blog sobre o novo jogo da Valve, Deadlock.</TextCommon>
            <ImageCommon src="/img/icon/deadlock-icon.png" alt="Icon" className="" width={300} height={300} />        
        </header>
        <NavBar/>
        </>
    );
}