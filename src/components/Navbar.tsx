import { NavLink, useMatch } from "react-router-dom";

export default function Navbar() {
    return <div className="dock dock-xl bg-neutral text-neutral-content">
        <Nav to="/" title="Home" />
        <Nav to="/learn" title="Learn" />
    </div>
}

function Nav({ to, title }: { to: string; title: string }) {
    const match = useMatch(to)

    return <NavLink to={to} className={`${match && "dock-active"}`}>
        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></line></g></svg>
        <span className="dock-label">{title}</span>
    </NavLink>
}