import React from "react";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import NavBar from "../navBar/NavBar";
import TittleCommon from "../../atoms/tittleCommon/TittleCommon";

export default function Header() {
    return(
        <>
        <header className="bg-[var(--color-bg-primary)] p-4 flex flex-col sm:flex-row justify-between items-center gap-2 shadow-md">
            <TittleCommon className="text-center sm:text-left">NextDeadlock</TittleCommon>
            <ImageCommon src="/img/icon/deadlock-icon-2.png" alt="Icon" className="mx-auto sm:mx-0" width={100} height={100} />        
        </header>
        <NavBar/>
        </>
    );
}