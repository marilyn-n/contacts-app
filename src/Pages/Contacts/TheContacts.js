import React, { useState, useContext, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { AppCtx } from '../../context/appContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContactItem from './ContactItem';
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const TheContacts = () => {
    const { contacts, setContacts, editMode, setEditMode } = useContext(AppCtx);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    const deleteContact = (item) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== item.id);
        setContacts([...updatedContacts]);
    }

    const handleChange = (e) => {
        setSearchTerm((e.target.value));
    }

    const search = () => {
        const matches = contacts.filter((contact) => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(matches);
    }

    useEffect(() => {
        search();
    }, [searchTerm, contacts]);

    const map = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.9978504921!2d-99.45510693850875!3d19.39079237487473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX!5e0!3m2!1sen!2smx!4v1687906913347!5m2!1sen!2smx" style={{ border: 0, width: '100%', height: 300 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    const toggleStar = (theContactInfo, toggleStar) => {
        const newContacts = contacts.map(contact => {
            if (contact.id === theContactInfo.id) {
                return { ...theContactInfo, 'isStared': toggleStar }
            }
            return contact;
        });

        setContacts(newContacts);
    }


    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={3} sx={{ margin: '2rem 0' }}>
                    <TextField fullWidth label="Search" id="searchTerm" value={searchTerm} onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center'>
                <Grid item xs={4}>
                    <Grid item>
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
                        <Box>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChangeTab}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                {filteredItems.map((item, i) => {
                                    return (
                                        <Tab
                                            key={item.id}
                                            label={
                                                <ContactItem
                                                    key={item.id} data={item}
                                                    identifier={i}
                                                    editMode={editMode}
                                                    deleteContact={deleteContact}
                                                />
                                            } id={`vertical-tab-${i}`} sx={{ minWidth: '100%' }}
                                        />
                                    )
                                })}
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    {filteredItems.map((item, i) => {
                        return <TabPanel value={value} index={i} key={item.id}>
                            <Grid container direction='column'>
                                <Grid item display='flex' alignItems='center' flexDirection='column'>
                                    <Avatar sx={{ width: 150, height: 150 }}>
                                        <ImageIcon />
                                    </Avatar>
                                    <Typography sx={{ margin: '1rem 0', fontSize: 20 }}>{item.firstName}, {item.lastName}</Typography>

                                    <Box>
                                        <IconButton>
                                            <ModeEditIcon />
                                        </IconButton>

                                        <IconButton onClick={() => toggleStar(item, item.isStared ? false : true)}>
                                            {item.isStared ? <StarIcon sx={{ color: '#ffe600' }} /> : <StarBorder />}
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
                                            <ListItemText primary={`${item.mobile}`} />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={`${item.email ? item.email : ''}`} />
                                        </ListItemButton>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LocationOnIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={map}></ListItemText>
                                        </ListItemButton>
                                        {item.groups ?
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
                                                        {item.groups.map((group) => {
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
                        </TabPanel>
                    })}
                </Grid>
            </Grid>
        </>

    )
}

export default TheContacts;
