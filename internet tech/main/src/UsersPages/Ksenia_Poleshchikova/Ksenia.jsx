export default Ksenia = () => {
  return (
    <>
      <div id="profile">
        <div id="avatar">
          <img src="./img/av.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div class="mainInfo">Полещикова Ксения</div>
          <div class="mainInfo">Группа: О712Б</div>
          <div class="status">Статус: Чтобы найти новый путь, нужно уйти со старой дороги...</div>
        </div>
      </div>
      <div id="moreInfo" class="category">
        <div id="achievements">
          <div class="title">Достижения</div>
          <hr />
          <ul>
            <li>Золотая медаль за 11 классов</li>
            <li>Сдала ЕГЭ на 272 балла</li>
            <li>Переехала в Петербург</li>
          </ul>
        </div>
        <div id="facts">
          <div class="title">Факты</div>
          <hr />
          <ul>
            <li>Люблю котов и татарскую кухню</li>
            <li>Люблю читать</li>
          </ul>
        </div>
        <div id="galery">
          <div class="title">Галерея</div>
          <hr />
          <div class="content">
            <ul>
              <li>
                <img src="./img/av5.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/av2.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/av4.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/av8.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/av1.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/av7.jpg" alt="galery image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
