import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/logo.svg";
import "./Header.scss";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import HeaderSearchModel from "../headerSearchModel/HeaderSearchModel";
import axios from "../../api";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [data, setData] = useState(null);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!value.trim()) return;
        axios
            .get(`products/search?q=${value.trim()}`)
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, [value]);
    return (
        <header
            id="header"
            className={`header ${scroll > 0 ? "header__shrink" : ""}`}
        >
            <div className="container header">
                <ul className={`header__list ${show ? "header__show" : ""}`}>
                    <li className="header__list__item">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink to={"/shop-all"}>Shop All</NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink to={"/blog"}>Blog</NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink to={"/about"}>About Us</NavLink>
                    </li>
                </ul>
                <div className="header__logo">
                    <NavLink to={"/"}>
                        <img src={headerLogo} alt="Logo" />
                    </NavLink>
                </div>
                <form className="header__search">
                    <div className="header__search-input">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Search Product"
                        />
                        {value.trim() ? (
                            <HeaderSearchModel data={data} />
                        ) : (
                            <></>
                        )}
                        <IoSearch />
                    </div>
                    <FaBars
                        onClick={() => setShow(true)}
                        className="header__bar"
                    />
                </form>
                {show ? (
                    <div
                        onClick={() => setShow(false)}
                        className="overlay"
                    ></div>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
};

export default Header;
