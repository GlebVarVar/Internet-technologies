const  Lev = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Gorbachev_lev/seks6.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Горбачёв Лев</div>
          <div className="mainInfo">О712Б</div>
        </div>
      </div>
      <hr />
      <div id="moreInfo" className="category">
        <div id="achievements">
          <div className="title">Достижения</div>
          <ul>
            <li>Машина, урегбирую кого хочешь</li>
            <li>Осанка ровная слово стена, после штукатурки </li>
          </ul>
        </div>
        <hr />
        <div id="infoAboutYourself">
          <div className="title">Информация о себе</div>
          <ul>
            <li>Состою в строительной бригаде(профессия - строитель)</li>
            <li>Демиург - второй дом</li>
            <li>Энергосы фигачу на репите</li>
          </ul>
        </div>
        <hr />
        <div id="galery">
          <div className="title">Галерея</div>
          <div className="content">
            <ul>
              <li>
                <img src="/images/Gorbachev_lev/seks1.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Gorbachev_lev/seks2.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Gorbachev_lev/seks3.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Gorbachev_lev/seks4.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Gorbachev_lev/seks5.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Gorbachev_lev/avatar.jpg" alt="galery image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Lev;