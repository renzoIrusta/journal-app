import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NoteAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awsome content"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                placeholder="What happened today"
                className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                    src="https://i.vimeocdn.com/video/703876203_1280x720.jpg" 
                    alt="Imagen"
                    />
                </div>

            </div>

        </div>
    )
}
