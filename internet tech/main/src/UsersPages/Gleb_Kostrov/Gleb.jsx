import './style.css';

const Gleb = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Kostrov_Gleb/gl4.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Костров Глеб</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: Loading... </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Играю в баскет и часто бегаю</li>
          <li>193см утром - 192см вечером</li>
          <li>Могу съесть мамонта и ещё останется место для десерта</li>
          <li>Работаю в вузе и ещё в нём учусь(часто)</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Пробежал полумарафон за 2 часа</li>
          <li>Продаю лего</li>
          <li>Продаю одежду</li>
          <li>Работаю в вузе и ещё в нём учусь(очень часто)</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Kostrov_Gleb/gl.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Kostrov_Gleb/gl1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Kostrov_Gleb/gl2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Kostrov_Gleb/gl3.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gleb;
