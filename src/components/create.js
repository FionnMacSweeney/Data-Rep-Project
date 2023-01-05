import React from "react";
import axios from "axios";

export class Create extends React.Component {

  // constructor sets up initial state for the component binds the methods to the component's this
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeGameTitle = this.onChangeGameTitle.bind(this);
    this.onChangeGameArt = this.onChangeGameArt.bind(this);
    this.onChangeGameInfo = this.onChangeGameInfo.bind(this);
    this.onChangePublisher = this.onChangePublisher.bind(this);
    
    this.state = {
      title: "",
      art: "",
      info: "",
      publisher: ""
    }
  }

  // handleSubmit sends a post request to the server with the game data, and resets the state of the component to its initial values
  handleSubmit(e) {
    e.preventDefault();
    console.log(`Button clicked 
    ${this.state.title},
    ${this.state.art},
    ${this.state.info},
    ${this.state.publisher}`);

    // create game object from state values
    const game = {
      title: this.state.title,
      art: this.state.art,
      info: this.state.info,
      publisher: this.state.publisher
    }

    axios.post("http://localhost:4000/api/games", game)
      .then()
      .catch();

    this.setState({
      title: "",
      art: "",
      info: "",
      publisher: ""
    })
  }

  onChangeGameTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangeGameArt(e) {
    this.setState({
      art: e.target.value
    })
  }
  onChangeGameInfo(e) {
    this.setState({
      info: e.target.value
    })
  }
  onChangePublisher(e) {
    this.setState({
      publisher: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Submit Game info!</h3>
        <form onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>      
          

          <div className="form-group">
            <label>Add Game Title: </label>
            <input 
              type="text"
              className="form-control"
              style={{ width: "150%", margin: "16px 0" }}
              value={this.state.title}
              onChange={this.onChangeGameTitle}
            />
          </div>

          <div className="form-group">
            <label>Add Game Art Link: </label>
            <input 
              type="text"
              className="form-control"
              style={{ width: "50%", margin: "16px 0" }}
              value={this.state.art}
              onChange={this.onChangeGameArt}
            />
          </div>

          <div className="form-group">
            <label>Add Game Info: </label>
            <input
              type="text"
              className="form-control"
              style={{ width: "150%", margin: "16px 0" }}
              value={this.state.info}
              onChange={this.onChangeGameInfo}
            />
          </div>
        

          <div className="form-group">
            <label>Add Publisher: </label>
            <input type="text"
              className="form-control"
              style={{ width: "50%", margin: "16px 0" }}
              value={this.state.publisher}
              onChange={this.onChangePublisher}
            />
          </div>

          <input type="submit" value="Add Game" />
        </form>
      </div>
    );
  }
}





