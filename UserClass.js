import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Initial",
                id:"dummy"
            }
        }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Chakradhar022");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {login,id,avatar_url}=this.state.userInfo;
        return (
            <div className="border-2 border-gray-600 text-center font-bold">
                {/* <h1>Count : {count}</h1>
                //NEVER UPDATE STATE VARIABLES DIRECTLY
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>
                Count button
                </button> */}


                <h1>Name: {login}</h1>
                <h2>ID: {id}</h2>
                <h2>Contact: @cknmvk</h2>
                <div className="">
                <img className="w-52 h-52 "src={avatar_url}></img>
                </div>
            </div>
        )
    }
}
export default UserClass;