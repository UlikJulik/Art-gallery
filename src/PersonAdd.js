import React from 'react';
import './PersonLogin.css'
import './PersonAdd.css'

function PersonAdd(){
    return(
        <>
        <div className='page_login'>
            <div className='.panel'>
            <div className='.panel-body content'>
                <div className='brand'>
                    <a href=''>
                        <img className='brand-img' src='https://cdn.gallerix.asia/x/src/mlogo.png' />
                    </a>
                </div>
                <form className='formSize'>
                    <p>
                        <b style={{color: 'rgb(255, 212, 19)'}}>Creating new account</b>
                        <hr></hr>
                    </p>
                    <p className='text_p'>
                        <b>Login:</b>
                        Latin letters, numbers and hyphens
                        only. Starts with a letter. No Spaces or 
                        underscores. You can not change it later.
                    </p>
                    <div>
                        <input className='inputInfo' placeholder='Username'></input>
                    </div>
                    <p className='text_p'> 
                        <b>Your name:</b>
                        any letters, numbers and symbols. You can change in the settings.
                    </p>
                    <div>
                        <input className='inputInfo' placeholder='Name'></input>
                    </div>
                    <p className='text_p'>
                        <b>Email:</b>
                        without access to email you will not be able to restore access to your account.
                    </p>
                    <div>
                        <input className='inputInfo' placeholder='Email'></input>
                    </div>
                    <p className='text_p'>
                        <b>Password:</b>
                        6 characters minimum, no spaces.
                    </p>
                    <div>
                        <input className='inputInfo' placeholder='Password'></input>
                    </div>
                    <p className='text_p'>
                        <b>no bots:</b>
                        type the current year in this field. Use keyboard (don't copy-paste).
                    </p>
                    <div>
                        <input className='inputInfo' placeholder='This year'></input>
                    </div>
                    <div>
                        <div>
                            <input type='checkbox'>I have read and accept </input>
                            <label>
                                <a href='' className='a_style_public'>
                                Privacy Policy and Agreement on the storage and processing of personal information
                                </a>
                            </label>
                        </div>
                    </div>
                    <button className='btn btn-block btn-lg'>Create account</button>
                </form>
                <p>
                    "Existing user? "
                    <b>
                        <a href='' className='a_style_public'>Sign in</a>
                    </b>
                </p>
            </div>
            </div>
        </div>
        </>
    );
}
export default PersonAdd;