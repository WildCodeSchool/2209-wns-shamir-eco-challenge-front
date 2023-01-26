import * as React from "react";
import { render } from "react-dom";

import ExpandingCards from "../../../2209-wns-shamir-eco-challenge-mobile/eco-challenges-mobile/components/ExpandingCards";
import { cardsData, challengesData } from "./data/dummyData";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CreateChallenge from "./pages/Challenges/CreateChallenge";
import Home from "./pages/Home";
import RegisterSignIn from "./pages/Register";
import ChallengesDetails from "./pages/Challenges/ChallengesDetails";
import HomeMember from "./pages/HomeMember";
import Guests from "./pages/Guests";
import Contact from "./pages/Contact";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges/Challenges";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Guest" element={<Guests />} />
          <Route path="/" element={<Home />} />
          <Route path="/RegisterSIgnIn" element={<RegisterSignIn />} />
          <Route path="/HomeMember" element={<HomeMember />} />
          <Route path="/ChallengesDetails" element={<ChallengesDetails />} />
          <Route path="/CreateChallenge" element={<CreateChallenge />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Contact" element={<Contact />} />
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
