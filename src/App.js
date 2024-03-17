import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

    /* lazy help to do "Demand Loading". Means Grocery Component only render when its call and its javascript can be load only at the first render and basically with the help of lazy loading we will be able to separte the Groceru Component from other component so if our grocery size increase it will not effect our speed coz we separted grocerry related item into different javascript bundle. */
     const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{

    const [username,setUserName] = useState();
    useEffect(()=>{

        //Assume that we are fetching Data from an Api
        const Data = {
            Name: "Deepanshu"
        }
        setUserName(Data.Name);
    },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loginUser: username,setUserName: setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />)
