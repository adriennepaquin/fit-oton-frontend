import Header from './Header'
import HomePage from './HomePage'
import { useEffect, useState } from "react"

function PageContent(){

    const [userList, setUserList] = useState([])
    const [workoutList, setWorkoutList] = useState([])
    const [user, setUser] = useState("")

    console.log(user)

    useEffect(() => {
        fetch("http://127.0.0.1:9393/workouts")
        .then((resp) => resp.json())
        .then(workouts => {
            // console.log(workouts);
            setWorkoutList(workouts)
        })

        fetch("http://127.0.0.1:9393/users")
        .then((resp) => resp.json())
        .then(users => {
            // console.log(users);
            setUserList(users)
        })
    }, [])

    return(
        <div>
            <Header />
            <HomePage users={userList} setUser={setUser}/>
        </div>
    )
}

export default PageContent