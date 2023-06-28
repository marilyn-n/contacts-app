import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AppCtx } from '../../context/appContext';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactDetailsPanel = (props) => {
    const { contactDetails, toggleStar } = props;
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const map = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.9978504921!2d-99.45510693850875!3d19.39079237487473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX!5e0!3m2!1sen!2smx!4v1687906913347!5m2!1sen!2smx" style={{ border: 0, width: '100%', height: 300 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    return (
        <>
            <Grid container direction='column'>
                <Grid item display='flex' alignItems='center' flexDirection='column'>
                    <Avatar sx={{ width: 150, height: 150 }}>
                        <ImageIcon />
                    </Avatar>
                    <Typography sx={{ margin: '1rem 0', fontSize: 20 }}>{contactDetails.firstName}, {contactDetails.lastName}</Typography>

                    <Box>
                        <IconButton>
                            <ModeEditIcon />
                        </IconButton>

                        <IconButton onClick={() => toggleStar(contactDetails, contactDetails.isStared ? false : true)}>
                            {contactDetails.isStared ? <StarIcon sx={{ color: '#ffe600' }} /> : <StarBorder />}
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item>
                    <List
                        sx={{ width: '100%' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Contact details
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PhoneAndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${contactDetails.mobile}`} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${contactDetails.email ? contactDetails.email : ''}`} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={map}></ListItemText>
                        </ListItemButton>
                        {contactDetails.groups ?
                            <>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <GroupsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Groups" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {contactDetails.groups.map((group) => {
                                            return (
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        {group.groupName === 'Stared' ? <StarBorder /> : <Diversity1Icon />}
                                                    </ListItemIcon>
                                                    <ListItemText primary="Starred" />
                                                </ListItemButton>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            </> : null
                        }
                    </List>
                </Grid>
            </Grid>
        </>)
}

export default ContactDetailsPanel;