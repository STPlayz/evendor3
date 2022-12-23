import React, {useState} from "react";

interface copyToClipboardParams {
    Icon: any,
    title: string,
    size: string,
    copyText: any
}

export default function CopyToClipboard( { Icon, title, size, copyText }:copyToClipboardParams ) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(copyText: any) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(copyText);
        } else {
            return document.execCommand('copy', true, copyText);
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });

        activatePopup(copyText);
    }

    const activatePopup = (text:string) => {
        const popup = document.querySelector('.price_tag_popup');
        if(popup) popup.classList.add("active");
        setTimeout(() => {
            if(popup) {
                popup.classList.remove("active");
                popup.classList.add('fade-out');
                setTimeout(() => {
                    if(popup) popup.classList.remove('fade-out');
                }, 3000);
            }
        }, 3000)
    }

    return (
        <>
            <button className={"menu_item " + size} onClick={handleCopyClick}>
                {Icon && <Icon />}
                <span>{title}</span>
                <span className="price_tag_popup" >Copied!</span>
            </button>
        </>
    )
}