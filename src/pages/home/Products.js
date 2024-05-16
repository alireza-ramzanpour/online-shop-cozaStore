import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { products } from '../../store/slices/ProductsSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import ReactStars from 'react-rating-star-with-type'
import { FaStar } from "react-icons/fa";


function Products() {

    const kalas = useSelector(products)
    const [allColors, setAllColors] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [prices, setPrices] = useState([])
    const [average, setAverage] = useState(0)
    const rdbPrices = useRef()
    const chkColors = useRef([])
    const rdbRate = useRef()
    const rdbSrc = useRef()
    const btnCategories = useRef()
    const [selectedProducts, setSelectedProducts] = useState(kalas)
    const [selectedMinPrice, setSelectedMinPrice] = useState('all')
    const [selectedMaxPrice, setSelectedMaxPrice] = useState('all')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedRate, setSelectedRate] = useState('all')
    const [selectedSort, setSelectedSort] = useState('all')

    const [star, setStar] = useState(5);
    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    useEffect(() => {
        let cols = kalas.map((kala) => allColors.push(kala.informations.colors))
        let rangs = allColors.flat()
        let s = new Set(rangs)
        cols = Array.from(s)
        setAllColors(cols)

        let das = allCategories.flat()
        let cats = kalas.map((kala) => allCategories.push(kala.categories))
        let c = new Set(das)
        cats = Array.from(c)
        setAllCategories(cats)

        let prcs = kalas.map((kala) => prices.push(kala.price))
        let gheymats = prices.flat()
        let fi = new Set(gheymats)
        prcs = Array.from(fi)
        setPrices(prcs)
        let avg = prcs.reduce((s, num) => Math.round((s + num) / 5))
        setAverage(avg)

    }, 0)



    useEffect(() => {

        const filteredProduct = kalas.filter((kala) => {
            return (selectedMinPrice == 'all' && selectedMaxPrice == 'all') || (kala.price >= selectedMinPrice && kala.price < selectedMaxPrice)
        }).filter((kala) => {
            return selectedCategory == 'all' || (kala.categories.includes(selectedCategory))
        }).filter((kala) => {
            return selectedColors.length == 0 || kala.informations.colors.some((color) => selectedColors.includes(color))
        }).filter((kala) => {
            let avgRate = kala.reviews.map((review) => {
                return review.score
            }).reduce((s, num) => {
                return s + num
            }) / kala.reviews.length

            return selectedRate == 'all' || (avgRate >= selectedRate && avgRate < selectedRate + 1)
        })

        if (selectedSort == 'lowToHigh') {
            const lowToHighSorted = filteredProduct.sort((s1, s2) => {
                if (s1.price > s2.price) {
                    return 1
                } else if (s1.price == s2.price) {
                    return 0
                } else if (s1.price < s2.price) {
                    return -1
                }
            })
            setSelectedProducts(lowToHighSorted)
        } else if (selectedSort == 'highToLow') {
            const highToLowSorted = filteredProduct.sort((s1, s2) => {
                if (s1.price < s2.price) {
                    return 1
                } else if (s1.price == s2.price) {
                    return 0
                } else if (s1.price > s2.price) {
                    return -1
                }
            })
            setSelectedProducts(highToLowSorted)
        } else if (selectedSort == 'nameFiltered') {
            const nameSorted = filteredProduct.sort((s1, s2) => {
                if (s1.name < s2.name) {
                    return -1
                } else if (s1.name > s2.name) {
                    return 1
                }
            })
            setSelectedProducts(nameSorted)
        } else if (selectedSort == 'avgRateFiltered') {


            const avgR = filteredProduct.sort((s1, s2) => {

                const firstAvg = s1.reviews.map((review) => review.score).reduce((s, num) => s + num) / s1.reviews.length

                const secondAvg = s2.reviews.map((review) => review.score).reduce((s, num) => s + num) / s2.reviews.length

                if (firstAvg < secondAvg) {
                    return 1
                } else if (firstAvg > secondAvg) {
                    return -1
                } else if (firstAvg == secondAvg) {
                    return 0
                }

            })

            setSelectedProducts(avgR)

        } else if (selectedSort == 'oldestFiltered') {
            const oldestSorted = filteredProduct.sort()
            setSelectedProducts(oldestSorted)
        } else if (selectedSort == 'newestFiltered') {
            const newestSorted = filteredProduct.reverse()
            setSelectedProducts(newestSorted)
        }

    }, [selectedCategory, selectedColors, selectedMaxPrice, selectedMinPrice, selectedRate, selectedSort])

    return (
        <>
            <div className="container">
                <div className="products">
                    <div className="product-subMenu">
                        <ul className="subMenu-links">
                            <li className="subMenu-link home">
                                <a href="#">All Products</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Women</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Men</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Bags</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Shoes</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Watches</a>
                            </li>
                        </ul>
                        <div className="product-buttons">
                            <div className="product-btn">
                                <i className='fas fa-filter'></i>
                                Filter
                            </div>
                            <div className="product-btn">
                                <i className='fas fa-search'></i>
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="filteredArea">
                        <div className="filteredArea-wrapper">
                            <div className="filter-col">
                                <ul>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('nameFiltered')
                                            }}
                                        />
                                        <span className='filter-links'>Name</span>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('oldestFiltered')
                                            }}
                                        />
                                        <span className='filter-links'>Oldest</span>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('newestFiltered')
                                            }}
                                        />
                                        <span className='filter-links'>Newness</span>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('avgRateFiltered')
                                            }}
                                        />
                                        <span className='filter-links'>Average rating</span>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('lowToHigh')
                                            }}
                                        />
                                        <span className='filter-links'>Price: Low to High</span>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            name='source'
                                            ref={rdbSrc}
                                            onChange={() => {
                                                setSelectedSort('highToLow')
                                            }}
                                        />
                                        <span className='filter-links'>Price: High to Low</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-col">
                                <ul>
                                    <li>
                                        <input
                                            type='radio'
                                            ref={rdbPrices}
                                            name='price'
                                            value='all'
                                            defaultChecked
                                            onChange={() => {
                                                setSelectedMinPrice('all')
                                                setSelectedMaxPrice('all')
                                            }}
                                        />
                                        <span className='filter-links'>All</span>
                                    </li>
                                    {
                                        [0, 1, 2, 3, 4].map((index) => {

                                            if (index < 4) {
                                                return <li>
                                                    <input
                                                        type='radio'
                                                        ref={rdbPrices}
                                                        name='price'
                                                        value={index}
                                                        onChange={(e) => {
                                                            const selectedRange = e.target.value
                                                            const min = (selectedRange * average).toFixed(2)
                                                            const max = ((Number(selectedRange) + 1) * average).toFixed(2)
                                                            setSelectedMinPrice(min)
                                                            setSelectedMaxPrice(max)
                                                        }}
                                                    />
                                                    <span className='filter-links'>{"$" + ((index) * average).toFixed(2)} - {"$" + ((index + 1) * average).toFixed(2)}</span>
                                                </li>
                                            } else {
                                                return <li>
                                                    <input
                                                        type='radio'
                                                        ref={rdbPrices}
                                                        name='price'
                                                        value={index}
                                                        onChange={(e) => {
                                                            const selectedRange = e.target.value
                                                            const max = (selectedRange * average).toFixed(2)
                                                            setSelectedMinPrice(max)
                                                            const maximumPrice = kalas.map((kala) => {
                                                                return kala.price
                                                            })
                                                            let mx = Math.max(...maximumPrice)
                                                            setSelectedMaxPrice(mx + 1)
                                                        }}
                                                    />
                                                    <span className='filter-links'>{"$" + ((index) * average).toFixed(2)}+</span>
                                                </li>
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="filter-col">
                                <ul>
                                    {
                                        allColors.map((color, index) => (
                                            < li >
                                                <input
                                                    type='checkbox'
                                                    ref={(element => chkColors.current[index] = element)}
                                                    value={color}
                                                    onChange={() => {

                                                        let colors = chkColors.current.filter((element) => {
                                                            return element.checked
                                                        }).map((element) => {
                                                            return element.value
                                                        })
                                                        setSelectedColors(colors)
                                                    }}
                                                />
                                                <div className='filter-links__color' style={{ backgroundColor: color }}></div>
                                                {color}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='filter-col'>
                                <ul>
                                    <li>
                                        <input
                                            type='radio'
                                            ref={rdbRate}
                                            value='all'
                                            name='rate'
                                            defaultChecked
                                            onChange={(e) => {
                                                setSelectedRate('all')
                                            }}
                                        />
                                        <span className='filter-links'>All</span>
                                    </li>

                                    {
                                        [1, 2, 3, 4, 5].map((index) => (
                                            <li>
                                                <input
                                                    type='radio'
                                                    ref={rdbRate}
                                                    name='rate'
                                                    value={6 - index}
                                                    onChange={(e) => {
                                                        setSelectedRate(Number(e.target.value))
                                                    }}
                                                />
                                                <ReactStars
                                                    onChange={onChange}
                                                    value={6 - index}
                                                    edit={true}
                                                    activeColors={["#FFCE00"]}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="filter-col">
                                <div className='filter-col-wrapper'>
                                    <input
                                        type='button'
                                        ref={btnCategories}
                                        name='cat'
                                        className='filterTag'
                                        value='All'
                                        onClick={(e) => {
                                            setSelectedCategory('all')
                                        }}
                                    />
                                    {
                                        allCategories.map((category) => (
                                            <input
                                                type='button'
                                                ref={btnCategories}
                                                name='cat'
                                                className='filterTag'
                                                value={category}
                                                onClick={(e) => {
                                                    setSelectedCategory(e.target.value)
                                                }}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        {
                            selectedProducts.map((kala, index) => (
                                <div className="product product-left">
                                    <img key={index} src={process.env.PUBLIC_URL + kala.images[0]} alt="PRODUCT" />
                                    <div className="favorite">
                                        <h2>
                                            <Link to={'/products/' + kala.name.toLowerCase().replaceAll(" ", "-")}>{kala.name}</Link>
                                        </h2>
                                        <div className="heart">
                                            {/* <FaRegHeart className='fa-heart-o' /> */}
                                            {/* <FaHeart className='.fa-heart' /> */}
                                        </div>
                                    </div>
                                    <div className='product-rateBox'>
                                        <FaStar className='product-star' color='yellow' />
                                        {(kala.reviews.map((review) => review.score).reduce((s, num) => (s + num)) / kala.reviews.length).toFixed(1)}
                                        <span className="product-price">{kala.price + ' $'}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products;