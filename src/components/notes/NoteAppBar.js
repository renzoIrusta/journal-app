import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>1 octubre 2020</span>

            <div>
                <button className="btn pointer"> 
                    Picture
                </button>
                <button className="btn pointer"> 
                    Save
                </button>
            </div>
        </div>
    )
}
