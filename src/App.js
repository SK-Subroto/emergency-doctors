import './App.css';

import Emergency from "./components/Emergency/Emergency";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Emergency/>
      <Footer/>     
    </div>
  );
}

export default App;
