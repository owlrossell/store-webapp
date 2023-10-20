import {ProductAPI, toProductLocal} from "@/api/product/productMapper";

const API_URL = process.env.MODE === 'DEV' ? process.env.API_URL_DEV : process.env.API_URL_PROD;
export const getAllProducts = async () => {
    const response = await fetch( `${API_URL}/products`);
    const {data} = await response.json();
    if(Array.isArray(data))
        return data.map((product: ProductAPI) => toProductLocal(product));
    else
        return data;
}