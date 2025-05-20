'use client';

import React, { createContext, useState, ReactNode, useCallback, useMemo, useEffect } from "react";
import { FavoritesContextInter } from "../types/interfaces/interfaces";

export const FavoritesContext = createContext<FavoritesContextInter | undefined>(undefined);
const FAVORITES_STORAGE_KEY = "galeria-favorites";

interface FavoritesProviderProps {
    children: ReactNode;
}

export function FavoritesProvider({children}: FavoritesProviderProps) {
    const [favoritesId, setFavoritesId] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (stored) {
            try {
                setFavoritesId(JSON.parse(stored));
            } catch (err) {
                console.error("Error ao ler favoritos", err);
            }
        }
    },[]);

    const toggleFavorite = useCallback((id: string) => {
        setFavoritesId((prevId) => prevId.includes(id) ? prevId.filter((favId) => favId !== id) : [...prevId, id]);
    }, []);

    const isFavorite = useCallback(
        (id: string) => {
            return favoritesId.includes(id);
        },[favoritesId]);

    const contextValue = useMemo(
        () => ({
            favoritesId,
            isFavorite,
            toggleFavorite,
        }),[favoritesId,isFavorite,toggleFavorite]);

    useEffect(() => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritesId));
    },[favoritesId]);

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    )
        
}