import React, { useState } from "react";
import "./App.css";
import { Entries } from "./Components/Entries";
import ChallengeInfo from "./Components/ChallengeInfo";
import Rules from "./Components/Rules";
import { CastInfo } from "./Components/CastInfo";

function App() {
  const [activeTab, setActiveTab] = useState("entry");
  const [activeChapter, setActiveChapter] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="headerText">
          {activeTab === "entry"
            ? "Chapter " + activeChapter
            : activeTab === "challenge"
            ? "About"
            : activeTab === "rules"
            ? "Rules"
            : activeTab === "cast"
            ? "Cast"
            : "Sims 4 House of Fame"}
        </h1>
      </header>
      <div className="Tabs">
        <button
          className={activeTab === "challenge" ? "active" : ""}
          onClick={() => setActiveTab("challenge")}
        >
          About
        </button>

        <button
          className={activeTab === "rules" ? "active" : ""}
          onClick={() => setActiveTab("rules")}
        >
          Rules
        </button>
        <button
          className={activeTab === "cast" ? "active" : ""}
          onClick={() => setActiveTab("cast")}
        >
          Cast
        </button>
        <button
          className={activeTab === "entry" ? "active" : ""}
          onClick={() => setActiveTab("entry")}
        >
          Entries
        </button>
      </div>
      <div className="TabContent">
        {activeTab === "entry" && (
          <Entries setActiveChapter={setActiveChapter} />
        )}
        {activeTab === "challenge" && <ChallengeInfo />}
        {activeTab === "rules" && <Rules />}
        {activeTab === "cast" && <CastInfo />}
      </div>
    </div>
  );
}

export default App;
