import React from "react";

export default function Card(props){
    return(
        <li className="element" key={props.id}>
            <img alt="Место" className="element__image"
                 src={props.link}/>
            <button aria-label="Удалить" type="button" className="element__trash button "/>
            <div className="element__group">
                <h2 className="element__title">{props.name}</h2>
                <div className="element__like-container">
                    <button aria-label="Лайк" type="button" className="element__like button"/>
                    <p className="element__like-count">{props.likes}</p>
                </div>
            </div>
        </li>
    )
}