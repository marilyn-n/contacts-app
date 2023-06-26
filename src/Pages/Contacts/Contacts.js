import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Contacts = () => {
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <Typography sx={{ margin: '2rem 0' }}>All Contacts (4)</Typography>
                    <List sx={{ margin: '0 auto', bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contact Name" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem>
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