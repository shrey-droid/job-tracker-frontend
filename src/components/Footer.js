import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Job Tracker by Shrey Patel
            </Typography>
        </Box>
    );
}

export default Footer;
