import './style.css';

const Maks = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Maxim_Bulychev/placeholder_avatar.png" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Булычев Максим</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: Сегодня мне настолько лень, что…</div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>С Мордовии, но не мордвин</li>
          <li>Снялся в эпизоде "Великолепного века"</li>
          <li>Психологический возраст 50 лет</li>
          <li>Осваиваю четвертый музыкальный инструмент</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Окончил школу с золотой медалью</li>
          <li>Разогнался до 165 км/ч</li>
          <li>Закрыл долги</li>
          <li>Видел АР</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Maxim_Bulychev/IMG-20220804-WA0000.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Maxim_Bulychev/IMG_20190511_154856.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Maxim_Bulychev/IMG_20220128_165824.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Maxim_Bulychev/IMG_20220703_034113.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Maxim_Bulychev/IMG_20210522_165506.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Maxim_Bulychev/IMG_3880.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Maks;
