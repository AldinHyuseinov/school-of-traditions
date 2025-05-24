import traditions from "../assets/images/traditions.png";
import classroom from "../assets/images/traditional-classroom.png";
import kids from "../assets/images/kids.jpg";
import folkDance from "../assets/images/dance.jpeg";
import ceramiCourses from "../assets/images/ceramic-courses.png";
import sculpting from "../assets/images/sculpting.jpg";
import "../assets/css/gallery.css";
import Image from "./Image";

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>Галерия</h1>

      <section className="gallery-content">
        <div className="media">
          <Image image={traditions} alt="Традиции" />
        </div>
        <div className="media">
          <Image image={classroom} alt="Традиционна класна стая с ученици" />
        </div>
        <div className="media">
          <Image image={kids} alt="Деца, участващи в занимания по традиции" />
        </div>
        <div className="media">
          <Image image={folkDance} alt="Група по народни танци" />
        </div>
        <div className="media">
          <Image image={ceramiCourses} alt="Курс по керамика за деца" />
        </div>
        <div className="media">
          <Image image={sculpting} alt="Детски клас по скулптура" />
        </div>
      </section>
    </section>
  );
}
