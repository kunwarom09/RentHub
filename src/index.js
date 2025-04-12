import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/about_us';
import { Rent } from './pages/rent_room';
import { Contact } from './pages/contact_us';
import { Sign } from './pages/sign_up';

const router = createBrowserRouter([
{path:"/",element:<App/>},
{path:"/home",element:<Home/>},
{path:"/about_us",element:<About/>},
{path:"/rent_room",element:<Rent/>},
{path:"/contact_us",element:<Contact/>},
{path:"/sign_up",element:<Sign/>},

]) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
