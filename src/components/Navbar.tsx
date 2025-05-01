import { BookOpen, House, LogOut } from "lucide-react";
import { JSX } from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()

    const openLogoutModal = () => {
        const modal: any = document.getElementById('modal-box')
        if (modal) { modal.showModal() }
    }

    const logout = (e: any) => {
        e.stopPropagation()
        localStorage.removeItem('token')
        navigate('/login')
    }

    return <div className="dock dock-xl bg-neutral text-neutral-content">
        <Nav to="/" icon={<House />} title="Home" />
        <Nav to="/learn" icon={<BookOpen />} title="Learn" />
        <div onClick={openLogoutModal}>
            <LogOut />
            <span className="dock-label">Logout</span>

            <dialog id="modal-box" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Yakin ingin logout?</h3>
                    <div className="gap-x-5 mt-5 flex justify-center">
                        <form method="dialog">
                            <button className="btn btn-error">Tidak</button>
                        </form>
                        <button onClick={logout} className="btn btn-success">Ya</button>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
}

function Nav({ to, title, icon }: { to: string; title: string; icon: JSX.Element }) {
    const match = useMatch(to)

    return <NavLink to={to} className={`${match && "dock-active"}`}>
        {icon}
        <span className="dock-label">{title}</span>
    </NavLink>
}