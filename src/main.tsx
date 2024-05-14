import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/UserLogin.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>
},{
    path: '/login',
    element: <Login/>,
    errorElement: <NotFoundPage/>
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
