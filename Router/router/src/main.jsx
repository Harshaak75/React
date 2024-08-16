import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider } from "react-router-dom"
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {getGithubdata} from './components/Github/Github.jsx'
import User from './components/Users/user.jsx'
import {UseStore} from './Context/StoreContext'


const [imgURL, setimg] = useState(null);
const [FollwersCount, setfollower] = useState(0);



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>} />
    <Route path=':user/' element={<User/>} >
    <Route path=':userid' element={<User/>} />
    </Route>
    <Route path='about/' element={<About/>} />
    <Route path='contact/' element={<Contact/>} />
    <Route loader={getGithubdata} path='github/' element={<Github/>} />
    </Route>
  )
)

// const imgURL = " ";
// const FollwersCount = 0;


createRoot(document.getElementById('root')).render(
  <UseStore value={{imgURL, FollwersCount, setfollower, setimg}}>
    <RouterProvider router={router} />
  </UseStore>
)