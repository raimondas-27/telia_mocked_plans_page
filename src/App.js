import React, {Component} from 'react';
import './App.css';
import Commitment from "./Components/Commitment";
import HaveServices from "./Components/HaveServices";
import MobilePlan from "./Components/Mobile-plan";
import 'font-awesome/css/font-awesome.css';
import axios from "axios";


class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         noCommitment: true,
         mobile1: {},
      }
   }


   handleRadio = (val) => {
      if (val === "commit") {
         this.setState({noCommitment: false})
      } else {
         this.setState({noCommitment: true})
      }
   }

   render() {
      return (
          <div className="App">
             <h1>Mobiliojo ryšio planai</h1>
             <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
             <div className="controls d-flex">
                <Commitment onHandleRadio={this.handleRadio}
                            onCommit={this.state.noCommitment}/>
                <HaveServices/>
             </div>
             <main className="plan-cards">
                <MobilePlan noCommitment={this.state.noCommitment}/>
             </main>
          </div>
      );
   }
}

export default App;
