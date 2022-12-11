import './style.css';

const Andrey = () => {
  return (
    <div id="moreInfo" className="category">
      <div id="profile" className="profile">
        <div id="avatar">
          <img src="/images/Andrey_Tselikhovich/placeholder_myavatar.jpg" alt="avatar" />
        </div>
        <div id="profileInfo">
          <div className="mainInfo">Целихович Андрей Леонидович</div>
          <div className="mainInfo">О712Б</div>
          <div className="status">Статус: на обучении, 2 курс </div>
        </div>
      </div>

      <div id="achievements">
        <div className="title">Обо мне:</div>
        <hr />
        <ul>
          <li> Люблю рисовать, слушать музыку и читать;</li>
          <li> Программирую на языках Python, C, C++ и C#;</li>
          <li> ОЧЕНЬ ленивый человек, я считаю;</li>
          <li> В дискорде меня можно найти как Andreevih#9570;</li>
          <li> Большой поклонник игр студии Valve и связанного фанатского творчества.</li>
        </ul>
      </div>

      <div id="galery">
        <div className="title">Галерея</div>
        <hr />
        <div className="content">
          <ul>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_1.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_2.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_3.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_4.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_5.png" alt="galery image" />
            </li>
            <li>
              <img src="/images/Andrey_Tselikhovich/placeholder_image_6.png" alt="galery image" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Andrey;
