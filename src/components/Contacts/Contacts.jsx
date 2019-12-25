import React from "react";
import {Title_s} from "../Skills/Skills";
const Contacts = (props) => {
    return(
        <div className={`container`}>
            <Title_s>Contacts</Title_s>
            <form action="">
                <input placeholder="Введите имя" type="text"/>
                <textarea placeholder="Введите сообщение" />
                <button>Отправить</button>
            </form>
        </div>

    )
}
export default Contacts