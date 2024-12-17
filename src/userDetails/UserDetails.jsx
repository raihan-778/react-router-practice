import { useLoaderData } from "react-router";


const UserDetails = () => {
    const user=useLoaderData()
    return (
        <div>
            <h2>User Name:{user.name}</h2>
        </div>
    );
};

export default UserDetails;