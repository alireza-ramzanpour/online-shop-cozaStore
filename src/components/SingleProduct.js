import React, { useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../store/slices/ProductsSlice";
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FaStar } from "react-icons/fa";

function SingleProduct() {
    const goods = useSelector(products)
    const [selectedProducts, setSelectedProducts] = useState(goods)


    return (
        <>
            {
                selectedProducts.map((good, index) => (
                    <div className="product product-left">
                        <img key={index} src={process.env.PUBLIC_URL + good.images[0]} alt="PRODUCT" />
                        <div className="favorite">
                            <h2>
                                <Link to={'/products/' + good.name.toLowerCase().replaceAll(" ", "-")}>{good.name}</Link>
                            </h2>
                            <div className="heart">
                                {/* <FaRegHeart className='fa-heart-o' /> */}
                                {/* <FaHeart className='.fa-heart' /> */}
                            </div>
                        </div>
                        <div className='product-rateBox'>
                            <FaStar className='product-star' color='yellow' />
                            {(good.reviews.map((review) => review.score).reduce((s, num) => (s + num)) / good.reviews.length).toFixed(1)}
                            <span className="product-price">{good.price + ' $'}</span>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
export default SingleProduct;