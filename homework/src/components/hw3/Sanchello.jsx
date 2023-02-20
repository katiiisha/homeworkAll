import React from 'react'
import s from './h3styles.module.css'
// Задание
//    Сделайте поле для ввода имени, а под ним строку "Привет, %name%".
//    При вводе текста в поле, должен меняться текст под ним.
//    Если имя это "Санчелло", то строка должна быть "Саня, верни долг!!!"
//    Рядом с полем для ввода, должна быть кнопка отчистить
function Sanchello() {
    const [name, setName] = React.useState('');
   
   return (
      <div className={s.sanachello}>
          <input type="text" placeholder='Name' className={s.name} onChange={(name)=>setName(name.target.value)}/>
       <button className={s.btn_clear}>Clear</button>
       {name.toLocaleLowerCase() === 'саначелло' ? <span>Саня, верни долг!!!</span> : name != '' ? <span>Привет,{name}</span> :<span> </span> }
    </div>
  )
}

export default Sanchello