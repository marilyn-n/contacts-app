import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';

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
            {data.isStared ? <StarIcon /> : null}
        </ListItem>
    )

}

export default ContactLi;