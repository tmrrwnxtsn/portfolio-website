import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SectionTitle from "./SectionTitle";
import ProjectsList from "./ProjectsList";
import Pagination from "@mui/material/Pagination";
import {ProjectsSectionProps} from "./Interfaces";

export default function ProjectsSection({title, projectCards}: ProjectsSectionProps) {
    return (
        <Container maxWidth='lg'>
            <Box sx={{pt: 3, pb: 3}}>
                <SectionTitle title={title}/>
            </Box>
            <Box sx={{pt: 3, pb: 3}}>
                <ProjectsList projectCards={projectCards}/>
            </Box>
            <Box sx={{pt: 3, pb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Pagination count={10} variant='outlined' shape='rounded' size='large'/>
            </Box>
        </Container>
    );
}