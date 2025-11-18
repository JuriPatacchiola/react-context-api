import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <div>
                <h1>Prodotti</h1>

                {products.length === 0 ? (
                    <p>Caricamento...</p>
                ) : (
                    <div className="products-container">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.price} €</p>
                                <button
                                    className="details-button"
                                    onClick={() => navigate(`/prodotti/${product.id}`)}
                                >
                                    Scopri di più
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

