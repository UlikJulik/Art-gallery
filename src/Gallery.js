import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from './img/img1.jpeg';
import Img2 from './img/img2.jpeg';
import Img3 from './img/img3.jpeg';
import Img4 from './img/img4.jpeg';
import Img5 from './img/img5.jpeg';
import Img6 from './img/img6.jpeg';
import Img7 from './img/img7.jpeg';
import Img8 from './img/img8.jpeg';
import Img9 from './img/img9.jpeg';


const Gallery = (props) => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
            describe: "Золотой век голландской живописи. Дирк ван Бабюрен. Картина «Святой Франциск», около 1618",
        },
        {
            id: 2,
            imgSrc: Img2,
            describe: "Золотой век голландской живописи. Ян Вермеер. Картина «Девушка с жемчужной сережкой», 1667",
        },
        {
            id: 3,
            imgSrc: Img3,
            describe: "Карл Брюллов «Последний день Помпеи».",
        },
        {
            id: 4,
            imgSrc: Img4,
            describe: "",
        },
        {
            id: 5,
            imgSrc: Img5,
            describe: "Золотой век голландской живописи. Виллем Корнелис Дейстер. Картина «Офицеры в караульне», 1632",
        },
        {
            id: 6,
            imgSrc: Img6,
            describe: "Золотой век голландской живописи. Ян Стен. Картина «Веселье в семье художника», 1665",
        },
        {
            id: 7,
            imgSrc: Img7,
            describe: "",
        },
        {
            id: 8,
            imgSrc: Img8,
            describe: "Якопо Дзукки – Золотой век",
        },
        {
            id: 9,
            imgSrc: Img9,
            describe: "",
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSRc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSRc(imgSrc);
        setModel(true);
    }

    return(
        <>

        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
            {data.map((item, index)=> {
            return(
                <div className="pics" key={index} onClick={() => getImg(item.imgSrc)} >
                    <img src={item.imgSrc} style={{width:'100%'}} title={item.describe}/>
                    
                    
                </div>
            )
            })}
        </div>
        </>
    )
}

export default Gallery
