import React from "react";
import { Trash } from "@/assets";
import { UserType, useGetAlbumsByUserId, useGetPostsByUserId } from "@/domain";

type Props = {
    user: UserType;
    row: string | null;
    session: string | null;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    onClick: () => void;
    navigateToProfile: () => void;
};

export function CurrentPage({
    user,
    row,
    session,
    onMouseEnter,
    onMouseLeave,
    navigateToProfile,
    onClick,
}: Props) {
    const albums = useGetAlbumsByUserId(user.id);
    const posts = useGetPostsByUserId(user.id);

    return (
        <tr
            key={user.id}
            className={styles.rowContainer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <td className="h-[100px] w-12">
                {row === user.id && user.email === session && (
                    <div className="flex justify-center" onClick={onClick}>
                        <Trash color="red" className="cursor-pointer" />
                    </div>
                )}
            </td>
            <td
                onClick={navigateToProfile}
                className="text-gray-850 font-bold cursor-pointer hover:underline"
            >
                {user.username}
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.days}</td>
            <td>{posts.posts?.length || 0}</td>
            <td>{albums.albums?.length || 0}</td>
        </tr>
    );
}

const styles = {
    rowContainer:
        " text-gray-550 text-base font-normal border-b hover:bg-gray-100",
};
