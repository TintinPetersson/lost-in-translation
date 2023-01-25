import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Translations/NavigationBar/NavigationBar';
import Login from '../src/components/Login/Login'
import Profile from './components/Profile/Profile';
import Translation from './components/Translations/Translation';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}





export default App;