import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import Root from "./Root";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./AuthProvider";
import { Toaster } from "react-hot-toast";
import CreateTask from "./Dashboard/CreateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },

            // {
            //     path: "/create-task",
            //     element: <CreateTask />,
            // },
            {
                path: "/create-task",
                element: <CreateTask />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
                <Toaster position="top-center" reverseOrder={false} />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
