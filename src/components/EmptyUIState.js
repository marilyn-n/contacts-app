import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';

const EmptyStateUI = (props) => {
    const { label } = props;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '15rem', justifyContent: 'center' }}>
            <ContactsIcon sx={{ fontSize: '3rem', color: '#ececec' }} />
            <Typography sx={{ color: '#939393', margin: '1rem 0' }}>{label}</Typography>
        </Box>
    )
}

export default EmptyStateUI