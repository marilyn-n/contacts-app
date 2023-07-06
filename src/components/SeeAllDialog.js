import React, { useContext } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { AppCtx } from "../context/appContext";
import { Typography } from "@mui/material";
import moment from "moment";

const SeeAllDialog = (props) => {
    const { isSeeAllOpen, handleSeeAllClose } = useContext(AppCtx);
    const { itemsData } = props;

    console.log(itemsData);

    return (
        <Dialog open={isSeeAllOpen} onClose={handleSeeAllClose}>
            <DialogTitle>{itemsData.label}</DialogTitle>
            <DialogContent sx={{ width: 400 }}>
                <List
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {itemsData.length}
                        </ListSubheader>
                    }
                >
                    {itemsData.items.map(i => {
                        return (
                            <ListItem key={i.id}>
                                <ListItemAvatar>
                                    <Avatar alt={itemsData.label === 'Groups' ? `${i.groupName}` : `${i.firstName} ${i.lastName}`} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary={itemsData.label === 'Groups' ? `${i.groupName}` : `${i.firstName} ${i.lastName}`} secondary={itemsData.label === 'Recently Added' ? i.mobile : i.address} />

                                {itemsData.label === 'Recently Added' ? <Typography>{moment(i.createdDate).fromNow()}</Typography> : null}
                                {itemsData.label === 'Starred Contacts' ? <StarIcon sx={{ color: '#ffe600' }} /> : null}
                                {itemsData.label === 'Groups' ?
                                    <AvatarGroup total={i.members.length}>
                                        {i.members.map((member) => <Avatar key={member.id} alt={`${member.firstName}`} src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />)}
                                    </AvatarGroup>
                                    : null
                                }
                                <Typography></Typography>
                                <Typography></Typography>
                            </ListItem>
                        )
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