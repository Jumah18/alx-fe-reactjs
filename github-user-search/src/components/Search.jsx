import { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const SearchUser = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setUsers([]);

        const data = await fetchUsers(username, location, minRepos);
        if (data) {
            setUsers(data.items);
        } else {
            setError("No users found with the specified criteria.");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <input 
                type="text" 
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <input 
                type="number" 
                placeholder="Min Repositories" 
                value={minRepos} 
                onChange={(e) => setMinRepos(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
            />
            <button 
                onClick={handleSearch} 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
            >
                Search
            </button>
            {loading && <p className="mt-4 text-gray-600">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            <div className="mt-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 border rounded mb-2 flex items-center">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 className="font-bold">{user.login}</h3>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos || 'N/A'}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub Profile</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchUser;
