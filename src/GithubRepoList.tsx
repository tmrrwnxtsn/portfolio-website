import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GithubRepo, {GithubRepoProps} from "./GithubRepo";

interface GithubRepoListProps {
    repositories: GithubRepoProps[];
}

export default function GithubRepoList({repositories}: GithubRepoListProps) {
    return (
        <Container sx={{py: 8}} maxWidth="lg">
            <Grid container spacing={4}>
                {repositories.map((repo) => (
                    <Grid item key={repo.name} xs={12} sm={6} md={6}>
                        <GithubRepo name={repo.name} description={repo.description} html_url={repo.html_url}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}