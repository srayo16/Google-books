import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searches from './Components/Searches/Searches';
import Details from './Components/Details/Details';
import Requireauth from './Components/Authentication/Requireauth';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
import History from './Components/History/History';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Allhistory from './Components/History/Allhistory';

function App() {
  return (
    <>
      <Header></Header>
      {/* React route */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/allhistory' element={<Allhistory></Allhistory>}></Route>
        <Route path='/searches' element={<Requireauth><Searches></Searches></Requireauth>}></Route>
        <Route path='/details/:id' element={<Requireauth><Details></Details></Requireauth>}></Route>
        <Route path='/history' element={<Requireauth><History></History></Requireauth>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
