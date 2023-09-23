import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import './style.scss';
import MainPageController from './controllers/MainPageController';
import HeaderView from './views/HeaderView';
import DetailController from './controllers/DetailController';

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/coins" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </>
  );
}

export default App;
