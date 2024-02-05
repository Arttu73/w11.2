import './App.css';
import './i18n';
import MyContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyHOC from './components/MyHOC';

function App() {
  
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<><Header /> <MyContainer /> </> } />
        <Route path="/about" element={<><Header /> <About /> </> } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;