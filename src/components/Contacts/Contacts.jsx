import React from "react";
import {Title_s} from "../Skills/Skills";
import s from './contacts.module.sass'

const Contacts = (props) => {
    return(
        <div className={`container ${s.contacts}`}>
            <Title_s >Contacts</Title_s>
            <form action="" className={s.form}>
                <input placeholder="Enter your name" type="text"/>
                <input placeholder="Enter your phone" type="text"/>
                <textarea placeholder="Enter your message" />
                <button>Send message</button>
            </form>
        </div>

    )
}
export default Contacts