import { useState } from 'react';
import { fetchUserData } from '../services/githubService';


const SearchUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!username.trim()) return;
        setLoading(true);
        setError(null);
        setUserData(null);

        const data = await fetchUserData(username);
        if (data) {
            setUserData(data);
        } else {
            setError("Looks like we can't find the user");
        }
        setLoading(false);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter GitHub username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.name} width={100} />
                    <h2>{userData.name}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
            )}
        </div>
    );
};

export default SearchUser;

// ["onSubmit", "preventDefault", "form"]
// ["login", "Looks like we cant find the user"]