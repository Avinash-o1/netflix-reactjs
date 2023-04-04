import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen.js';
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth, authStateChecker } from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChecker(auth, (userAuth) => {
      if (userAuth) {
        // user is signed in 
        dispatch(logIn({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        // user is not signed in
        dispatch(logOut());
      }
    })

    return unsubscribe
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        {
          !user ?
            <LoginScreen />
            : <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/" element={<Homescreen />} />
            </Routes>
        }
      </Router>

    </div>
  );
}

export default App;
