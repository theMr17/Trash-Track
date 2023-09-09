import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import TrashCard from "../components/TrashCard";
import AuthDetails from "../components/AuthDetails";
import Home from "../components/Home";
import View from "../components/View";

import { createBrowserRouter } from "react-router-dom";
import CompletedQuests from "../components/CompletedQuests";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <SignIn />
            </div>
        ),
    },
    {
        path: "/signup",
        element: (
            <div>
                <SignUp />
            </div>
        ),
    },
    {
        path: "/trashfinder",
        element: (
            <div>
                <TrashCard />
            </div>
        ),
    },
    {
        path: "/home",
        element: (
            <div>
                <Home />
            </div>
        ),
    },
    {
        path: "/authDetails",
        element: (
            <div>
                <AuthDetails />
            </div>
        ),
    },
    {
        path: "/view",
        element: (
            <div>
                <View />
            </div>
        ),
    },
    {
        path: "/done",
        element: (
            <div>
                <CompletedQuests />
            </div>
        ),
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
