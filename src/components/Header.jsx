
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

export default function Header() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <nav className="navbar" >
            <Link to="/" > Home </Link>
            < Link to="/chi-siamo" > Chi Siamo </Link>
            < Link to="/prodotti" > Prodotti </Link>

            < label >
                <input
                    type="checkbox"
                    checked={budgetMode}
                    onChange={() => setBudgetMode(!budgetMode)
                    }
                />
                Modalità Budget
            </label>
        </nav>
    );
}
