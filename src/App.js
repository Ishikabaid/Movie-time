import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
};

export default App;
