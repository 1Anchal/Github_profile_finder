import { useEffect, useState } from "react";
import User from "./card";

export default function ProfileFinder() {
    const [userName, setUserName] = useState('1Anchal');
    const [userData, setuserData] = useState(null);
    const [loading,setloading] = useState(true)

    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        setloading(true)
        console.log(data);
        if(data){
            setuserData(data)
            setloading(false)
            setUserName(userName)
        }

    }

    function handleSearch() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if(loading){
        return <h1>Loading data!please wait</h1>
    }

    return (
        <div className="card">
            <h2 className="head">GITHUB PROFILE FINDER</h2>
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
            <div className="content">
            {
                userData !== null ?<User user= {userData} />:null
            }
            </div>
        </div>
    );
}
