import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./routes/Wrapper/Wrapper";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Users, { loader as usersLoader } from "./routes/Users/Users";
import User, { loader as userLoader } from "./routes/User/User";
import Albums, { loader as albumsLoader } from "./routes/Albums/Albums";
import Album, { loader as albumLoader } from "./routes/Album/Album";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Wrapper />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/users",
                    loader: usersLoader,
                    element: <Users />,
                },
                {
                    path: "/users/:id",
                    loader: userLoader,
                    element: <User />,
                },
                {
                    path: "/albums",
                    loader: albumsLoader,
                    element: <Albums />,
                },
                {
                    path: "/albums/:id",
                    loader: albumLoader,
                    element: <Album />,
                },
            ],
        },
    ],
    {
        future: {
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

export default function App() {
    return (
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    );
}
