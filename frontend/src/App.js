import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PatientPortal from "./pages/PatientPortal";
import DoctorPortal from "./pages/DoctorPortal";
import AdminPortal from "./pages/AdminPortal";
import Login from "./pages/Login";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function App() {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Healthcare Access System
          </Typography>
          {!localStorage.getItem("token") ? (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          ) : (
            <Button color="inherit" onClick={() => {localStorage.clear(); window.location.reload();}}>Logout</Button>
          )}
          {role === "patient" && <Button color="inherit" component={Link} to="/patients">Patients</Button>}
          {role === "doctor" && <Button color="inherit" component={Link} to="/doctors">Doctors</Button>}
          {role === "admin" && <Button color="inherit" component={Link} to="/admin">Admin</Button>}
        </Toolbar>
      </AppBar>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          {role === "patient" && <Route path="/patients" element={<PatientPortal />} />}
          {role === "doctor" && <Route path="/doctors" element={<DoctorPortal />} />}
          {role === "admin" && <Route path="/admin" element={<AdminPortal />} />}
        </Routes>
      </main>
    </Router>
  );
}
export default App;
