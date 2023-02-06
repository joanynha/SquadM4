import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//Páginas
import Graficos from './routes/Graficos';
import Index from './index';
import Equipe from './routes/Equipe';
import Graph1 from './graphics/Graph1';
import Graph2 from './graphics/Graph2';
import Graph3 from './graphics/Graph3';
import Graph4 from './graphics/Graph4';
import Graph5 from './graphics/Graph5';

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/Graficos",
        element: <Graficos />
      },
      {
        path: "/Equipe",
        element: <Equipe />
      },
      {
        path: "/Graph1",
        element: <Graph1 />
      },
      {
        path: "/Graph2",
        element: <Graph2 />
      },
      {
        path: "/Graph3",
        element: <Graph3 />
      },
      {
        path: "/Graph4",
        element: <Graph4 />
      },
      {
        path: "/Graph5",
        element: <Graph5 />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
