import React, { useRef } from 'react'
import './Signinscreen.css'
import { auth , createID ,signInwithEP } from '../firebase';

function Signinscreen() {
    const emailref = useRef(null);
    const passwordref = useRef(null);

    const signIn = (e)=>{
        e.preventDefault();
        signInwithEP(auth,emailref.current.value, passwordref.current.value)
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message)
        });
    }
    const register = (e)=>{
        e.preventDefault();
        createID(auth,emailref.current.value, passwordref.current.value)
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message)
        });
            
    }

    return (
        <div className='SigninScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailref} placeholder='Email ID' type='email'></input>
                <input ref={passwordref} placeholder='Password' type='password'></input>
                <button type='submit' onClick={signIn}>Sign In</button>

                <h4>
                    <span className='signinScreen_gray'>New to Netflix? </span>
                    <span className='signupScreen_link' onClick={register}> Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default Signinscreen