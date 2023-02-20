import  './App.css';
import { Routes, Route, Link, NavLink} from "react-router-dom";
import MyCard from './components/hw1/MyCard';
import ClothesCads from './components/hw2/ClothesCads'; 
import { Badge } from 'react-bootstrap'
import InputForm from './components/hw3/InputForm';


function App() {
// Задание:
//    Написать компонент бейдж, который оборачивает содержимое собой
//    Принимает типы (primary, secondary, success, danger, warning, info...)
//    По умолчанию тип secondary. В зависимости от типа будет нужный класс, например
//    badge-light, badge-secondary, badge-success и тд
  const badge = [
    {  classes: 'hw1', text: 'work 1', link: 'MyCard', type: 'success',  },
    { classes: 'hw2', text: 'work 2', link: 'ClothesCads', type: 'warning', },
    { classes: 'hw3', text: 'work 3', link: 'InputForm', type: 'danger', }
  ]
  return (
    <div className='App'>
      <h2>Kate's homeworks<span className='smile'>:)</span></h2>
      <div className='work'>
        {badge.map((elem) => (
          <>
            <button className={elem.classes}>
              <NavLink to={elem.link}>
                {elem.text}
                <Badge className='badge' bg={elem.type}>new</Badge>
              </NavLink>
            </button>
            
          </>
          
          
        ))}
      </div>
      
      {/* <MyCard />
      <ClothesCads /> */}

      <Routes>
        <Route path='/MyCard' element={<MyCard />} />
        <Route path='/ClothesCads' element={<ClothesCads />} />
        <Route path='/InputForm' element={<InputForm />} />

        
      </Routes>
    </div>
  );
}

export default App;
