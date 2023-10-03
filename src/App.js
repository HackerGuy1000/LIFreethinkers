import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import NoPage from "./pages/NoPage";
import Merch from "./pages/Merch";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<Home/>} />
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/merch" element={<Merch />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
