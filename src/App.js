import './App.css';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Settings />}></Route>
          <Route path='/questions' element={<Questions />}></Route>
          <Route path='/score' element={<FinalScreen />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
