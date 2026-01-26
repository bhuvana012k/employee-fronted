import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import EmpEdit from "./EmpEdit";
import EmpData from "./EmpData";
import EmpForm from "./EmpForm";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Register />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<EmpData />} path="/data" />
          <Route element={<EmpForm />} path="/form" />
          <Route element={<EmpEdit />} path="/edit/:empid" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
