import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Contacts from "./Pages/Contacts/Contacts";
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { Button, Box } from "@mui/material";

const App = () => {
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
                        <Button variant="contained" size="small" disableElevation={true}>Add New Contact</Button>
                    </Stack>
                </Box>
                <Routes>
                    <Route exact path='/' element={<Dashboard />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;