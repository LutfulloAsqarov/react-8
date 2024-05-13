import React, { useEffect, useState } from "react";
import axios from "../../api";
import { useParams } from "react-router-dom";
import "./DetailsProduct.scss";

const DetailsProduct = () => {
    const [singleProduct, setSingleProduct] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`products/${id}`)
            .then((res) => setSingleProduct(res.data))
            .catch((arr) => console.log(arr));
    }, []);

    return (
        <div className="singleProduct container">
            <div className="singleProduct__img">
                <img src={singleProduct?.images[0]} alt="" />
            </div>
            <div className="singleProduct__info">
                <h2>{singleProduct?.title}</h2>
                <p>{singleProduct?.description}</p>
                <p>{singleProduct?.price}$</p>
            </div>
        </div>
    );
};

export default DetailsProduct;
