function Statistics({ shots }) {
  const totalShots = shots.length;

  const winners = shots.filter(
    (shot) => shot.result === "Winner"
  ).length;

  const inPlay = shots.filter(
    (shot) => shot.result === "In Play"
  ).length;

  const forcedErrors = shots.filter(
    (shot) => shot.result === "Forced Error"
  ).length;

  const unforcedErrors = shots.filter(
    (shot) => shot.result === "Unforced Error"
  ).length;

  const playerOneShots = shots.filter(
    (shot) => shot.player === "Player 1"
  ).length;

  const playerTwoShots = shots.filter(
    (shot) => shot.player === "Player 2"
  ).length;

  const winnerPercentage =
    totalShots === 0
      ? 0
      : Math.round((winners / totalShots) * 100);

  return (
    <section className="statistics">
      <h2>Session Statistics</h2>

      <div className="statistics-grid">
        <article className="stat-card">
          <h3>Total Shots</h3>
          <p>{totalShots}</p>
        </article>

        <article className="stat-card">
          <h3>Winners</h3>
          <p>{winners}</p>
        </article>

        <article className="stat-card">
          <h3>Winner Percentage</h3>
          <p>{winnerPercentage}%</p>
        </article>

        <article className="stat-card">
          <h3>In Play</h3>
          <p>{inPlay}</p>
        </article>

        <article className="stat-card">
          <h3>Forced Errors</h3>
          <p>{forcedErrors}</p>
        </article>

        <article className="stat-card">
          <h3>Unforced Errors</h3>
          <p>{unforcedErrors}</p>
        </article>

        <article className="stat-card">
          <h3>Player 1 Shots</h3>
          <p>{playerOneShots}</p>
        </article>

        <article className="stat-card">
          <h3>Player 2 Shots</h3>
          <p>{playerTwoShots}</p>
        </article>
      </div>
    </section>
  );
}

export default Statistics;