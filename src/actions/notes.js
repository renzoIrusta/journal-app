import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startNewNote = () => {
    // Siempre que es asíncrono hay que hacerlo de esta forma. El getState es casi igual que el use selector. Le podemos poner el nombre que queramos.
    return async( dispatch, getState ) => {

        const uid = getState().auth.uid;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );

        dispatch( activeNote ( doc.id, newNote ) )

    }

}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})