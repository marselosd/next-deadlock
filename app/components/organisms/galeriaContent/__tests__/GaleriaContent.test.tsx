import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import GaleriaContent from "../GaleriaContent";

const mockIsFavorite = jest.fn();
const mockToggleFavorite = jest.fn();

jest.mock("@/app/hooks/useFavorites", () => ({
    useFavorites: () => ({
        isFavorite: mockIsFavorite,
        toggleFavorite: mockToggleFavorite
    }),
}));

jest.mock('@/app/hooks/useWindowSize', () => ({
  __esModule: true,
  default: () => ({ width: 800, height: 600 }),
}));

jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <img {...props} />;
    },
}));

describe("GaleriaContent Component", () => {
    beforeEach(() => {
        mockIsFavorite.mockClear();
        mockToggleFavorite.mockClear();
    });

    test("deve renderizar os botões corretamente", () => {
        mockIsFavorite.mockReturnValue(false);
        render(<GaleriaContent/>);

        const favoriteButtons = screen.getAllByRole('button', {name: /favoritar/i});
        expect(favoriteButtons.length).toBeGreaterThan(0);

        favoriteButtons.forEach(button => {
            expect(button).toHaveTextContent('☆ Favoritar');
        });
    });

    test("deve chamar toggleFavorite ao clicar no botão de favorito", async () => {
        mockIsFavorite.mockReturnValue(false);
        render(<GaleriaContent/>);

        const favoriteButton = screen.getAllByRole('button', {name: /favoritar/i})[0];
        await userEvent.click(favoriteButton);

        expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
        expect(mockToggleFavorite).toHaveBeenCalledWith('/img/galeria/galeria-1.webp');
    });

    test("deve favoritar caso isFavorite retornar true", () => {
        mockIsFavorite.mockReturnValue(true);
        render(<GaleriaContent/>);

        const favoriteButtons = screen.getAllByRole('button', {name: /favorito/i});
        expect(favoriteButtons.length).toBeGreaterThan(0);

        favoriteButtons.forEach(button => {
            expect(button).toHaveTextContent('★ Favorito');
        })
    });

    test("deve renderizar a imagem com atributos corretos", () => {
        mockIsFavorite.mockReturnValue(false);
        render(<GaleriaContent/>);

        const img = screen.getByAltText("Mapa 1") as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain("/img/galeria/galeria-1.webp");
        expect(img.alt).toBe("Mapa 1");
    });

    test("deve aplicar largura e altura do hook useWindowResize", () => {
        mockIsFavorite.mockReturnValue(false);
        render(<GaleriaContent/>);

        const img = screen.getByAltText("Mapa 1") as HTMLImageElement;
        expect(img.width).toBe(800);
        expect(img.height).toBe(600);
    })
})