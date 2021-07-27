import profileLoader from "../images/profile__avatar-loader.gif";

export default function Main(props){

    return(
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={profileLoader} alt="Жак Фреско"/>
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button"/>
                <div className="profile-info">
                    <h1 id="profile-info__title" className="profile-info__title">Жак-Ив Кусто</h1>
                    <p id="profile-info__subtitle" className="profile-info__subtitle">Исследователь океана</p>
                    <button aria-label="Редактировать" type="button" onClick={props.onEditProfile} className="profile-info__button button"/>
                </div>
                <button type="button" onClick={props.onAddPlace} aria-label="Добавить" className="profile__button button"/>
            </section>

            <section className="elements">
                <ul className="elements__list">

                </ul>
            </section>
        </main>
    )
}
