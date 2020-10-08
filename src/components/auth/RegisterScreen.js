import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmail } from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector( state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: 'Renzo',
        email: 'raif@hotmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid() ){
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) )
        } 

    }
    
    const isFormValid = () => {

        if ( name.trim().length === 0 ){

            dispatch( setError( 'name is required' ) )
            return false;

        }else if ( !isEmail( email ) ){

            dispatch( setError( 'Email is not valid' ) )
            return false;

        }else if ( password !== password2 || password.length < 5 ) {
            
            dispatch( setError( 'Password should have at least 6 characters and match each other' ) )
            return false;

        }

        dispatch( removeError() );

        return true;
    }

    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>
            <form
            onSubmit={ handleRegister }
            className="animate__animated animate__fadeIn animate__faster"
            >
                { 
                msgError 
                &&
                (<div className="auth__alert-error">
                    { msgError }
                </div>)
                }
                <input
                    autoComplete="off"
                    className="auth__input"
                    name="name"
                    onChange={ handleInputChange }
                    placeholder="Name"
                    type="text"
                    value={ name }
                />
                <input
                    autoComplete="off"
                    className="auth__input"
                    name="email"
                    onChange={ handleInputChange }
                    placeholder="Email"
                    type="text"
                    value={ email }
                />
                <input
                    className="auth__input"
                    name="password"
                    onChange={ handleInputChange }
                    placeholder="Confirm password"
                    type="password"
                    value={ password }
                />
                <input
                    className="auth__input"
                    name="password2"
                    onChange={ handleInputChange }
                    placeholder="Password"
                    type="password"
                    value={ password2 }
                />
                <button
                    type="submit"
                    className="btn btn-primary pointer btn-block mb-5 mt-5"
                    // disabled={ true }
                >
                    Register
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
