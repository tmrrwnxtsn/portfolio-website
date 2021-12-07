import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

export interface GithubRepoProps {
    name: string;
    description: string;
    html_url: string;
    owner?: {
        login: string;
    }
}

export default function GithubRepo({name, description, html_url}: GithubRepoProps) {
    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardContent sx={{flexGrow: 1}}>
                <Typography component="h2" variant="h5">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                    {description}
                </Typography>
                <Link variant="subtitle1" color="primary" href={html_url}>
                    Перейти к репозиторию
                </Link>
            </CardContent>
        </Card>
    )
}