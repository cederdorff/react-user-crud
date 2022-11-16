import { useEffect, useState } from "react";
import User from "./components/User";
import UserForm from "./components/UserForm";

function App() {
    const [users, setUsers] = useState([]); // state to handle the data (users)
    // users: name of the state
    // setUsers: name of the function to set the state
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        //the side effect - fetch users
        getData();
    }, []); // <--- "[]" VERY IMPORTANT!!!

    async function getData() {
        const response = await fetch("https://race-crud-rest-default-rtdb.firebaseio.com/users.json"); // read all users from firebase
        const data = await response.json();
        const array = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
        setUsers(array); // set the state with fetched data
    }

    function handleShowUser(user) {
        setSelectedUser(user);
        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: document.body.scrollHeight
            });
        }, 100);
    }

    return (
        <div>
            <header className="topbar">
                <h1>React User CRUD</h1>
            </header>
            <main className="page">
                <section className="grid-container">
                    {users.map(userObj => (
                        <User user={userObj} key={userObj.id} reload={getData} showUser={handleShowUser} />
                    ))}
                </section>

                <UserForm reload={getData} />
                {selectedUser.id && <UserForm reload={getData} user={selectedUser} />}
            </main>
        </div>
    );
}

export default App;
