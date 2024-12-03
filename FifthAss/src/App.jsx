import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './pages/navbar.jsx';



function App () {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/color" element={<Color/>} />
        <Route path="/practise" element={<Practise/>} />
        <Route path="/todoList" element={<TodoList/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;