'use client';
import React from "react";
import LinkCommon from "../../atoms/linkCommon/LinkCommon";
import useToggleMenu from "@/app/hooks/useToggleMenu";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/app/i18nRequest";

const LinkClass = "hover:text-[var(--color-hover-green)] hover:shadow-[var(--shadow-underline-green)]";

export default function NavBar() {
  const { isOpen, toggle } = useToggleMenu();
  const pathname = usePathname();

  const currentLangMatch = pathname.match(/^\/(pt|en|es)(\/|$)/);
  const currentLang = currentLangMatch ? currentLangMatch[1] : 'pt'; // padrão pt caso não encontre

  const localizedPath = (page: string) => {
    return `/${currentLang}/${page}`;
  };

  return (
    <nav className="bg-[var(--color-bg-third)] px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Botão menu mobile */}
        <button
          onClick={toggle}
          className="block text-white text-3xl md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex w-full items-center text-base font-semibold uppercase text-white">
          <div className="flex flex-1 justify-start gap-8">
            <LinkCommon href={localizedPath('home')} content="Home" className={LinkClass} />
            <LinkCommon href={localizedPath('heroes')} content="Heroes" className={LinkClass} />
            <LinkCommon href={localizedPath('galeria')} content="Galeria" className={LinkClass} />
          </div>

          <div className="flex gap-6 justify-end w-1/4">
            <LinkCommon href={getLocalizedPath(pathname, 'pt')} content="🇧🇷 Português" />
            <LinkCommon href={getLocalizedPath(pathname, 'en')} content="🇺🇸 English" />
            <LinkCommon href={getLocalizedPath(pathname, 'es')} content="🇪🇸 Español" />
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 text-xs font-semibold uppercase text-white md:hidden">
          <LinkCommon href={localizedPath('home')} content="Home" className={LinkClass} />
          <LinkCommon href={localizedPath('heroes')} content="Heroes" className={LinkClass} />
          <LinkCommon href={localizedPath('galeria')} content="Galeria" className={LinkClass} />

          <div className="flex justify-center gap-6 mt-2">
            <LinkCommon href={getLocalizedPath(pathname, 'pt')} content="🇧🇷 Português" />
            <LinkCommon href={getLocalizedPath(pathname, 'en')} content="🇺🇸 English" />
            <LinkCommon href={getLocalizedPath(pathname, 'es')} content="🇪🇸 Español" />
          </div>
        </div>
      )}
    </nav>
  );
}
