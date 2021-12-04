import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <AppBar position='relative' color='inherit'
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant='h6' color='inherit' noWrap sx={{flexGrow: 1}}>
                    Павел Курмыза | Backend-разработчик
                </Typography>
                <nav>
                    <Link variant='button' color='text.primary' href='#' sx={{my: 1, mx: 1.5}}>
                        Главная
                    </Link>
                    <Link variant='button' color='text.primary' href='#' sx={{my: 1, mx: 1.5}}>
                        Проекты
                    </Link>
                    <Link variant='button' color='text.primary' href='#' sx={{my: 1, mx: 1.5}}>
                        Обо мне
                    </Link>
                </nav>
                <Button href='#' variant='outlined' sx={{my: 1, mx: 1.5}}>
                    Связаться
                </Button>
            </Toolbar>
        </AppBar>
    );
}