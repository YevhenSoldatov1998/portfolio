import React from 'react'
import s from './Switch.module.sass'
import './Onoffswitch.css'

const Switch = (props) => {
    const onClickSwitch = (e) => {
        props.ON_SWITCH_CREATOR();
    }
    return (

        <div className={s.switch}>
            <div className="onoffswitch">
                <input type="checkbox" name="onoffswitch"
                       className="onoffswitch-checkbox"
                       id="myonoffswitch"
                       defaultChecked={true}
                       onChange={onClickSwitch.bind(this)}
                />
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner">

                    </span>
                    <span className="onoffswitch-switch">

                    </span>
                </label>
            </div>
        </div>
    )
}
export default Switch