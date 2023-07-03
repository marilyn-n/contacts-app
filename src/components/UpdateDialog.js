import React, { useContext, useState, useEffect } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { AppCtx } from '../context/appContext';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UpdateDialog = (props) => {
    const { openEditDialog, handleCloseEditDialog, contacts, setContacts } = useContext(AppCtx);
    const { contactData } = props;
    const [updatedContact, setUpdatedContact] = useState({});

    const updateContact = (updatedContact) => {
        const updatedContacts = contacts.map(el => {
            if (el.id === updatedContact.id) {
                const updatedTarget = Object.assign(el, { ...updatedContact, updatedDate: new Date, updated: true });
                return updatedTarget;
            }
            return el;
        });

        setContacts(updatedContacts);
        handleCloseEditDialog();
    }

    const handleChange = (e) => {
        setUpdatedContact({
            ...updatedContact,
            [e.target.id]: `${e.target.value}`
        });
    };

    const handleDOBChange = (newValue) => setUpdatedContact({ ...updatedContact, 'dateOfBirth': `${newValue}` });

    useEffect(() => {
        setUpdatedContact({ ...contactData });
    }, [contactData]);

    return (
        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
            <DialogTitle>New Contact</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Avatar src="/broken-image.jpg" sx={{ bgcolor: deepOrange[500], height: 80, width: 80, margin: '1rem auto', fontSize: 30 }} />
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.firstName}
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.lastName}
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="mobile"
                    label="Mobile"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.mobile}
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.email}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{ width: '100%', margin: '.5rem 0' }}
                        label='Birthday'
                        value={dayjs(updatedContact.dateOfBirth)}
                        onChange={handleDOBChange}
                    />
                </LocalizationProvider>
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.address}
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="group"
                    label="Add to group"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={updatedContact.groups}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseEditDialog}>Cancel</Button>
                <Button onClick={() => updateContact(updatedContact)} disabled={!updatedContact.firstName && !updatedContact.mobile}>Update</Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateDialog;