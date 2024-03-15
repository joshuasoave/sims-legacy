import React, { useState } from "react";
import "./App.css";
import Entries from "./Components/Entries";
import ChallengeInfo from "./Components/ChallengeInfo";
import Rules from "./Components/Rules";

function App() {
  const [activeTab, setActiveTab] = useState("entry");

  return (
    <div className="App">
      <div className="Sidebar">
        <header className="App-header">
          <h1>Sims 4 Legacy Challenge</h1>
        </header>
        <div className="Tabs">
          <button onClick={() => setActiveTab("entry")}>Entries</button>
          <button onClick={() => setActiveTab("challenge")}>
            Challenge Info
          </button>
          <button onClick={() => setActiveTab("rules")}>Rules</button>
        </div>
      </div>
      <div className="TabContent">
        {activeTab === "entry" && <Entries />}
        {activeTab === "challenge" && <ChallengeInfo />}
        {activeTab === "rules" && <Rules />}
      </div>
    </div>
  );
}

export default App;
