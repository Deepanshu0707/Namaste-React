import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            count : 1,
            count2: 2,
        }
        console.log(this.props.name + "Child Constructor");
    }
     
    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount");
    }

  render() {
  const { name} = this.props;
  const {count, count2} = this.state;
  console.log(this.props.name + "Child Render");
    return (
      <div className='about'>
        <h1>{count} --- --- {count2}</h1>
        <button onClick={()=>{
            this.setState({
                count : this.state.count + 1,
                count2: this.state.count2 + 1,
            })
        }}>Increase Count</button>
        <h2>{name}</h2>
      </div>
    )
  }
}
