import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NoteAppBar = () => {

    const { active } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleSaveNote = () => {
       dispatch( startSaveNote( active ) );
    }

    return (
        <div className="notes__appbar">
            <span>1 octubre 2020</span>

            <div>
                <button className="btn pointer"> 
                    Picture
                </button>
                <button 
                className="btn pointer"
                onClick={ handleSaveNote }
                > 
                    Save
                </button>
            </div>
        </div>
    )
}
