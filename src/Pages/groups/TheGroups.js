import React, { useContext } from "react";
import { AppCtx } from "../../context/appContext";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import GroupsIcon from '@mui/icons-material/Groups';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

const TheGroups = () => {
    const { groups } = useContext(AppCtx);

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={8}>
                <Box sx={{ margin: '1rem 0' }}>
                    <Typography>All Groups <Chip label={groups.length} /></Typography>
                </Box>
                <List>
                    {groups.map(group => {
                        return (
                            <ListItem disablePadding key={group.id}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={group.groupName} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
        </Grid>

    )
}

export default TheGroups;