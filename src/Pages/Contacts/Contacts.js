import React, { useState, useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { AppCtx } from '../../context/appContext';
import moment from 'moment';

const Contacts = () => {
    const { contacts, setContacts, editMode, setEditMode } = useContext(AppCtx);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const deleteContact = (item) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== item.id);
        setContacts([...updatedContacts]);
    }

    const handleChange = (e) => {
        setSearchTerm((e.target.value));
    }

    const search = (e) => {
        const matches = contacts.filter(contact => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(matches);
    }

    useEffect(() => {
        search();
    }, [searchTerm]);

    useEffect(() => {
        setFilteredItems(contacts)
    }, [contacts]);

    const renderContacts = filteredItems.map(contactInfo => (
        <ListItem key={contactInfo.id} secondaryAction={
            editMode ?
                <IconButton edge="end" aria-label="delete" onClick={() => deleteContact(contactInfo)}>
                    <DeleteIcon />
                </IconButton> : null
        }>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${contactInfo.firstName} ${contactInfo.lastName}`} secondary={`${moment(contactInfo.date).format('LLL')}`} />
        </ListItem >
    ));

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={6} sx={{ margin: '2rem 0' }}>
                    <TextField fullWidth label="Search" id="searchTerm" value={searchTerm} onChange={handleChange} />
                </Grid>
                <Grid item xs={8}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Box display='flex' alignItems='center'>
                            <Typography sx={{ margin: '2rem 0' }}>All Contacts </Typography>
                            <Chip label={`${contacts.length > 0 ? contacts.length : 0}`} sx={{ marginLeft: '.5rem' }} />
                        </Box>
                        <Box>
                            {!editMode ?
                                <Button size='small' onClick={() => setEditMode(true)}>Edit</Button>
                                :
                                <Button size='small' onClick={() => setEditMode(false)}>Done</Button>
                            }
                        </Box>
                    </Box>
                    <List sx={{ margin: '0 auto', bgcolor: 'background.paper' }}>
                        {renderContacts}
                    </List>
                </Grid>
            </Grid>
        </>

    )
}

export default Contacts;