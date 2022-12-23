import React, {useEffect, useState} from 'react';
import UploadImage from "../Components/General/UploadImage";

export default function AddProduct() {

    const [auctionType, setAuctionType] = useState<string>();
    const [enableBuyNow, setEnableBuyNow] = useState<boolean>();

    useEffect(() => {
        console.log(enableBuyNow)
    }, [auctionType, enableBuyNow]);

    return (

        <>
            <div className="add-product">
                <div className="images_wrapper">
                    <UploadImage />
                </div>
                <div className="form">
                    <div className="input_wrapper select">
                        <label>Auction Type</label>
                        <select onChange={(e) => { setAuctionType(e.target.value) }}>
                            <option value="">Select auction type</option>
                            <option value="buy_now">Buy Now</option>
                            <option value="bidding">Bidding</option>
                        </select>
                    </div>

                    {auctionType && auctionType === "buy_now" &&
                        <div className="input_wrapper number">
                            <label>Price</label>
                            <input type="number" placeholder="Price" />
                        </div>
                    }
                    {auctionType && auctionType === "bidding" &&
                        <>
                            <div className="input_wrapper number">
                                <label>Min. Asking Price</label>
                                <input type="number" placeholder="Min. Asking Price" />
                            </div>
                            <div className="input_wrapper checkbox">
                                <label>Enable Buy Now</label>
                                <input type="checkbox" placeholder="Enable Buy Now" onChange={(e) => { setEnableBuyNow(e.target.checked) }} />
                            </div>

                            {enableBuyNow &&
                                <div className="input_wrapper number">
                                    <label>Buy Now Price</label>
                                    <input type="number" placeholder="Buy Now Price" />
                                </div>
                            }
                        </>
                    }

                    <div className="input_wrapper text">
                        <label>Title</label>
                        <input type="text" placeholder="Title" />
                    </div>
                    <div className="input_wrapper select">
                        <label>Condition</label>
                        <select>
                            <option>Select condition</option>
                            <option>Used</option>
                            <option>Like-New</option>
                            <option>New</option>
                        </select>
                    </div>
                    <div className="input_wrapper textarea">
                        <label>Description</label>
                        <textarea rows={10} placeholder="Description"></textarea>
                    </div>

                </div>
            </div>
        </>

    )

}