import './style.css';

const Polina = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/David_Darbinyan/best.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Давид Дарбинян</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: южный централ </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Северный кавказ - душа моей страны</li>
          <li>По венам течёт аджика и нарзан</li>
          <li>Целую свой бицуху(иногда Саню)</li>
          <li>Осваиваю четвертый музыкальный инструмент</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Работаю в маке(вкусно и точка)</li>
          <li>Отчислился из лэти</li>
          <li>Записываю кружочки в телеграм из толчка</li>
          <li>Жму сотку рублей за час</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/David_Darbinyan/dava.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/David_Darbinyan/dava2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/David_Darbinyan/dava3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/David_Darbinyan/dava4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/David_Darbinyan/dava5.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/David_Darbinyan/dava6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Polina;
