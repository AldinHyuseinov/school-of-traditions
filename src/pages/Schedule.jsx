import "../assets/css/banner.css";
import "../assets/css/schedule.css";
import scheduleBg from "../assets/images/schedule.jpg";
import useTitle from "../hooks/useTitle";

export default function Schedule() {
  useTitle("Образователен център Фолклорна къща | Програма");

  return (
    <main className="schedule">
      <section
        className="showcase"
        style={{
          background: `url(${scheduleBg}) no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <h1>Програма</h1>
      </section>

      <section className="timetable">
        <div className="timetable-info">
          <p>
            Учебната седмица в „Фолклорна къща“ включва разнообразни дейности, които развиват умения
            чрез преживяване – народни танци, занаяти, традиционна кухня, разказване на приказки,
            работа с ръце и природа. Програмата е балансирана, динамична и ангажираща, като съчетава
            творчество, културно възпитание и личностно израстване в подкрепяща среда.
          </p>

          <ul>
            <li>
              Всяка седмица има тематичен фокус (напр. „Есенни празници“, „Хлябът и домът“, „Седмица
              на песента“ и др.)
            </li>
            <li>В следобедните часове се насърчава самостоятелност, творчество и работа в екип</li>
            <li>
              Възможно е съчетаване на възрасти чрез смесени групи, както в традиционните общности
            </li>
          </ul>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ден</th>
              <th>
                Час 1<br />
                (09:00–10:00)
              </th>
              <th>
                Час 2<br />
                (10:15–11:15)
              </th>
              <th>
                Час 3<br />
                (11:30–12:30)
              </th>
              <th>
                Следобедна сесия
                <br />
                (14:00–15:00)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Ден">
                <strong>Понеделник</strong>
              </td>
              <td data-label="09:00–10:00">Народни игри и танци</td>
              <td data-label="10:15–11:15">Занаяти: работа с глина</td>
              <td data-label="11:30–12:30">Приказки и народна мъдрост</td>
              <td data-label="14:00–15:00">Кръг за споделяне и размишление</td>
            </tr>
            <tr>
              <td data-label="Ден">
                <strong>Вторник</strong>
              </td>
              <td data-label="09:00–10:00">Музика и народни песни</td>
              <td data-label="10:15–11:15">Ателиe по тъкане или шиене</td>
              <td data-label="11:30–12:30">Готвене на традиционни ястия</td>
              <td data-label="14:00–15:00">Сценично представяне на обичай</td>
            </tr>
            <tr>
              <td data-label="Ден">
                <strong>Сряда</strong>
              </td>
              <td data-label="09:00–10:00">Природознание на открито</td>
              <td data-label="10:15–11:15">Рисуване и везба по шевици</td>
              <td data-label="11:30–12:30">Гатанки и фолклорни игри</td>
              <td data-label="14:00–15:00">Кръжок „Старите занаяти“</td>
            </tr>
            <tr>
              <td data-label="Ден">
                <strong>Четвъртък</strong>
              </td>
              <td data-label="09:00–10:00">Разказване на легенди</td>
              <td data-label="10:15–11:15">Инструментално ателие</td>
              <td data-label="11:30–12:30">Работа по ученически проекти</td>
              <td data-label="14:00–15:00">Среща с гост – занаятчия</td>
            </tr>
            <tr>
              <td data-label="Ден">
                <strong>Петък</strong>
              </td>
              <td data-label="09:00–10:00">Обреден календар и ритуали</td>
              <td data-label="10:15–11:15">Подготовка за празник</td>
              <td data-label="11:30–12:30">Представяне пред общността</td>
              <td data-label="14:00–15:00">Свободен избор: пазар, двор, игри</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
