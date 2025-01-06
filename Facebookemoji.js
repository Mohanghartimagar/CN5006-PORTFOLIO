import './App.css'
import React from 'react'
import like7 from './Like.jpg';
import Love from './Sad.jpg';
import happy from './Happy.jpg';
class FacebookEmojiCounter extends React.Component
{
 constructor(props)
{
 super(props);
 this.state = {number : 0};
 this.increment = this.increment.bind(this);
 this.pic=null
 if (this.props.type==="Love")
 this.pic=Love
 else if (this.props.type==="Like")
 this.pic=like7
 else if (this.props.type==="happy")
 this.pic=happy
 }

increment() {
 this.setState((prevState)=>{
    return {number : prevState.number+1}
 })
 }

 render() {
 return (
 <div>
 <h5>It is {this.state.number}{this.props.type}.</h5>
 <button onClick={this.increment}>
 <img src={this.pic} alt=" "/>
 <b>{this.state.number} </b>
 </button>
 </div>
 );
 }
}
export default FacebookEmojiCounter; 
