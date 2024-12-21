import { useCallback } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async () => {
    const albums = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
    ).then((r) => r.json());
    return { albums };
};

export default function Albums() {
    const navigate = useNavigate();
    const goToUser = useCallback(
        (id) => () => navigate(`/albums/${id}`),
        [navigate]
    );

    const { albums } = useLoaderData();

    return (
        <ul className="flex flex-col gap-4 justify-center align-middle">
            {albums.map((album) => (
                <li
                    key={album.id}
                    onClick={goToUser(album.id)}
                    className="cursor-pointer w-fit text-2xl hover:text-blue-900">
                    📷 {album.title}
                </li>
            ))}
        </ul>
    );
}
