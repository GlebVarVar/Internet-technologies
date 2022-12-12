import './style.css';

const Ivan = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Ivan_Korostelev/avatar.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Иван Коростелёв</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: играю в майн </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Большой любитель пельменей и котов</li>
          <li>Окончил клоунское училище (воображаемое)</li>
          <li>Просто замечательный юноша</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Английский уровень с1/с2</li>
          <li>Самопровозглашенный графический дизайнер</li>
          <li>я не придумал</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Ivan_Korostelev/mem1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Korostelev/mem2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Korostelev/mem3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Korostelev/mem4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Korostelev/mem5.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Ivan_Korostelev/mem6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ivan;
