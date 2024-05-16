import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { addProduct, editProduct } from "../../store/slices/ProductsSlice";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { products } from "../../store/slices/ProductsSlice";



function AddToClothes() {
    const goods = useSelector(products)
    const editingProduct = useSelector(state => state.products.editingProduct)
    const [allColors, setAllColors] = useState([])
    const [allSizes, setAllSizes] = useState([])
    const txtName = useRef()
    const txtSku = useRef()
    const txtBrief = useRef()
    const txtDescription = useRef()
    const txtPrice = useRef()
    const txtWeight = useRef()
    const txtDimensions = useRef()
    const txtMatereials = useRef()
    const chkColor = useRef()
    const chkSize = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])

    const handleColorChange = (color, ischecked) => {
        if (ischecked) {
            setSelectedColors(prevColors => [...prevColors, color])
        } else {
            setSelectedColors(prevColors => prevColors.filter(c => c != color))
        }
    }

    const handleSizeChange = (size, ischecked) => {
        if (ischecked) {
            setSelectedSizes(prevSizes => [...prevSizes, size])
        } else {
            setSelectedSizes(prevSizes => prevSizes.filter(c => c != size))
        }
    }

    useEffect(() => {
        if (editingProduct) {
            txtName.current.value = editingProduct.name
            txtSku.current.value = editingProduct.sku
            txtPrice.current.value = editingProduct.price
            txtBrief.current.value = editingProduct.brief
            txtDescription.current.value = editingProduct.description
            txtWeight.current.value = editingProduct.informations.weight
            txtDimensions.current.value = editingProduct.informations.dimensions
            txtMatereials.current.value = editingProduct.informations.materials
            setSelectedColors(editingProduct.informations.colors)
            setSelectedSizes(editingProduct.informations.sizes)
        }
    }, [editingProduct])

    useEffect(() => {
        let cols = goods.map((good) => allColors.push(good.informations.colors))
        let rangs = allColors.flat()
        let s = new Set(rangs)
        cols = Array.from(s)
        setAllColors(cols)

        let sizes = goods.map((good) => allSizes.push(good.informations.sizes))
        let measure = allSizes.flat()
        let z = new Set(measure)
        sizes = Array.from(z)
        setAllSizes(sizes)

    }, 0)

    return (
        <>
            <div className='page-wrapper__box'>
                <div className='addProduct-row'>
                    <div className='addProduct-col'>
                        <h4>ADD A NEW PRODUCT</h4>
                    </div>
                    <div className='addProduct-col'>
                        <input type="button" className='saveBtn dd' value='SAVE' onClick={() => {
                            let isSameName = goods.some((good) => good.name == txtName.current.value)
                            if (isSameName) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    text: 'Product with this name already exist!'
                                })
                            } else {
                                dispatch(addProduct({
                                    name: txtName.current.value,
                                    sku: txtSku.current.value,
                                    price: txtPrice.current.value,
                                    brief: txtBrief.current.value,
                                    description: txtDescription.current.value,
                                    informations: {
                                        weight: txtWeight.current.value,
                                        dimensions: txtDimensions.current.value,
                                        materials: txtMatereials.current.value,
                                        colors: selectedColors,
                                        sizes: selectedSizes,
                                    },
                                }))
                                navigate('/admin/clothes')
                            }
                        }} />
                        <input type="button" className='saveBtn cancel dd' value='CANCEL' onClick={() => navigate('/admin/clothes')} />
                    </div>
                </div>
                <br />
                <div className='card-header'>
                    <h5>Product Information</h5>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='card-body__row'>
                            <div className='card-body__col'>
                                <label for='lname' className='form-lable'>Name:</label>
                                <input type="text" ref={txtName} className='form-control' placeholder="type name..." />
                            </div>
                            <div className='card-body__col'>
                                <label for='lcode' className='form-lable'>Code:</label>
                                <input type="text" ref={txtSku} className='form-control' placeholder="SKU" />
                            </div>
                        </div>
                        <br />
                        <div className='card-body__col'>
                            <label for='lbrief' className='form-lable'>Brief:</label>
                            <input type="text" ref={txtBrief} className='form-control' placeholder="type brief..." />
                        </div>
                        <br />
                        <div className='card-body__col'>
                            <label for='ldescription' className='form-lable'>Description:</label>
                            <textarea ref={txtDescription} className='form-control comment' placeholder="type description..." />
                        </div>
                        <br />
                    </form>
                </ div>
            </ div>

            <div className='page-wrapper__box'>
                <div className='card-header'>
                    <h5>Product Pricing</h5>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='card-body__col'>
                            <label for='lprice' className='form-lable'>Price:</label>
                            <input type="number" ref={txtPrice} className='form-control' placeholder="price..." />
                        </div>
                        <br />
                        <div className='card-body__col'>
                            <label for='lprice' className='form-lable'>Discounted Price:</label>
                            <input type="number" className='form-control' placeholder="discounted price..." />
                        </div>
                        <div className='form-table__wrapper tax'>
                            <input type="checkbox" />
                            <label>Tax</label>
                        </div>
                    </form>
                </ div>
            </ div>

            <div className='page-wrapper__box'>
                <div className='card-header'>
                    <h5>Product Properties</h5>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='card-body__row'>
                            <div className='card-body__col'>
                                <label for='lweight' className='form-lable'>Weight(kg):</label>
                                <input type="number" ref={txtWeight} className='form-control' placeholder="weight" /> <br />
                            </div>
                            <div className='card-body__col'>
                                <label for='ldimensions' className='form-lable'>Dimensions(cm):</label>
                                <input type="text" ref={txtDimensions} className='form-control' placeholder="dimensions" /> <br />
                            </div>
                        </div>
                        <div className='card-body__col'>
                            <label for='lmatereials' className='form-lable'>Matereials:</label>
                            <input type="text" ref={txtMatereials} className='form-control' placeholder="matereials" /> <br />
                        </div>
                        <div className='card-body__col'>
                            <label for='lcolors' className='form-lable'>Colors:</label>
                            <div className='form-table__row'>
                                {
                                    allColors.map((color, index) => (
                                        <div key={color} className='form-table__wrapper'>
                                            <input
                                                type="checkbox"
                                                ref={chkColor}
                                                value={color}
                                                onChange={(e) => {
                                                    handleColorChange(color, e.target.checked)
                                                }}
                                            />
                                            <label>{color}</label>
                                        </div>
                                    ))
                                }
                                <BsThreeDotsVertical onClick={() => {
                                    const { value: text } = Swal.fire({
                                        titleText: 'Add New Color',
                                        confirmButtonColor: '#0db4ac',
                                        cancelButtonColor: 'red',
                                        confirmButtonText: 'Add new',
                                        input: "text",
                                        inputPlaceholder: "type new color here...",
                                        inputAttributes: {
                                            "aria-label": "Type your message here"
                                        },
                                        showCancelButton: true
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            setAllColors([...allColors, result.value])
                                        }
                                    });
                                }} />
                            </div>
                        </div>
                        <br />
                        <div className='card-body__col'>
                            <label for='lsizes' className='form-lable'>Sizes:</label>
                            <div className='form-table__row'>
                                {
                                    allSizes.map((size) => (
                                        <div key={size} className='form-table__wrapper'>
                                            <input
                                                type="checkbox"
                                                ref={chkSize}
                                                value={size}
                                                onChange={(e) => {
                                                    handleSizeChange(size, e.target.checked)
                                                }}
                                            />
                                            <label>{size}</label>
                                        </div>
                                    ))
                                }
                                <BsThreeDotsVertical onClick={() => {
                                    const { value: text } = Swal.fire({
                                        titleText: 'Add New Size',
                                        confirmButtonColor: '#0db4ac',
                                        cancelButtonColor: 'red',
                                        confirmButtonText: 'Add new',
                                        input: "text",
                                        inputPlaceholder: "type new size here...",
                                        inputAttributes: {
                                            "aria-label": "Type your message here"
                                        },
                                        showCancelButton: true
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            setAllSizes([...allSizes, result.value])
                                        }
                                    });
                                }} />
                            </div>
                        </div>
                    </form>
                </div>

                <br />
            </div>




        </>
    )
}

export default AddToClothes;