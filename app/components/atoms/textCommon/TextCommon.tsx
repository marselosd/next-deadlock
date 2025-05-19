import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function TextMenu({children, ...rest}: TxtProps) {
    return(
        <>
        <p className="text-[var(--color-bg-secundary)]" {...rest}>{children}</p>
        </>
    );
}