import Navbar from "./components/main/Navbar";
import Aside from "./components/main/Aside";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div class="main_container">
        <Navbar/>
        <Aside/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
