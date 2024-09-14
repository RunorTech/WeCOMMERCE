import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import CreateStore from "../pages/CreateStore";
import MyStore from "../pages/MyStore";


const element = createRoutesFromElements(


  <>
    <Route element={<App />}>
    
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/store" element={<CreateStore />} />
      <Route path="/store/:storeName" element={<MyStore />} />

    </Route>
  </>
);

const router = createBrowserRouter(element)

export default router;