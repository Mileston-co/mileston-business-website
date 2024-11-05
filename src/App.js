import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GuestLayout from './layouts/GuestLayout';

function App() {
  return (
    <Routes>
      {/* Guest Routes */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
