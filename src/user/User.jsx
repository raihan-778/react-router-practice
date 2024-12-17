import { Link } from "react-router";


const User = ({user}) => {
    const  {id,name,email,phone,website}=user

    const userStyle={
        padding:"10px",
        border: "3px solid green",
        borderRadius:"10px"

    }

   
    return (
        <div style={userStyle}>
            <h2>User Name: {name}</h2>
            <h5>User Email:{email}</h5>
            <p>Phone Number:{phone}</p>
            <p><small>Website:{website}</small></p>
            <Link to ={`/user/${id}`}>User Details</Link>
        </div>
    );
};

// User.propTypes={
//     user:PropeTypes.object
// }

export default User;