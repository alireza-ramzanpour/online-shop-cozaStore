import React from "react";
import { FaLongArrowAltRight, FaSearch } from "react-icons/fa";

function BLog() {

    return (
        <>
            <div className="blog-title">
                <h1>Blog</h1>
            </div>
            <div className="container">
                <div className="blog-wrapper">
                    <div className="blog-col left">
                        <div className="blog-box">
                            <div className="blog-boxImage">
                                <img src="assets/images/blog-04.jpg.webp" />
                            </div>
                            <div className="blog-texts">
                                <div className="blog-boxTitle">
                                    <h1>8 Inspiring Ways to Wear Dresses in the Winter</h1>
                                </div>
                                <div className="blog-boxText">
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                                </div>
                                <div className="blog-boxAdmin">
                                    <div className="boxAdmin-links">
                                        <a>By Admin</a>
                                        <a>|</a>
                                        <a>StreetStyle, Fashion, Couple</a>
                                        <a>|</a>
                                        <a>8 Comments</a>
                                    </div>
                                    <div className="boxAdmin-goTo">
                                        <a href="#">
                                            <a>CONTINUE READING</a>
                                            <FaLongArrowAltRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-box">
                            <div className="blog-boxImage">
                                <img src="assets/images/blog-05.jpg.webp" />
                            </div>
                            <div className="blog-texts">
                                <div className="blog-boxTitle">
                                    <h1>The Great Big List of Men’s Gifts for the Holidays</h1>
                                </div>
                                <div className="blog-boxText">
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                                </div>
                                <div className="blog-boxAdmin">
                                    <div className="boxAdmin-links">
                                        <a>By Admin</a>
                                        <a>|</a>
                                        <a>StreetStyle, Fashion, Couple</a>
                                        <a>|</a>
                                        <a>12 Comments</a>
                                    </div>
                                    <div className="boxAdmin-goTo">
                                        <a href="#">
                                            <a>CONTINUE READING</a>
                                            <FaLongArrowAltRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-box">
                            <div className="blog-boxImage">
                                <img src="assets/images/blog-06.jpg.webp" />
                            </div>
                            <div className="blog-texts">
                                <div className="blog-boxTitle">
                                    <h1>5 Winter-to-Spring Fashion Trends to Try Now</h1>
                                </div>
                                <div className="blog-boxText">
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                                </div>
                                <div className="blog-boxAdmin">
                                    <div className="boxAdmin-links">
                                        <a>By Admin</a>
                                        <a>|</a>
                                        <a>StreetStyle, Fashion, Couple</a>
                                        <a>|</a>
                                        <a>5 Comments</a>
                                    </div>
                                    <div className="boxAdmin-goTo">
                                        <a href="#">
                                            <a>CONTINUE READING</a>
                                            <FaLongArrowAltRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-col right">
                        <div className="blog-search">
                            <input type="text" placeholder="Search" />
                            <button>
                                <FaSearch />
                            </button>
                        </div>
                        <div className="blog-colBox">
                            <h1 className="blog-boxTitle">Categories</h1>
                            <ul>
                                <li className="blog-links home">
                                    <a href="#">Fashion</a>
                                </li>
                                <li className="blog-links">
                                    <a href="#">Beauty</a>
                                </li>
                                <li className="blog-links">
                                    <a href="#">Street Style</a>
                                </li>
                                <li className="blog-links">
                                    <a href="#">Life Style</a>
                                </li>
                                <li className="blog-links">
                                    <a href="#">DYI & Crafts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="blog-colBox">
                            <h1 className="blog-boxTitle">Featured Products</h1>
                            <div className="blog-featured">
                                <div className="blog-featured__row">
                                    <div className="row-image">
                                        <img src="assets/images/product-min-01.jpg.webp" />
                                    </div>
                                    <div className="row-text">
                                        <span>White Shirt With Pleat Detail Back</span>
                                        <span>$19.00</span>
                                    </div>
                                </div>
                                <div className="blog-featured__row">
                                    <div className="row-image">
                                        <img src="assets/images/product-min-02.jpg.webp" />
                                    </div>
                                    <div className="row-text">
                                        <span>White Shirt With Pleat Detail Back</span>
                                        <span>$19.00</span>
                                    </div>
                                </div>
                                <div className="blog-featured__row">
                                    <div className="row-image">
                                        <img src="assets/images/product-min-03.jpg.webp" />
                                    </div>
                                    <div className="row-text">
                                        <span>White Shirt With Pleat Detail Back</span>
                                        <span>$19.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-colBox">
                            <h1 className="blog-boxTitle">Archive</h1>
                            <div className="blog-archive">
                                <ul>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>July 2018</span>
                                            <span>(9)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>June 2018</span>
                                            <span>(39)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>May 2018</span>
                                            <span>(29)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>April 2018</span>
                                            <span>(35)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>March 2018</span>
                                            <span>(22)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>February 2018</span>
                                            <span>(32)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>January 2018</span>
                                            <span>(21)</span>
                                        </a>
                                    </li>
                                    <li className="blog-archive__link">
                                        <a href="#">
                                            <span>December 2017</span>
                                            <span>(26)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ div>
                        <div className="blog-tags"></div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default BLog;