import React, { useState, useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import GroupsIcon from '@mui/icons-material/Groups';
import { blueGrey } from '@mui/material/colors';
import { AppCtx } from '../context/appContext';
import Autocomplete from '@mui/material/Autocomplete';

const CreateGroupDialog = () => {
    const { openGroupDialog, handleGroupClose, contacts, groups, setGroups } = useContext(AppCtx);

    const [group, setGroup] = useState(
        {
            groupName: '',
            members: [],
        }
    );


    const handleChange = (e) => {
        setGroup({
            ...group,
            [e.target.id]: `${e.target.value}`
        });
    }

    const handleMembersChange = (event, newValue) => {
        setGroup({
            ...group,
            'members': newValue
        });
    }

    const clearForm = () => {
        setGroup({
            groupName: '',
            members: [],
        })
    }

    const addNewGroup = (theGroup) => {
        handleGroupClose();
        clearForm();

        const newGroup = {
            ...theGroup,
            id: crypto.randomUUID,
            createdDate: new Date(),
        }

        setGroups([...groups, newGroup]);
    }

    useEffect(() => {
        localStorage.setItem('storedGroups', JSON.stringify(groups));
    }, [groups]);

    return (
        <Dialog open={openGroupDialog} onClose={handleGroupClose}>
            <DialogTitle>New Group</DialogTitle>
            <DialogContent sx={{ width: 400 }}>
                <DialogContentText>
                    <Avatar sx={{ bgcolor: blueGrey[600], height: 80, width: 80, margin: '1rem auto' }}>
                        <GroupsIcon sx={{ fontSize: 50 }} />
                    </Avatar>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="groupName"
                    label="Group Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={group.groupName}
                    onChange={handleChange}
                    sx={{ margin: '.75rem 0' }}
                />
                <Autocomplete
                    multiple
                    id="members"
                    options={contacts}
                    getOptionLabel={(option) => option.firstName}
                    onChange={handleMembersChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Group Members"
                            placeholder='members'
                        />
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleGroupClose}>Cancel</Button>
                <Button onClick={() => addNewGroup(group)} disabled={!group.groupName && !group.members.length}>Done</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateGroupDialog;