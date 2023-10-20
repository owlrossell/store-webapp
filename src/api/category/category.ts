import {CategoryAPI, toCategoryLocal} from "@/api/category/categoryMapper";

const API_URL = process.env.MODE === 'DEV' ? process.env.API_URL_DEV : process.env.API_URL_PROD;
export const getAllCategories = async () => {
    const response = await fetch( `${API_URL}/categories`);
    const {data} = await response.json();
    if(Array.isArray(data))
        return data.map((categoryAPI: CategoryAPI) => toCategoryLocal(categoryAPI));
    else
        return data;
}