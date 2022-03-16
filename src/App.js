import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutDiana from './components/AboutDiana'
import NotificationBar from './components/NotificationBar';

function App() {
  return (
    <div className="App">
      <NotificationBar />
      <NavBar />
      <AboutDiana />
    </div>
  );
}

export default App;