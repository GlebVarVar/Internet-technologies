import './style.css';

const Kukareko = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className="profile">
        <div id="avatar">
          <img src="/images/Ivan_Kukareko/kuk1.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Кукареко Иван Александрович</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус:Пока еще живой</div>
        </div>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Лучший Денжен Мастер по мнению 10 человек</li>
          <li>Дожил до 19</li>
          <li>Закончил 3 ваншота по днд и 1 длинную партию</li>
          <li>заставил людей бояться дварфов</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Ivan_Kukareko/kuk.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Kukareko/kuk2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Kukareko/kuk3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Kukareko/kuk4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Kukareko/kuk5.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Kukareko/kuk6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kukareko;
