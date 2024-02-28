import { api } from "@/api/api-config";
import { AlbumsType } from "./albums-type";

async function getAlbumsByUserId(userId: string): Promise<AlbumsType[]> {
    const response = await api.get(`/users/${userId}/albums`);
    return response.data.albums;
}

export const albumsAPI = {
    getAlbumsByUserId,
};
