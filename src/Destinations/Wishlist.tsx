import React from 'react';
import ProductCard from "../Components/General/ProductCard";

export default function Wishlist() {

    let fake_product_data = [
        {
            id: 1,
            img: 'https://images.asos-media.com/products/nike-court-vintage-premium-leather-trainers-in-white/202494882-1-white?$n_640w$&wid=513&fit=constrain',
            title: "Test product 1",
            excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
            views: 156,
            likes: 34,
            store_data: {
                store_id: 6,
                store_name: "Petes Shoes",
                follower_count: 54
            }
        },
        {
            id: 2,
            img: "https://testimg.com/1",
            title: "Test product 2",
            excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
            views: 156,
            likes: 34,
            store_data: {
                store_id: 6,
                store_name: "Kellys Sandwiches",
                follower_count: 54
            }
        },
        {
            id: 3,
            img: "https://testimg.com/1",
            title: "Test product 3",
            excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
            views: 156,
            likes: 34,
            store_data: {
                store_id: 6,
                store_name: "Johns Chainsaws",
                follower_count: 54
            }
        },
    ]

    return(
        <>
            <div className="wishlist">

                <div className="products_wrapper">
                    {
                        fake_product_data.map((product) => {
                            return <>
                                <ProductCard key={product.id} id={product.id} img={product.img} title={product.title} excerpt={product.excerpt} views={product.views} likes={product.likes} store_data={product.store_data} />
                            </>
                        })
                    }
                </div>

            </div>
        </>
    )

}