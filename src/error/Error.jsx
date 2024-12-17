import { Link, useRouteError } from "react-router";


const Error = () => {

    const error= useRouteError()
    console.log(error)
    return (
        <div>
           <h1>Oops!!!</h1> 
           <p>{error.statusText||error.message}</p>
           {
            error.status===404&& <div>
                <h3>
                    page not found
                </h3>
                <p>Go back where you form</p>
                <Link to ="/">Go Back</Link>
            </div>
           }
           
        </div>
    );
};

export default Error;<h1>Oops!!!</h1>