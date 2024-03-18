import React, { useState, useEffect } from "react";
import "./App.css";
import Entries from "./Components/Entries";
import ChallengeInfo from "./Components/ChallengeInfo";
import Rules from "./Components/Rules";
import { CastInfo } from "./Components/CastInfo";

function App() {
  const [activeTab, setActiveTab] = useState("entry");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {!isMobile && (
        <>
          <header className="App-header">
            <h1>Sims 4 Road to Fame</h1>
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
        </>
      )}
      <div className="TabContent">
        {isMobile ? (
          <header className="App-header">
            <h1>Sims 4 Road to Fame</h1>
            <nav>
              <button onClick={() => setActiveTab("entry")}>Entries</button>
              <button onClick={() => setActiveTab("challenge")}>
                Challenge Info
              </button>
              <button onClick={() => setActiveTab("rules")}>Rules</button>
              <button onClick={() => setActiveTab("cast")}>Cast</button>
              <button onClick={() => setActiveTab("about")}>About</button>
            </nav>
          </header>
        ) : null}
        {activeTab === "entry" && <Entries />}
        {activeTab === "challenge" && <ChallengeInfo />}
        {activeTab === "rules" && <Rules />}
        {activeTab === "cast" && <CastInfo />}
      </div>
    </div>
  );
}

export default App;
