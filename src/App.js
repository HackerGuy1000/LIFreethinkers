import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from "./pages/NoPage";
import Merch from "./pages/Merch";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/merch" element={<Merch />}/>
          <Route path="/about" element={<About />}/>
          {/* <Route path="/contact" element={<Contact />}/> */}
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
