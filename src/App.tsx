import * as React from "react";
import { render } from "react-dom";

import ExpandingCards from "./components/ExpandingCards";
import { cardsData } from "./data/dummyData";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateChallenge from "./pages/CreateChallenge";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateChallenge" element={<CreateChallenge />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

        {/* <ExpandingCards data={cardsData} />  */}
      </div>
    </Router>
  );
};

export default App;
