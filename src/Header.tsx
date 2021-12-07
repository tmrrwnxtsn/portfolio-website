import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
    user: string;
}

export default function Header({user}: HeaderProps) {
    return (
        <AppBar position='relative'
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant='h6' color='default' noWrap sx={{flexGrow: 1}}>
                    Репозитории пользователя: {user}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}