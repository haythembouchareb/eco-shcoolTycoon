import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

function App() {
  return <AppRoutes />;
}

export default App;
