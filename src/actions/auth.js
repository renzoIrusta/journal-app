import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import { types } from "../types/types"

// Así como está abajo se hace cualquier petición asíncrona
export const startLoginEmailPass = ( email, password ) => {
    return ( dispatch ) => {

        setTimeout(() => {
            
            dispatch( login( 123, 'Pedro' ) )

        }, 3500);

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })

    }
}

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})