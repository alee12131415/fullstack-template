import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Counter } from "@components/Counter";
import { Header } from "@components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Header>Web</Header>
            <Counter />
        </>,
    },
]);

export const Router = () => <RouterProvider router={router} />;
