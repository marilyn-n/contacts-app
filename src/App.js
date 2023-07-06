import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import TheDashboard from './pages/dashboard/TheDashboard';
import TheContacts from './pages/contacts/TheContacts';
import Stack from '@mui/material/Stack';
import { Button, Box, Typography } from "@mui/material";
import FormDialog from './components/CreateNewDialog';
import { AppCtx } from "./context/appContext";
import "./App.css"
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateGroupDialog from "./components/CreateGroupDialog";
import ContactDetails from "./pages/contacts/ContactDetails";
import TheGroups from "./pages/groups/TheGroups";

const App = () => {
    const { handleClickOpen } = useContext(AppCtx);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { handleGroupOpen } = useContext(AppCtx);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <NavLink to="/groups" activeClassName="active" className="nav-link">
                                Groups
                            </NavLink>
                        </Stack>
                    </nav>
                    <Stack direction="row" alignItems='center'>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            startIcon={<AddIcon fontSize="inherit" />}
                        >
                            Add
                        </Button>
                        <Menu id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                        >
                            <MenuList sx={{ width: 200 }}>
                                <MenuItem onClick={handleClickOpen}>
                                    <ListItemIcon>
                                        <PersonIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>New Contact</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleGroupOpen}>
                                    <ListItemIcon>
                                        <GroupsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>New Group</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Box>
                <Routes>
                    <Route exact path='/' element={<TheDashboard />} />
                    <Route path='/contacts/:id' element={<ContactDetails />} />
                    <Route path='/contacts' element={<TheContacts />} />
                    <Route path='/groups' element={<TheGroups />} />
                </Routes>
            </Router>
            <FormDialog />
            <CreateGroupDialog />

            {/* <footer style={{ backgroundColor: 'rgb(250 248 248)', padding: '2rem', textAlign: 'center', color: '#939393' }}>
                <Typography sx={{ fontSize: '1.15rem' }}> &#169; 2023 Marilyn Negrete </Typography>
            </footer> */}

        </>
    )
}

export default App;