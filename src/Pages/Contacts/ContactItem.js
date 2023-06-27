import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const ContactItem = (props) => {
    const { data, identifier, editMode, deleteContact } = props;
    return (
        <ListItem label={data.firstName} id={`vertical-tab-${identifier}`} sx={{ minWidth: '100%' }} key={data.id} secondaryAction={
            editMode ?
                <IconButton edge="end" aria-label="delete" onClick={() => deleteContact(data)}>
                    <DeleteIcon />
                </IconButton> : null
        }>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${data.firstName} ${data.lastName}`} secondary={`${moment(data.date).format('LLL')}`} />
        </ListItem>
    )

}

export default ContactItem;