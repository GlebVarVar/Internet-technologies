import './style.css';

const Petrov = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Alexander_Petrov/pet.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Александр Петров</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: армеец по жизни </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Играю на гитаре</li>
          <li>Мастер в приготовлении блинов</li>
          <li>Бываю на баскетбольной площадке</li>
          <li>Посмотрел игру престолов 4 раза</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Разбираю ак за 6 секунд</li>
          <li>Проехал 1500 км на калине без поломок</li>
          <li>Почти мастер в сельском хозяйстве</li>
          <li>Подающий наджежды актер озвучания</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Alexander_Petrov/pet.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Petrov/pet1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Petrov/pet2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Petrov/pet6.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Petrov/pet4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Petrov/pet5.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Petrov;
