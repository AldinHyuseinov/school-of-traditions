import "../assets/css/nav-toggle.css";

export default function NavToggleButton({ open, setOpen }) {
  return (
    <button
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
