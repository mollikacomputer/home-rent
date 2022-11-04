import About from "../About";
import Contact from "../Contact";
import Home from "../Home/Home";
import Login from "../Login";
import Register from "../Register";

export const publicRoute =[
    {path:'/', name: Home, Component: Home},
    {path:'/about', name: About, Component: About},
    {path:'/contact', name: Contact, Component: Contact},
    {path:'/login', name: Login, Component: Login},
    {path:'/register', name: Register, Component: Register}
]