import { Component } from "react";
import UserClass from "./UserClass";

export default class ABout extends Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }
   componentDidMount(){
    console.log("Parent Component Did Mount");
   }

  render(){
    console.log("Parent Render");
  return (
    <div>
      <UserClass name={"First"} /> 
      <UserClass name={"Second"} /> 
    </div>
  )
}
}





{/* <User name={"Deepanshu Bisht (Function)"} city={"Delhi"} email={"deepanshubisht00@gmail.com"}/> */}