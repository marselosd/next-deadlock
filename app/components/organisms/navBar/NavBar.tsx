'use client';
import React from "react";
import LinkCommon from "../../atoms/linkCommon/LinkCommon";
import useToggleMenu from "@/app/hooks/useToggleMenu";
import { usePathname, useSearchParams } from "next/navigation";
import { getLocalizedUrlWithParams } from "@/app/utils/getLocalizedUrlWithParams";

const LinkClass = "hover:text-[var(--color-hover-green)] hover:shadow-[var(--shadow-underline-green)]";

export default function NavBar() {
  const { isOpen, toggle } = useToggleMenu();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav className="bg-[var(--color-bg-third)] px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Botão Mobile */}
        <button onClick={toggle} className="block text-white text-3xl md:hidden" aria-label="Abrir menu">☰</button>

        {/* Navegação desktop */}
        <div className="hidden md:flex w-full text-base font-semibold uppercase text-white justify-between">
          <div className="flex gap-8">
            <LinkCommon href="/pt/home" content="Home" className={LinkClass} />
            <LinkCommon href="/pt/heroes" content="Heroes" className={LinkClass} />
            <LinkCommon href="/pt/galeria" content="Galeria" className={LinkClass} />
          </div>

          <div className="flex gap-4">
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'pt')} content="🇧🇷" />
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'en')} content="🇺🇸" />
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'es')} content="🇪🇸" />
          </div>
        </div>
      </div>

      {/* Navegação mobile */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 text-xs font-semibold uppercase text-white md:hidden">
          <LinkCommon href="/pt/home" content="Home" className={LinkClass} />
          <LinkCommon href="/pt/heroes" content="Heroes" className={LinkClass} />
          <LinkCommon href="/pt/galeria" content="Galeria" className={LinkClass} />
          <div className="flex gap-4">
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'pt')} content="🇧🇷" />
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'en')} content="🇺🇸" />
            <LinkCommon href={getLocalizedUrlWithParams(pathname, searchParams, 'es')} content="🇪🇸" />
          </div>
        </div>
      )}
    </nav>
  );
}
