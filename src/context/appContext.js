import React, { useState, createContext } from 'react';

const AppCtx = createContext();

const AppProvider = ({ children }) => {
    const [editMode, setEditMode] = useState(false);
    const [contacts, setContacts] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('storedContacts'));
        return storage ? storage : [];
    });

    const contextValue = {
        editMode,
        setEditMode,
        contacts,
        setContacts,
    }

    return (
        <AppCtx.Provider value={contextValue}>
            {children}
        </AppCtx.Provider>
    )

};

export { AppProvider, AppCtx };
