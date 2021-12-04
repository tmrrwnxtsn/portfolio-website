import React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ProjectCard from './ProjectCard';
import {ProjectListProps} from "./Interfaces";

export default function ProjectsList({projectCards}: ProjectListProps) {
    return (
        <Stack divider={<Divider orientation='horizontal' flexItem/>} spacing={4}>
            {projectCards.map((projectCard) => (
                <ProjectCard image={projectCard.image} imageLabel={projectCard.imageLabel}
                             title={projectCard.title} date={projectCard.date} tag={projectCard.tag}
                             description={projectCard.description} url={projectCard.url}/>
            ))}
        </Stack>
    );
}