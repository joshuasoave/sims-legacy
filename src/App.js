import React, { useState, useEffect } from "react";
import "./App.css";
import Entries from "./Components/Entries";
import ChallengeInfo from "./Components/ChallengeInfo";
import Rules from "./Components/Rules";

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
      )}
      <div className="TabContent">
        {isMobile ? (
          <header className="App-header">
            <h1>Sims 4 Legacy Challenge</h1>
            <nav>
              <button onClick={() => setActiveTab("entry")}>Entries</button>
              <button onClick={() => setActiveTab("challenge")}>
                Challenge Info
              </button>
              <button onClick={() => setActiveTab("rules")}>Rules</button>
            </nav>
          </header>
        ) : null}
        {activeTab === "entry" && <Entries />}
        {activeTab === "challenge" && <ChallengeInfo />}
        {activeTab === "rules" && <Rules />}
      </div>
    </div>
  );
}

export default App;
