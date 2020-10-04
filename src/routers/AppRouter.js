import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false);

        });

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            component={ AuthRouter }
                            isLoggedIn={ isLoggedIn }
                            path="/auth"
                        />
                        <PrivateRoute
                            component={ JournalScreen }
                            exact
                            isLoggedIn={ isLoggedIn }
                            path="/"
                        />

                        <Redirect to="/auth/login" />

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

