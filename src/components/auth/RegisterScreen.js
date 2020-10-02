import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>
            <form action="">

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary pointer btn-block mb-5 mt-5"
                    // disabled={ true }
                >
                    Login
                 </button>
                
                <Link 
                to="/auth/login"
                className="link"
                >
                    Login
                </Link>
            </form>
        </>
    )
}
