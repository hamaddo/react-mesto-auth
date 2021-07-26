import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
      <div className="page">
          <header className="header">
              <img className="header__logo" src="<%=require('./images/header__logo.svg')%>" alt="Лого"/>
          </header>
          <main className="content">
              <section className="profile">
                  <img className="profile__avatar" src="<%=require('./images/profile__avatar-loader.gif')%>"
                       alt="Жак Фреско" />
                      <button className="profile__avatar-edit-button"></button>
                      <div className="profile-info">
                          <h1 id="profile-info__title" className="profile-info__title">Жак-Ив Кусто</h1>
                          <p id="profile-info__subtitle" className="profile-info__subtitle">Исследователь океана</p>
                          <button aria-label="Редактировать" type="button"
                                  className="profile-info__button button"></button>
                      </div>
                      <button type="button" aria-label="Добавить" className="profile__button button"></button>
              </section>

              <section className="elements">
                  <ul className="elements__list">

                  </ul>
              </section>

              <footer className="footer">
                  <p className="footer__copyright">@2021 Тараченков Алексей</p>
              </footer>
          </main>

          <div className="popup popup_type_edit">
              <div className="popup__container">
                  <button aria-label="Закрыть" type="button" className="popup__button button"></button>
                  <form name="edit-form" id="edit-form" className="form" noValidate>
                      <h2 className="form__title">Редактировать профиль</h2>
                      <fieldset className="popup__fieldset">
                          <input type="text" minLength="2" maxLength="40" required id="edit-form__input_field_title"
                                 name="name"
                                 placeholder="Имя"
                                 className="form__input form__input_type_title" />
                              <span className="popup__error" id="edit-form__input_field_title_error"></span>
                              <input type="text" minLength="2" maxLength="200" required
                                     id="edit-form__input_field_subtitle"
                                     name="about"
                                     placeholder="Вид деятельности"
                                     className="form__input form__input_type_subtitle" />
                                  <span className="popup__error" id="edit-form__input_field_subtitle_error"></span>
                                  <button type="submit" className="form__button button">Сохранить</button>
                      </fieldset>
                  </form>
              </div>
          </div>

          <div className="popup popup_type_add">
              <div className="popup__container">
                  <button aria-label="Закрыть" type="button" className="popup__button button"></button>
                  <form name="add-form" id="add-form" className="form" noValidate>
                      <fieldset className="popup__fieldset">
                          <h2 className="form__title">Новое место</h2>
                          <input type="text" minLength="2" maxLength="30" required id="add-form__input_field_title"
                                 name="name"
                                 placeholder="Название"
                                 className="form__input form__input_type_title" />
                              <span className="popup__error" id="add-form__input_field_title_error"></span>
                              <input type="url" required id="add-form__input_field_subtitle" name="link"
                                     placeholder="Ссылка на картинку"
                                     className="form__input form__input_type_subtitle" />
                          <span className="popup__error" id="add-form__input_field_subtitle_error"></span>
                                  <button type="submit" className="form__button button">Сохранить</button>
                      </fieldset>
                  </form>
              </div>
          </div>

          <div className="popup popup_type_view">
              <div className="popup__container">
                  <button aria-label="Закрыть" type="button" className="popup__button button"></button>
                  <figure className="popup-view" id="popup-view">
                      <img className="popup-view__image" id="popup-view__image"
                           src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
                           alt=" Место" />
                          <figcaption id="popup-view__title" className="popup-view__title"></figcaption>
                  </figure>
              </div>
          </div>


          <div className="popup popup_type_edit-avatar">
              <div className="popup__container">
                  <button aria-label="Закрыть" type="button" className="popup__button button"></button>
                  <form name="edit-avatar-form" className="form" noValidate>
                      <h2 className="form__title">Обновить аватар</h2>
                      <fieldset className="popup__fieldset">
                          <input type="url" required name="link" id="edit-avatar--form__input_field_subtitle"
                                 className="form__input form__input_type_subtitle"
                                 placeholder="Ссылка на картинку" />
                              <span className="popup__error" id="edit-avatar--form__input_field_subtitle_error"></span>
                              <button type="submit" className="form__button button">Сохранить</button>
                      </fieldset>
                  </form>
              </div>
          </div>

          <div className="popup popup_type_delete">
              <div className="popup__container">
                  <button aria-label="Закрыть" type="button" className="popup__button button"></button>
                  <form name="delete-form" id="delete-form" className="form" noValidate>
                      <fieldset className="popup__fieldset">
                          <h2 className="form__title form__title_theme_delete">Вы уверены?</h2>
                          <button type="submit" className="form__button button">Удалить</button>
                      </fieldset>
                  </form>
              </div>
          </div>

      </div>


      <template id="element-template">
          <li className="element">
              <img alt="Место" className="element__image"
                   src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" />
                  <button aria-label="Удалить" type="button" className="element__trash button "></button>
                  <div className="element__group">
                      <h2 className="element__title"></h2>
                      <div className="element__like-container">
                          <button aria-label="Лайк" type="button" className="element__like button"></button>
                          <p className="element__like-count">0</p>
                      </div>
                  </div>
          </li>
      </template>

      </div>
  );
}

export default App;
