import React, { useEffect, useState } from "react";
import axios from "../../api";
import "./ShopAll.scss";
import { Link } from "react-router-dom";

const ShopAll = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("products")
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    });
    let product = products?.map((el) => (
        <div key={el.id} className="shop-all__card">
            <div className="shop-all__card__img">
                <Link to={`/product/${el.id}`}>
                    {/* {console.log(`product/${el.id}`)} */}
                    <img src={el.images[0]} alt="img" />
                </Link>
            </div>
            <h3>{el.title}</h3>
        </div>
    ));

    let loadingItem = (
        <div className="loading__card">
            <div className="loading__img bg__animation"></div>
            <div className="loading__title bg__animation"></div>
        </div>
    );

    return (
        <section id="shop-all">
            <div className="container shop-all">
                <div className="shop-all__cards">{product}</div>
            </div>
            {loading ? (
                <div className="loading">
                    <div className="container loading__container">
                        {loadingItem}
                        {loadingItem}
                        {loadingItem}
                        {loadingItem}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default ShopAll;
