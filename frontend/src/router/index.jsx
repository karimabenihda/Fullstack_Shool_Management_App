import {createBrowserRouter} from 'react-router-dom';
import '../index.css'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound';
import React from 'react';
import Layout from '../layouts/Layout';

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[

            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/user',
                element:<User/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
])




