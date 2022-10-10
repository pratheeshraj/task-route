
import './App.css';
import SideBar from './sideBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import"./vendor/fontawesome-free/css/all.min.css"
import "./sb-admin-2.css"
import Topbar from './topbar';
import Dashboardheading from './dashboardheading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Usercreate from './Usercreate';
import Edit from './Edit';
import View from './View';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path='/dashboardheading' element={<Dashboardheading/>}></Route>
              <Route path='/User' element={<User/>}></Route>
              <Route path='/User_create' element={<Usercreate/>}></Route>
              <Route path='/User/:id' element={<Edit/>}></Route>
              <Route path='/Users/:id' element={<View/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
