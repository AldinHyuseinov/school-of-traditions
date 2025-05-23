import { useState } from "react";

export default function Navigation() {
  const [checked, setChecked] = useState(false);

  return (
    <header className="site-header">
      <label htmlFor="nav-toggle" id="nav-toggle-label">
        {checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </label>

      <input type="checkbox" id="nav-toggle" onChange={(e) => setChecked(e.target.checked)} />

      <a href="/" className="branding">
        <div className="logo">
          <img src="/logo.png" alt="logo" width={50} height={50} />
          <p className="title">Образователен център "Фолклорна къща"</p>
        </div>
      </a>

      <nav className="main-nav">
        <ul className="nav">
          <li>
            <a href="/обучение">Обучение</a>
          </li>
          <li>
            <a href="/програма">Програма</a>
          </li>
          <li>
            <a href="/партньори">Партньори</a>
          </li>
          <li>
            <a href="/създателите">За нас</a>
          </li>
          <li>
            <a href="/контакти">Контакти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
