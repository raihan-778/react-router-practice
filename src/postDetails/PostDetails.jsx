import { useLoaderData, useNavigate, useParams } from "react-router";


const PostDetails = () => {
    const {id,title,body}=useLoaderData()
const {postId,userId}=useParams()
    const navigate=useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }

    console.log("Post Details",postId,userId)
    return (
        <div>
            <h1>Post Id:{id}</h1>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;