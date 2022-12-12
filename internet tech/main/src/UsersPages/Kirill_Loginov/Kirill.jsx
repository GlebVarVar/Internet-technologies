import './style.css';

const Kirill = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Kirill_Loginov/kir.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Кирилл Логинов</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: Футболёр </div>
        </div>
      </div>

      <div id="">
        <div className="title">Личная инфа</div>
        <hr />
        <ul>
          <li>Бываю в вузе иногда</li>
          <li>Работаю в техподдержке</li>
          <li>Написал курсач, скоро сдавать пойду</li>
          <li>Краткость - сестра таланта</li>
        </ul>
      </div>

      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Играю за сборную вуза по футболу</li>
          <li>Еще в лазертаге за сборную бегаю периодически</li>
          <li>Там про талант выше было - дак вот, их у меня много, но как я выше писал, краткость - сестра таланта, так что не напишу</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Kirill_Loginov/kir1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Kirill_Loginov/kir2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Kirill_Loginov/kir3.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kirill;
