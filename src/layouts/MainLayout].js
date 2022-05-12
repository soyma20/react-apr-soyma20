import {Link, Outlet} from "react-router-dom";

import css from './Mainlayout.module.css'

const MainLayout = () => {
    const exit = () => {
      localStorage.clear()
    }
    return (
        <div>
            <div className={css.header}>
                <div>Header</div>
                <button onClick={exit}><Link to={'/login'}>exit</Link></button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};