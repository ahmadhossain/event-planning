import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import CheckOutPage from "./pages/CheckOutPage";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const handleSubmit = (user) => {
    setUser(user);
  };
  return (
    <Routes>
      <Route exact path="/" element={<HomePage user={user} />}></Route>
      <Route path="/payment" element={<PaymentPage />}></Route>
      <Route path="/checkout" element={<CheckOutPage />}></Route>
      <Route path="/event" element={<CreateEvent />}></Route>
      <Route
        path="/login"
        element={<Login handleUser={handleSubmit} />}
      ></Route>
    </Routes>
  );
}

export default App;
