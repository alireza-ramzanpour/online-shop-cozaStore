import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Post() {

    return (
        <>
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

        </>
    )
}
export default Post;