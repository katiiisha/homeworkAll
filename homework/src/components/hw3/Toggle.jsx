import React from 'react'

import s from './InputForm.module.css'
function Toggle() {
    const [text, setText] = React.useState('center')
    function chahgeAling(){
        text === 'center' ? setText('left') :
        (text === 'left' ? setText('right') : setText('center'))
    }
  return (
      <div className={s.toggle}>
          <h2 style={{ textAlign: text }}>Align me</h2>
          <button className={s.btn_toggle} onClick={chahgeAling}> Toggle</button>
      </div>
  )

    
}

export default Toggle