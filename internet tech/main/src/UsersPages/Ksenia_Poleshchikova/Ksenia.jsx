import './style.css'

const  Ksenia = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className="profile">
        <div id="avatar">
          <img src="/images/Ksenia_Poleshchikova/av.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Полещикова Ксения</div>
          <div className="mainInfo">Группа: О712Б</div>
          <div className="status">Статус: Чтобы найти новый путь, нужно уйти со старой дороги...</div>
        </div>
      </div>
      <div id="moreInfo" className="category">
        <div id="achievements">
          <div className="title">Достижения</div>
          <hr />
          <ul>
            <li>Золотая медаль за 11 классов</li>
            <li>Сдала ЕГЭ на 272 балла</li>
            <li>Переехала в Петербург</li>
          </ul>
        </div>
        <div id="facts">
          <div className="title">Факты</div>
          <hr />
          <ul>
            <li>Люблю котов и татарскую кухню</li>
            <li>Люблю читать</li>
          </ul>
        </div>
        <div id="galery">
          <div className="title">Галерея</div>
          <hr />
          <div className="content">
            <ul>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av5.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av2.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av4.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av8.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av1.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Ksenia_Poleshchikova/av7.jpg" alt="galery image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

 
export default Ksenia;