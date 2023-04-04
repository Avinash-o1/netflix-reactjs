import React from 'react'
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth, logOut } from '../firebase';
import "./ProfileScreen.css"

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleClick = () => {
    logOut(auth)
    // window.location.reload()
  }

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='user logo'/>
            <div className='profileScreen_details'>
              <h2>{user.email}</h2>
              <div className='profileScreen_plans'>
                <h3>Plans</h3>
                <button onClick={handleClick} className='profileScreen_signout'>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen ;