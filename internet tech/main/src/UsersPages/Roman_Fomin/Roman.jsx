import './style.css';

const Roman = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Roman_Fomin/avatar.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Фоминых Роман</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: Еще живой, вроде...</div>
        </div>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Создание шаблона на HTML + CSS</li>
          <li>Ни разу не явился на комиссию за 2 месяца</li>
          <li>Анимировал свой аватар в стиле пиксель арта</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Roman_Fomin/gallery1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Roman_Fomin/gallery2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Roman_Fomin/gallery3.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Roman_Fomin/gallery4.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Roman_Fomin/gallery5.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Roman_Fomin/gallery6.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roman;
