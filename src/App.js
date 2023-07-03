import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import TheDashboard from './pages/dashboard/TheDashboard';
import TheContacts from './pages/contacts/TheContacts';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography } from "@mui/material";
import FormDialog from './components/CreateNewDialog';
import { AppCtx } from "./context/appContext";
import "./App.css"

const App = () => {
    const { handleClickOpen } = useContext(AppCtx);

    return (
        <>
            <Router>
                <Box display='flex' justifyContent='space-between' sx={{ padding: '1.5rem 20rem', marginBottom: '1rem', boxShadow: '-3px 2px 20px rgba(0, 0, 0, 0.1)' }}>
                    <nav>
                        <Stack spacing={3} direction="row" alignItems='center'>
                            <NavLink exact to="/" activeClassName="active" className="nav-link">
                                Dashboard
                            </NavLink>
                            <NavLink to="/contacts" activeClassName="active" className="nav-link">
                                Contacts
                            </NavLink>
                        </Stack>
                    </nav>
                    <Stack direction="row" alignItems='center'>
                        <Button variant="contained" size="small" disableElevation={true} onClick={handleClickOpen}>New Contact</Button>
                    </Stack>
                </Box>
                <Routes>
                    <Route exact path='/' element={<TheDashboard />} />
                    <Route path='/contacts' element={<TheContacts />} />
                </Routes>
            </Router>
            <FormDialog />

            <footer style={{ backgroundColor: 'rgb(250 248 248)', padding: '2rem', textAlign: 'center', color: '#939393' }}>
                <Typography sx={{ fontSize: '1.15rem' }}> &#169; 2023 Marilyn Negrete </Typography>
            </footer>

        </>
    )
}

export default App;