import { useState, useCallback, useEffect } from "react";
import { UseApiResult } from "../types/interfaces/interfaces";

const useApi = <T>(url: string): UseApiResult<T> => {

    const [data,setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await fetch(url);

            if (!response.ok)
                throw new Error(`Erro na API: ${response.status} ${response.statusText}`);

            const result: T = await response.json();

            if (result != null) 
                setData(result);
            else
                throw new Error("Não foi possível encontrar dados.");        
        } catch (err) {
            if (err instanceof Error)
                setError(err);
            else 
                setError(new Error("Ocorreu um erro desconhecido"));

            console.error("Falha na busca.", err);
        } finally {
            setIsLoading(false);
        }
    },[url]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return {data,isLoading,error};
} 

export default useApi;
