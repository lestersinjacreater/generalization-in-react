import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/landingpage/Home";
//import Login from "../pages/Login";
//import Register from "../pages/Register";
//import Dashboard from "../pages/Dashboard";
//import Predictions from "../pages/Predictions";
//import AdminDashboard from "../pages/AdminDashboard";
//import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/dashboard"
          // element={<ProtectedRoute roles={["user", "admin"]} component={Dashboard} />}
        />
        <Route
          path="/admin"
          // element={<ProtectedRoute roles={["admin"]} component={AdminDashboard} />}
        />
        <Route
          path="/predictions"
          // element={<ProtectedRoute roles={["user"]} component={Predictions} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
