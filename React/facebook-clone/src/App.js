import './App.scss';
import Mainbaar from './components/layout/mainbaar/Mainbaar';
import Navbaar from './components/layout/navbaar/Navsearch';
import Sidebaar from './components/layout/sidebaar/Sidebaar';


function App() {
  return (
    <div className="main_container">
      <nav><Navbaar/></nav>
      <aside><Sidebaar/></aside>
      <main><Mainbaar/></main>
    </div>
  );
}

export default App;
