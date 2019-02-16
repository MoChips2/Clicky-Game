import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import players from "./player.json";
import ImageBox from "./components/ImageBox";


class App extends Component {

  state = {
    players
  };

  


  render() {
    return (
      <Wrapper>
        <Navbar>
        {["Clicky Game!", "Click a player to begin!", "Score: 0"]}
        </Navbar>
        <Title>{}Click A Player To Begin!</Title>
        <ImageBox>
        {this.state.players.map(player => (
          <PlayerCard
            name={player.name}
            image={player.image}
          />
        ))}
        </ImageBox>
      </Wrapper>
    );
  }
}

export default App;
