import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            userInfo: {
                name: "XYZ",
                
              }
        }
        console.log("Child Constructor");
    }
     
   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Deepanshu0707");
        const json = await data.json();
        this.setState({
        userInfo : json,
        });

        console.log("Child Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Child Component Is Updated.");
    }

    componentWillUnmount(){
        console.log("You Changed the page so component is Unmount");
    }

  render() {
  
  console.log("Child Render");
    return (
      <div className='about'>
        <img src={this.state.userInfo.avatar_url} alt="Avatar-Image" className='about_image'/>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>ID: {this.state.userInfo.id}</h3>
        <h4>Github: {this.state.userInfo.login}</h4>

      </div>
    )
  }
}
