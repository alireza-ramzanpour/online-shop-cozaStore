import { createSlice } from "@reduxjs/toolkit"

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 1,
                sku: "JAK-01",
                name: "Classic Fit Mesh Polo",
                price: 159.99,
                images: [
                    'https://img1.theiconic.com.au/TVhn0XBi6CsbIreV7AIb2MdvsAo=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-7912-392285-1.jpg',
                    "https://img1.theiconic.com.au/KfFefQwruuZpmbV1mOqTeOJtyFw=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-7921-392285-2.jpg",
                    "https://img1.theiconic.com.au/0XzFYFJ1PlxwbbIf81S5kVxHSBA=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-7918-392285-3.jpg",
                ],
                brief: 'The product is made from raw materials with natural properties that have a lower environmental impact or that have a lower impact compared to their conventional alternative.',
                description: "The product is made from raw materials with natural properties that have a lower environmental impact or that have a lower impact compared to their conventional alternative.",
                informations: {
                    weight: 0.35,
                    dimensions: "75 cm",
                    materials: "100% Cotton",
                    colors: ["Black", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Shirt", "Men"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 1
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 1
                    },
                ]
            },
            {
                id: 2,
                sku: "JAK-02",
                name: 'Shirt dress',
                price: 35.30,
                images: [
                    "https://img1.theiconic.com.au/RoGYyDk-csJei24alep6-0BIRRI=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Faere-0117-5335981-1.jpg",
                    "https://img1.theiconic.com.au/MoO05tynM7uQeJ6gZ4cMa4IUj3c=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Faere-0129-5335981-2.jpg",
                    "https://img1.theiconic.com.au/b0rK5W78R0DMGrlsAruSP0bap-k=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Faere-0142-5335981-3.jpg",
                ],
                brief: 'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.',
                description: "Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.",
                informations: {
                    weight: 1.50,
                    dimensions: "174 cm",
                    materials: "100% Cotton",
                    colors: ["Black", "Blue", "Grey"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Dress", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 1
                    },
                ]
            },
            {
                id: 3,
                sku: "JAK-03",
                name: "ROC Boots Australia",
                price: 129.50,
                images: [
                    'https://img1.theiconic.com.au/3QlHod_38pFiWQhQZy-dUNAh51I=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Froc_boots_australia-0468-6725121-1.jpg',
                    "https://img1.theiconic.com.au/IWhFENncZmzfoj9cMBYzitfzyZw=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Froc_boots_australia-0452-6725121-2.jpg",
                    "https://img1.theiconic.com.au/D5i5hCxuceKtYx2vqLhQS44IKgQ=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Froc_boots_australia-0505-6725121-3.jpg",
                ],
                brief: 'From the release of their first shoe in 1990, ROC Boots Australia have evolved a unique street footwear culture of its own. Determined to offer the market something new and different, the ROC Boots Australia team take influence and inspiration from music, street style and vintage youth culture.',
                description: "From the release of their first shoe in 1990, ROC Boots Australia have evolved a unique street footwear culture of its own. Determined to offer the market something new and different, the ROC Boots Australia team take influence and inspiration from music, street style and vintage youth culture.",
                informations: {
                    weight: 1.80,
                    dimensions: "110 x 33 x 100 cm",
                    materials: "Leather, Synthetic",
                    colors: ["White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Shoes", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                ]
            },
            {
                id: 4,
                sku: "JAK-04",
                name: "Mountain Puffer Jacket",
                price: 124.95,
                images: [
                    'https://img1.theiconic.com.au/eA8_XPhBnK2p2Sb1BhjOd3WdoQ8=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fsuperdry-3612-1739871-1.jpg',
                    "https://img1.theiconic.com.au/fr37pQuDBDhPIFPeeyhnD5APFeU=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fsuperdry-3622-1739871-2.jpg",
                    "https://img1.theiconic.com.au/lXsYX7MacBnjAi_sEr4NjfU-SWE=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fsuperdry-3633-1739871-3.jpg",
                ],
                brief: 'The dark wash denim that will meet all your off-duty styling needs, the Stomper Jeans from Wrangler are a versatile slim-fitting pair finished with contrast brown top-stitching.',
                description: "The dark wash denim that will meet all your off-duty styling needs, the Stomper Jeans from Wrangler are a versatile slim-fitting pair finished with contrast brown top-stitching.",
                informations: {
                    weight: 0.60,
                    dimensions: "110 x 33 x 100 cm",
                    materials: "91% Cotton, 7.5% Polyester",
                    colors: ["Green", "Red"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Jacket", "Men"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                ]
            },
            {
                id: 5,
                sku: "JAK-05",
                name: "Long Sleeve Sequin Dress",
                price: 79.00,
                images: [
                    'https://n.nordstrommedia.com/id/sr3/ac608307-807e-479d-91eb-0dd7e5e1a038.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
                    "https://n.nordstrommedia.com/id/sr3/323a4906-15a4-47b5-b7e7-7f09730f8985.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                    "https://n.nordstrommedia.com/id/sr3/9a87a984-2e77-4c8e-adbd-626e76fa1ffe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
                ],
                brief: 'Allover sequins add plenty of sparkle and shine to this long-sleeve minidress.',
                description: "Allover sequins add plenty of sparkle and shine to this long-sleeve minidress.",
                informations: {
                    weight: 0.79,
                    dimensions: "110 x 33 x 100 cm",
                    materials: "90% polyester, 5% elastane",
                    colors: ["Black", "Blue"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Dress", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 1
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                ]
            },
            {
                id: 6,
                sku: "JAK-06",
                name: "Ocean Star Chronograph",
                price: 500.99,
                images: [
                    'https://img1.theiconic.com.au/bcWmGUB5g1wFFjWZW4_4-o6nS4s=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fmido-6770-2657321-1.jpg',
                    "https://img1.theiconic.com.au/wu_3J8HkzA_4mF1tF-GWDVX6If4=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fmido-6773-2657321-2.jpg",
                    "https://img1.theiconic.com.au/s_5uu4z4cS9cbCpYHNP9kE-H5Yw=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fmido-6775-2657321-3.jpg",
                ],
                brief: 'For over a century, Swiss watchmaker Mido has proven a master in marrying design and function and the sophisticated Ocean Star Chronograph is their pièce de résistance.',
                description: "For over a century, Swiss watchmaker Mido has proven a master in marrying design and function and the sophisticated Ocean Star Chronograph is their pièce de résistance.",
                informations: {
                    weight: 0.20,
                    dimensions: "44 mm",
                    materials: "Round stainless steel",
                    colors: ["Black", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Watch", "Men"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                ]
            },
            {
                id: 7,
                sku: "JAK-07",
                name: "Slim Fit Striped Shirt",
                price: 209.95,
                images: [
                    "https://img1.theiconic.com.au/44loX33bv7cdX02Q4vinNjGHXeU=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-1112-7278471-1.jpg",
                    "https://img1.theiconic.com.au/SAc_hASV79EQDdRChweBa1X5yTg=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-1126-7278471-2.jpg",
                    "https://img1.theiconic.com.au/xMk-q8yRbOpL9eXZWgbunX2PBxI=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpolo-ralph-lauren-1122-7278471-3.jpg",
                ],
                brief: 'Polo Ralph Lauren is notable for its distinct American perspective on its broad collection of classic and timeless pieces. The Slim Fit Striped Stretch Poplin Shirt features a striped print in cotton fabrication.',
                description: "Polo Ralph Lauren is notable for its distinct American perspective on its broad collection of classic and timeless pieces. The Slim Fit Striped Stretch Poplin Shirt features a striped print in cotton fabrication.",
                informations: {
                    weight: 2.58,
                    dimensions: "132 cm",
                    materials: "Cotton & Elastane",
                    colors: ["Black", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Shirt", "Men"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                ]
            },
            {
                id: 8,
                sku: "JAK-08",
                name: "Cotton V Neck Tee",
                price: 29.99,
                images: [
                    'https://img1.theiconic.com.au/KE02H8ucSYUBZGWE2RFh2_G0BTk=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-3185-1724111-1.jpg',
                    "https://img1.theiconic.com.au/5ply7P2wL8qtamnYQvjPZeN5ZKs=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-3185-1724111-2.jpg",
                    "https://img1.theiconic.com.au/Olsnf0_1wElGRaVduzlnVxrWtuY=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-3185-1724111-4.jpg",
                ],
                brief: 'Reach your new season fashion goals with the latest from Atmos&Here. From must-have dresses to classic off-duty tees and denim you’ll never want to take off, look to the brand for on-trend pieces in the latest shapes, colours and prints to match any dress code.',
                description: "Reach your new season fashion goals with the latest from Atmos&Here. From must-have dresses to classic off-duty tees and denim you’ll never want to take off, look to the brand for on-trend pieces in the latest shapes, colours and prints to match any dress code.",
                informations: {
                    weight: 2.79,
                    dimensions: "65 cm",
                    materials: "Main: 100% Cotton",
                    colors: ["Black", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Shirt", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                ]
            },
            {
                id: 9,
                sku: "JAK-09",
                name: "Puff Sleeve Midi Dress",
                price: 109.99,
                images: [
                    'https://img1.theiconic.com.au/fXedq4MKfm837NsJMuk_BxFcD8U=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-8786-4994491-1.jpg',
                    "https://img1.theiconic.com.au/Zs9q1FXhCFF6_s4q2_rQs3HHNak=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-8895-4994491-2.jpg",
                    "https://img1.theiconic.com.au/bJ3NJu026CMRHhqFdqt5_xo8MAQ=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fatmos-here-8791-4994491-3.jpg",
                ],
                brief: 'The product is made from raw materials with natural properties that have a lower environmental impact or that have a lower impact compared to their conventional alternative.',
                description: "The product is made from raw materials with natural properties that have a lower environmental impact or that have a lower impact compared to their conventional alternative.",
                informations: {
                    weight: 0.95,
                    dimensions: "114cm",
                    materials: "57% Ramie & 43% Lyocell",
                    colors: ["Green", "Red", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Dress", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                ]
            }, {
                id: 10,
                sku: "JAK-10",
                name: "Sybella Midi Dress",
                price: 179.95,
                images: [
                    'https://img1.theiconic.com.au/8YbePPDbfxBmOSH58u_Tb1i_4Os=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftussah-5842-9948991-1.jpg',
                    "https://img1.theiconic.com.au/8AAAA_042s5cJpZTWNYO5hdFXNM=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftussah-5847-9948991-2.jpg",
                    "https://img1.theiconic.com.au/Fu4O_ks1cyoyatl_x-3kJd2T6Lw=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ftussah-5854-9948991-3.jpg",
                ],
                brief: 'Horizontal quilting adds to the glamorous effect of a soft and fluffy faux-fur jacket that is a luxurious way to layer up for the cooler seasons.',
                description: "Horizontal quilting adds to the glamorous effect of a soft and fluffy faux-fur jacket that's a luxurious way to layer up for the cooler seasons.",
                informations: {
                    weight: 0.40,
                    dimensions: "132 cm",
                    materials: "40% Viscose 10% Polyester",
                    colors: ["Red", "White"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Dress", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 5
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },

                ]
            },
            {
                id: 11,
                sku: "JAK-11",
                name: "Comfort Craftsman Boots",
                price: 649.95,
                images: [
                    "https://img1.theiconic.com.au/QpsVqwYERbBmtSq3OLriE7OyBOI=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fr-m-williams-9279-9967211-1.jpg",
                    "https://img1.theiconic.com.au/R0PznsE3s7UFrJC8gqOwx0Bcg4I=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fr-m-williams-9293-9967211-2.jpg",
                    "https://img1.theiconic.com.au/J2r3TyyE1Y17ggAxCeyuo5KZhws=/fit-in/406x512/filters:fill(ffffff):quality(90):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fr-m-williams-9309-9967211-3.jpg",
                ],
                brief: 'Exquisitely constructed at R.M. Williams’ Adelaide factory, the Comfort Craftsman Boots boast advanced features including a comfort insole, padded heel lining and a durable microfibre sock-lining with moisture-wicking technology. This premium suede leather pair also showcase an airport-friendly shank that supports the arch whilst reinforcing the sleek silhouette. Style these timeless boots with everything from chinos to relaxed denim for an elevated smart-casual appeal.',
                description: "Exquisitely constructed at R.M. Williams’ Adelaide factory, the Comfort Craftsman Boots boast advanced features including a comfort insole, padded heel lining and a durable microfibre sock-lining with moisture-wicking technology. This premium suede leather pair also showcase an airport-friendly shank that supports the arch whilst reinforcing the sleek silhouette. Style these timeless boots with everything from chinos to relaxed denim for an elevated smart-casual appeal.",
                informations: {
                    weight: 0.55,
                    dimensions: "132 cm",
                    materials: "Leather",
                    colors: ["Blue", "Grey"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Shoes", "Men"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 4
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                ]
            },
            {
                id: 12,
                sku: "JAK-12",
                name: "Lilabel Jewel Recycled",
                price: 310.95,
                images: [
                    "https://img1.theiconic.com.au/EoFhps1OmfwJ2B-yLW9f0an0yHc=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fted-baker-9571-7764281-1.jpg",
                    "https://img1.theiconic.com.au/L4aDUVBsShALAZmOhSB6GyFJ9G8=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fted-baker-9573-7764281-2.jpg",
                    "https://img1.theiconic.com.au/9Jm2drvdbrNXlXAlXuqVfMSOTAk=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fted-baker-9580-7764281-5.jpg",
                ],
                brief: 'Introducing Lilabel Jewel, the new masterpiece watch by Ted Baker London. Extremely sophisticated and elegant, Lilabel Jewel features a Magnolia see-through dial combined with a refined jewellery bracelet enriched with crystals. Now available with brand new packaging made 100% from sustainable sources.',
                description: 'Introducing Lilabel Jewel, the new masterpiece watch by Ted Baker London. Extremely sophisticated and elegant, Lilabel Jewel features a Magnolia see-through dial combined with a refined jewellery bracelet enriched with crystals. Now available with brand new packaging made 100% from sustainable sources.',
                informations: {
                    weight: 1.15,
                    dimensions: "28 mm",
                    materials: "Stainless Steel",
                    colors: ["Blue"],
                    sizes: ["XL", "L", "M", "S"]
                },
                categories: ["Watch", "Women"],
                reviews: [
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 2
                    },
                    {
                        author: "Ariana Grande",
                        image: "https://preview.colorlib.com/theme/cozastore/images/avatar-01.jpg",
                        text: "Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos",
                        score: 3
                    },
                ]
            },

        ],
        id: 0,
        // error: false
    },
    reducers: {
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id != action.payload.id)
        },
        addProduct: (state, action) => {
            let ids = state.products.map((product) => product.id)
            let maxId = Math.max(...ids)

            state.products = state.products.concat({
                id: maxId + 1,
                sku: action.payload.sku,
                name: action.payload.name,
                price: action.payload.price,
                brief: action.payload.brief,
                description: action.payload.description,
                informations: action.payload.informations
            })
        },
        editProduct: (state, action) => {
            let findProduct = state.products.find((product) => product.id == action.payload.id)
            if (findProduct) {
                state.editingProduct = findProduct
            }
        }
    }
})
export const { deleteProduct, addProduct, editProduct } = ProductsSlice.actions
export const products = (state) => state.products.products
export default ProductsSlice.reducer;