import { useState, useCallback } from "react";

const useToggleMenu = (initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {isOpen, toggle, close};
}

export default useToggleMenu;