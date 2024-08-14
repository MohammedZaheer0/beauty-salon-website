'use client';
import React from 'react';
import RegisterLoginComponent from './RegisterLoginComponent';

const Login = () => {
  return (
    <div>
      <RegisterLoginComponent 
        bgImage='loginImage'
        name='Login'
        text='Welcome back, we are glad you’re feeling beautiful today. Login to continue.'
        button='Login'
        rememberMe='Remember me'
        footer="Don't have an account?"
        page='Register'
      />
    </div>
  );
}

export default Login;
