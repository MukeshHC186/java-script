
import './App.css';
import Aside from './components/layout/aside/Aside';
import Main from './components/layout/main/Main';
import Other from './components/layout/other/Other';

function App() {
  return (
    <div className="Main_container">
      <Aside/>
      <Main/>
      <Other/>
    </div>
  );
}

export default App;
