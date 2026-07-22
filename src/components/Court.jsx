import courtImage from "../assets/tennis-court.svg";
import ShotMarker from "./ShotMarker";
import "../styles/Court.css";

function Court({
  shots,
  setShots,
  selectedPlayer,
  selectedShotType,
  selectedResult,
}) {
  function handleCourtClick(event) {
    const court = event.currentTarget;
    const courtPosition = court.getBoundingClientRect();

    const clickX = event.clientX - courtPosition.left;
    const clickY = event.clientY - courtPosition.top;

    const xPercent = (clickX / courtPosition.width) * 100;
    const yPercent = (clickY / courtPosition.height) * 100;

    const newShot = {
      id: crypto.randomUUID(),
      x: xPercent,
      y: yPercent,
      player: selectedPlayer,
      shotType: selectedShotType,
      result: selectedResult,
    };

    setShots((currentShots) => [...currentShots, newShot]);
  }

  function clearShots() {
    setShots([]);
  }

  return (
    <section className="court-section">
      <div className="court-title">
        <div>
          <span className="section-label">Live session</span>
          <h2>Shot Placement</h2>
        </div>

        <div className="total-shots-badge">
          {shots.length} {shots.length === 1 ? "shot" : "shots"}
        </div>
      </div>

      <div className="current-shot">
        <span>
          <strong>Player:</strong> {selectedPlayer}
        </span>

        <span>
          <strong>Shot:</strong> {selectedShotType}
        </span>

        <span>
          <strong>Result:</strong> {selectedResult}
        </span>
      </div>

      <p className="court-instructions">
        Click anywhere on the court to record the selected shot.
      </p>

      <div className="court-frame">
        <div
          className="court-container"
          onClick={handleCourtClick}
          role="button"
          tabIndex="0"
          aria-label="Click the tennis court to record a shot"
        >
          <img
            src={courtImage}
            alt="Top-down tennis court"
            className="court-image"
            draggable="false"
          />

          <div className="court-net" aria-hidden="true"></div>

          {shots.map((shot, index) => (
            <ShotMarker
              key={shot.id}
              shot={shot}
              number={index + 1}
            />
          ))}
        </div>
      </div>

      <div className="court-actions">
        <p className="shot-count">
          Total shots: <strong>{shots.length}</strong>
        </p>

        <button
          type="button"
          className="clear-shots-button"
          onClick={clearShots}
          disabled={shots.length === 0}
        >
          Clear Shots
        </button>
      </div>
    </section>
  );
}

export default Court;