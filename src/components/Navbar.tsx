import { BookOpen, House, LogOut } from "lucide-react";
import { JSX } from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return <div className="dock dock-xl bg-neutral text-neutral-content">
        <Nav to="/" icon={<House />} title="Home" />
        <Nav to="/learn" icon={<BookOpen />} title="Learn" />
        <button onClick={logout}>
            <LogOut />
            <span className="dock-label">Logout</span>
        </button>
    </div>
}

function Nav({ to, title, icon }: { to: string; title: string; icon: JSX.Element }) {
    const match = useMatch(to)

    return <NavLink to={to} className={`${match && "dock-active"}`}>
        {icon}
        <span className="dock-label">{title}</span>
    </NavLink>
}