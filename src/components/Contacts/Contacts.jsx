import React from "react";
import s from './contacts.module.sass'

const Contacts = (props) => {
    return(
        <div className={`container ${s.contacts}`}>
            <h2 className={`title`} >Contacts</h2>
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