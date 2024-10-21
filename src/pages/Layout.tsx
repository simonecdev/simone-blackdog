import { NavLink, Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

import "/src/styles/menu.css"
import "/src/styles/layout.css"


const Layout = () => {

    const location = useLocation();

    // Array delle pagine e delle label corrispondenti
    const pages = [
        { path: "dashboard", label: "Home" },
        { path: "whoami", label: "Chi sono" },
        { path: "portfolio", label: "Progetti"}
    ];

    const [pageActive, setPageActive] = useState<Map<string, string>>(new Map())

    // controllo quale pagina è attiva
    useEffect(() => {
        const _pageActive = new Map(pageActive);
        pages.forEach(({ path }) => {
            _pageActive.set(path, location.pathname === '/' + path ? 'active' : '')
        })
        setPageActive(_pageActive);
    }, [location.pathname])


    return (
        <div className="mega-container">

            <div className="st-top-menu_wrapper">
                {/* menu di top */}
                {pages.map(({ path, label }) => (
                    <div key={path} className={"st-top-menu_item " + pageActive.get(path)}>
                        <NavLink className="st-top-menu_item-link" to={`/${path}`}>
                            {label}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className="std-outlet-container">
                <Outlet />
            </div>
        </div>
    )

}
export default Layout


