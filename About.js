import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
       
    }
    render(){
        // const {name,id}=this.state.userInfo;
        return(
                    <div className="About">
                    <h1>ABOUT</h1>
                    <h2>This is a React App</h2>
                    <UserContext.Consumer>
                        {
                            (data)=>{console.log(data);
                                return (<h2>{data.loggedInUser}</h2>)
                            }
                        }
                    </UserContext.Consumer>
                    <UserClass name={"Chakri"} location={"Gullapalli"}/>
                    </div>
                ) 
    }
}

// const About=()=>{
//     return(
//         <div className="About">
//         <h1>ABOUT</h1>
//         <h2>THis is a React App</h2>
//         <UserClass name={"Chakri"} location={"Gullapalli"}/>
//         </div>
//     )
// };
export default About;