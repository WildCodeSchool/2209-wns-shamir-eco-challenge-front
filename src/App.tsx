import * as React from "react";
import { render } from "react-dom";

import ExpandingCards from "./components/ExpandingCards";
import { cardsData, challengesData } from "./data/dummyData";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CreateChallenge from "./pages/CreateChallenge";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateChallenge" element={<CreateChallenge />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/Challenges"
            element={<Challenges data={challengesData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
