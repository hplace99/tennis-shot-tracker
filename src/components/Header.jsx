function Header() {
  return (
    <header className="app-header">
      <div className="header-icon" aria-hidden="true">
        🎾
      </div>

      <div>
        <p className="header-eyebrow">Practice smarter</p>
        <h1>Tennis Shot Tracker</h1>
        <p className="header-description">
          Record shot placement, review patterns, and track each session.
        </p>
      </div>
    </header>
  );
}

export default Header;