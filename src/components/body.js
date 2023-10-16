import React from 'react';
import Login from './login';
import Browse from './browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
    },
    {
        path:'/browse',
        element: <Browse/>
}
    ])
  return (
    <div>
        <RouterProvider router={ appRouter} />
    

    </div>
  )
}

export default body