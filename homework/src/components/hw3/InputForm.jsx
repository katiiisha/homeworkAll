import React from 'react'
import { Link } from 'react-router-dom'
import Feature from './Feature';
import s from './h3styles.module.css'
import Sanchello from './Sanchello';
import Toggle from './Toggle';
//Задание:
//Сделать форму, в которой будет два поля с именем и фамилией
//при отправке формы, на экран выводится сообщение с текстом
//«Имя Фамилия»

function InputForm() {
  
    const [name, setName] = React.useState(''); 
    const [surname, setSurname] = React.useState('');
    // console.log(name);
    // console.log(surname); 
    function Show() {
        name === '' && surname === ''
            ? alert('Введите имя и фамилию')
            : alert(`Ваше имя: ${name} Ваша Фамилия: ${surname}`)
        //не сработала очистка полей после нажатия кнопки отправить 
        name.target.value = ''
        surname.target.value =''
        
    }
    return (
        <div className={s.home}>
            <div className={s.form}>
                <input type="text" className={s.name} onChange={(name)=>setName(name.target.value)} placeholder='Name' />
                <input type="text" className={s.surname} onChange={(sname)=> setSurname(sname.target.value)} placeholder='Surname' />
                <button className={s.btn_send} onClick={Show} >Send</button>
            </div>
            <Toggle />
            <Sanchello/>
            <Feature/>
            <button><Link to="/">Back</Link></button>
        </div>
        
  )
}

export default InputForm