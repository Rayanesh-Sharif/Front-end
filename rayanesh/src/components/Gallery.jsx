import React, {useEffect, useState} from 'react';
import {MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

function Gallery(props) {
    let items = []
    const [images,setImages] = useState([])
    useEffect(()=>{
        for (let i = 0;i<5; i++){
            images.push(
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={i}
                    src={`https://mdbootstrap.com/img/new/slides/${i}.jpg`}
                    alt='...'
                />
            )
        }
    });
    return (
        <MDBContainer>

        </MDBContainer>
    )
        ;
}

export default Gallery;