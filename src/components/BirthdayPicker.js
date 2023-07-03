import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BirthdayPicker = (props) => {
    const [value, setValue] = useState(dayjs(props.dateTest));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{ width: '100%', margin: '.5rem 0' }}
                label='Birthday'
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </LocalizationProvider>
    )
}

export default BirthdayPicker;