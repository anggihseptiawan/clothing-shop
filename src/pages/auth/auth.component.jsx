import React from 'react';

import './auth.style.scss';
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const Auth = () => (
    <div className="auth">
        <SingIn />
        <SignUp />
    </div>
);


export default Auth;