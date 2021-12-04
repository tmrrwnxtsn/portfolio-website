import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {ProjectCardProps} from "./Interfaces";

export default function ProjectCard({image, imageLabel, title, date, tag, description, url}: ProjectCardProps) {
    return (
        <Grid item xs={12} md={12}>
            <CardActionArea component='a' href={url}>
                <Card sx={{display: 'flex'}}>
                    <CardMedia component='img' sx={{width: 250, display: {xs: 'none', sm: 'block'}}}
                               image={image}
                               alt={imageLabel}/>
                    <CardContent sx={{flex: 2}}>
                        <Typography component='h2' variant='h4'>
                            {title}
                        </Typography>
                        <Typography variant='subtitle1' color='text.secondary'>
                            {date} | {tag}
                        </Typography>
                        <Typography variant='subtitle1' paragraph>
                            {description}
                        </Typography>
                        <Typography variant='subtitle1' color='primary'>
                            Подробнее
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}