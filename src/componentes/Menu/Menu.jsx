import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>Cellshop</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/computadoras"> Computadoras </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/celulares"}> Celulares </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/sillas"}> Sillas </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu