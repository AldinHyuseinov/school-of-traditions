import "../assets/css/contact.css";
import useTitle from "../hooks/useTitle";

export default function Contact() {
  useTitle("Образователен център Фолклорна къща | Контакти");

  return (
    <main className="contact">
      <h1>Добре дошли!</h1>
      <p>Тука ще пише неща кат телефони, адреси и т.н. (измислени естествено :))</p>
    </main>
  );
}
