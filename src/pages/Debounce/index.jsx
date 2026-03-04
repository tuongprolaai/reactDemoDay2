import useDebounce from "@/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";

const styles = {
    wrapper: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
};

function Debounce() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const keyword = useDebounce(searchValue, 500);

    useEffect(() => {
        fetch(`https://api01.f8team.dev/api/products`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result.data.items);
            });
    }, []);

    useEffect(() => {
        if (!keyword) return;
        fetch(`https://api01.f8team.dev/api/products?q=${keyword}`)
            .then((res) => res.json())
            .then((result) => {
                setProducts(result.data.items);
            });
    }, [keyword]);

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Debounce</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id}. {product.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Debounce;

// 39-49:03
