import React from 'react';

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      likes: "⭐",
      updated: false
    };

  }

  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + "⭐",
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes > 5,
          updated: false
        };
      });

    }
  }

  render(){

    return(
      <div>
        <button onClick={this.updateLikes}>Rating</button>
        <p>{this.state.likes}</p>
      </div>
    );
  }
}

export default Likes;