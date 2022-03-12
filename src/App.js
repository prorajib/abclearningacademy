import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header></Header>
         <Routes>
         <Route path="/" element={<Home/>} />
           <Route path="/home" element={<Home/>} />
           <Route path="/courses" element={<Courses/>}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="*" element={<NotFound/>} />
           
         </Routes>
         <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
