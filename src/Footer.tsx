import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
import {footerData} from './Data'

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href={footerData.siteUrl}>
                {footerData.owner}
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container maxWidth='lg'>
            <Box component='footer' sx={{pt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Stack direction="row" spacing={3}>
                    {footerData.social.map((socialElem) => (
                        <Link display="block" href={socialElem.url}>
                            <socialElem.icon/>
                        </Link>
                    ))}
                </Stack>
            </Box>
            <Box component='footer' sx={{pt: 1, pb: 3}}>
                <Copyright/>
            </Box>
        </Container>
    );
}