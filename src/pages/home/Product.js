import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa'
import { AiFillHeart, AiOutlineTwitter, AiOutlineGooglePlus, } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData, useNavigate } from "react-router-dom";
import { products } from "../../store/slices/ProductsSlice";
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addToCart, loggedUser } from "../../store/slices/UsersSlice";


export function loader(data) {
    let n = data.params.name;
    const name = n.replaceAll("-", " ")
    return name
}

export default function Product() {
    const name = useLoaderData();
    const kalas = useSelector(products)
    const [relatedProducts, setRelatedProduct] = useState([])
    const dispatch = useDispatch()
    const [productValue, setProductValue] = useState(0)
    const navigate = useNavigate()
    const user = useSelector(loggedUser)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    const [selectedProduct, setSelectedProduct] = useState(
        {
            id: "",
            sku: "",
            name: "",
            price: "",
            images: [],
            brief: '',
            description: "",
            informations: {
                weight: "",
                dimensions: "",
                materials: "",
                colors: [],
                sizes: []
            },
            categories: [],
            reviews: []
        }
    )

    useEffect(() => {
        const selectedProduct = kalas.find(kala => kala.name.toLowerCase() == name);
        setSelectedProduct(selectedProduct)
    }, 0)

    useEffect(() => {
        const related = kalas.filter(kala => kala.categories.some(category => selectedProduct.categories.includes(category)))
        setRelatedProduct(related)
    }, [selectedProduct])

    const filteredRelatedProducts = relatedProducts.filter(product => product.name != selectedProduct.name)

    return (
        <>
            <div className="container">
                <div className="product-wrapper">
                    <div className="product-introduction">
                        <div className="product-images">
                            <Carousel width='1000px'>
                                {
                                    selectedProduct.images.map((image) => (
                                        <div>
                                            <img src={process.env.PUBLIC_URL + image} alt="PRODUCT" />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div className="product-properties">
                            <h4>{selectedProduct.name}</h4>
                            <br />
                            <span>{selectedProduct.price}</span>
                            <br />
                            <p>{selectedProduct.brief}</p>
                            <br />
                            <div className="product-attributes">
                                <div className="attr-row">
                                    <div className="attr-name">Size</div>
                                    <div className="attr-title">
                                        <select>
                                            <option>Choose an option</option>
                                            <option>Size S</option>
                                            <option>Size M</option>
                                            <option>Size L</option>
                                            <option>Size XL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="attr-row">
                                    <div className="attr-name">Color</div>
                                    <div className="attr-title">
                                        <select>
                                            <option>Choose an option</option>
                                            <option>Red</option>
                                            <option>Blue</option>
                                            <option>White</option>
                                            <option>Grey</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details">
                                <div className="num-product">
                                    <input type="button" className="num-product__arrow" value='-' onClick={() => {
                                        setProductValue(productValue - 1)
                                    }} />
                                    <input type="number" className="txt-product" value={productValue} />
                                    <input type="button" className="num-product__arrow" value='+' onClick={() => {
                                        setProductValue(productValue + 1)
                                    }} />
                                </div>
                                <input type="button" value='ADD TO CART' className="product-cart" onClick={() => {
                                    dispatch(addToCart(
                                        {
                                            username: user.username,
                                            id: selectedProduct.id,
                                            count: productValue,
                                        }
                                    ))
                                    navigate('/cart')
                                }} />
                            </div>
                            <div className="product-mediaBox">
                                <AiFillHeart className="product-media" />
                                <TiSocialFacebook className="product-media" />
                                <AiOutlineTwitter className="product-media" />
                                <AiOutlineGooglePlus className="product-media" />
                            </div>
                        </div>
                    </div>
                    <div className='product-tabBox'>
                        <Tabs>
                            <TabList>
                                <Tab>Description</Tab>
                                <Tab>Additional information</Tab>
                                <Tab>Reviews (1)</Tab>
                            </TabList>

                            <TabPanel>
                                <p>{selectedProduct.description}</p>
                            </TabPanel>
                            <TabPanel>
                                <div className="product-information">

                                    <ul>
                                        <li>
                                            <span>Weight</span>
                                            <span>{selectedProduct.informations.weight}</span>
                                        </li>
                                        <li>
                                            <span>Dimensions</span>
                                            <span>{selectedProduct.informations.dimensions}</span>
                                        </li>
                                        <li>
                                            <span>Materials</span>
                                            <span>{selectedProduct.informations.materials}</span>
                                        </li>
                                        <li>
                                            <span>Color</span>
                                            <span>{selectedProduct.informations.colors.join(',')}</span>
                                        </li>
                                        <li>
                                            <span>Size</span>
                                            <span>{selectedProduct.informations.sizes.join(',')}</span>
                                        </li>
                                    </ul>


                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="product-review">
                                    <div className="allReview">
                                        <div className="reviewBox">
                                            <div className="review-image">
                                                <img src="/assets/images/avatar-01.jpg.webp" />
                                            </div>
                                            <div className="review-content">
                                                <div className="review-title">
                                                    <h2>Ariana Grande</h2>
                                                    <div className="review-rate"></div>
                                                </div>
                                                <div className="review-comment">
                                                    <p>Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="addReview">
                                        <h2>Add a review</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="ratingReview"></div>
                                    <div className="yourReview">
                                        <h2>Your review</h2>
                                        <form>
                                            <div className="review-name">
                                                <textarea rows="4" cols="50" name="comment" form="usrform" />
                                                <div className="review-nameBox">
                                                    <div className="review-name">
                                                        <h2>Name</h2>
                                                        <input type="text" />
                                                    </div>
                                                    <div className="review-name">
                                                        <h2>Email</h2>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="submit" className="review-btn" />
                                        </form>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="category-properties">
                <div className="container">
                    <div className="category-properties-wrapper">
                        <div className="category-type">
                            <span>SKU: </span>
                            <span>{selectedProduct.sku}</span>
                        </div>
                        <div className="category-type">
                            <span>Categories: </span>
                            <span>{selectedProduct.categories.join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="product-title">
                    <h2>Related Product</h2>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            filteredRelatedProducts.map((kala, index) => (
                                <div className="products-wrapper">
                                    <div className="product product-left">
                                        <img key={index} src={process.env.PUBLIC_URL + kala.images[0]} alt="PRODUCT" />
                                        <div className="favorite">
                                            <h2>
                                                <Link to={'/products/' + kala.name.toLowerCase().replaceAll(" ", "-")}>{kala.name}</Link>
                                            </h2>
                                            <div className="heart">
                                                <FaRegHeart className='fa-heart-o' />
                                                {/* <FaHeart className='.fa-heart' /> */}
                                            </div>
                                        </div>
                                        <span className="product-price">{kala.price}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}



