import './style.css';

const Dmitry = () => {


  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Dmitry_Ignatchenko/dim.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Игнатченко Дмитрий</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: профукал место старосты, грущу((</div>
        </div>
      </div>


      <div id="achievements">
        <div className="title">Достижения</div>
        <hr />
        <ul>
          <li>Играю мид на пудже</li>
          <li>Бывает выигрываю в монополию</li>
          <li>Имею много чехлов на телефон</li>
          <li>Бывает прихожу на пары</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Dmitry_Ignatchenko/dim1.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Dmitry_Ignatchenko/dim2.jpg" alt="galery image" />
            </li>
            <li>
              <img src="/images/Dmitry_Ignatchenko/dim3.jpg" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dmitry;
