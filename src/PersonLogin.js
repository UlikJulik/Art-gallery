import React from 'react';
import './Menu.css';
import './PersonLogin.css'



function PersonLogin(){
    return(
        <>
        <div className='page-login'>
        <div className='page-content text-center'>
            <div className='brand'>
                <a>
                    <img className='brand-img' src='https://cdn.gallerix.asia/x/src/mlogo.png'/>
                    
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
                    <a className='text-center a_style'>Password recovery</a>
                </p>
                <p className='text-center'>
                    <input type='checkbox'></input>
                    <i>"I have read and accept"</i>
                    <br />
                    <a target='blank' className='a_style'>
                        "Privacy Policy and Agreement on the storage and 
                        processing of personal information"
                    </a>
                </p>
                <button className='btn btn-block btn-lg' type='submit' >Sign in</button>
            </form>
            <div className='new_ac'>New User? <a>Create account</a></div>
        </div>
        </div>
        </>
    );
}

export default PersonLogin;