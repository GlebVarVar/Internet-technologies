import './style.css';

const David = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Polina_Kurdyumova/pol.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Полина курдюмова</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: лежу на аниме подушке </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Играю на электрогитаре когда в сибири</li>
          <li>Посмотрела все 15 сезонов сверхъестественного за месяц</li>
          <li>Не умею варить макароны</li>
          <li>Профессионально копирую весеннюю траву</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Лучший игрок в сапер на время</li>
          <li>Умею разбирать кубик рубика</li>
          <li>Филигранно считаю до 10</li>
          <li>Награда за лучшее рагу года</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Polina_Kurdyumova/pol1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Polina_Kurdyumova/pol2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Polina_Kurdyumova/pol3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Polina_Kurdyumova/pol4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Polina_Kurdyumova/pol5.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Polina_Kurdyumova/pol6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default David;
