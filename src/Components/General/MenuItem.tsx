import React from 'react';
import {Link} from "react-router-dom";


interface MenuItemData {
    Icon: any,
    title: string,
    url: string,
    size: string
}

export default function MenuItem( { Icon, title, url, size }:MenuItemData ) {

    const copyToClipboard = (url:string, copyText:string) => {
        if(url === "copyToClipboard") {
            console.log(copyText)
            navigator.clipboard.writeText(copyText);
        }
        return (
            <span>{title}</span>
        )
    }

    return (
        <>
            <Link className={"menu_item " + size} to={url}>
                {Icon && <Icon />}
                <span>{title}</span>
            </Link>
        </>
    );
}