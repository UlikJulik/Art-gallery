import React from "react";
import img1 from './Img/img1.webp'
import img2 from './Img/img2.jpg'
import img3 from './Img/img3.webp'
import img4 from './Img/img4.webp'
import img5 from './Img/img5.webp'
import img6 from './Img/img6.webp'
import img7 from './Img/img7.webp'
import img8 from './Img/img8.webp'
import img9 from './Img/img9.webp'
import img10 from './Img/img10.webp'
import img11 from './Img/img11.jpg'
import img12 from './Img/img12.webp'

const MyGallery = (props) => {
    let data = [
        {
            id:1,
            imgSrc: img1,
            many: 944,
            autor: "Vincent van Gogh (1853-1890)",
        },
        {
            id:2,
            imgSrc: img2,
            many: 61,
            autor: "Leonardo Da Vinci (1452-1519)",
        },
        {
            id:3,
            imgSrc: img3,
            many: 1339,
            autor: " Claude Oscar Monet (1840-1926)",
        },
        {
            id:4,
            imgSrc: img4,
            many: 596,
            autor: " Ivan Shishkin (1832-1898)",
        },
        {
            id:5,
            imgSrc: img5,
            many: 517,
            autor: " Ivan Aivazovsky (1817-1900)",
        },
        {
            id:6,
            imgSrc: img6,
            many: 367,
            autor: " Rembrandt Harmensz van Rijn (1606-1669)",
        },
        {
            id:7,
            imgSrc: img7,
            many: 205,
            autor: " Alessandro Botticelli (1445-1510)",
        },
        {
            id:8,
            imgSrc: img8,
            many: 527,
            autor: " Ilya Repin (1844-1930)",
        },

        {
            id:9,
            imgSrc: img9,
            many: 242,
            autor: " Raphael (1483-1520)",
        },

        {
            id:10,
            imgSrc: img10,
            many: 724,
            autor: " Peter Paul Rubens (1577-1640)",
        },
        {
            id:11,
            imgSrc: img11,
            many: 138,
            autor: " Gustav Klimt (1862-1918)",
        },

        {
            id:12,
            imgSrc: img12,
            many: 1210,
            autor: " Pierre-Auguste Renoir (1841-1919)",
        },
    ]

    return (
        <div className='gallery'>
            {data.map((map, index) => {
                return(
                    <a style={{cursor: 'pointer'}}>
                    <div className="pic" key={index}>
                        <img src={map.imgSrc} 
                         />
                         <b>{map.many}</b>
                         <br />
                         {map.autor} 
                    </div>
                    </a>
                )
            })}
        </div>
    )
}

export default MyGallery;