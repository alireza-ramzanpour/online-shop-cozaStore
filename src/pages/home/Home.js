import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        
            <div class="header">
                <div class="container">
                    <div class="texts">
                        <h2 class="title">Women Collection 2018</h2>
                        <p class="site-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptatem ipsam?
                            Deleniti, repellendus. Ea, fugiat sit neque fuga illum laboriosam quae excepturi non labore molestiae
                            veritatis, atque inventore placeat nisi deserunt perspiciatis provident nesciunt repudiandae impedit
                            necessitatibus adipisci! Dicta, placeat.</p>
                        <button class="btn">Discover Now <i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="container">
                    <div class="categories">
                        <div class="product-title">
                            <h2>CATEGORIES</h2>
                        </div>
                        <div class="categories-wrapper">
                            <Link to='/products' className="category category-first">
                                <div class="cat-text">
                                    <h2>Women</h2>
                                    <p>Spring 2018</p>
                                </div>
                            </Link>
                            <Link to='/products' class="category category-second">
                                <div class="cat-text">
                                    <h2>Men</h2>
                                    <p>Spring 2018</p>
                                </div>
                            </Link>
                            <Link to='/products' class="category category-third">
                                <div class="cat-text">
                                    <h2>Accessories</h2>
                                    <p>New Trend</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Products />
                </div>
            </div>

        </>
    );
}

export default Home;
