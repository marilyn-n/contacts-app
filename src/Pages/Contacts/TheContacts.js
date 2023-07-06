import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { AppCtx } from '../../context/appContext';
import EmptyStateUI from '../../components/EmptyUIState';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

const TheContacts = () => {
    const { contacts } = useContext(AppCtx);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleChange = (e) => {
        setSearchTerm((e.target.value));
    }

    const search = () => {
        const matches = contacts.filter((contact) => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(matches);
    }

    useEffect(() => {
        search();
    }, [searchTerm, contacts]);

    return (
        <>
            <Grid container direction='row' justifyContent='center'>
                <Grid item xs={8}>
                    <Grid item>
                        <Box sx={{ margin: '2rem 0' }}>
                            <TextField fullWidth label="Search" id="searchTerm" value={searchTerm} onChange={handleChange} />
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <Box display='flex' alignItems='center'>
                                <Typography sx={{ margin: '2rem 0' }}>All Contacts </Typography>
                                <Chip label={`${contacts.length > 0 ? contacts.length : 0}`} sx={{ marginLeft: '.5rem' }} />
                            </Box>
                        </Box>
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <List>
                                {filteredItems.length ? filteredItems.map(item => {
                                    return (
                                        <Link to={`${item.firstName}`} style={{ textDecoration: 'none', color: '#3d3d3d' }}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Avatar alt={`${item.firstName} ${item.lastName}`} src="/static/images/avatar/1.jpg" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${item.firstName} ${item.lastName}`} />
                                                    {item.isStared ? <StarIcon sx={{ color: '#ffe600' }} /> : null}
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    )
                                }) : <EmptyStateUI label='Nothing Found' />}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default TheContacts;
