import './App.css';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateHotel } from './components/CreateHotel/CreateHotel';
import { Catalog } from './components/Catalog/Catalog';
import {Logout} from './components/Logout/Logout'
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { HotelProvider } from './contexts/HotelContext';
import { UserProvider } from './contexts/UserContext';

function App() {
 
  return (
    <UserProvider>
      <HotelProvider>

      <div className="App">

        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/create-hotel' element={<CreateHotel/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path="/details/:hotelId" element={<Details/>} />
          <Route path="/catalog/:hotelId/edit" element={<Edit/>} />
          

        </Routes>

      </div>
      </HotelProvider>
    </UserProvider>

  );
}

export default App;
