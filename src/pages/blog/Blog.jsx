import React from "react";
import blog1 from "../../assets/images/blog/blog1.svg";
import blog2 from "../../assets/images/blog/blog2.svg";
import "./Blog.scss";

const Blog = () => {
    return (
        <section id="blog">
            <div className="container blog">
                <h1> Blog Posts</h1>
                <div className="blog__cards">
                    <div className="blog__card">
                        <div className="blog__card__left">
                            <h3>Tempered Glass</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Phasellus egestas tellus rutrum tellus
                                pellentesque eu. Amet dictum sit amet justo
                                donec enim diam vulputate ut. Malesuada fames ac
                                turpis egestas maecenas. Dictum fusce ut
                                placerat orci nulla pellentesque dignissim.
                                Neque laoreet suspendisse interdum consectetur.
                                Turpis massa sed elementum tempus egestas sed
                                sed. Ornare massa eget egestas purus viverra
                                accumsan in. Tristique senectus et netus et
                                malesuada. Ornare suspendisse sed nisi lacus
                                sed. Aliquet nibh praesent tristique magna sit.
                                Ac auctor augue mauris augue neque gravida in
                                fermentum et. Erat imperdiet sed euismod nisi
                                porta lorem mollis aliquam ut. Proin libero nunc
                                consequat interdum varius sit amet mattis. Odio
                                eu feugiat pretium nibh ipsum.
                            </p>
                        </div>
                        <div>
                            <img src={blog1} alt="" />
                        </div>
                    </div>
                    <div className="blog__card blog__card-2">
                        <div className="blog__card__left">
                            <h3>Back Cover</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Phasellus egestas tellus rutrum tellus
                                pellentesque eu. Amet dictum sit amet justo
                                donec enim diam vulputate ut. Malesuada fames ac
                                turpis egestas maecenas. Dictum fusce ut
                                placerat orci nulla pellentesque dignissim.
                                Neque laoreet suspendisse interdum consectetur.
                                Turpis massa sed elementum tempus egestas sed
                                sed. Ornare massa eget egestas purus viverra
                                accumsan in. Tristique senectus et netus et
                                malesuada. Ornare suspendisse sed nisi lacus
                                sed. Aliquet nibh praesent tristique magna sit.
                                Ac auctor augue mauris augue neque gravida in
                                fermentum et. Erat imperdiet sed euismod nisi
                                porta lorem mollis aliquam ut. Proin libero nunc
                                consequat interdum varius sit amet mattis. Odio
                                eu feugiat pretium nibh ipsum.
                            </p>
                        </div>
                        <div>
                            <img src={blog2} alt="" />
                        </div>
                    </div>
                    <div className="blog__card blog__card-2">
                        <div className="blog__card__left">
                            <h3>Mobile Brand and Price Strategy</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Phasellus egestas tellus rutrum tellus
                                pellentesque eu. Amet dictum sit amet justo
                                donec enim diam vulputate ut. Malesuada fames ac
                                turpis egestas maecenas. Dictum fusce ut
                                placerat orci nulla pellentesque dignissim.
                                Neque laoreet suspendisse interdum consectetur.
                                Turpis massa sed elementum tempus egestas sed
                                sed. Ornare massa eget egestas purus viverra
                                accumsan in. Tristique senectus et netus et
                                malesuada. Ornare suspendisse sed nisi lacus
                                sed. Aliquet nibh praesent tristique magna sit.
                                Ac auctor augue mauris augue neque gravida in
                                fermentum et. Erat imperdiet sed euismod nisi
                                porta lorem mollis aliquam ut. Proin libero nunc
                                consequat interdum varius sit amet mattis. Odio
                                eu feugiat pretium nibh ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog__cards"></div>
            </div>
        </section>
    );
};

export default Blog;
