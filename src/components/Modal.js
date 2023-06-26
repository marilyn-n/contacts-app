import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


const Modal = (props) => {
    const { handleClose, open } = props;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Contact</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Avatar sx={{ bgcolor: deepOrange[500], height: 80, width: 80, margin: '1rem auto', fontSize: 30 }}>N</Avatar>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Last name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Mobile"
                    type="telephone"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal;