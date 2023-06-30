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
import BirthdayPicker from "./BirthdayPicker";

const UpdateDialog = (props) => {
    const { openEditDialog, handleCloseEditDialog, contacts, setContacts } = useContext(AppCtx);
    const [contactDetails, setContactDetails] = useState({});

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
        setContactDetails({
            ...contactDetails,
            [e.target.id]: `${e.target.value}`
        })
    }

    useEffect(() => {
        setContactDetails({ ...props.contact });
    }, [props.contact]);

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
                    value={contactDetails.firstName}
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
                    value={contactDetails.lastName}
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
                    value={contactDetails.mobile}
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
                    value={contactDetails.email}
                    onChange={handleChange}
                />
                {/* <BirthdayPicker label='Birthday'  /> */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={contactDetails.address}
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
                    value={contactDetails.groups}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseEditDialog}>Cancel</Button>
                <Button onClick={() => updateContact(contactDetails)} disabled={!contactDetails.firstName && !contactDetails.mobile}>Update</Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateDialog;