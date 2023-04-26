import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import CheckOutPage from "./pages/CheckOutPage";
import CreateEvent from "./pages/CreateEvent";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/payment" element={<PaymentPage />}></Route>
      <Route path="/checkout" element={<CheckOutPage />}></Route>
      <Route path="/event" element={<CreateEvent />}></Route>
    </Routes>
  );
}

export default App;
