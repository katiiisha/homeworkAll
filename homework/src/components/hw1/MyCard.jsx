import React from 'react'
import { Link } from 'react-router-dom'
import s from './MyCard.module.css'
// Сделайте форму которая будет выводить данные о себе
function MyCard() {
    const card = {
        id: 0,
        name: 'Катя',
        surname: 'Менделеева',
        group: '2 потока',
        direction: 'Full Stack',
        start: '22 августа',
        teacher: 'Евгений',
        school: 'Avenue'
    }
    return (
        <div className={s.my_card } >
           <div className={s.notebook}>
                <h2>ТЕТРАДЬ</h2>
                <p> для работ по  <span>{card.direction}</span></p>
                <p> ученицы <span>{card.group}</span>  </p>
                <p>школа: <span>{card.school}</span> </p>
                <p> <span> {card.name} {card.surname}</span></p>
            </div>
             <button><Link to="/">Back</Link></button>
        </div>
  )
}

export default MyCard