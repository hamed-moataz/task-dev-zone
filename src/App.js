import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {

    return (
    <div className="App">
      <Navbar />
      <Home name="Hamed" age= "27" city= "Menoufia"/>
      <Footer />

    </div>
  )
}

export default App;
