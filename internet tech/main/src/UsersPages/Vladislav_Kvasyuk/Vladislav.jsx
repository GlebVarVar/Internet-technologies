import './style.css';

const Vladislav = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Vladislav_Kvasyuk/avatar.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Владислав Квасюк</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: в активном поиске </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Баскетболист</li>
          <li>Филигранно  молодецкий ПРЕСАК!!</li>
          <li>Скамер мамонта()</li>
          <li>Осваиваю четвертый музыкальный инструмент</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Поступил на бюджет</li>
          <li>Был в 9 странах</li>
          <li>Работал в Газпроме</li>
          <li>Почти работаю в Газпроме</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex5.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Vladislav_Kvasyuk/sex6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vladislav;
