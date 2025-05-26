import "../assets/css/nav-toggle.css";

export default function NavToggleButton({ buttonRef, open, setOpen }) {
  return (
    <button
      ref={buttonRef}
      id="nav-toggle"
      className="nav-toggle-btn"
      onClick={() => setOpen(!open)}
      aria-label="Toggle navigation"
    >
      <div id="hamburger-icon" className={open && "open"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
