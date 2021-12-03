import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home/Home';


function App() {
  return (
    <BrowserRouter>
    {/* <Header></Header> */}
      <div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
