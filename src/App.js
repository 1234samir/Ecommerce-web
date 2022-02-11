// import logo from "./logo.svg";
// import "./App.css";
// import Login from "./components/Login";
// import Bar from "./components/Bar";
// import { Route, Navigate } from "react-router-dom";
// import SignUp from "./components/SignUp";
// import { Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import Carousel from "./components/MyCarousel";
// import Footer from "./components/footer/Footer";
// import Dashboard from "./components/Dashboard";
// import Pricing from "./components/Pricing";
// import Album from "./components/Album";
// import LoginToSignUp from "./components/LoginToSignUp";
// import Electronics from "./components/Electronics";
// import FogotPassword from "./components/FogotPassword";
// import Products from "./components/Products";

// function App() {
//   return <div className='App'>My App Component Rendered</div>;
// }

// export default App;

// // 1. impliment validation.
// // 2.

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Bar from "./components/Bar";
import { Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/MyCarousel";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Album from "./components/Album";
import LoginToSignUp from "./components/LoginToSignUp";
import Electronics from "./components/Electronics";
import FogotPassword from "./components/FogotPassword";
import Products from "./components/Products";

function App() {
  return (
    <div className='App'>
      <Bar />
      <Routes>
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
        {/* add redirect with Navigation. and u can clean replace also if u want push not replace */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/signup' exact element={<SignUp />} />
        we dont need exact in V6 */}
        <Route path='/products/:category' element={<Products />} />
        {/* <Route path='/electronics' element={<Electronics />} /> */}
        <Route path='/fogotpassword' element={<FogotPassword />} />
      </Routes>
    </div>
  );
}

export default App;

// 1. impliment validation.
// 2.
// json-server --watch src/DB.json --port 5000
