import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom"
// import { MainPageComponent } from './pages/Mainpage/Mainpage';
import { Footer } from './components/footer/footer.component';

import { CarMain } from './pages/Car/CarMain/CarMain';
import { Lamborghini } from './pages/Car/Lamborghini/Lamborghini';
import { FitnesscenterMain } from './pages/FitnessCenter/FitnesscenterMain/FitnesscenterMain';
import { Gym } from './pages/FitnessCenter/Gym/Gym'
import { HomePageComponent } from './pages/HomePage/Homepage';
import { BeautyMain } from './pages/BeautySalons/BeautyMain/BeautyMain';
import { Lounge } from './pages/BeautySalons/Lounge/Lounge';
import { PlumberMain } from './pages/Plumber/PlumberMain/PlumberMain';
import { RiseUp } from './pages/Plumber/RiseUp/RiseUp';
import { TravelMain } from './pages/Travel/TravelMain/TravelMain';
import { Gogaga } from './pages/Travel/Gogaga/Gogaga';
import { GroceryMain } from './pages/Groceries/GroceryMain/GroceryMain';
import { Upscale } from './pages/Groceries/Upscale/Upscale';
import { ElectricianMain } from './pages/Electrician/ElectricianMain/ElectricianMain';
import { Voltronix } from './pages/Electrician/Voltronix/Voltronix';






function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homepage' element={<HomePageComponent></HomePageComponent>}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />

        <Route path="/fitnessCenters" element={<FitnesscenterMain></FitnesscenterMain>}></Route>
        <Route path="/gym" element={<Gym></Gym>}></Route>
        <Route path="/carmain" element={<CarMain></CarMain>}></Route>
        <Route path="/lamborghini" element={<Lamborghini></Lamborghini>}></Route>
        <Route path="/beautysalons" element={<BeautyMain></BeautyMain>}></Route>
        <Route path="/lounge" element={<Lounge></Lounge>}></Route>
        <Route path='plumber' element={<PlumberMain></PlumberMain>} />
        <Route path='riseup' element={<RiseUp></RiseUp>} />
        <Route path='travel' element={<TravelMain></TravelMain>} />
        <Route path='gogaga' element={<Gogaga></Gogaga>} />
        <Route path='grocery' element={<GroceryMain></GroceryMain>} />
        <Route path='upscale' element={<Upscale></Upscale>} />
        <Route path='electrician' element={<ElectricianMain></ElectricianMain>} />
        <Route path='voltronix' element={<Voltronix></Voltronix>} />

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
