import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <>
      <footer className="bg-[var(--color-bg-third)] fixed bottom-0 flex justify-between left-0 w-full p-4 z-50 ">
        <TextCommon>©2025 Marcelo Dalcin, NextDeadlock</TextCommon>
        <TextCommon>{t("footerContent.textCommonContent2")}</TextCommon>
        <TextCommon>{t("footerContent.textCommonContent3")}</TextCommon>
      </footer>
    </>
  );
}