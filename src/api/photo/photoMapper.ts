export interface PhotoLocal {
    id: number;
    formatsPhotos: {
        id: number;
        width: number;
        height: number;
        src: string;
        created: string;
    }[]
}

export interface PhotoAPI {
    id: number;
    created: string;
    type: boolean;
    formatsPhotos: {
        id: number;
        width: number;
        height: number;
        src: string;
        created: string;
    }[]
}

export const toPhotoLocal = (photo: PhotoAPI): PhotoLocal => ({
    id: photo.id,
    formatsPhotos: photo.formatsPhotos,
});