import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BirthdayPicker = (props) => {
    const { label, dateValue, handleDateOfBirth } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{ width: '100%', margin: '.5rem 0' }}
                label={label}
                value={dayjs(dateValue)}
                onChange={(newValue) => handleDateOfBirth(newValue)}
            />
        </LocalizationProvider>
    )
}

export default BirthdayPicker;