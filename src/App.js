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
        <Route path='/searches' element={<Searches></Searches>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
