import { TxtProps } from "@/app/types/interfaces/interfaces";
import React from "react";

export default function TextMenu({children, ...rest}: TxtProps) {
    return(
        <>
        <p className="text-[var(--foreground)] text-base leading-relaxed mb-4" {...rest}>{children}</p>
        </>
    );
}