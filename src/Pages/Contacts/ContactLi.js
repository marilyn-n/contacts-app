import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const ContactLi = (props) => {
    const { data, identifier } = props;
    return (
        <ListItem label={data.firstName} id={`vertical-tab-${identifier}`} sx={{
            minWidth: '100%',
        }} key={data.id}>
            <ListItemAvatar>
                <Avatar alt={`${data.firstName} ${data.lastName}`} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={`${data.firstName} ${data.lastName}`} />
        </ListItem>
    )

}

export default ContactLi;