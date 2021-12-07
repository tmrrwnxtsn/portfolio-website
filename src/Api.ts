import {GithubRepoProps} from "./GithubRepo";

const fetchingURL = 'https://api.github.com/users/tmrrwnxtsn/repos'

export const getData = async () => {
    return await fetch(fetchingURL)
        .then(res => res.json())
        .then((res: GithubRepoProps[]) => res)
};