import React, {useEffect} from 'react';
import ProductCard from "../Components/General/ProductCard";
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function ForYou() {

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
                img: "https://stsites.org/evndr/test-img-1.jpg",
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
                    img: "https://stsites.org/evndr/test-img-2.jpg",
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
                {
                    id: 4,
                    img: "https://stsites.org/evndr/test-img-3.jpg",
                    title: "Test product 4",
                    excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
                    views: 156,
                    likes: 34,
                    store_data: {
                        store_id: 6,
                        store_name: "Johns Chainsaws",
                        follower_count: 54
                    }
                },
                {
                    id: 5,
                    img: "https://stsites.org/evndr/test-img-4.jpg",
                    title: "Test product 5",
                    excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
                    views: 156,
                    likes: 34,
                    store_data: {
                        store_id: 6,
                        store_name: "Johns Chainsaws",
                        follower_count: 54
                    }
                },
                {
                    id: 6,
                    img: "https://stsites.org/evndr/test-img-5.jpg",
                    title: "Test product 6",
                    excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
                    views: 156,
                    likes: 34,
                    store_data: {
                        store_id: 6,
                        store_name: "Johns Chainsaws",
                        follower_count: 54
                    }
                },
                {
                    id: 7,
                    img: "https://stsites.org/evndr/test-img-5.jpg",
                    title: "Test product 6",
                    excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
                    views: 156,
                    likes: 34,
                    store_data: {
                        store_id: 6,
                        store_name: "Johns Chainsaws",
                        follower_count: 54
                    }
                },
                {
                    id: 7,
                    img: "https://stsites.org/evndr/test-img-6.jpg",
                    title: "Test product 7",
                    excerpt: "This is a small description about absolute nothing, hope you enjoyed reading this pointless piece of text.",
                    views: 156,
                    likes: 34,
                    store_data: {
                        store_id: 6,
                        store_name: "Johns Chainsaws",
                        follower_count: 54
                    }
                }
            ]

            let cards: { id: any; top: number; bottom: number; }[] = [];

            // const fy = document.querySelector(".for-you");
            window.addEventListener('mousedown', () => {
                console.log("Pressing down");
            });

            // window.addEventListener('mousewheel', (e) => {
            //     console.log("(MW) Scrolling down");
            //     let curY = window.
            // });


            const createCardData = () => {
                document.querySelectorAll('.product_card').forEach(card => {
                    let offset = card.getBoundingClientRect();

                    function getCardID(elem:any) {
                        if(elem.id) return elem.id.replace("product_card_", "");
                    }

                    let cardObj = {
                        id: getCardID(card),
                        top: offset.top,
                        bottom: offset.bottom
                    }
                    cards.push(cardObj)
                });

                console.log(cards);
            }

            useEffect((createCardData), [])

            //function track(event: { pageX: any; pageY: any; }) {

            //}

            window.addEventListener('scroll', (e: any) => {
                console.log("X - ", e.pageX, " Y - ", e.pageY);
            });

            //addEventListener("mousemove", track, false);

            return (
                <>
                    <div className="for-you">
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