function HomePage({ users, setUser }){

    function handleClick(user){
        setUser(user)
        console.log(user)
    }

    return(
        <div>
            <h2>Welcome!</h2>
            <h3>Click your name to log in!</h3>
            <ul>
            {users.map(user => <li key={user.id} onClick={() => handleClick(user)}>{user.name}</li>)}
            </ul>
            
        </div>
    )
}

export default HomePage