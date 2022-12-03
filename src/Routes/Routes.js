import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Shared/LogIn/LogIn";
import NewsDetails from "../pages/Shared/newsDetails/NewsDetails";
import SignUp from "../pages/Shared/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('https://fire-news-server.vercel.app/news')
            },
            {
                path : '/home',
                element : <Home></Home>,
                loader : () => fetch('https://fire-news-server.vercel.app/news')
            },
            {
                path : '/category/:id',
                element : <Category></Category>,
                loader : ({params}) => fetch(`https://fire-news-server.vercel.app/category/${params.id}`)
            },
            {
                path : '/news/:id',
                loader : ({params}) => fetch(`https://fire-news-server.vercel.app/news/${params.id}`),
                element : <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>
            }
        ]
    }
])