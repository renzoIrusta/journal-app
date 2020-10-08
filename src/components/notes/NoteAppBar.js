import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NoteAppBar = () => {

    const { active } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ){
            dispatch( startUploading( file ) )
        }
    }

    return (
        <div className="notes__appbar">
            <span>1 octubre 2020</span>

            <input
                id="fileSelector"
                name="file"
                type="file"
                style={{display: 'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className="btn pointer"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button
                    className="btn pointer"
                    onClick={handleSaveNote}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
