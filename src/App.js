import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import players from "./player.json"


class App extends Component {

  state = {
    players
  };



  render() {
    return (
      <Wrapper>
        <Navbar>{
          ["Clicky Game", "Click a player to begin!", "Score: 0"]}
        </Navbar>
        <Title>This is an App</Title>
        {this.state.players.map(player => (
          <PlayerCard
            name={player.name}
            image={player.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
