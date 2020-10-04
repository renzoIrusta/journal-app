import React from 'react'
import { useDispatch } from 'react-redux'
import { startLgout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLgout() )
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal_sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Hola Renzo</span>
                </h3>
                <button 
                className="btn pointer"
                onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x pointer"></i>
                <p>New entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
