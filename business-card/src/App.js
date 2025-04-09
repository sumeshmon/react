// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Intrest from './components/Intrest';

function App() {
  return (
   <main className="main">
      <>
        <Info/>
        <Intrest/>
        <About/>
        <Footer/>
      </>
   </main>
  );
}

export default App;
