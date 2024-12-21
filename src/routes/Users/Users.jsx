import { useCallback } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async () => {
    const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    ).then((r) => r.json());
    return { users };
};

export default function Users() {
    const navigate = useNavigate();
    const goToUser = useCallback(
        (id) => () => navigate(`/users/${id}`),
        [navigate]
    );

    const { users } = useLoaderData();

    return (
        <ul>
            {users.map((user) => (
                <li
                    key={user.id}
                    onClick={goToUser(user.id)}
                    className="cursor-pointer w-fit text-xl leading-8 hover:text-blue-900">
                    {user.name}
                </li>
            ))}
        </ul>
    );
}
