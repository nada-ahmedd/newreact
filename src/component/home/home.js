import { Component } from "react";
import imageHome from './home.jpg';
class Home extends Component {
  render() {
    return (
     <div className="home-container">
      <img src={imageHome} alt="Home" className="home-image" />
      <h1 className="home-welcome">Welcome to My Website</h1>
    </div>
    );
  }
}
export default Home;
