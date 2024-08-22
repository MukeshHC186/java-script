import Navbar from "./components/navbar/Navbar";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
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
