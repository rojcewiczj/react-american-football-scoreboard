//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
const [currentQuarter, setQuarter] = useState(1);
const [currentYard , setYard] = useState(21);
const [ toGo , newToGo] = useState(7);
const [ ]
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>    
          </div>
        </div>
        
     <BottomRow />
     <div className="bottomRow">
           
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{currentYard}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{currentQuarter}</div>
      </div>
      </div>
      </section>
      
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick ={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick ={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
<div className="homeButtons">
         
          <button className="quarterButton" onClick={() => setQuarter(currentQuarter + 1)}>Next</button>
          <button className="quarterButton" onClick ={() => setQuarter(currentQuarter -1 )}>Back</button>
          <button className="quarterButton" onClick={() => setQuarter(currentQuarter + 1)}>Next</button>
          <button className="quarterButton" onClick ={() => setQuarter(currentQuarter -1 )}>Back</button>
        </div>
        <div className="homeButtons">
         
         <button className="quarterButton" onClick={() => setYard(currentYard+ 1)} >
        Next Yard
</button>
         <button className="quarterButton" onClick ={() => setYard(currentYard -1 )}>Back Yard</button>

         <button className="quarterButton" onClick={() => newToGo(toGo + 1)} >
        To Go +
</button>
         <button className="quarterButton" onClick ={() => newToGo(toGo -1 )}>To Go -</button>
       </div>
      </section>
    </div>
  );
}



export default App;
