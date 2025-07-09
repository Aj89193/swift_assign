// import logo from './logo.svg';
import './App.css';
import Profiles from './Components/Profiles';

import Comments from './Components/Comments';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Profiles/>} />
    <Route path="/comments" element={<Comments />} />
  </Routes>
</Router>

  );
}

export default App;
