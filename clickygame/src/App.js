import React, { Component } from 'react';
import Cards from "./components/Cards";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Rules from "./components/Rules";
import images from "./images.json";
import "./App.css";


class App extends Component {
  state= {
    score: 0,
    highScore: 0,
    images: images
  };

  randomRender = id => {
    this.state.images.forEach((image) => {
      if (image.id === id) {
        if (image.clicked) {
          alert("You Lost!! This card was previously selected.");
          this.setState({})
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          image.clicked =true;
        }
        if(this.state.score >= this.state.highScore){
          this.newHighScore();
        }
        }
        });
    }

    randomOrganize = (array) => {
     let copy = [], n = array.length, i;
     while (n) {
       i = Math.floor(Math.random() * array.length);
       if (i in array) {
         copy.push(array[i]);
         delete array[i];
         n--;
       }
     }
     this.setState({ images: copy });

    }

    updateScore = () => {
      this.setState((newState) => ({
        score: newState.score + 1

      }), () => this.winning())
    }

    newHighScore = () => {
      this.setState((newState) => ({
        highScore: newState.score
      }))
    }
    wining = () => {
      if (this.state.score === this.state.images) {
        alert("YOU WIN! Congratulations!")
        this.setState({});
        this.resetGame();
      }
      else {
        setTimeout (() => {
          this.randomOrganize(this.state.images)
        }, 500);
      }
    }
    resetGame = () => {
      this.state.images.forEach((image) => {
        image.clicked =false;
      })
      this.setState({ score:0 })
    }

    //Map over this.state.images and render Cards component for each friend object

   render() {
     return (
       <Wrapper>
         <Header score={this.state.score} highScore={this.state.highScore} />
         <Rules />
         {this.state.images.map(image => {
           return < Cards
          {...image}
          key={image.id}
         randomRender={this.randomRender}
        randomOrganize={() => this.randomOrganize(this.state.images)} />;
         })}
         </Wrapper>
     )};   
   }


   export default App;

