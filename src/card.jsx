export default function User({user}){

    const {avatar_url,name,followers,following,login,html_url,
        public_repos,created_at,bio} = user;

    const createdDate = new Date(created_at);
    
    return (
    <div className="user">
        <div className="phcontainer">
            <img src={avatar_url} className="photo" alt='User'/>
        </div>
        <div>
            <h3>{name || login}</h3>
        </div>
        <p> 
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us',{month : 'short',})} ${createdDate.getFullYear()}`}
        </p>
        <div className="fol">
            <p><b>Followers</b></p>
                <p>{followers}</p>
        </div>
        <div className="fol">
            <p><b>Following</b></p>
                <p>{following}</p>
        </div>
        <div className="fol">
            <p><b>Repositories</b></p>
                <p>{public_repos}</p>
        </div>
        <div className="folb">
            <p>{ bio || null }</p>
        </div>
        <div>
            <a href={html_url}><button className="vp">View in Github</button></a>
        </div>

    </div>
    );
}