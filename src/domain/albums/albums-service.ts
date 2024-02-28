import { albumsAPI } from "./albums-api";
import { AlbumsType } from "./albums-type";

async function getAlbumsByUserId(userId: string): Promise<AlbumsType[]> {
    const response = await albumsAPI.getAlbumsByUserId(userId);
    return response;
}

export const albumsService = {
    getAlbumsByUserId,
};
