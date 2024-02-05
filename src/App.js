import './App.css';
import './i18n';
import MyContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyHOC from './components/MyHoc';

function App() {
  const wrappedWithName = MyHOC(Component, { name: "Kalle" });
  return (
    <Router>
    <div className="App">
      <div className="wrapper">
        <wrappedWithName/>
      </div>
      <Routes>
        <Route path="/" element={<><Header /> <MyContainer /> </> } />
        <Route path="/about" element={<><Header /> <About /> </> } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;