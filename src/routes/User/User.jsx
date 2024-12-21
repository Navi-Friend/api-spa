import { Link, useLoaderData } from "react-router-dom";

export const loader = async ({ params: { id } }) => {
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((r) => r.json());
    const albums = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
    ).then((r) => r.json());
    return { user, albums };
};

export default function User() {
    const { user, albums } = useLoaderData();
    return (
        <>
            <ul>
                <div className=" w-fit text-lg">Name: {user.name}</div>
                <div className=" w-fit text-lg">Username: {user.username}</div>
                <div className=" w-fit text-lg">Email: {user.email}</div>
                <ul className=" w-fit text-lg">
                    Address:
                    <li className="ml-6 w-fit text-base">
                        Street: {user.address.street}
                    </li>
                    <li className="ml-6 w-fit text-base">
                        Suite: {user.address.suite}
                    </li>
                    <li className="ml-6 w-fit text-base">
                        City: {user.address.city}
                    </li>
                    <li className="ml-6 w-fit text-base">
                        Zipcode: {user.address.zipcode}
                    </li>
                </ul>
                <div className=" w-fit text-lg">Phone: {user.phone}</div>
                <div className=" w-fit text-lg">Website: {user.website}</div>
                <div className=" w-fit text-lg">
                    Company: {user.company.name}
                </div>
            </ul>
            <br />
            <ul className="text-lg">
                Albums:
                {albums.map((album) => (
                    <li
                        className="pl-4 w-fit text-base hover:text-blue-900"
                        key={album.id}>
                        <Link to={`/albums/${album.id}`}>📷 {album.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
