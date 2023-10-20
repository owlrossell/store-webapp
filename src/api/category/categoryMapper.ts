export interface CategoryLocal {
    id: number;
    name: string;
}

export interface CategoryAPI {
    id: number;
    name: string;
    created: string;
}

export const toCategoryLocal = (category: CategoryAPI): CategoryLocal => ({
    id: category.id,
    name: category.name
})