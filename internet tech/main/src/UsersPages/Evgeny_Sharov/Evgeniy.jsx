import './style.css';

const Evgeniy = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className="profile">
        <div id="avatar">
          <img src="/images/Evgeny_Sharov/ev1.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Шаров Евгений</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: original gang "Чёрная речка" </div>
        </div>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Занял 2е место в турнине по шахматам от школы</li>
          <li>Занял 3е место в турнире по плаванию</li>
          <li>Занял 2е место в турнире по насттльному теннису</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Evgeny_Sharov/ev.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Evgeny_Sharov/ev2.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Evgeniy;
