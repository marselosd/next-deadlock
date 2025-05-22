'use client';
import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";
import DivCardCommon from "../../atoms/divCardCommon/DivCardCommon";
import SubTittle from "../../atoms/subTittleCommon/SubTittle";
import FormContact from "../form/FormContact";
import { useTranslations } from "next-intl";

export default function HomeContent() {
    const t = useTranslations();
    
    return(
        <>
        <main className="pb-20 md:pb-20">
            <DivCardCommon>
                <SubTittle>{t('sobreContent.subTittleContent')}</SubTittle>
                <TextCommon>{t('sobreContent.textCommonContent.0')}</TextCommon>
                <TextCommon>{t('sobreContent.textCommonContent.1')}</TextCommon>
                <TextCommon>{t('sobreContent.textCommonContent.2')}</TextCommon>
                <TextCommon>{t('sobreContent.textCommonContent.3')}</TextCommon>
                <TextCommon>{t('sobreContent.textCommonContent.4')}</TextCommon>
            </DivCardCommon>

            <DivCardCommon>
                <SubTittle>{t('gameplayContent.subTittleContent')}</SubTittle>
                <TextCommon>{t('gameplayContent.textCommonContent.0')}</TextCommon>
                <TextCommon>{t('gameplayContent.textCommonContent.1')}</TextCommon>
                <TextCommon>{t('gameplayContent.textCommonContent.2')}</TextCommon>
                <TextCommon>{t('gameplayContent.textCommonContent.3')}</TextCommon>
                <TextCommon>{t('gameplayContent.textCommonContent.4')}</TextCommon>
            </DivCardCommon>

            <DivCardCommon>
                <FormContact/>
            </DivCardCommon>
        </main>
        </>
    );
}