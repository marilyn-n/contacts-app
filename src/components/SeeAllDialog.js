import React, { useState, useContext } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { AppCtx } from "../context/appContext";

const SeeAllDialog = (props) => {
    const { isSeeAllOpen, handleSeeAllClose } = useContext(AppCtx);
    const { itemsData } = props;

    console.log(itemsData);
    return (
        <Dialog open={isSeeAllOpen} onClose={handleSeeAllClose}>
            <DialogTitle>{itemsData.label}</DialogTitle>
            <DialogContent>
                <List
                    sx={{ bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {itemsData.length}
                        </ListSubheader>
                    }
                >
                    {itemsData.items.map(i => {
                        return (<ListItem key={i.id}>
                            <ListItemAvatar>
                                <Avatar alt={`${i.firstName} ${i.lastName}`} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText primary={`${i.firstName} ${i.lastName}`} secondary={itemsData.label === 'Recently Added' ? i.mobile : i.address} />
                        </ListItem>)
                    })}
                </List>
                <DialogActions>
                    <Button onClick={handleSeeAllClose}>Close</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>

    )
}

export default SeeAllDialog;