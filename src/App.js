// Import Components
import Header from './components/Header'
import Home from './components/Home/Home'
import './App.css';
import AppRouter from './AppRouter'
function App() {
  return (
    <div className="App">
      <div className="HomepageLayout">
        {/* React Portfolio */}
        <Header/>
        <AppRouter/>
        {/* <Home/> */}
      </div>
      
      
    </div>
  );
}

export default App;
