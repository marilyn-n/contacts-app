import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TheDashboard from './pages/dashboard/TheDashboard';
import TheContacts from './pages/contacts/TheContacts';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { Button, Box } from "@mui/material";
import CreateContactDialog from './components/CreateContactDialog';

const App = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Router>
                <Box display='flex' justifyContent='space-between' sx={{ margin: '2rem 20rem' }}>
                    <Stack spacing={3} direction="row" alignItems='center' >
                        <Link href="/" to={'/'} underline="none">
                            Dashboard
                        </Link>
                        <Link href="/contacts" to={'/contacts'} underline="none">
                            Contacts
                        </Link>
                    </Stack>
                    <Stack direction="row" alignItems='center'>
                        <Button variant="contained" size="small" disableElevation={true} onClick={handleClickOpen}>New Contact</Button>
                    </Stack>
                </Box>
                <Routes>
                    <Route exact path='/' element={<TheDashboard />} />
                    <Route path='/contacts' element={<TheContacts />} />
                </Routes>
            </Router>

            <CreateContactDialog handleClose={handleClose} open={open} />

        </>
    )
}

export default App;