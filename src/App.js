
import './App.css';
import SideBar from './sideBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./sb-admin-2.css"
import Topbar from './topbar';
import Dashboardheading from './dashboardheading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
