import logo from './logo.svg';
import './App.css';
import Header from './componant/Header';
import { Switch, Route, Link, Routes} from 'react-router-dom';
import  Home from './page/Home'
import Login from './componant/Loging';
import Registar from './componant/Registar';
import ForgotPassword from './componant/Forgot-Password';
import UserProfile from './componant/user-profile';
import CourseCard from './componant/cousecard';
import CoursDtils from './componant/Course-Detils';
import CoursePage from './page/cousepage';
import SearchBar from './componant/serchbar';
import Couseenrol from './componant/couse-enrole'
import Cosepricecard from './componant/couse-price-card'
import FeedbackComponent from './componant/Feed-back';


function App() {
  return (
    <div className=" ">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registar" element={<Registar />}></Route>
      <Route path="/foreget-password" element={<ForgotPassword />}></Route>
      <Route path="/user-profile" element={<UserProfile></UserProfile>}></Route>
      <Route path="/couse-card" element={<CourseCard></CourseCard>}></Route>
      <Route path="/couse-detils" element={<CoursDtils></CoursDtils>}></Route>
      <Route path="/couse-page" element={<CoursePage></CoursePage>}></Route>
      <Route path="/searchbar" element={<SearchBar></SearchBar>}></Route>
      <Route path="/couse-enrol" element={<Couseenrol></Couseenrol>}></Route>
      <Route path="/couse-price-card" element={<Cosepricecard></Cosepricecard>}></Route>
      <Route path="/entere-feedback" element={<FeedbackComponent></FeedbackComponent>}></Route>

      </Routes>
   
   
    </div>
  
  );
}

export default App;
