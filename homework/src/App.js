import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MyCard from './components/hw1/MyCard';
import ClothesCads from './components/hw2/ClothesCads';

function App() {
  return (
    <div className='App'>
      <h2>Kate's homeworks<span className='smile'>:)</span></h2>
      <div className='work'>
        <button className='hw1'><Link to="MyCard"> Work 1</Link></button>
        <button className='hw2'><Link to="ClothesCads"> Work 2</Link></button>
      </div>
      {/* <MyCard />
      <ClothesCads /> */}
      <Routes>
        <Route path='/MyCard' element={<MyCard />} />
        <Route path='/ClothesCads' element={<ClothesCads />} />
      </Routes>
    </div>
  );
}

export default App;
