import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="static" sx={{ mb: 3 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Job Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;