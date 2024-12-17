import { useLoaderData } from "react-router";
import User from "../user/User";

import "./Users.css";
const Users = () => {

    const users=useLoaderData()
    console.log(users)
    return (
        <div >
           <h2>This is user component</h2> 
          <div className="users">
            {users.map(user=><User key={user.id} user={user}></User>)}
          </div>
        </div>
    );
};

export default Users;