import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class GameItem extends React.Component {
  constructor(){
    super();
    this.DeleteGame = this.DeleteGame.bind(this);
  }

  // function to delete a game from the database
  DeleteGame(e){
    e.preventDefault();

    axios.delete('http://localhost:4000/api/games/'+this.props.game._id)
      .then(() => { this.props.Reload(); })
      .catch();
  }

  // render game item with its details, edit and delete buttons
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px" }}>
        <Card>
          <Card.Header>{this.props.game.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.game.art} />
              <footer >
                {this.props.game.info}
                <br />
                {this.props.game.publisher}
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={'/edit/'+this.props.game._id} className="btn btn-primary">Edit</Link>
          <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>
                </Card>
            </div>
        );
    }
}

