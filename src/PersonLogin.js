import React from 'react';
import './PersonLogin.css'
import PersonAdd from './PersonAdd';
import Menu from './Menu';

function PersonLogin(){

    let textInput = React.createRef();
    let mainLink = React.createRef();

    function Main_Link() {
        mainLink.current.Menu();
    }

  function handleClick() {
    textInput.current.PersonAdd();
  }
    
  
    return(
        <div className='page-login'>
        <div className='page-content text-center'>
            <div className='brand1'>
                <a onClick={Main_Link}>
                    <img className='brand1-img' src='https://cdn.gallerix.asia/x/src/mlogo.png'/>
                    
                </a>
            </div>
            <p className='textLogin'> Login </p>
            <form method='post'>
                <div className='input'> 
                    <input className='inputInfo' type='text'id='InputName' name='Login' placeholder='Username'></input>
                </div>
                <div className='input'>
                    <input className='inputInfo' placeholder='Password'></input>
                </div>
                <p>
                    <a className='text-center a_style a_style_public'>Password recovery</a>
                </p>
                <p className='text-center'>
                    <input type='checkbox' ></input>
                    <i>"I have read and accept"</i>
                    <br />
                    <a target='blank' className='a_style a_style_public'>
                        "Privacy Policy and Agreement on the storage and 
                        processing of personal information"
                    </a>
                </p>
                <button className='btn btn-block btn-lg' type='submit'>Sign in</button>
            </form>
            <div className='new_ac'>New User? <a className='a_style_public' style={{cursor:'pointer'}} onClick={handleClick}> Create account</a></div>
        </div>
        </div>
    );
}

export default PersonLogin;