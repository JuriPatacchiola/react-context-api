import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/chi-siamo">Chi Siamo</Link>
            <Link to="/prodotti">Prodotti</Link>
        </nav>
    );
}