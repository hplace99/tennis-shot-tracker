function ShotMarker({ shot, number }) {
  const markerTitle = [
    `Shot ${number}`,
    shot.player,
    shot.shotType,
    shot.result,
  ].join(" - ");

  return (
    <span
      className="shot-marker"
      style={{
        left: `${shot.x}%`,
        top: `${shot.y}%`,
      }}
      title={markerTitle}
      aria-label={markerTitle}
    >
      {number}
    </span>
  );
}

export default ShotMarker;