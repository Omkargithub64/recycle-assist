import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout(){
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    )
}

export default Layout