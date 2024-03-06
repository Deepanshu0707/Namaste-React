import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


    /* lazy help to do "Demand Loading". Means Grocery Component only render when its call and its javascript can be    load only at the first render and basically with the help of lazy loading we will be able to separte the Groceru Component from other component so if our grocery size increase it will not effect our speed coz we separted grocerry related item into different javascript bundle. */
     const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )   
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense> 
            },
        ],
        errorElement: <Error/>
    },
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />)
