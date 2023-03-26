import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/home.tsx';
import Header from './components/header/header.tsx';
import { Management } from './components/management/management.tsx';
import Footer from './components/footer/footer.tsx';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/management" element = {<Management/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  
  );
}

export default App;
