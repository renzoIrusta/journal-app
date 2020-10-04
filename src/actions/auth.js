import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui";

// Así como está abajo se hace cualquier petición asíncrona
export const startLoginEmailPass = ( email, password ) => {
    return ( dispatch ) => {

        dispatch( uiStartLoading() )
        
        firebase.auth().signInWithEmailAndPassword( email, password )
         .then( ({user})  => {
             dispatch( uiFinishLoading() )
             dispatch(
                 login( user.uid, user.displayName )
             )
         } )
         .catch( e =>{
             dispatch( uiFinishLoading() ) 
             console.log(e)
             })
 
     }

}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {

    return ( dispatch ) => {
          firebase.auth().createUserWithEmailAndPassword( email, password )
          .then( async({ user }) => {

            await user.updateProfile( {displayName: name} )

            dispatch(
                login( user.uid, user.displayName )
            )
          })
          .catch( e => console.log(e) )
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

export const startLgout = () => {

    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() )
    }

}

export const logout = () => ({
    type: types.logout
})