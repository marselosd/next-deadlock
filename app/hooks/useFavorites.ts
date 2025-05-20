'use client';

import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FavoritesContextInter } from "../types/interfaces/interfaces";

export const useFavorites = (): FavoritesContextInter => {
    const context = useContext(FavoritesContext);

    if (context === undefined)
        throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider");

    return context;
};