import React from 'react';
import './museum.css' ;
import Menu from './Menu';
import MyGallery from './MyGallery';

function Museum() {
    return (
        <>
        <div>
            <div>
                <Menu />
            </div>
            <div className='page'>
                <div className='firstImg'>
                    <div className='picture_gallery'>
                    Picture gallery
                    </div>
                    <ul className='picture_gallery_countine'>
                        <li style={{color: 'white', textDecoration:'none'}}>
                        Famous artists
                        <br/>
                            <a style={{cursor:'pointer', color:'orange'}}>
                            Latest updates 
                            </a>
                            <i className='picture_gallery_i' aria-hidden='true'>
                            </i>
                        </li>
                    </ul>
                </div>

                <div>
                    <main>
                        <div className='panel'>
                            <div className='panel-body'>
                                <div className='row'>
                                    <div className='main-size col-xl-4 col-lg-6 col-sm-12'>
                                        <a>
                                            <img src='https://cdn.gallerix.asia/x/src/var/inner/fra.jpg' className='row_img' />
                                        </a>
                                    </div>
                                    <div className='main-size col-xl-4 col-lg-6 col-sm-12'>
                                        <a>
                                            <img src='https://cdn.gallerix.asia/x/visio/1001685885.jpg?' className='row_img'/>
                                        </a>
                                    </div>
                                    <div  className='main-size col-xl-4 col-lg-6 col-sm-12'>
                                        <a>
                                            <img src='https://cdn.gallerix.asia/x/visio/1427668153.jpg' className='row_img' />
                                        </a>
                                    </div>
                                    <p>
                                        <a>
                                            <button className='btn btn-help btn-lg'>
                                            All painters, total: 
                                            </button>
                                        </a>
                                    </p>
                                </div>
                                <div className='row mt-20'>
                                    <h1 className='panel_title'>
                                    Picture gallery – Most Popular Albums
                                    </h1>
                                    <MyGallery />
                                </div>
                                <div className='row'>
                                    <div className='.col-xl-3 mb-20 '>
                                        <a href=''>
                                            <img src='https://cdn.gallerix.asia/x/visio/1973977528.jpg' className='rb3' loading='lazy'/>
                                        </a>
                                    </div>

                                    <div className='.col-xl-3 mb-20 '>
                                        <a href=''>
                                            <img src='https://cdn.gallerix.asia/x/visio/3999782.jpg?promo' className='rb3' loading='lazy'/>
                                        </a>
                                    </div>

                                    <div className='.col-xl-3 mb-20 '>
                                        <a href=''>
                                            <img src='https://cdn.gallerix.asia/x/visio/4221350301.jpg?promo' className='rb3' loading='lazy'/>
                                        </a>
                                    </div>

                                    <div className='.col-xl-3 mb-20 '>
                                        <a href=''>
                                            <img src='https://cdn.gallerix.asia/x/visio/431254035.jpg?promo' className='rb3' loading='lazy'/>
                                        </a>
                                    </div>
                                </div>
                                <div className='row mt-20'>
                                    <MyGallery />
                                </div>
                            </div>
                        </div>
                        <div className='panel mt-30'>
                            <div className='panel-body'>
                                <div className='row mt-20'>
                                    <MyGallery />
                                    <MyGallery />
                                    <MyGallery />
                                    <MyGallery />
                                    <MyGallery />
                                    <MyGallery />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <footer className='floot'>
                <div className='floot-legal'>
                    <small>2009-20024</small>
                    <i></i>
                    <a className='floot_a' href>Galerix</a>
                    <span className='floot_1'>16+</span>
                </div>
                <div className='floot_right'>

                </div>
                <div className='floot_menu'>
                    <div className='floot_metrika'>
                        <img src='https://metrika-informer.com/informer/253414/2_1_9F9490FF_7F7470FF_1_pageviews' />
                    </div>
                    <div className='leftpart'>
                        <div className='list-group'>
                            <span>
                                "Help"
                                <i></i>
                            </span>
                            <span>
                            "F.A.Q"
                            <i></i>
                            </span>
                            <span>
                            "About us"
                            <i></i>
                            </span>
                            <span>
                                " Advertising "
                                <i></i>
                            </span>
                            <span>
                                " Contacts "
                                <i></i>
                            </span>
                            </div>
                        </div>
                <div className='rightpart'>
                    <div className='list-group'>
                        <span className='blue_green'>
                            <i></i>
                            <b>Donate us</b>
                        </span>
                        <span>
                            <i></i>
                            "Rules"
                        </span>
                        <span>
                            <i></i>
                            Terms of use
                        </span>
                        <span>
                            <i></i>
                            " Privacy policy"
                        </span>
                        <span>
                            <i></i>
                            Copyrights
                        </span>
                    </div>
                </div>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Museum;


/*<div className='mb-30 mt_20'>
                                        <div className='pic mb-10'>
                                            <div className='a_dv1' >
                                                <img src='//cdn.gallerix.asia/j/_EX/280359500/1952078040.webp' 
                                                alt='Vincent van Gogh (1853-1890)' /></div>
                                                <p>944</p>
                            
                                            Vincent van Gogh (1853-1890)
                                            
                                        </div>

                                        <div className='pic mb-10'>
                                        <div className='a_dv1' >
                                            <img src='https://x.gallerix.ru/src/artists/davinci.jpg' 
                                            alt='Leonardo Da Vinci (1452-1519)' /></div>
                                            <p>61</p>
                                            <br/>
                                            Leonardo Da Vinci (1452-1519)
                                            
                                        </div>
                                
                                        <div className='pic mb-10'>
                                            <div className='a_dv1' >
                                                <img src='//cdn.gallerix.asia/j/_EX/442966767/451111857.webp' 
                                            alt=' Claude Oscar Monet (1840-1926)' />
                                            </div>
                                            <p>1339</p>
                                            Claude Oscar Monet (1840-1926)
                                        </div>
                                
                                        <div className='pic mb-10'>
                                        <div className='a_dv1' >
                                            <img src='//cdn.gallerix.asia/j/_EX/863931103/462356567.webp' 
                                            alt=' Ivan Shishkin (1832-1898)' />
                                        </div>
                                            <p>596</p>
                                            Ivan Shishkin (1832-1898)
                                        </div>
                                
                                        <div className='pic mb-10'>
                                            <div className='a_dv1' >
                                                <img src='//cdn.gallerix.asia/j/_EX/1819898631/725753784.webp' 
                                                alt=' Ivan Aivazovsky (1817-1900)' />
                                             </div>   
                                             <p>517</p>
                                                Ivan Aivazovsky (1817-1900)
                                        </div>
                                    </div>*/
