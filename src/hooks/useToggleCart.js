import { useState } from "react";

export const useToggleCart = (initialValue) => {
    const [showCart, setShowCart] = useState(initialValue);

    const toggleShowCart = () => {
        setShowCart(prev => !prev);
    }

    return { showCart, toggleShowCart };
}