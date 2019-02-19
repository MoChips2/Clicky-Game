import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import players from "./player.json";
import ImageBox from "./components/ImageBox";
import Footer from "./components/Footer"


const shuffle = arr => {
  let ctr = arr.length;

  while (ctr > 0) {
      let index = Math.floor(Math.random() * ctr);
      ctr--;
      let temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
  }
  return arr;
}


class App extends Component {

  state = {
    players,
    currentScore: 0,
    playersClicked: [],
    gameEnd: false,
    response: "Click A Player to Begin!"
  };

  clickedPlayer = id => {
    console.log( `id: ${id}`)
    if(!this.state.playersClicked.includes(id)){
      this.addPoint();
      this.state.playersClicked.push(id);
      console.log(this.state.playersClicked);
      this.setState({ 
        gameEnd: false,
        response: "Correct!"
       });
    }
    else  {
      this.endGame();
    }
    shuffle(players);
  }

  addPoint = () => {
    let score = this.state.currentScore + 1;
    console.log(`score: ${score}`);
    this.setState({ currentScore: score });
  }

  endGame = () => {
    this.setState({ 
      gameEnd: true,
      currentScore: 0,
      response: "Click A Player to Begin!",
      playersClicked: []
    });
    console.log(this.state.gameEnd);
    alert(
   `Too bad, Game Over! 
    Your score was: ${this.state.currentScore}`
    )
  }

  


  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          response={this.state.response}
        />
        <Title/>
        <ImageBox>
        {this.state.players.map(player => (
          <PlayerCard
            clickedPlayer={this.clickedPlayer}
            key={player.id}
            id={player.id}
            name={player.name}
            image={player.image}
          />
        ))}
        </ImageBox>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
