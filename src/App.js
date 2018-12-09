import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Header from "./components/Header/index.js";
import Wrapper from "./components/Wrapper";
import ToonCard from "./components/toonCard";
import Footer from "./components/Footer";
import toons from "./toons.json";

class App extends Component {
  //this.state.toons from the toons json array
  state = {
    toons,
    click: false,
    clicked: false,
    status: "Click an Image to Start!",
    score: 0,
    high: 0,
  };

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = () => {
    this.setState({ click: !this.state.click });
    this.shuffleArray(toons);
        if (this.state.clicked === false) {
      this.setState({
        clicked: true,
        status: "You guessed correctly!",
        score: this.state.score + 1,
        high: this.state.high + 1,
      })
    }
    else if(this.state.clicked === true){
      this.setState({
        clicked: false,
        status: "You guessed wrong!",
        score: 0,
        high: this.state.high,
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar
          status={this.state.status}
          score={this.state.score}
          high={this.state.high}
        />
        <Header />
        <Wrapper>
          {toons.map(toon => (
            <ToonCard
              id={toon.id}
              key={toon.id}
              name={toon.name}
              image={toon.image}
              onClick={this.handleClick}
              clicked={false}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );

  }
};
export default App;
