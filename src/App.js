import React, {Component} from 'react';
import './App.css';
import Commitment from "./Components/Commitment";
import HaveServices from "./Components/HaveServices";
import MobilePlan from "./Components/Mobile-plan";
import 'font-awesome/css/font-awesome.css';



class App extends Component {
   state = {}

   render() {
      return (
          <div className="App">
        <h1>Mobiliojo ryšio planai</h1>
        <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
        <div className="controls">
          <Commitment />
          <HaveServices />
        </div>
        <main className="plan-cards">
          <MobilePlan />
        </main>
      </div>
      );
   }
}

export default App;
