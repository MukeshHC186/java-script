import './App.css';
import './camponents/layout/layout.css'
import Footer from './camponents/layout/footer/Footer';
import Main from './camponents/layout/main/Main';
import Navbar from './camponents/layout/navbar/Navbar';
import Sidebar from './camponents/layout/sidebar/Sidebar';

function App() {
  return (
    <>
    <div className="Main_container">
    <Navbar />
    <Sidebar/>
    <Main/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
