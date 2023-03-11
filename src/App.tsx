import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users, Login, Register, Logout, RedusTestAdd, RedusTestDisplay } from './pages';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Users />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/logout'} element={<Logout />} />
          <Route path={'/testRedus'} element={<><RedusTestAdd /> <RedusTestDisplay /> </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

