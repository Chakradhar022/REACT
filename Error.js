import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="Error">
            <h1>OOPS!</h1>
            <h2>Something Went Wrong</h2>
            <h2>{err.status}:{err.statusText}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}
export default Error;