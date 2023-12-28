import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CompoundInterest from "./components/CompoundInterest";
import CurrencyConverter from "./components/CurrencyConverter";
import LateFee from "./components/LateFee";
import FinancialControl from "./components/FinancialControl";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/juroscompostos" element={<CompoundInterest />} />
          <Route exact path="/conversordemoedas" element={<CurrencyConverter />} />
          <Route exact path="/multaporatraso" element={<LateFee />} />
          <Route exact path="/controlefinanceiro" element={<FinancialControl />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
