const  Daniil = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className='profile'>
        <div id="avatar">
          <img src="/images/Daniil_Borisenko/test1.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Даниил Борисенко</div>
          <div className="mainInfo">О712Б</div>
        </div>
      </div>
      <hr />
      <div id="moreInfo" className="category">
        <div id="achievements">
          <div className="title">Достижения</div>
          <ul>
            <li>Единственный на стипендии в группе</li>
            <li>Харош в секасе(очень)</li>
          </ul>
        </div>
        <hr />
        <div id="infoAboutYourself">
          <div className="title">Информация о себе</div>
          <ul>
            <li>Безумно красив и харизматичен</li>
            <li>Возбуждаю любую девчоку быстрее чем беру производную сложной функции</li>
            <li>Интегрирую в уме</li>
          </ul>
        </div>
        <hr />
        <div id="galery">
          <div className="title">Галерея</div>
          <div className="content">
            <ul>
              <li>
                <img src="/images/Daniil_Borisenko/test2.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Daniil_Borisenko/test3.jpg" alt="galery image" />
              </li>
              <li>
                <img src="/images/Daniil_Borisenko/test4.jpg" alt="galery image" />
              </li>
   

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Daniil;