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
import ContactLi from './ContactLi';
import ContactDetailsPanel from './ContactDetailsPanel';

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
    const { contacts, setContacts, editMode, setEditMode, handleClickOpen } = useContext(AppCtx);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [value, setValue] = useState(0);

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

    const toggleStar = (theContactInfo, toggleStar) => {
        const newContacts = contacts.map(contact => {
            if (contact.id === theContactInfo.id) {
                return { ...theContactInfo, 'isStared': toggleStar, updatedDate: new Date() }
            }
            return contact;
        });

        setContacts(newContacts);
    }

    const updateContact = (item) => {
        console.log('updating', item);
    }

    useEffect(() => {
        search();
    }, [searchTerm, contacts]);

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
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                {filteredItems.map((item, i) => {
                                    return (
                                        <Tab
                                            key={item.id}
                                            label={
                                                <ContactLi
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

                            {!filteredItems.length ? 'Nothing found' : null}
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    {filteredItems.map((item, i) => {
                        return <TabPanel value={value} index={i} key={item.id}>
                            <ContactDetailsPanel contactDetails={item} toggleStar={toggleStar} />
                        </TabPanel>
                    })}
                </Grid>
            </Grid>
        </>

    )
}

export default TheContacts;
