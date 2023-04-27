// import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Home from "./components/main/Home";
import SignUp from "./components/main/SignUp";
import User from "./components/user";
import Add_jobs from "./components/user/Add_jobs";
import User_profile from "./components/user/User_profile";
import ManageJobs from "./components/user/ManageJobs";
import UserProvider from "./context/UserProvider";
import UserAuth from "./auth/UserAuth"
import All_Drives from "./components/main/All_Drives";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route element={<Main />} path="main">
            <Route element={<Home />} path='home' />
            <Route element={<Login />} path='login' />
            <Route element={<SignUp />} path='signup' />
            <Route element={<All_Drives />} path='signup' />
          </Route>
          <Route element={<UserAuth><User /></UserAuth>} path='user'/>
          <Route element={<User />} path='user'>
            <Route element={<Add_jobs />} path='add_job' />
            <Route element={<User_profile />} path='user_profile' />
            <Route element={<ManageJobs />} path='manage_job' />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
