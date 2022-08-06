import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import OverView from './components/OverView';
import VideoItem from './components/VideoItem';
import Header from './components/Header';
import AuthMiddleware from './AuthMiddleware';
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<AuthMiddleware Component={<OverView />} />} />
        <Route path="/video/:videoId" element={<AuthMiddleware Component={<VideoItem />} />} />

        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LogIn />} />


      </Routes>
    </div>
  );
}

export default App;
