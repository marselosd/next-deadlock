'use client';
import React from "react";
import LinkCommon from "../../atoms/linkCommon/LinkCommon";
import useToggleMenu from "@/app/hooks/useToggleMenu";

const LinkClass = "hover:text-[var(--color-hover-green)] hover:shadow-[var(--shadow-underline-green)]";

export default function NavBar() {
  const {isOpen, toggle} = useToggleMenu();

  return (
    <nav className="bg-[var(--color-bg-third)] px-8 py-4">
        <div className="flex items-center justify-between">
            {/* Botão de menu (mobile) */}
            <button
            onClick={toggle}
            className="block text-white text-3xl md:hidden"
            aria-label="Abrir menu"
            >
            ☰
            </button>

            {/* Navegação desktop */}
            <div className="hidden md:flex w-full text-base font-semibold uppercase text-white">
                <div className="w-1/3 text-left">
                    <LinkCommon href="/home" content="Home" className={LinkClass} />
                </div>
                <div className="w-1/3 text-center">
                    <LinkCommon href="/heroes" content="Heroes" className={LinkClass} />
                </div>
                <div className="w-1/3 text-right">
                    <LinkCommon href="/galeria" content="Galeria" className={LinkClass} />
            </div>
</div>
        </div>

        {/* Navegação mobile */}
        {isOpen && (
            <div className="flex flex-col items-center gap-4 mt-4 text-xs font-semibold uppercase text-white md:hidden">
            <LinkCommon href="/home" content="Home" className={LinkClass} />
            <LinkCommon href="/heroes" content="Heroes" className={LinkClass} />
            <LinkCommon href="/galeria" content="Galeria" className={LinkClass} />
            </div>
        )}
    </nav>
  );
}
