import React, { useState } from 'react'
import "./LoginScreen.css"
import Signinscreen from './Signinscreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='LoginScreen'>
      <div className='LoginScreen_background'>
        <img className='LoginScreen_logo'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='Netflix-logo' />
        <button onClick={()=> setSignIn(true)} className='loginscreen_button'>Sign In</button>

        <div className='loginScreen_gradient' />
      </div>

      <div className='loginscreen_body' >
        {
          signIn ?
            (<Signinscreen />) :
            (
              <div>
                <h1>Unlimited films, Tv programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership. </h3>

                <div className='loginscreen_input'>
                  <form>
                    <input type='email' placeholder='Enter Email Address' ></input>
                    <button onClick={()=> setSignIn(true)} className='loginscreen_getstarted'>GET STARTED</button>
                  </form>
                </div>
              </div>
            )
        }
      </div>

    </div >
  )
}

export default LoginScreen