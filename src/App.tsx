import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './Header';
import GithubRepoList from "./GithubRepoList";
import {GithubRepoProps} from "./GithubRepo";
import {getData} from "./Api";

const theme = createTheme();

export default function App() {
    const [repositories, setRepositories] = useState<GithubRepoProps[]>([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        getData()
            .then((res) => {
                console.log(res)
                setRepositories(res)
                if (res[0].owner) {
                    setUser(res[0].owner.login)
                }
            })
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header user={user}/>
            <GithubRepoList repositories={repositories}/>
        </ThemeProvider>
    );
}