
import './App.css';
import NavBar from './components/NavBar';
import AboutDiana from './components/AboutDiana'
import NotificationBar from './components/NotificationBar';
import Difference from './components/Difference';
import Liberate from './components/Liberate';
import Track from './components/Track';
import Period from './components/Period';
import Consult from './components/Consult'
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import Page9 from './components/Page9'
function App() {
  return (
    <div className="App">
      <NotificationBar />
      <NavBar />
      <AboutDiana />
      <Difference/>
      <Liberate/>
      <Track/>
      <Period/>
      <Consult/>
      <Page7/>
      <Page8/>
      <Page9/>
      
    </div>
  );
}

export default App;
