import React from 'react';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
    return (
        <Typography component='h1' variant='h3' align='left' color='text.primary'>
            {title}
        </Typography>
    );
}