import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Home, Login, Navbar, Produk, ProtectedRoute, Solusi, TentangKami } from './pages';
import { Dashboard } from './dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="solusi" element={<Solusi />} />
          <Route path="produk" element={<Produk />} />
          <Route path="tentang" element={<TentangKami />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
