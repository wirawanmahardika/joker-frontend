import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return <div className="relative pb-20">
        <Outlet />
        <Navbar />
    </div>
}