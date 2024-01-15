import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Template from './Partials/Template/Template';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AdminTemplate from './Partials/Admin/Template/Template';
import Admin from './Pages/Admin/Admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes pour les utilisateurs non connectés */}
        <Route element={<Template />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Routes pour les utilisateurs connectés */}
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path='' element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
