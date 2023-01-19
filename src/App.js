import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import AppRouter from './AppRouter'
import GoTop from './components/goToTopButton';
function App() {
  
  return (
    <div className="App">
      <div className="HomepageLayout min-h-full min-w-full">
        {/* React Portfolio */}
        <Header/>
        <AppRouter/>
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
