import React from 'react'
import photo from '../../../myPhoto.jpg'
import style from './firstSectionImg.module.sass'
const FirstSectionImg = (props) => {
    return(
      <div className={style.wrapPhoto}>
          <img className={style.photo} src={photo} alt=""/>
      </div>
    );
}
export default FirstSectionImg