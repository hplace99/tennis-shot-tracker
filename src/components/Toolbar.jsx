import {
  players,
  shotTypes,
  shotResults,
} from "../data/shotTypes";

function Toolbar({
  selectedPlayer,
  setSelectedPlayer,
  selectedShotType,
  setSelectedShotType,
  selectedResult,
  setSelectedResult,
}) {
  return (
    <section className="toolbar">
      <div className="toolbar-heading">
        <div>
          <span className="section-label">Shot setup</span>
          <h2>Record a Shot</h2>
        </div>

        <p>Choose the details, then click a location on the court.</p>
      </div>

      <div className="toolbar-controls">
        <label>
          <span>Player</span>

          <select
            value={selectedPlayer}
            onChange={(event) => setSelectedPlayer(event.target.value)}
          >
            {players.map((player) => (
              <option key={player} value={player}>
                {player}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Shot Type</span>

          <select
            value={selectedShotType}
            onChange={(event) => setSelectedShotType(event.target.value)}
          >
            {shotTypes.map((shotType) => (
              <option key={shotType} value={shotType}>
                {shotType}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Result</span>

          <select
            value={selectedResult}
            onChange={(event) => setSelectedResult(event.target.value)}
          >
            {shotResults.map((result) => (
              <option key={result} value={result}>
                {result}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}

export default Toolbar;