import React from "react";
import ImageCommon from "../../atoms/imageCommon/ImageCommon";
import NavBar from "../navBar/NavBar";
import TittleCommon from "../../atoms/tittleCommon/TittleCommon";

export default function Header() {
    return(
        <>
        <header className="bg-[var(--color-bg-primary)] p-4 flex justify-between items-center gap-2 shadow-md">
            <TittleCommon>NextDeadlock</TittleCommon>
            <ImageCommon src="/img/icon/deadlock-icon-2.png" alt="Icon" className="" width={100} height={100} />        
        </header>
        <NavBar/>
        </>
    );
}