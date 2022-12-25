import React from 'react';
import {Interface} from "readline";
import MenuItem from "./MenuItem";
import Image from "src/Assets/shoe-img.jpg";
import shoeImg from "../../Assets/shoe-img.jpg";

// Material UI Icons
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
// import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
// import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
// import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
// import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// import CopyToClipboard from "./CopyToClipboard";
// import { SvgIcon } from '@mui/material';

interface ProductCardData {
    id: number,
    img: string,
    title: string,
    excerpt: string,
    views: number,
    likes: number,
    store_data: {
        store_id: number
        store_name: string,
        follower_count: number
    }
}

export default function ProductCard({id, img, title, excerpt, views, likes, store_data}:ProductCardData) {

    const product_style = {
        //backgroundImage: 'url(' + {img} + ')',
        backgroundImage: 'url(C:\\Users\\Work\\WebstormProjects\\evendor\\src\\Assets\\shoe-img.jpg)',
        backgroundSize: "cover"
    }

    const activateComments = () => {
        const coms = document.querySelector('.comments');
        if(coms) coms.classList.add("active");
    }

    const closeComments = () => {
        const coms = document.querySelector('.comments');
        if(coms) coms.classList.add("fade-out");
        setTimeout(() => {
            if(coms) coms.classList.remove("active");
        }, 1100);
    }

    const addToCart = () => {
        console.log("Product added to cart");
    }

    return (
        <>
            <div id={"product_card_" + id} className="product_card" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}} data-img={img}>
                <div className="top_wrapper">

                    <div className="left_col">
                        <p></p>
                        <div className="menu left">

                        </div>
                    </div>
                    <div className="middle_col">
                        <p></p>
                        {/*<div className="profile_wrapper">*/}

                        {/*</div>*/}
                        {/*<div className="menu top">*/}
                        {/*    /!*<img src="https://dura.london/wp-content/uploads/2022/07/logo.png" />*!/*/}
                        {/*</div>*/}
                        {/*<div className="notifications_wrapper">*/}

                        {/*</div>*/}
                    </div>
                    <div className="right_col">
                        <div className="essentials_right">
                            {/*<div className="menu_item normal"><SvgIcon component={ShoppingBagOutlinedIcon} onClick={addToCart}>Add To Bag</SvgIcon></div>*/}
                            {/*<div className="menu_item normal"><SvgIcon component={ForumOutlinedIcon} onClick={activateComments}>Comments</SvgIcon></div>*/}
                        </div>
                        <div className="menu right">
                            <div className="menu">
                                {/*<div className="menu_item normal"><SvgIcon component={ShoppingBagOutlinedIcon} onClick={addToCart}>Add To Bag</SvgIcon></div>*/}
                                {/*<div className="menu_item normal"><SvgIcon component={ForumOutlinedIcon} onClick={activateComments}>Comments</SvgIcon></div>*/}
                                {/*<MenuItem Icon={AccessAlarmOutlinedIcon} title="Test item 1" url="https://google.com" size="normal" />*/}
                                {/*<MenuItem Icon={Diversity2OutlinedIcon} title="Test item 1" url="https://google.com" size="normal" />*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="middle_wrapper">*/}

                {/*</div>*/}
                <div className="bottom_wrapper">
                    <div className="info_wrapper">
                        <h2 className="product_title">
                            {title}
                        </h2>
                        <p className="product_desc">
                            {excerpt}
                        </p>
                    </div>
                    <div className="menu bottom">
                        <div className="menu">
                            <MenuItem Icon={LocalOfferOutlinedIcon} title="Test item 1" url="https://google.com" size="normal" />
                            {/* IGNORE THIS ONE <MenuItem Icon={AttachmentOutlinedIcon} title="Test item 1" url="" size="normal" />*/}
                            {/*<CopyToClipboard Icon={AttachmentOutlinedIcon} title="Test item 1" size="normal" copyText="This is a test" />*/}
                            {/*<MenuItem Icon={SearchOutlinedIcon} title="Test item 1" url="/search" size="large" />*/}
                            {/*<MenuItem Icon={AddToPhotosOutlinedIcon} title="Test item 1" url="/add-product" size="normal" />*/}
                            {/*<MenuItem Icon={StarBorderOutlinedIcon} title="Test item 1" url="/wishlist" size="normal" />*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className="comments">
                <span className="close_popup" onClick={closeComments}>X</span>
                <div className="top">
                    <div className="comment">
                        <div className="col left">
                            <div className="user_avatar">
                                <p>Avatar</p>
                            </div>
                        </div>
                        <div className="col middle">
                            <div className="user_name">
                                <p>Name</p>
                            </div>
                            <div className="user_message">
                                <p>Comment</p>
                            </div>
                        </div>
                        <div className="col right">
                            <div className="like_button">
                                <p>Like</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <input type="text" placeholder="Type a comment" />
                </div>
            </div>
        </>
    )

}