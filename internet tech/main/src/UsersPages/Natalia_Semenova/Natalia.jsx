
import './style.css'

const Natalia = () => {
  return (
    <>
      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Привет, меня зовут</div>
            <div class="text-2">Семенова Наталия</div>
            <div class="text-3">И я староста группы О712</div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">Немного обо мне</h2>
          <div class="about-content">
            <div class="column left">
              <img src="/images/Natalia_Semenova/profile-1.jpeg" alt="" />
            </div>
            <div class="column right">
              <div class="text">Я Натали, и я разносторонний человек </div>
              <p>
                В своей жизни я успела перепробовать много разных видов спорта. Профессионально
                занималась настольным теннисом, ходила на плавание, волейбол и даже попробовала себя
                в регби. На данный момент из спорта у меня остались только танцы, ими я занимаюсь в
                Военмехе и даже состаю в официальной сборной. На удивление, я так же творческий
                человек. В свободное время мне нравиться создавать что то своими руками, например :
                шить, вязать или рисовать. Благодаря стольким увлечениям, мне не бывает скучно{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Natalia;