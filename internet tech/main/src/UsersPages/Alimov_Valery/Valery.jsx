const Valery = () => {
    return (
        <>
        <div id="profile">
            <div id="avatar">
                <img src="jambo.jpg" alt="avatar"/>
            </div>
            <div id="profileInfo">
                <div class="mainInfo">
                    Алимов Валерий
                </div>
                <div class="mainInfo">
                    Группа О712Б
                </div>
                <div class="status">
                    Статус: Болею за Вильярреал
                </div>
            </div>
        </div>
        <div id="moreInfo" class="category">
            <div id="achievements">
                <div class="title">
                    Достижения
                </div>
                <hr/>
                <ul>
                    <li>Достижение 1: Учусь в Военмехе</li>
                    <li>Достижение 2: Самый красивый мужчина в группе</li>
                    <li>Достижение 3: Непризнанный гений</li>
                    <li>Достижение 4: Не отчислился из Военмеха</li>
                </ul>
            </div>
            <div id="galery">
                <div class="title">
                    Галерея
                </div>
                <hr/>
                <div class="content">
                    <ul>
                        <li><img src="1.jpg" alt="galery image"/></li>
                        <li><img src="2.jpg" alt="galery image"/></li>
                        <li><img src="3.jpg" alt="galery image"/></li>
                        <li><img src="4.jpg" alt="galery image"/></li>
                        <li><img src="5.jpg" alt="galery image"/></li>
                        <li><img src="6.jpg" alt="galery image"/></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Valery;