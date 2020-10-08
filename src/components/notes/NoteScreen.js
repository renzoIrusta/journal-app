import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);

    const { body, title, id } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) )

    }, [ formValues, dispatch ])

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">

            <NoteAppBar />

            <div className="notes__content">

                <input
                    name="title"
                    type="text"
                    placeholder="Some awsome content"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    name="body"
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img
                            src={ note.url }
                            alt="Imagen"
                        />
                    </div>
                }

            </div>
                <button 
                className="btn btn-danger pointer"
                onClick={ handleDelete }
                >
                    Delete
                </button>
        </div>
    )
}
