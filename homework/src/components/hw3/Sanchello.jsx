import React from 'react'

import s from './InputForm.module.css'
function Sanchello() {
    const [name, setName] = React.useState('');
   
   return (
      <div className={s.sanachello}>
          <input type="text" placeholder='Name' className={s.name} onChange={(name)=>setName(name.target.value)}/>
           <button className={s.btn_clear}>Clear</button>
          {name.toLocaleLowerCase() === 'саначелло' ? <span>Саня, верни долг!!!</span> : <span>Привет,{name}</span> }
    </div>
  )
}

export default Sanchello