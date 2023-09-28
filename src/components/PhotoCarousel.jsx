import React, { useEffect, useState, useRef } from 'react'

const PhotoCarousel = ({ photos }) => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0)
    const [jump, setJump] = useState(0);
    const [columns, setColumns] = useState("")
    const carouselRef = useRef(null)

    useEffect(() => {
        setColumns(prev => {
            let cols = ""
            photos.forEach((photo) => cols += "700px ")
            return cols
        })
    }, [])

    useEffect(() => {
        if (index > prevIndex) {
            setJump((prev) => prev + carouselRef.current.clientWidth);
        } else if (index < prevIndex) {
            setJump((prev) => prev - carouselRef.current.clientWidth);
        }
    }, [index])

    useEffect(() => {
        carouselRef.current.style.transform = `translateX(-${jump}px)`;
    }, [jump]);

    const prev = () => {
        setIndex(prev => {
            if (prev === 0) {
                setPrevIndex(prev)
                return 0
            } else {
                setPrevIndex(prev)
                return prev - 1
            }
        })

    }

    const next = () => {
        setIndex(prev => {
            if (prev === photos.length - 1) {
                setPrevIndex(prev)
                return photos.length - 1
            } else {
                setPrevIndex(prev)
                return prev + 1
            }
        })
    }

    return (
        <div className='photo-carousel' >
            <div className='prev' onClick={() => prev()}>{"<"}</div>
            <div className='photos' style={{ gridTemplateColumns: columns }} ref={carouselRef}>{
                photos.map((photo, i) => (<div className='photo-carousel__wrapper' ><img className='photo-carousel__wrapper__photo' src={photo} /></div>))
            }</div>
            <div className='next' onClick={() => next()}>{">"}</div>
        </div>
    )
}

export default PhotoCarousel