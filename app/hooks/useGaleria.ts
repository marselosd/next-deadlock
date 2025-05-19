import { ImageGaleria } from "../types/interfaces/interfaces";

export default function useGaleria(imagens: ImageGaleria[]) {
    return {
        imagens,
        total: imagens.length
    };
}