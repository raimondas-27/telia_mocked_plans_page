import React, {Component} from 'react';
import './App.css';
import Commitment from "./Components/Commitment";
import HaveServices from "./Components/HaveServices";
import MobilePlan from "./Components/Mobile-plan";



class App extends Component {
   state = {}

   render() {
      return (
          <div className="App">
             <Commitment/>
             <HaveServices/>
             <MobilePlan/>
          </div>
      );
   }
}

export default App;
