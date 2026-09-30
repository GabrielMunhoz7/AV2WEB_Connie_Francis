import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedPage from "./pages/ProtectedPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      {/* /perfil exige um token salvo no navegador. */}
      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
