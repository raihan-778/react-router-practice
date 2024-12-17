import { useNavigate } from "react-router";


const Post = ({post}) => {
    const {id,userId,title,body,}=post

    const navigate=useNavigate()

    const handlePostDetails=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h1> Post Id: {id}</h1>
            <h3>Post Title:{title}</h3>
           <button onClick={handlePostDetails}>Show Details</button> 
            
        </div>
    );
};

export default Post;