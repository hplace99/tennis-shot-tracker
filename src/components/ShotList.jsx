function ShotList({ shots }) {
  return (
    <aside className="shot-list">
      <h2>Shot History</h2>

      {shots.length === 0 ? (
        <p>No shots recorded yet.</p>
      ) : (
        <div className="shot-list-items">
          {shots.map((shot, index) => (
            <article className="shot-list-item" key={shot.id}>
              <h3>Shot {index + 1}</h3>

              <p>
                <strong>Player:</strong> {shot.player}
              </p>

              <p>
                <strong>Shot Type:</strong> {shot.shotType}
              </p>

              <p>
                <strong>Result:</strong> {shot.result}
              </p>
            </article>
          ))}
        </div>
      )}
    </aside>
  );
}

export default ShotList;