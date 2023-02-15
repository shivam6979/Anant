import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Show from './pages/Show';
import Upload from './pages/Upload';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
