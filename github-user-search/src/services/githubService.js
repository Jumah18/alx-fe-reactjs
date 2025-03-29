import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchUsers = async (username, location, minRepos) => {
    try {
        let query = `${username ? username : ''}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>${minRepos}`;

        const response = await axios.get(`${BASE_URL}${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};