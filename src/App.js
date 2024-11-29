import { Component } from "react";
import Header from "./component/header/header";
import Home from "./component/home/home";
import Footer from "./component/footer/footer";
import"./index.css"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer/>
      </div>
    );
  }
}
export default App;
