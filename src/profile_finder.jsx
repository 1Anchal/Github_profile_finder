import { useEffect, useState } from "react";

export default function ProfileFinder() {
    const [userName, setUserName] = useState('1Anchal');

    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        console.log(data);
    }

    function handleSearch() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    return (
        <div className="card">
            <div className="cardin">
                <input
                    name="search-by-name"
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSearch} className="btsearch">Search</button>
            </div>
        </div>
    );
}
