
import './App.css';
import { Component } from 'react';


class App extends Component{
constructor(props){
  super(props);
  this.state = {
    posts:[]
    }
}
 
  



getEmails = () =>{
  
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(
      response => {
        this.setState({
          posts:response
        })
    })
    
}

render(){
  const{name, email, body}= this.state;
  return (

      <div >
      <h1 align='center'>email</h1>
      <button onClick = {this.getEmails}>get emails</button>
      {this.state.posts.map(post=><div key={post.id}>{post.id}.{post.email}</div>)}
      </div>
  )
}


}

export default App;
