import React, { useState, createContext } from 'react';

const AppCtx = createContext();

const AppProvider = ({ children }) => {
    const [editMode, setEditMode] = useState(false);
    const [contacts, setContacts] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('storedContacts'));
        return storage ? storage : [];
    });
    const [groups, setGroups] = useState([
        { id: 1, groupName: 'Family', participants: [{ firstName: 'Molly', lastName: 'Molly' }, { firstName: 'Mamrrandi', lastName: 'Casas' }], lastEditedOn: '06/16/2023', createdOn: '03/06/2023' },
        { id: 2, groupName: 'BFF', participants: [{ firstName: 'Molly', lastName: 'Molly' }, { firstName: 'Mamrrandi', lastName: 'Casas' }], lastEditedOn: '06/26/2023', createdOn: '03/06/2023' }
    ]);

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
