import React, { useEffect, useContext, useState } from "react";
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
import moment from 'moment';

const CreateContactDialog = (props) => {
    const { handleClose, open } = props;
    const { contacts, setContacts } = useContext(AppCtx);
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        address: '',
        birthday: '',
        groups: [],
        // groups: [{ groupName: 'Stared' }, { groupName: 'Family' }],
        isStared: false,
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.id]: `${e.target.value}`
        });
    }

    const addNewContact = (item) => {
        clearForm();
        handleClose();
        const newContact = {
            ...item,
            id: crypto.randomUUID(),
            createdDate: new Date(),
        }

        setContacts([...contacts, newContact]);
    }

    const clearForm = () => setContact({
        firstName: '',
        lastName: '',
        mobile: '',
    });

    const handleCancel = () => {
        clearForm();
        handleClose();
    }

    useEffect(() => {
        localStorage.setItem('storedContacts', JSON.stringify(contacts));
    }, [contacts]);

    return (
        <Dialog open={open} onClose={handleClose}>
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
                    value={contact.firstName}
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
                    value={contact.lastName}
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
                    value={contact.mobile}
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
                    value={contact.email}
                    onChange={handleChange}
                />
                {/* <TextField
                    autoFocus
                    margin="dense"
                    id="birthday"
                    label="Birthday"
                    type="date"
                    fullWidth
                    variant="outlined"
                    value={contact.birthday}
                    onChange={handleChange}
                /> */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={contact.address}
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
                    value={contact.groups}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={() => addNewContact(contact)} disabled={!contact.firstName && !contact.mobile}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateContactDialog;