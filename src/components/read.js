import React from "react";
import { Game } from "./games";
import axios from "axios";

export class Read extends React.Component{
    
  constructor(){
    super();
    //bind to componentdidmound unstead of creating a second function that performs the same function
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    //goes off asynch to server
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        this.setState({ games: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  state = {
    games: [ ]
  }
  
  render() {
    return(
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3>Games Data Base</h3>
        <Game games={this.state.games} Reload={this.componentDidMount}></Game>
      </div>
    );
  }
}