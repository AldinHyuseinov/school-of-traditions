import { useState } from "react";
import NavToggleButton from "./NavToggleButton";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <NavToggleButton open={open} setOpen={setOpen} />

      <a href="/" className="branding">
        <div className="logo">
          <img src="/logo.png" alt="logo" width={50} height={50} />
          <p className="title">Образователен център "Фолклорна къща"</p>
        </div>
      </a>

      <nav className="main-nav">
        <ul className={`nav ${open ? "open" : "closed"}`}>
          <li>
            <a href="/">Начало</a>
          </li>
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
