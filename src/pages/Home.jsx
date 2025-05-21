import "../assets/css/home.css";
import useTitle from "../hooks/useTitle";

export default function Home() {
  useTitle("Образователен център Фолклорна къща | Начало");

  return (
    <main className="home">
      <h1>Добре дошли!</h1>
      <p>Тука ще се представи училището</p>
    </main>
  );
}
