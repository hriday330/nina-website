import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/home.tsx';
import Header from './components/header/header.tsx';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
