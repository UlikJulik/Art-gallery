import React from 'react';
import PersonLogin from './PersonLogin';
import { Spin as Hamburger } from 'hamburger-react';
import './Menu.css';
import { Search, Person, FlashOn, Fullscreen } from '@mui/icons-material';


function Menu() {
    
    


    return(
        <>
        <nav role='navgation'>
            <div className='navbar-header'>
                <div className='navbar-brand' aria-expanded='true'>
                    <img src='https://cdn.gallerix.asia/x/src/ac/peace.png' style={{width: '32px', height: '32px'}} />
                </div>
            </div>
            
            <div>
                <div className=''>
                    <ul className='nav navbar-toolbar'>
                        <li className='' onClick={MenuFold()} id='toggleMenubar'>
                            <a className='nav-link' href='#' role='bitton'>
                                
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='menu_start'>
            <div className='upwardly_left'>
                <a className='upwardly_left1'><Hamburger rounded/></a>
                <a className='upwardly_left3'><Search/></a>
                <a className='upwardly_left4'><b>Art News<FlashOn/></b> </a>
            </div>
            
            <div>Language</div>
            <a className='upwardly_left4' onClick={PersonLogin()}> <Person /> </a>
        </div>
        </>
    );
}

export default Menu;