import React, {useEffect, useState} from "react";
// import {Icon} from "@mui/material";

import FilterIcon from '@mui/icons-material/Filter';
// import {HorizontalRule} from "@mui/icons-material";
import HorizontalSlider from "./HorizontalSlider";

const UploadImage = () => {
    const [selectedImages, setSelectedImages] : any[] = useState([]);

    const updateImageArr = (uploaded_img : any[]) => {
        setSelectedImages( (arr: any[]) => [...arr, uploaded_img]);
    }

    const update_images = (arr:string[]) => {
        arr.map((img: any, index: number) => <><li>{img.name}</li></>)
    }

    const [count, setCount] : any = useState(0);

    useEffect(() => {
        document.title = `${selectedImages.length} items`;
    }, [selectedImages.length])


    return (
        <>
            { selectedImages.length > 0 &&
                <div className="images">
                    <HorizontalSlider images={selectedImages}/>
                </div>
            }
            <div className="upload_images">
                <label htmlFor="productImages" className="image-file-upload">
                    { selectedImages.length < 1 && <FilterIcon/> }
                    <span>Add Images</span>
                </label>

                <input
                    id="productImages"
                    type="file"
                    name="productImages"
                    onChange={(event : any) => { updateImageArr(event.target.files[0]) }}
                />
            </div>
        </>
    );
};

export default UploadImage;