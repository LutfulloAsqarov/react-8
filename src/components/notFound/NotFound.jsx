import React from "react";
import notFound from "../../assets/images/error.avif";

const NotFound = () => {
    return (
        <div
            className="container"
            style={{ textAlign: "center", width: "100%" }}
        >
            <img style={{ width: "100%" }} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
