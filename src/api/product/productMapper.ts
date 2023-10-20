import {CategoryAPI, CategoryLocal, toCategoryLocal} from "@/api/category/categoryMapper";
import {PhotoAPI, PhotoLocal, toPhotoLocal} from "@/api/photo/photoMapper";

export interface ProductLocal {
    id: number;
    name: string;
    description: string;
    stock: number;
    regularPrice: number;
    salePrice: number;
    tags: {
        label: string;
        value: string;
    }[];
    category: CategoryLocal;
    photos: PhotoLocal[];
}

export interface ProductAPI {
    id: number;
    name: string;
    description: string;
    stock: number;
    regularPrice: number;
    salePrice: number;
    tags: {
        label: string;
        value: string;
    }[];
    tax: number;
    state: string;
    created: string;
    isPromocional: boolean;
    category: CategoryAPI;
    photos: PhotoAPI[];
}

export const toProductLocal = (product: ProductAPI): ProductLocal => ({
    id: product.id,
    name: product.name,
    description: product.description,
    stock: product.stock,
    regularPrice: product.regularPrice,
    salePrice: product.salePrice,
    tags: product.tags,
    category: toCategoryLocal(product.category),
    photos: product.photos.length === 0 ? [] : toPhotoLocal(product.photos[0]),
});