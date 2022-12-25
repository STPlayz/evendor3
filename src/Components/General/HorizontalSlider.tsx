import React, {useEffect, useState} from 'react';

interface HorizontalSliderData {
    images: string[]
}

export enum directionEnum {
    IDLE,
    UP,
    RIGHT,
    DOWN,
    LEFT
}

let one_percent_of_screen = window.innerWidth / 100;
let ten_percent_of_screen = window.innerWidth / 10;

const getMouseOnScreenPercentage = (mPosX:number) => {
    return Math.trunc(mPosX / one_percent_of_screen);
}

const calculateSlideMove = (originalPos: number, newPos: number) => {
    let movePercentage = 0;
    if (originalPos > newPos) {
        movePercentage = Math.abs((newPos - originalPos) / ten_percent_of_screen);
    }
    if (newPos > originalPos) {
        movePercentage = Math.abs((newPos - originalPos) / ten_percent_of_screen);
    }
    return movePercentage;
}

const getDirectionalNumber = (num:number, direction:directionEnum) => {
    let newNum = num;
    if(direction == directionEnum.LEFT) {
        newNum = -(num);
    }
    if(direction == directionEnum.RIGHT) {
        newNum = num;
    }
    return newNum;
}

export default function HorizontalSlider({images}:HorizontalSliderData) {
    const hs = document.querySelector(".horizontal_slider");

    const [sliderActivated, setSliderActivated] : boolean | any = useState(false);
    const [isActive, setIsActive] : boolean | any = useState();
    const [touchPos, setTouchPos] = useState({x: 0, y: 0});
    const [originalTouchPoint, setOriginalTouchPoint] = useState({x: 0, y: 0});
    const [moveDirection, setMoveDirection] = useState(directionEnum.IDLE);
    const [slideNo, setSlideNo] = useState(0);

    const [maxNoSlides, setMaxNoSlides] = useState(0);

    useEffect(() => {
        setMaxNoSlides(images.length - 1);
        console.log("Slides MAX: " + maxNoSlides);
    }, [images])

    const activateSlider = () => {
        if(hs) {
            console.log(originalTouchPoint.y);
            console.log("HS CH: " + hs.clientHeight);
            if (originalTouchPoint.y <= hs.clientHeight) {
                setSliderActivated(true);
            } else {
                setSliderActivated(false);
            }
        }
    }


    window.ontouchstart = (e) => {
        if(e.touches) setOriginalTouchPoint({x: e.touches[0].pageX, y: e.touches[0].pageY});
        if (hs) hs.classList.add("active");
        setIsActive(true);

        activateSlider();
    }

    window.ontouchmove = (e) => {
        if(sliderActivated) {
            if (e.touches[0].pageX <= window.innerWidth && e.touches[0].pageX >= 0) {
                setTouchPos({x: e.touches[0].pageX, y: e.touches[0].pageY});
            }
            // Left
            if (touchPos.x < originalTouchPoint.x) {
                setMoveDirection(directionEnum.LEFT);
            }
            // Right
            if (touchPos.x > originalTouchPoint.x) {
                setMoveDirection(directionEnum.RIGHT);
            }
        }

        activateSlider()
    }


    window.ontouchend = (e) => {
        if(sliderActivated) {
            setMoveDirection(directionEnum.IDLE);
            if (hs) hs.classList.remove("active");
            setIsActive(false);

            if (slideNo >= 1) {
                if (getDirectionalNumber(calculateSlideMove(originalTouchPoint.x, touchPos.x), moveDirection) >= 4) {
                    let newSlideNo = slideNo - 1;
                    setSlideNo(newSlideNo);
                    console.log("Set slide to " + slideNo);
                }
            }
            if (slideNo < maxNoSlides) {
                if (getDirectionalNumber(calculateSlideMove(originalTouchPoint.x, touchPos.x), moveDirection) <= -4) {
                    let newSlideNo = slideNo + 1;
                    setSlideNo(newSlideNo);
                    console.log("Set slide to " + slideNo);
                }
            }
        }

        activateSlider()
    }

    const liveTouchMove = () => {
        if(sliderActivated) {
            if (moveDirection == directionEnum.IDLE) {
                return -(slideNo * window.innerWidth);
            }

            if (moveDirection == directionEnum.LEFT) {
                let difference = (originalTouchPoint.x - touchPos.x) / 1.5;
                return -(slideNo * window.innerWidth) - difference;
            }

            if (moveDirection == directionEnum.RIGHT) {
                let difference = (touchPos.x - originalTouchPoint.x) / 1.5;
                return -(slideNo * window.innerWidth) + difference;
            }
        }
    }

    return (
        <>
            <div className="horizontal_slider">
                <div className="slide_track" style={{
                    marginLeft: isActive ? liveTouchMove() : -(slideNo * window.innerWidth)
                }}>
                    {images && images.map((img:any, index:number) => <>
                        <div className="slide" style={{backgroundImage: `url(${URL.createObjectURL(img).replace('blob:', '')})`}}>
                            <img src={URL.createObjectURL(img)}  alt={index.toString()}/>
                            <div className="slide_counter">{(slideNo + 1)+ " / " + (maxNoSlides + 1)}</div>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )


}