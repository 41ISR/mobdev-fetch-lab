import './About.css'

function About() {
    return (
        <section className="about">
            <h1 className="about__title">Об этом каталоге</h1>
            <p className="about__lead">
                OMDb (The Open Movie Database) — это открытый веб-сервис с базой
                данных о фильмах, сериалах и эпизодах
            </p>

            <div className="about__block">
                <h2 className="about__heading">Что умеет это приложение</h2>
                <ul className="about__list">
                    <li>искать фильмы и сериалы по названию;</li>
                    <li>показывать карточки с постером, годом и типом;</li>
                    <li>
                        открывать подробную страницу с описанием и рейтингами;
                    </li>
                    <li>отмечать понравившиеся фильмы как избранные.</li>
                </ul>
            </div>
        </section>
    )
}

export default About
