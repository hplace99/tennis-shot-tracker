import { useState } from "react";
import { saveSession } from "../services/sessionApi";

import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Court from "../components/Court";
import ShotList from "../components/ShotList";
import Statistics from "../components/Statistics";

import {
  players,
  shotTypes,
  shotResults,
} from "../data/shotTypes";

import "../styles/Home.css";

function Home() {
  const [shots, setShots] = useState([]);

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [selectedShotType, setSelectedShotType] = useState(shotTypes[0]);
  const [selectedResult, setSelectedResult] = useState(shotResults[0]);

  const [sessionName, setSessionName] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSaveSession() {
    if (!sessionName.trim()) {
      setSaveMessage("Please enter a session name.");
      return;
    }

    if (shots.length === 0) {
      setSaveMessage("Add at least one shot before saving.");
      return;
    }

    try {
      setIsSaving(true);
      setSaveMessage("");

      const sessionData = {
        name: sessionName.trim(),
        shots,
      };

      const savedSession = await saveSession(sessionData);

      console.log("Saved session:", savedSession);

      setSaveMessage("Session saved successfully!");
      setSessionName("");
    } catch (error) {
      console.error("Save session error:", error);
      setSaveMessage(error.message || "Unable to save the session.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="home">
      <Header />

      <Toolbar
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        selectedShotType={selectedShotType}
        setSelectedShotType={setSelectedShotType}
        selectedResult={selectedResult}
        setSelectedResult={setSelectedResult}
      />

      <section className="save-session">
        <div className="save-session-heading">
          <div>
            <span className="section-label">Database</span>
            <h2>Save Session</h2>
          </div>

          <p>Save the current shot data to MongoDB Atlas.</p>
        </div>

        <div className="save-session-controls">
          <input
            type="text"
            placeholder="Example: Tuesday practice"
            value={sessionName}
            onChange={(event) => {
              setSessionName(event.target.value);
              setSaveMessage("");
            }}
          />

          <button
            type="button"
            onClick={handleSaveSession}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Session"}
          </button>
        </div>

        {saveMessage && (
          <p className="save-message">{saveMessage}</p>
        )}
      </section>

      <div className="tracker-layout">
        <Court
          shots={shots}
          setShots={setShots}
          selectedPlayer={selectedPlayer}
          selectedShotType={selectedShotType}
          selectedResult={selectedResult}
        />

        <ShotList shots={shots} />
      </div>

      <Statistics shots={shots} />
    </main>
  );
}

export default Home;