import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './Header';
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";
import {projectSectionData} from "./Data";

const theme = createTheme();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <ProjectsSection title={projectSectionData.title} projectCards={projectSectionData.projectCards}/>
            <Footer/>
        </ThemeProvider>
    );
}