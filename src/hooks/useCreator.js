import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCreator = async () => {
            try {
                const albumResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/albums/${id}`
                );
                if (!albumResponse.ok) {
                    throw new Error("Album fetch failed");
                }

                const albumData = await albumResponse.json();

                const userResponse = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${albumData.userId}`
                );
                if (!userResponse.ok) {
                    throw new Error("Album fetch failed");
                }

                const userData = await userResponse.json();
                setCreator({ name: userData.name, id: userData.id });
            } catch (error) {
                setError(error);
            }
        };
        getCreator();
    }, [id]);
    return { creator, error };
};

export default useCreator;
