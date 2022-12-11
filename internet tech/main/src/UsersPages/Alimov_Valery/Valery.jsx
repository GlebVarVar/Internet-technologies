import './style.css'

const Valery = () => {
    return (
        <div id="moreInfo" className="category">
        <div id="profile" className='profile'>
            <div id="avatar">
                <img src="/images/Alimov_Valery/jambo.jpg" alt="avatar"/>
            </div>
            <div id="profileInfo">
                <div className="mainInfo">
                    Алимов Валерий
                </div>
                <div className="mainInfo">
                    Группа О712Б
                </div>
                <div className="status">
                    Статус: Болею за Вильярреал
                </div>
            </div>
        </div>
        <div id="moreInfo" className="category">
            <div id="achievements">
                <div className="title">
                    Достижения
                </div>
                <hr/>
                <ul>
                    <li>Достижение 1: Учусь в Военмехе</li>
                    <li>Достижение 2: Самый красивый мужчина в группе</li>
                    <li>Достижение 3: Признанный всем военмехом <span className='press'>гений</span> гей </li>
                    <li>Достижение 4: Не отчислился из Военмеха</li>
                </ul>
            </div>
            <div id="galery">
                <div className="title">
                    Галерея
                </div>
                <hr/>
                <div className="content">
                    <ul>
                        <li><img src="/images/Alimov_Valery/1.jpg" alt="galery image"/></li>
                        <li><img src="/images/Alimov_Valery/2.jpg" alt="galery image"/></li>
                        <li><img src="/images/Alimov_Valery/3.jpg" alt="galery image"/></li>
                        <li><img src="/images/Alimov_Valery/4.jpg" alt="galery image"/></li>
                        <li><img src="/images/Alimov_Valery/5.jpg" alt="galery image"/></li>
                        <li><img src="/images/Alimov_Valery/6.jpg" alt="galery image"/></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Valery;