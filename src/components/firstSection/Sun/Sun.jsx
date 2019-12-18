import React from 'react'
import './Sun.sass'
const Sun = (props) =>  {
    const filterActiveSwitch = props.switch == 'day'?'10vh':"90vh"
    const opacityActiveSwitch = props.switch == 'day'?'0.1':"0"
    const styled = {
        transform: `translateX(-50%) translateY(${filterActiveSwitch})`
    }
    const opacity ={
        opacity: opacityActiveSwitch
    }
    return (
        <div className="sun">
            <div style={styled}  className="circle">
                <div></div>
                <span className="m1"></span>
                <span className="m2"></span>
                <span className="m3"></span>
                <span style={opacity} className="m4"></span>
                <span style={opacity} className="m5"></span>
            </div>

        </div>
    )
}
export default Sun