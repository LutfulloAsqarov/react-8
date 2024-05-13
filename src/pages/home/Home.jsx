import React from "react";
import Hero from "../../components/hero/Hero";
import { useState } from "react";
import Product from "../../components/products/Product";
import aboutImg from "../../assets/images/about/about-img.svg";
import shopImg from "../../assets/images/shop/shop-img.svg";
import { CHOOSE } from "../../static";

const Home = () => {
    const [count, setCount] = useState(0);

    let cards = CHOOSE?.map((el) => (
        <div key={el.id} className="choose__card">
            <img src={el.image} alt="img" />
            <h2 className="choose__card__title">{el.title}</h2>
            <p>{el.desc}</p>
        </div>
    ));
    return (
        <>
            <Hero />
            <Product />
            <section id="about">
                <div className="container about">
                    <div className="subtitle">
                        <span></span>
                        <p className="subtitle__text">About Us</p>
                    </div>
                    <h2 style={{ textAlign: "center" }} className="title">
                        If you’re looking for a Premium Quality Tempered Glass
                        or Back-cover for your Device
                    </h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. 
                    </p>
                    <img src={aboutImg} alt="" />
                </div>
            </section>
            <section id="shop">
                <div className="container shop">
                    <div className="shop__banner">
                        <div className="shop__banner__left">
                            <h2 className="title">
                                Shop Premium Tempered Glass in wholesale Price !
                            </h2>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. 
                            </p>
                            <button className="shop__btn btn">
                                Shop Tempered Glass
                            </button>
                        </div>
                        <div className="shop__banner__img">
                            <img src={shopImg} alt="" />
                        </div>
                    </div>
                    <div className="shop__bg"></div>
                </div>
            </section>
            <section id="choose">
                <div className="container choose">
                    <div className="choose__cards">{cards}</div>
                </div>
            </section>
        </>
    );
};

export default Home;
