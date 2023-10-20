'use client';
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {CategoryLocal} from "@/api/category/categoryMapper";
import {getAllCategories} from "@/api/category/category";
import {ProductLocal} from "@/api/product/productMapper";
import {getAllProducts} from "@/api/product/products";

interface GlobalContextInterface {
    isMenuActive?: boolean;
    setIsMenuActive?: Dispatch<SetStateAction<boolean>>;
    categories?: CategoryLocal[],
    setCategories?: Dispatch<SetStateAction<CategoryLocal[]>>,
    products?: ProductLocal[],
    setProducts?: Dispatch<SetStateAction<ProductLocal[]>>,
}
export const GlobalContext = createContext<GlobalContextInterface>({});

const GlobalProvider = ({children}: { children: React.ReactNode }) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [categories, setCategories] = useState<CategoryLocal[]>([]);
    const [products, setProducts] = useState<ProductLocal[]>([]);

    useEffect(() => {
        getAllCategories().then((categories) => {
            setCategories(categories);
        });
        getAllProducts().then((products) => {
            setProducts(products);
        });
    }, []);
    return (
        <GlobalContext.Provider value={{
            isMenuActive,
            setIsMenuActive,
            categories,
            setCategories,
            products,
            setProducts}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
