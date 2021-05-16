import React from 'react';
import { Link, Router } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignOutButton from '../SignOut'

const Navigation=({authUser})=> {
    return (
         <div>
            {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </div>
    );
}

const NavigationAuth=()=>{
    return(
        <ul>
            <li>
              <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
              <SignOutButton />
            </li>
        </ul>
  )
}

const NavigationNonAuth=()=>{
    return(
        <ul>
            <li>
              <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
              <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
        </ul>
    )
}


export default Navigation
