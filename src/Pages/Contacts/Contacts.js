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
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { AppCtx } from '../../context/appContext';

const Contacts = () => {
    const { contacts } = useContext(AppCtx);

    console.log(contacts);

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={6} sx={{ margin: '2rem 0' }}>
                    <TextField fullWidth label="Search" id="fullWidth" />
                </Grid>
                <Grid item xs={8}>
                    <Box display='flex' alignItems='center'>
                        <Typography sx={{ margin: '2rem 0' }}>All Contacts </Typography>
                        <Chip label="3" sx={{ marginLeft: '.5rem' }} />
                    </Box>
                    <List sx={{ margin: '0 auto', bgcolor: 'background.paper' }}>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>

        </>

    )
}

export default Contacts;