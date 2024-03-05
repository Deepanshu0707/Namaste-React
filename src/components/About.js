import { Component } from "react";
import UserClass from "./UserClass";

export default class ABout extends Component {
  constructor(props){
    super(props);
   
    console.log("Parent Constructor");
  }
   async componentDidMount(){
    console.log("Parent Component Did Mount");
   }

  render(){
    console.log("Parent Render");
  return (
    <div>
      <UserClass /> 
    </div>
  )
}
}





{/* <User name={"Deepanshu Bisht (Function)"} city={"Delhi"} email={"deepanshubisht00@gmail.com"}/> */}