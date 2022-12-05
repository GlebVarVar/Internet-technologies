const  Daniil = () => {
  return (
    <>
      <div id="profile">
        <div id="avatar">
          <img src="./img/pingvin-poklon.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div class="mainInfo">Даниил Борисенко</div>
          <div class="mainInfo">О712Б</div>
        </div>
      </div>
      <hr />
      <div id="moreInfo" class="category">
        <div id="achievements">
          <div class="title">Достижения</div>
          <ul>
            <li>Единственный на стипендии в группе</li>
            <li>Харош в секасе(очень)</li>
          </ul>
        </div>
        <hr />
        <div id="infoAboutYourself">
          <div class="title">Информация о себе</div>
          <ul>
            <p>Безумно красив и харизматичен</p>
            <p>Возбуждаю любую девчоку быстрее чем беру производную сложной функции</p>
            <p>Интегрирую в уме</p>
          </ul>
        </div>
        <hr />
        <div id="galery">
          <div class="title">Галерея</div>
          <div class="content">
            <ul>
              <li>
                <img src="./img/cats.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/cats.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/image.jpg" alt="galery image" />
              </li>
              <li>
                <img src="./img/image.jpg" alt="galery image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default Daniil;