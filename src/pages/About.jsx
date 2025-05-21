import "../assets/css/about.css";
import useTitle from "../hooks/useTitle";

export default function About() {
  useTitle("Образователен център Фолклорна къща | За нас");

  return (
    <main className="about">
      <h1>Добре дошли!</h1>
      <p>Тука ще пише хубави неща за нас :) </p>
    </main>
  );
}
