import './style.css';

const Alexander = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className="profile">
        <div id="avatar">
          <img src="/images/Alexander_Antropov/me.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Антропов Александр</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: %%%%</div>
        </div>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>ヽ(°□° )ノ</li>
          <li>ʕ ᵔᴥᵔ ʔ</li>
          <li>¯\_(ツ)_/¯ </li>
          <li>(◕‿◕)</li>
          <li>(⌒‿⌒)</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Alexander_Antropov/sani.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Antropov/sani1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Alexander_Antropov/sani2.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alexander;
