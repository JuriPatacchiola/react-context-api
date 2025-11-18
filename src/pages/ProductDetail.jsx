import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    if (!product) return <p>Caricamento...</p>;
    return (
        <>
            <div className="product-detail">
                <img src={product.image} alt={product.title} width={200} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Prezzo:</strong> {product.price} €</p>

                <Link to="/prodotti">
                    <button className="back-button">
                        Torna ai prodotti
                    </button>
                </Link>
            </div>
        </>
    );
}


