import React, { useState, createContext } from 'react';

const AppCtx = createContext();

const AppProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [isSeeAllOpen, setIsSeeAllOpen] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openGroupDialog, setGroupDialog] = useState(false);
    const [contacts, setContacts] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('storedContacts'));
        return storage ? storage : [];
    });
    const [groups, setGroups] = useState(() => {
        const storage = JSON.parse(localStorage.getItem('storedGroups'));
        return storage ? storage : [];
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEditDialog = () => setOpenEditDialog(true);
    const handleCloseEditDialog = () => setOpenEditDialog(false);

    const handleSeeAllOpen = () => setIsSeeAllOpen(true);
    const handleSeeAllClose = () => setIsSeeAllOpen(false);

    const handleGroupOpen = () => setGroupDialog(true);
    const handleGroupClose = () => setGroupDialog(false);

    const contextValue = {
        contacts,
        setContacts,
        handleClickOpen,
        handleClose,
        open,
        setOpen,
        openEditDialog,
        setOpenEditDialog,
        handleOpenEditDialog,
        handleCloseEditDialog,
        isSeeAllOpen,
        setIsSeeAllOpen,
        handleSeeAllOpen,
        handleSeeAllClose,
        openGroupDialog,
        setGroupDialog,
        handleGroupOpen,
        handleGroupClose,
        groups,
        setGroups
    }

    return (
        <AppCtx.Provider value={contextValue}>
            {children}
        </AppCtx.Provider>
    )
};

export { AppProvider, AppCtx };
