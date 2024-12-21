import { Suspense } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useCreator from "../../hooks/useCreator";
import ImageWithPlaceholder from "../../components/ImageWithPlaceholder";
import ErrorPage from "../ErrorPage/ErrorPage";

export const loader = async ({ params: { id } }) => {
    const albumData = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    ).then((r) => r.json());
    return { albumData };
};

export default function Album() {
    const { albumData } = useLoaderData();
    const { creator, error } = useCreator();

    if (error) {
        return <ErrorPage />;
    }
    if (!creator) {
        return <div>Loading..</div>;
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <h1>{albumData.title}</h1>
            <div className="text-xl my-10">
                Created by{" "}
                <Link
                    className="cursor-pointer w-fit text-blue-700 hover:text-blue-900"
                    to={`/users/${creator.id}`}>
                    {creator.name}
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
                {albumData.map((p) => (
                    <ImageWithPlaceholder
                        key={p.id}
                        url={p.url}
                        title={p.title}
                    />
                ))}
            </div>
        </Suspense>
    );
}
