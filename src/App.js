//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./image.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    images,
    clickedImage: [],
    score: 0
  };

//when you click on a card ... the image is taken out of the array
  imageClick = event => {
    const currentImage = event.target.id;
    console.log(currentImage);
    const ImageAlreadyClicked =
      this.state.clickedImage.indexOf(currentImage) > -1;

//if you click on an image that has already been selected, the game is reset and cards reordered
    if (ImageAlreadyClicked) {
      this.setState({
        image: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedImage: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available image, your score is increased and cards reordered
    } else {
      this.setState(
        {
          image: this.state.images.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          score: this.state.score + 1
        },
//if you get all images correct, the game resets        
        () => {
          if (this.state.score === 8) {
            alert("Yay! You Win!");
            this.setState({
              image: this.state.images.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

// render components
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.images.map(images => (
            <Card
              imageClick={this.imageClick}
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;